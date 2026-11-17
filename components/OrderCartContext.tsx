"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { formatRupiah } from "@/lib/defaults";
import type { Product } from "@/lib/types";

export type DeliveryArea = "graha_merjosari_asri" | "other";

export interface CartEntry {
  product: Product;
  quantity: number;
  subtotal: number;
}

interface OrderCartContextValue {
  items: Record<string, number>;
  cartEntries: CartEntry[];
  totalItems: number;
  totalPrice: number;
  deliveryArea: DeliveryArea;
  setDeliveryArea: (area: DeliveryArea) => void;
  addItem: (productId: string, delta?: number) => void;
  setItemQty: (productId: string, qty: number) => void;
  clearCart: () => void;
}

const OrderCartContext = createContext<OrderCartContextValue | null>(null);

export function useOrderCart() {
  const ctx = useContext(OrderCartContext);
  if (!ctx) {
    throw new Error("useOrderCart must be used within OrderCartProvider");
  }
  return ctx;
}

/**
 * Provides shared multi-product cart state and delivery-area selection across
 * Hero, ProductSection, WaterCalculator, and OrderForm.
 */
export function OrderCartProvider({
  products,
  children,
}: {
  products: Product[];
  children: ReactNode;
}) {
  const [items, setItems] = useState<Record<string, number>>({});
  const [deliveryArea, setDeliveryArea] =
    useState<DeliveryArea>("graha_merjosari_asri");
  const [orderSectionVisible, setOrderSectionVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById("order-section");
    if (!target || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => setOrderSectionVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const addItem = (productId: string, delta = 1) => {
    setItems((prev) => {
      const nextQty = Math.max(0, (prev[productId] || 0) + delta);
      if (nextQty === 0) {
        const rest = { ...prev };
        delete rest[productId];
        return rest;
      }
      return { ...prev, [productId]: nextQty };
    });
  };

  const setItemQty = (productId: string, qty: number) => {
    setItems((prev) => {
      const nextQty = Math.max(0, qty);
      if (nextQty === 0) {
        const rest = { ...prev };
        delete rest[productId];
        return rest;
      }
      return { ...prev, [productId]: nextQty };
    });
  };

  const clearCart = () => setItems({});

  const cartEntries = useMemo<CartEntry[]>(() => {
    return products
      .filter((p) => (items[p.id] || 0) > 0)
      .map((product) => {
        const quantity = items[product.id];
        return {
          product,
          quantity,
          subtotal: product.price * quantity,
        };
      });
  }, [products, items]);

  const totalItems = useMemo(
    () => cartEntries.reduce((sum, entry) => sum + entry.quantity, 0),
    [cartEntries]
  );

  const totalPrice = useMemo(
    () => cartEntries.reduce((sum, entry) => sum + entry.subtotal, 0),
    [cartEntries]
  );

  const showStickyBar =
    totalItems > 0 &&
    deliveryArea === "graha_merjosari_asri" &&
    !orderSectionVisible;

  return (
    <OrderCartContext.Provider
      value={{
        items,
        cartEntries,
        totalItems,
        totalPrice,
        deliveryArea,
        setDeliveryArea,
        addItem,
        setItemQty,
        clearCart,
      }}
    >
      {children}

      {/* Sticky Bottom Cart Summary Bar */}
      {showStickyBar && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-xl">
          <div className="bg-slate-900 text-white rounded-2xl px-4 py-3 shadow-2xl border border-slate-800 flex items-center justify-between gap-4">
            <div className="min-w-0">
              <div className="text-xs text-slate-400 font-medium">
                {totalItems} item dipilih • Gratis Ongkir
              </div>
              <div className="text-base font-extrabold text-white truncate">
                {formatRupiah(totalPrice)}
              </div>
            </div>
            <a
              href="#order-section"
              className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-colors"
            >
              <span>Lanjut Pesan</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      )}
    </OrderCartContext.Provider>
  );
}
