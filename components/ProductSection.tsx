"use client";

import Image from "next/image";

interface Product {
  id: string;
  name: string;
  brand: string;
  price: string;
  unit: string;
  badge: string;
  description: string;
  image: string;
  popular?: boolean;
  features: string[];
  waText: string;
}

const WA_NUMBER = "62895702831600";
const SHOPEE_URL = "https://shopee.co.id/hydromalang";

const popularBrands = [
  {
    name: "Cleo Pure Water",
    status: "Tersedia Sekarang",
    available: true,
    desc: "Air murni demineral bebas bromat dengan teknologi nano filter modern.",
    badgeColor: "bg-emerald-500 text-white",
  },
  {
    name: "Club",
    status: "Segera Hadir",
    available: false,
    desc: "Air mineral pegunungan pilihan keluarga Indonesia.",
    badgeColor: "bg-slate-200 text-slate-700",
  },
  {
    name: "Aqua",
    status: "Segera Hadir",
    available: false,
    desc: "Air mineral legendaris dari sumber mata air alami pilihan.",
    badgeColor: "bg-slate-200 text-slate-700",
  },
  {
    name: "Le Minerale",
    status: "Segera Hadir",
    available: false,
    desc: "Air mineral alami dengan kandungan mineral esensial seimbang.",
    badgeColor: "bg-slate-200 text-slate-700",
  },
];

const products: Product[] = [
  {
    id: "cleo-kecil",
    name: "Cleo Air Mineral Kecil",
    brand: "Cleo",
    price: "Rp 20.000",
    unit: "/ paket",
    badge: "Cleo • Praktis & Higienis",
    description:
      "Air mineral murni Cleo kemasan kecil yang higienis dan praktis. Sangat pas untuk kebutuhan tamu, bekal harian, rapat, atau acara keluarga.",
    image: "/images/products/cleo-220ml.jpeg",
    popular: false,
    features: [
      "Produk Cleo resmi 100% bersegel pabrik",
      "Air demineral murni bebas zat anorganik",
      "Kemasan ergonomis praktis disajikan",
      "Segel higienis anti-bocor standar pabrik",
      "Cocok untuk konsumsi tamu & keluarga",
    ],
    waText: `Halo Hydro Malang, saya warga Graha Merjosari Asri ingin pesan *Cleo Air Mineral Kecil* (Rp 20.000).

Mohon konfirmasi ketersediaan dan pengantaran ke rumah saya. Terima kasih!`,
  },
  {
    id: "cleo-12-8l",
    name: "Cleo Air 12.8L",
    brand: "Cleo",
    price: "Rp 19.000",
    unit: "/ galon",
    badge: "Cleo • Slim & Ringan",
    description:
      "Galon Cleo ukuran 12.8 Liter ukuran slim yang ringan dan hemat tempat. Solusi tepat agar mudah diangkat dan dipasang langsung ke dispenser.",
    image: "/images/products/cleo-12L.jpeg",
    popular: false,
    features: [
      "Volume 12.8 Liter ramah dispenser",
      "Bobot lebih ringan, mudah diangkat",
      "Air murni Cleo berstandar nano filter",
      "Segel resmi ganda dari pabrik Cleo",
      "Hemat biaya untuk konsumsi harian",
    ],
    waText: `Halo Hydro Malang, saya warga Graha Merjosari Asri ingin pesan *Cleo Air 12.8L* (Rp 19.000).

Mohon konfirmasi ketersediaan dan pengantaran ke rumah saya. Terima kasih!`,
  },
  {
    id: "cleo-15l",
    name: "Cleo Air 15L",
    brand: "Cleo",
    price: "Rp 20.000",
    unit: "/ galon",
    badge: "Cleo • Paling Favorit",
    description:
      "Kemasan galon Cleo 15 Liter dengan kapasitas pas untuk konsumsi keluarga mingguan. Menghadirkan kesegaran air murni dengan harga ekonomis.",
    image: "/images/products/cleo-15L.jpeg",
    popular: true,
    features: [
      "Kapasitas 15 Liter pas & hemat",
      "Kemurnian Cleo bebas bromat & klorin",
      "Rasa segar alami dan ringan diminum",
      "Galon bersih higienis standar Cleo",
      "Pilihan terlaris warga Graha Merjosari Asri",
    ],
    waText: `Halo Hydro Malang, saya warga Graha Merjosari Asri ingin pesan *Cleo Air 15L* (Rp 20.000).

Mohon konfirmasi ketersediaan dan pengantaran ke rumah saya. Terima kasih!`,
  },
  {
    id: "cleo-19l-galon",
    name: "Cleo Air 19L + Galon",
    brand: "Cleo",
    price: "Rp 50.000",
    unit: "/ paket perdana",
    badge: "Cleo • Paket Komplit",
    description:
      "Paket perdana siap pakai: sudah termasuk galon baru resmi 19 Liter berkualitas Food Grade BPA-Free, terisi penuh air murni Cleo siap pasang.",
    image: "/images/products/cleo-galon-19L.png",
    popular: true,
    features: [
      "Paket lengkap: Galon Baru 19L + Isi Air Cleo",
      "Bahan tebal Food-Grade & 100% BPA-Free",
      "Segel pengaman hologram resmi pabrik",
      "Dapat ditukar/diisi ulang pesanan berikutnya",
      "Langsung siap pasang di dispenser Anda",
    ],
    waText: `Halo Hydro Malang, saya warga Graha Merjosari Asri ingin pesan *Cleo Air 19L + Galon* (Rp 50.000).

Mohon konfirmasi ketersediaan dan pengantaran ke rumah saya. Terima kasih!`,
  },
];

