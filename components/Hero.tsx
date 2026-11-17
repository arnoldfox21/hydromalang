"use client";

import Image from "next/image";
import { useOrderCart } from "./OrderCartContext";

export default function Hero({
  promoBadge = "Ready Stock Cleo Original • Gratis Ongkir Graha Merjosari Asri",
  shopeeUrl = "https://shopee.co.id/hydromalang",
}: {
  promoBadge?: string;
  shopeeUrl?: string;
}) {
  const { deliveryArea, setDeliveryArea } = useOrderCart();

  const handleSelectArea = (area: "graha_merjosari_asri" | "other") => {
    setDeliveryArea(area);
    const el = document.getElementById("produk");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="beranda"
      className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 bg-linear-to-b from-sky-50/70 via-white to-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Clear Value Prop & 2-Path Selector */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
              <span>{promoBadge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Air Mineral Cleo Asli,{" "}
              <span className="text-sky-600">Diantar Kilat</span> ke Rumah Anda
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Pesan air minum resmi bersegel pabrik tanpa ribet. Pilih lokasi Anda di bawah ini untuk melihat cara pesan tercepat:
            </p>

            {/* Interactive 2-Path Delivery Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <button
                type="button"
                onClick={() => handleSelectArea("graha_merjosari_asri")}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  deliveryArea === "graha_merjosari_asri"
                    ? "bg-emerald-50/70 border-emerald-500 ring-2 ring-emerald-500/20"
                    : "bg-white border-slate-200 hover:border-emerald-300"
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-sm font-bold text-slate-900">
                    Graha Merjosari Asri
                  </span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white shrink-0">
                    Gratis Ongkir
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-snug">
                  Kurir langsung 10–20 menit via WhatsApp. Pasang sampai dispenser, bayar COD/QRIS.
                </p>
              </button>

              <button
                type="button"
                onClick={() => handleSelectArea("other")}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  deliveryArea === "other"
                    ? "bg-orange-50/70 border-orange-500 ring-2 ring-orange-500/20"
                    : "bg-white border-slate-200 hover:border-orange-300"
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-sm font-bold text-slate-900">
                    Luar Area / Malang Raya
                  </span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 shrink-0">
                    Via Shopee
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-snug">
                  Pesan langsung melalui Toko Shopee Official Hydro Malang dengan promo ongkir.
                </p>
              </button>
            </div>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#produk"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-sm transition-colors"
              >
                <span>Pilih Produk Cleo</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </a>

              <a
                href={shopeeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white border border-slate-200 hover:border-orange-300 hover:bg-orange-50/50 text-slate-700 hover:text-orange-700 font-bold text-sm transition-colors"
              >
                <span>Buka Toko Shopee</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Real Product Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-slate-50 border border-slate-200/80 p-6 sm:p-8">
              <div className="relative aspect-square w-full max-w-sm mx-auto">
                <Image
                  src="/images/products/cleo-galon-19L.png"
                  alt="Galon Cleo Original Hydro Malang"
                  fill
                  sizes="(max-width: 1024px) 90vw, 400px"
                  className="object-contain drop-shadow-md"
                  priority
                />
              </div>

              {/* Clean Bottom Stats Strip */}
              <div className="mt-6 pt-5 border-t border-slate-200/80 grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-sm font-extrabold text-slate-900">100%</div>
                  <div className="text-[11px] text-slate-500">Segel Resmi</div>
                </div>
                <div className="border-x border-slate-200/80">
                  <div className="text-sm font-extrabold text-emerald-600">Rp 0</div>
                  <div className="text-[11px] text-slate-500">Ongkir GMA</div>
                </div>
                <div>
                  <div className="text-sm font-extrabold text-sky-600">10–20m</div>
                  <div className="text-[11px] text-slate-500">Estimasi Antar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
