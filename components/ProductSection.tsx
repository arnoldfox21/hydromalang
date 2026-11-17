"use client";

import Image from "next/image";
import {
  DEFAULT_BRANDS,
  DEFAULT_PRODUCTS,
  formatRupiah,
} from "@/lib/defaults";
import type { Brand, Product } from "@/lib/types";
import { useOrderCart } from "./OrderCartContext";

const DEFAULT_WA_NUMBER = "62895702831600";
const DEFAULT_SHOPEE_URL = "https://shopee.co.id/hydromalang";

export default function ProductSection({
  products = DEFAULT_PRODUCTS,
  brands = DEFAULT_BRANDS,
  waNumber = DEFAULT_WA_NUMBER,
  shopeeUrl = DEFAULT_SHOPEE_URL,
}: {
  products?: Product[];
  brands?: Brand[];
  waNumber?: string;
  shopeeUrl?: string;
}) {
  const { items, addItem, deliveryArea, setDeliveryArea } = useOrderCart();

  return (
    <section id="produk" className="py-16 sm:py-20 bg-slate-50/70 border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header + Area Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold tracking-wider text-sky-600 uppercase">
              Katalog Produk &amp; Harga Resmi
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Pilih Varian Air Mineral Cleo
            </h2>
            <p className="text-sm text-slate-600">
              Harga transparan, 100% segel pabrik. Tambahkan varian ke pesanan Anda atau pesan langsung via Shopee.
            </p>
          </div>

          {/* Delivery Mode Toggle */}
          <div className="inline-flex p-1 rounded-xl bg-white border border-slate-200 shadow-2xs self-start md:self-auto">
            <button
              type="button"
              onClick={() => setDeliveryArea("graha_merjosari_asri")}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                deliveryArea === "graha_merjosari_asri"
                  ? "bg-emerald-600 text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Graha Merjosari (Gratis Ongkir)
            </button>
            <button
              type="button"
              onClick={() => setDeliveryArea("other")}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                deliveryArea === "other"
                  ? "bg-orange-500 text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Luar Area (Shopee)
            </button>
          </div>
        </div>

        {/* Compact Brand Status Strip */}
        <div className="mb-8 px-4 py-3 rounded-2xl bg-white border border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="font-bold text-slate-700 mr-1">Merek:</span>
            {brands.map((brand) => (
              <span
                key={brand.id}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-semibold ${
                  brand.available
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {brand.available && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                )}
                <span>{brand.name}</span>
                {!brand.available && (
                  <span className="text-[10px] text-slate-400">({brand.status})</span>
                )}
              </span>
            ))}
          </div>
          <span className="text-xs text-slate-500">
            CS WhatsApp: <strong className="text-slate-800">{waNumber.replace(/^62/, "0")}</strong>
          </span>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {products.map((prod) => {
            const qty = items[prod.id] || 0;

            return (
              <div
                key={prod.id}
                className={`group relative bg-white rounded-2xl p-5 border transition-all duration-200 flex flex-col justify-between ${
                  qty > 0
                    ? "border-emerald-500 ring-2 ring-emerald-500/15 shadow-md"
                    : prod.popular
                    ? "border-sky-300 shadow-sm"
                    : "border-slate-200/90 hover:border-sky-300 hover:shadow-md"
                }`}
              >
                {prod.popular && (
                  <span className="absolute -top-2.5 left-4 bg-sky-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    Terlaris
                  </span>
                )}

                <div>
                  {/* Product Image */}
                  <div className="w-full h-44 relative mb-4 flex items-center justify-center p-2 bg-slate-50/70 rounded-xl overflow-hidden">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 23vw"
                      className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Title & Badge */}
                  <div className="space-y-1">
                    <span className="inline-block text-[11px] font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md">
                      {prod.badge}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {prod.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {prod.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-baseline justify-between gap-2">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-extrabold text-slate-900">
                        {formatRupiah(prod.price)}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {prod.unit}
                      </span>
                    </div>
                    {!prod.in_stock && (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-rose-50 text-rose-600">
                        Habis
                      </span>
                    )}
                  </div>

                  {/* Top 2 concise highlights */}
                  {prod.features && prod.features.length > 0 && (
                    <ul className="mt-3 space-y-1">
                      {prod.features.slice(0, 2).map((feat, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-1.5 text-[11px] text-slate-600"
                        >
                          <svg
                            className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="leading-tight">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Action Footer */}
                <div className="mt-5 pt-3 border-t border-slate-100">
                  {deliveryArea === "other" ? (
                    <a
                      href={shopeeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white transition-colors"
                    >
                      <span>Beli via Shopee</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : !prod.in_stock ? (
                    <div className="w-full py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center bg-slate-100 text-slate-400 cursor-not-allowed">
                      Stok Kosong
                    </div>
                  ) : qty === 0 ? (
                    <button
                      type="button"
                      onClick={() => addItem(prod.id, 1)}
                      className="w-full py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 bg-sky-600 hover:bg-sky-500 text-white transition-colors cursor-pointer"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                      </svg>
                      <span>Tambah ke Pesanan</span>
                    </button>
                  ) : (
                    <div className="flex items-center justify-between gap-2 bg-emerald-50 border border-emerald-200 rounded-xl p-1">
                      <button
                        type="button"
                        onClick={() => addItem(prod.id, -1)}
                        aria-label={`Kurangi ${prod.name}`}
                        className="w-8 h-8 rounded-lg bg-white text-slate-700 hover:bg-slate-100 font-bold flex items-center justify-center shadow-2xs cursor-pointer"
                      >
                        −
                      </button>
                      <span className="text-sm font-extrabold text-emerald-800">
                        {qty} item
                      </span>
                      <button
                        type="button"
                        onClick={() => addItem(prod.id, 1)}
                        aria-label={`Tambah ${prod.name}`}
                        className="w-8 h-8 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 font-bold flex items-center justify-center shadow-2xs cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