export default function ProductSection() {
  return (
    <section id="produk" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-sky-600 uppercase bg-sky-100/70 px-3.5 py-1.5 rounded-full border border-sky-200">
            Brand Populer Resmi &amp; Harga Transparan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pilihan Air Minum Mineral Populer di <span className="text-sky-600">Hydro Malang</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Menyediakan air minum mineral bermerek populer seperti <strong>Cleo, Club, dan lainnya</strong> (stok ready: <strong>Cleo</strong>). Warga Graha Merjosari Asri bisa pesan via WA kurir kilat, sedangkan wilayah lainnya dapat pesan via <strong>Shopee</strong>!
          </p>
        </div>

        {/* Brand Status Tracker Banner */}
        <div className="mt-10 p-6 rounded-3xl bg-white border border-sky-100 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <span>Katalog Merek Air Mineral</span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  Ready: Cleo
                </span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Merek populer lainnya seperti Club sedang dipersiapkan dan segera hadir bertahap.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 font-semibold">
                📍 Graha Merjosari: Kurir Langsung
              </span>
              <a
                href={SHOPEE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-orange-700 bg-orange-50 hover:bg-orange-100 px-3 py-1.5 rounded-xl border border-orange-200 font-bold flex items-center gap-1 transition-colors"
              >
                <span>🛍️ Luar Area: Buka Shopee</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 pt-4">
            {popularBrands.map((brand, idx) => (
              <div
                key={idx}
                className={`p-3.5 rounded-2xl border transition-all ${
                  brand.available
                    ? "bg-emerald-50/60 border-emerald-300 ring-2 ring-emerald-400/20"
                    : "bg-slate-50/70 border-slate-200 opacity-75"
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <h4 className="text-sm font-bold text-slate-900">{brand.name}</h4>
                  <span
                    className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                      brand.available
                        ? "bg-emerald-600 text-white"
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {brand.status}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 leading-snug">{brand.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Products Grid (Cleo Ready) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12">
          {products.map((prod) => (
            <div
              key={prod.id}
              className={`group relative bg-white rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-sky-500/15 hover:-translate-y-1 ${
                prod.popular
                  ? "border-sky-400 ring-2 ring-sky-400/25 shadow-lg"
                  : "border-slate-200/90 shadow-xs hover:border-sky-300"
              }`}
            >
              {/* Popular Badge */}
              {prod.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10 bg-linear-to-r from-sky-600 to-cyan-500 text-white text-[11px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md whitespace-nowrap">
                  Paling Banyak Dipesan
                </div>
              )}

              <div>
                {/* Product Image Preview */}
                <div className="w-full h-56 sm:h-60 relative mb-5 flex items-center justify-center p-2.5 bg-white rounded-2xl border border-slate-100/90 shadow-xs overflow-hidden">
                  <div className="relative w-full h-full transition-transform duration-500 ease-out group-hover:scale-105">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-contain drop-shadow-xs"
                    />
                  </div>
                </div>

                {/* Badge & Title */}
                <div className="space-y-1.5">
                  <span className="inline-block text-[11px] font-bold text-sky-700 bg-sky-100/70 px-2.5 py-0.5 rounded-full">
                    {prod.badge}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed min-h-[48px]">
                    {prod.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mt-4 pb-4 border-b border-slate-100 flex items-baseline gap-1.5">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {prod.price}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {prod.unit}
                  </span>
                </div>

                {/* Features List */}
                <div className="mt-4 space-y-2">
                  {prod.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <svg
                        className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="leading-tight">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons: WhatsApp & Shopee */}
              <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                {/* Primary: WhatsApp for Graha Merjosari Asri */}
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(prod.waText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xs ${
                    prod.popular
                      ? "bg-linear-to-r from-emerald-600 to-teal-500 text-white hover:from-emerald-500 hover:to-teal-400 shadow-emerald-500/20"
                      : "bg-sky-600 hover:bg-sky-500 text-white shadow-sky-500/20"
                  } hover:-translate-y-0.5 active:translate-y-0`}
                >
                  <svg
                    className="w-4 h-4 fill-current shrink-0"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Pesan via WA (Graha Merjosari)</span>
                </a>

                {/* Secondary: Shopee */}
                <a
                  href={SHOPEE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 bg-orange-50 hover:bg-orange-100 text-orange-700 border border-orange-200 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-orange-600 shrink-0" viewBox="0 0 24 24">
                    <path d="M19.78 7.37l-1.92-3.84C17.5 2.82 16.77 2.37 16 2.37H8c-.77 0-1.5.45-1.86 1.16L4.22 7.37c-.6.93-.34 2.16.59 2.76.3.2.66.3 1.02.3h.17l.8 9.57C6.88 20.89 7.6 21.63 8.5 21.63h7c.9 0 1.62-.74 1.7-1.63l.8-9.57h.17c.36 0 .72-.1 1.02-.3.93-.6 1.19-1.83.59-2.76z" />
                  </svg>
                  <span>Beli via Shopee</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Quick order note */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-500 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Customer Service: <strong className="text-slate-800">0895-7028-31600</strong> • Gratis Ongkir di Graha Merjosari Asri &amp; Tersedia di <strong className="text-orange-600">Shopee</strong> untuk Luar Area</span>
          </p>
        </div>
      </div>
    </section>
  );
}
