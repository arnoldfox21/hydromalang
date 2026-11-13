import Image from "next/image";

const SHOPEE_URL = "https://shopee.co.id/hydromalang";

export default function CoverageArea() {
  const activeRegion = {
    name: "Perumahan Graha Merjosari Asri (Aktif)",
    subAreas: [
      "Cluster Melati",
      "Cluster Anggrek",
      "Cluster Lavender",
    ],
    estimate: "10 - 20 Menit",
    status: "TERSEDIA SEKARANG",
    badge: "100% GRATIS ONGKIR",
  };

  const shopeeRegions = [
    {
      name: "Area Merjosari Lainnya",
      note: "Joyo Grand, Bukit Tidar, Dinoyo Asri, Joyo Utomo & sekitarnya",
      status: "Bisa via Shopee",
    },
    {
      name: "Lowokwaru & Tlogomas",
      note: "Dinoyo, Tlogomas, Jatimulyo, Tunggulwulung",
      status: "Bisa via Shopee",
    },
    {
      name: "Suhat & Klojen",
      note: "Jl. Soekarno Hatta, Oro-oro Dowo, Kauman, Rampal",
      status: "Bisa via Shopee",
    },
    {
      name: "Blimbing, Sukun & Seluruh Malang",
      note: "Sawojajar, Arjosari, Pandanwangi, Kebonsari",
      status: "Bisa via Shopee",
    },
  ];

  return (
    <section id="wilayah" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & Coverage Cards */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold tracking-wide">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Gratis Ongkir Khusus Graha Merjosari Asri • Area Lain via Shopee</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Pesan Antar Langsung Khusus{" "}
              <span className="text-sky-600">Graha Merjosari Asri</span>,{" "}
              Luar Area Tersedia di <span className="text-orange-600">Shopee</span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Pengantaran kurir langsung dengan <strong>100% GRATIS ONGKIR</strong> dikhususkan untuk warga Perumahan Graha Merjosari Asri. Namun bagi Anda yang berada di wilayah lain di Malang, seluruh produk Cleo dapat dipesan dengan mudah melalui <strong>Shopee Official Store</strong> kami.
            </p>

            {/* Active Region Highlight Card (Graha Merjosari Asri) */}
            <div className="p-6 sm:p-7 rounded-3xl bg-linear-to-br from-emerald-500 to-teal-600 text-white shadow-xl shadow-emerald-500/15 relative overflow-hidden">
              <div className="absolute top-0 right-0 translate-x-8 -translate-y-8 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
                  </span>
                  <h3 className="text-xl font-extrabold tracking-tight">{activeRegion.name}</h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-white text-emerald-800 text-xs font-black tracking-wide uppercase shadow-xs">
                  {activeRegion.badge}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-emerald-50 mb-4 leading-relaxed">
                Jangkauan aktif kurir langsung meliputi seluruh cluster perumahan Graha Merjosari Asri:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs sm:text-sm">
                {activeRegion.subAreas.map((area, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-white/95 bg-white/10 px-3 py-1.5 rounded-xl backdrop-blur-xs">
                    <svg className="w-4 h-4 text-emerald-200 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{area}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-white/20 flex flex-wrap items-center justify-between text-xs text-emerald-100 gap-2">
                <div>⚡ Estimasi Pengantaran: <strong className="text-white font-bold">{activeRegion.estimate}</strong></div>
                <div>📦 Bebas Minimum Order Galon</div>
              </div>
            </div>

            {/* Shopee Regions Grid */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange-500" />
                  <span>Wilayah Lainnya (Bisa Pesan via Shopee)</span>
                </span>
                <a
                  href={SHOPEE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-orange-600 hover:text-orange-700 hover:underline flex items-center gap-1"
                >
                  <span>Buka Toko Shopee</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {shopeeRegions.map((reg, idx) => (
                  <a
                    key={idx}
                    href={SHOPEE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-orange-300 hover:shadow-md transition-all group block"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-bold text-slate-800 group-hover:text-orange-600 transition-colors">
                        {reg.name}
                      </h4>
                      <span className="text-[10px] font-extrabold text-orange-700 bg-orange-50 px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-orange-200">
                        <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                          <path d="M19.78 7.37l-1.92-3.84C17.5 2.82 16.77 2.37 16 2.37H8c-.77 0-1.5.45-1.86 1.16L4.22 7.37c-.6.93-.34 2.16.59 2.76.3.2.66.3 1.02.3h.17l.8 9.57C6.88 20.89 7.6 21.63 8.5 21.63h7c.9 0 1.62-.74 1.7-1.63l.8-9.57h.17c.36 0 .72-.1 1.02-.3.93-.6 1.19-1.83.59-2.76z" />
                        </svg>
                        <span>{reg.status}</span>
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500">{reg.note}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Fleet Graphic & Order Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sky-100 shadow-xl text-center space-y-6">
              <div className="relative w-full h-52 sm:h-60 flex items-center justify-center">
                <Image
                  src="/images/delivery-truck.svg"
                  alt="Armada Pengiriman Hydro Malang"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="space-y-2">
                <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                  Layanan Antar Tepat &amp; Praktis
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Antar Cepat Langsung ke Rumah / Dispenser
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Kurir standby di Graha Merjosari Asri, serta didukung kurir Shopee Instant untuk pengantaran ke wilayah Malang lainnya.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100 text-left space-y-2">
                <div className="text-xs font-bold text-sky-900 uppercase">
                  Pilihan Jalur Pengantaran:
                </div>
                <div className="text-xs text-slate-700 space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold shrink-0">📍</span>
                    <span><strong>Warga Graha Merjosari Asri:</strong> 100% Gratis Ongkir langsung lewat WhatsApp kurir kilat.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold shrink-0">🛍️</span>
                    <span><strong>Luar Graha Merjosari Asri:</strong> Pesan mudah via Shopee (bisa Instant, Same Day, atau Reguler).</span>
                  </div>
                </div>
              </div>

              {/* Dual CTA */}
              <div className="space-y-2.5">
                <a
                  href="https://wa.me/62895702831600?text=Halo%20Hydro%20Malang,%20saya%20warga%20Perumahan%20Graha%20Merjosari%20Asri%20ingin%20pesan%20air%20mineral%20Cleo."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-linear-to-r from-emerald-600 to-teal-500 text-white font-bold text-sm shadow-md hover:from-emerald-500 hover:to-teal-400 transition-all flex items-center justify-center gap-2"
                >
                  <span>Pesan Langsung (Graha Merjosari Asri)</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>

                <a
                  href={SHOPEE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-orange-50 hover:bg-orange-100 text-orange-700 font-bold text-xs sm:text-sm border border-orange-200 transition-all flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4 fill-current text-orange-600" viewBox="0 0 24 24">
                    <path d="M19.78 7.37l-1.92-3.84C17.5 2.82 16.77 2.37 16 2.37H8c-.77 0-1.5.45-1.86 1.16L4.22 7.37c-.6.93-.34 2.16.59 2.76.3.2.66.3 1.02.3h.17l.8 9.57C6.88 20.89 7.6 21.63 8.5 21.63h7c.9 0 1.62-.74 1.7-1.63l.8-9.57h.17c.36 0 .72-.1 1.02-.3.93-.6 1.19-1.83.59-2.76z" />
                  </svg>
                  <span>Beli via Shopee (Wilayah Lain di Malang)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
