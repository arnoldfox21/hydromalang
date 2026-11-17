"use client";

import { useState } from "react";
import { DEFAULT_PRODUCTS, formatRupiah } from "@/lib/defaults";
import type { Product } from "@/lib/types";
import { useOrderCart } from "./OrderCartContext";

export default function OrderForm({
  products = DEFAULT_PRODUCTS,
  waNumber = "62895702831600",
  shopeeUrl = "https://shopee.co.id/hydromalang",
}: {
  products?: Product[];
  waNumber?: string;
  shopeeUrl?: string;
}) {
  const {
    cartEntries,
    totalPrice,
    addItem,
    deliveryArea,
    setDeliveryArea,
  } = useOrderCart();

  const availableProducts = products.filter((p) => p.in_stock);
  const productOptions =
    availableProducts.length > 0 ? availableProducts : products;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [deliveryTime, setDeliveryTime] = useState(
    "Hari Ini - Segera (10–20 Menit)"
  );
  const [notes, setNotes] = useState("");
  const [fallbackProductId, setFallbackProductId] = useState(
    productOptions[0]?.id || ""
  );
  const [fallbackQty, setFallbackQty] = useState(2);

  const selectedFallbackProduct =
    productOptions.find((p) => p.id === fallbackProductId) || productOptions[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (deliveryArea === "other") {
      window.open(shopeeUrl, "_blank");
      return;
    }

    const orderLines =
      cartEntries.length > 0
        ? cartEntries
            .map(
              (entry) =>
                `• ${entry.product.name} x${entry.quantity} = ${formatRupiah(
                  entry.subtotal
                )}`
            )
            .join("\n")
        : selectedFallbackProduct
        ? `• ${selectedFallbackProduct.name} x${fallbackQty} = ${formatRupiah(
            selectedFallbackProduct.price * fallbackQty
          )}`
        : "• Cleo Air 15L x2";

    const computedTotal =
      cartEntries.length > 0
        ? totalPrice
        : (selectedFallbackProduct?.price || 20000) * fallbackQty;

    const message = `*PESANAN BARU - HYDRO MALANG*
----------------------------------
📍 *Wilayah:* Graha Merjosari Asri (Gratis Ongkir)
👤 *Nama:* ${name || "-"}
📱 *No WA:* ${phone || "-"}
🏠 *Alamat / Blok:* ${address || "-"}
⏰ *Waktu Antar:* ${deliveryTime}

📦 *Detail Pesanan:*
${orderLines}

💰 *Total:* ${formatRupiah(computedTotal)}
📝 *Catatan:* ${notes || "-"}
----------------------------------
Mohon konfirmasi pengantaran. Terima kasih!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${waNumber}?text=${encoded}`, "_blank");
  };

  return (
    <section
      id="order-section"
      className="py-16 sm:py-20 bg-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Summary & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Checkout Cepat
              </span>
              <h2 className="mt-1.5 text-2xl sm:text-3xl font-extrabold tracking-tight">
                Kirim Pesanan ke WhatsApp
              </h2>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Lengkapi alamat pengantaran di bawah ini. Pesanan Anda otomatis tersusun rapi dan langsung terhubung ke WhatsApp kurir kami.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/70 border border-slate-700/80 space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">WhatsApp CS</span>
                <span className="font-bold text-white">
                  {waNumber.replace(/^62/, "0")}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Estimasi Sampai (GMA)</span>
                <span className="font-bold text-emerald-400">10–20 Menit</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Pembayaran</span>
                <span className="font-bold text-white">COD / QRIS / Transfer</span>
              </div>
            </div>
          </div>

          {/* Right Column: Order Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-xl">
              {/* Step 1: Area Toggle */}
              <div className="mb-6">
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  1. Lokasi Pengantaran
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setDeliveryArea("graha_merjosari_asri")}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      deliveryArea === "graha_merjosari_asri"
                        ? "border-emerald-500 bg-emerald-50/70 ring-2 ring-emerald-500/15"
                        : "border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-slate-900">
                        Graha Merjosari Asri
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white">
                        Gratis Ongkir
                      </span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDeliveryArea("other")}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      deliveryArea === "other"
                        ? "border-orange-500 bg-orange-50/70 ring-2 ring-orange-500/15"
                        : "border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-slate-900">
                        Luar Graha Merjosari
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-500 text-white">
                        Via Shopee
                      </span>
                    </div>
                  </button>
                </div>
              </div>

              {deliveryArea === "other" ? (
                <div className="p-6 rounded-xl bg-orange-50/80 border border-orange-200 text-center space-y-4">
                  <h3 className="text-base font-bold text-slate-900">
                    Pemesanan Luar Area via Shopee Official
                  </h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                    Untuk pengiriman di luar Perumahan Graha Merjosari Asri, silakan checkout langsung di Toko Shopee Hydro Malang agar mendapatkan tarif ongkir terbaik.
                  </p>
                  <a
                    href={shopeeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm transition-colors"
                  >
                    <span>Lanjut ke Toko Shopee</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Step 2: Order Items Summary */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-bold text-slate-700">
                        2. Ringkasan Produk
                      </label>
                      <a
                        href="#produk"
                        className="text-[11px] font-semibold text-sky-600 hover:underline"
                      >
                        + Tambah varian lain
                      </a>
                    </div>

                    {cartEntries.length > 0 ? (
                      <div className="rounded-xl border border-slate-200 divide-y divide-slate-100">
                        {cartEntries.map((entry) => (
                          <div
                            key={entry.product.id}
                            className="p-3 flex items-center justify-between gap-3"
                          >
                            <div className="min-w-0">
                              <div className="text-xs font-bold text-slate-900 truncate">
                                {entry.product.name}
                              </div>
                              <div className="text-[11px] text-slate-500">
                                {formatRupiah(entry.product.price)} {entry.product.unit}
                              </div>
                            </div>
                            <div className="flex items-center gap-2 shrink-0">
                              <button
                                type="button"
                                onClick={() => addItem(entry.product.id, -1)}
                                className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer"
                              >
                                −
                              </button>
                              <span className="w-6 text-center text-xs font-extrabold">
                                {entry.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() => addItem(entry.product.id, 1)}
                                className="w-7 h-7 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs cursor-pointer"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        ))}
                        <div className="p-3 bg-slate-50 flex items-center justify-between text-xs font-extrabold">
                          <span className="text-slate-600">Total (Gratis Ongkir)</span>
                          <span className="text-base text-emerald-600">
                            {formatRupiah(totalPrice)}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        <select
                          value={fallbackProductId}
                          onChange={(e) => setFallbackProductId(e.target.value)}
                          className="sm:col-span-2 px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 bg-white focus:outline-hidden focus:border-sky-500"
                        >
                          {productOptions.map((p) => (
                            <option key={p.id} value={p.id}>
                              {p.name} — {formatRupiah(p.price)}
                            </option>
                          ))}
                        </select>
                        <div className="flex items-center justify-between px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50">
                          <button
                            type="button"
                            onClick={() => setFallbackQty((q) => Math.max(1, q - 1))}
                            className="w-7 h-7 rounded-lg bg-white border border-slate-200 font-bold text-xs cursor-pointer"
                          >
                            −
                          </button>
                          <span className="text-xs font-extrabold">{fallbackQty}</span>
                          <button
                            type="button"
                            onClick={() => setFallbackQty((q) => q + 1)}
                            className="w-7 h-7 rounded-lg bg-sky-600 text-white font-bold text-xs cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Step 3: Delivery Details */}
                  <div className="space-y-3">
                    <label className="block text-xs font-bold text-slate-700">
                      3. Data Pengantaran
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        placeholder="Nama Anda *"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-sky-500"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="No. WhatsApp *"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-sky-500"
                      />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="Blok & Nomor Rumah (Contoh: Cluster Melati B-12) *"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-sky-500"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <select
                        value={deliveryTime}
                        onChange={(e) => setDeliveryTime(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 bg-white focus:outline-hidden focus:border-sky-500"
                      >
                        <option value="Hari Ini - Segera (10–20 Menit)">
                          Segera (10–20 Menit)
                        </option>
                        <option value="Hari Ini - Pagi (08.00–11.00)">
                          Pagi (08.00–11.00)
                        </option>
                        <option value="Hari Ini - Siang (12.00–15.00)">
                          Siang (12.00–15.00)
                        </option>
                        <option value="Hari Ini - Sore (16.00–19.00)">
                          Sore (16.00–19.00)
                        </option>
                      </select>
                      <input
                        type="text"
                        placeholder="Catatan (opsional, mis. tukar galon)"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-sky-500"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Kirim Pesanan via WhatsApp</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
