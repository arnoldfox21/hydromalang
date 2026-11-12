"use client";

import Image from "next/image";

interface Product {
  id: string;
  name: string;
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

const products: Product[] = [
  {
    id: "air-kecil",
    name: "Air Mineral Kecil",
    price: "Rp 20.000",
    unit: "/ paket",
    badge: "Praktis & Higienis",
    description:
      "Air mineral murni kemasan kecil yang higienis dan mudah dibawa. Sangat cocok untuk bekal aktivitas harian, olahraga, jamuan rapat kantor, seminar, maupun acara keluarga.",
    image: "/images/product-small-bottle.svg",
    popular: false,
    features: [
      "Kemasan kecil ergonomis & praktis",
      "Air mineral murni pegunungan Malang",
      "Tutup segel rapat higienis anti-bocor",
      "Cocok untuk konsumsi rapat & jamuan tamu",
      "Kaya mineral alami penyeimbang tubuh",
    ],
    waText: `Halo Hydro Malang, saya ingin pesan *Air Mineral Kecil* (Rp 20.000).

Mohon info ketersediaan stok dan konfirmasi pengantaran ke alamat saya. Terima kasih!`,
  },
  {
    id: "air-12-8l",
    name: "Air 12.8L",
    price: "Rp 19.000",
    unit: "/ galon",
    badge: "Ringan Diangkat",
    description:
      "Kemasan galon 12.8 Liter ukuran slim yang ringan dan tidak memakan banyak tempat. Solusi ideal bagi anak kos, penghuni apartemen, kamar pribadi, atau keluarga kecil.",
    image: "/images/product-gallon-12.svg",
    popular: false,
    features: [
      "Volume 12.8 Liter ramah dispenser",
      "Bobot lebih ringan dan mudah dipindahkan",
      "Segel steril ganda bebas kontaminasi",
      "pH seimbang 7.4+ menyehatkan metabolisme",
      "Hemat biaya untuk konsumsi 1-2 orang",
    ],
    waText: `Halo Hydro Malang, saya ingin pesan *Air 12.8L* (Rp 19.000).

Mohon info ketersediaan stok dan konfirmasi pengantaran ke alamat saya. Terima kasih!`,
  },
  {
    id: "air-15l",
    name: "Air 15L",
    price: "Rp 20.000",
    unit: "/ galon",
    badge: "Pilihan Favorit Keluarga",
    description:
      "Kemasan galon 15 Liter dengan kapasitas pas untuk konsumsi keluarga mingguan. Menghadirkan kesegaran mata air pegunungan dengan harga sangat ekonomis.",
    image: "/images/product-gallon-15.svg",
    popular: true,
    features: [
      "Kapasitas 15 Liter pas & ekonomis",
      "Diproses dengan ozonisasi & sinar UV modern",
      "Air dingin/segar enak diminum langsung",
      "Galon bersih steril luar-dalam",
      "Pilihan terlaris rumah tangga di Malang",
    ],
    waText: `Halo Hydro Malang, saya ingin pesan *Air 15L* (Rp 20.000).

Mohon info ketersediaan stok dan konfirmasi pengantaran ke alamat saya. Terima kasih!`,
  },
  {
    id: "air-19l-galon",
    name: "Air 19L + Galon",
    price: "Rp 50.000",
    unit: "/ paket perdana",
    badge: "Paket Komplit Siap Pakai",
    description:
      "Paket perdana terlengkap sudah termasuk galon baru 19 Liter berkualitas Food Grade BPA-Free, terisi penuh air mineral segar Hydro Malang siap pakai di dispenser.",
    image: "/images/product-gallon-19.svg",
    popular: true,
    features: [
      "Sudah termasuk Galon Baru 19L + Air",
      "Bahan Polycarbonate tebal & BPA Free",
      "Segel hologram pengaman pabrik",
      "Dapat ditukar/diisi ulang untuk pesanan berikutnya",
      "Langsung siap digunakan di dispenser Anda",
    ],
    waText: `Halo Hydro Malang, saya ingin pesan *Air 19L + Galon* (Rp 50.000).

Mohon info ketersediaan stok dan konfirmasi pengantaran ke alamat saya. Terima kasih!`,
  },
];

export default function ProductSection() {
  return (
    <section id="produk" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-sky-600 uppercase bg-sky-100/70 px-3.5 py-1.5 rounded-full border border-sky-200">
            Daftar Produk Resmi &amp; Harga Transparan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pilihan Air Mineral Murni <span className="text-sky-600">Hydro Malang</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Pilih varian air mineral sesuai kebutuhan Anda. Cukup klik tombol pesan, Anda akan langsung diarahkan ke WhatsApp kami lengkap dengan format pemesanan otomatis.
          </p>
        </div>

        {/* 4 Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-14">
          {products.map((prod) => (
            <div
              key={prod.id}
              className={`relative bg-white rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-sky-500/15 ${
                prod.popular
                  ? "border-sky-400 ring-2 ring-sky-400/25 shadow-lg"
                  : "border-slate-200/90 shadow-xs hover:border-sky-300"
              }`}
            >
              {/* Popular Badge */}
              {prod.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-linear-to-r from-sky-600 to-cyan-500 text-white text-[11px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md whitespace-nowrap">
                  Paling Banyak Dipesan
                </div>
              )}

              <div>
                {/* Product Image Preview */}
                <div className="w-full h-48 sm:h-52 relative mb-5 flex items-center justify-center p-3 bg-linear-to-b from-sky-50/80 to-transparent rounded-2xl">
                  <div className="relative w-full h-full transition-transform duration-300 hover:scale-105">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      className="object-contain"
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

              {/* Order via WhatsApp Button with Template */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(prod.waText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xs ${
                    prod.popular
                      ? "bg-linear-to-r from-emerald-600 to-teal-500 text-white hover:from-emerald-500 hover:to-teal-400 shadow-md shadow-emerald-500/20"
                      : "bg-sky-600 hover:bg-sky-500 text-white shadow-md shadow-sky-500/20"
                  } hover:-translate-y-0.5 active:translate-y-0`}
                >
                  <svg
                    className="w-4 h-4 fill-current shrink-0"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Pesan via WA</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Quick order note */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-500 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Customer Service WhatsApp: <strong className="text-slate-800">0895-7028-31600</strong> • Siap respon cepat &amp; antar ke seluruh Malang Raya</span>
          </p>
        </div>
      </div>
    </section>
  );
}
