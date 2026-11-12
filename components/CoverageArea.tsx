import Image from "next/image";

export default function CoverageArea() {
  const activeRegion = {
    name: "Wilayah Merjosari (Aktif)",
    subAreas: [
      "Perumahan Joyo Grand",
      "Jl. Joyo Suryo & Joyo Mulyo",
      "Jl. Joyo Utomo & Joyo Pranoto",
      "Jl. Joyo Tambaksari & Joyo Raharjo",
      "Villa Bukit Tidar & Dinoyo Asri",
      "Area Kos & Rumah Warga Sekitar Merjosari",
    ],
    estimate: "15 - 30 Menit",
    status: "TERSEDIA SEKARANG",
    badge: "100% GRATIS ONGKIR",
  };

  const upcomingRegions = [
    {
      name: "Lowokwaru Lain & Suhat",
      note: "Dinoyo, Jatimulyo, Tulusrejo, Tunggulwulung",
      status: "Segera Hadir",
    },
    {
      name: "Klojen & Malang Kota",
      note: "Oro-oro Dowo, Kauman, Rampal, Klojen Pusat",
      status: "Segera Hadir",
    },
    {
      name: "Blimbing & Kedungkandang",
      note: "Arjosari, Pandanwangi, Sawojajar, Buring",
      status: "Segera Hadir",
    },
    {
      name: "Sukun, Batu & Kab. Malang",
      note: "Bandungrejosari, Karangploso, Dau, Singosari",
      status: "Segera Hadir",
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
              <span>Khusus Wilayah Merjosari — 100% Gratis Ongkir</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Layanan Pesan Antar Kilat Saat Ini Khusus{" "}
              <span className="text-sky-600">Wilayah Merjosari</span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Untuk menjaga kecepatan dan kualitas layanan terbaik, saat ini pengantaran Hydro Malang <strong>difokuskan khusus wilayah Kelurahan Merjosari dan sekitarnya dengan GRATIS ONGKIR</strong> langsung sampai ke depan pintu kos, rumah, atau kantor Anda.
            </p>

            {/* Active Region Highlight Card */}
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
                Jangkauan aktif meliputi seluruh penjuru perumahan, perkampungan, dan kos-kosan di Merjosari:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
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
                <div>📦 Tanpa Minimum Order Galon</div>
              </div>
            </div>

            {/* Disabled / Upcoming Regions Grid */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Wilayah Lain di Luar Merjosari (Belum Tersedia)
                </span>
                <span className="text-[11px] font-semibold text-slate-400 bg-slate-200/70 px-2 py-0.5 rounded-md">
                  Tahap Persiapan
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {upcomingRegions.map((up, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-100/80 border border-slate-200/70 opacity-75 cursor-not-allowed select-none"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-bold text-slate-600 line-through decoration-slate-400">
                        {up.name}
                      </h4>
                      <span className="text-[10px] font-extrabold text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span>{up.status}</span>
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500">{up.note}</p>
                  </div>
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
                  alt="Armada Pengiriman Hydro Malang Khusus Merjosari"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="space-y-2">
                <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                  Armada Siaga Wilayah Merjosari
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Antar Cepat Langsung Sampai Kamar / Dispenser
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Lokasi kami standby di Merjosari sehingga pesanan galon Anda dapat tiba dalam waktu singkat tanpa repot.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100 text-left space-y-2">
                <div className="text-xs font-bold text-sky-900 uppercase">
                  Ketentuan Layanan Saat Ini:
                </div>
                <div className="text-xs text-slate-700 space-y-1.5">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>100% Gratis Ongkir</strong> untuk seluruh alamat di Merjosari.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Bisa dibantu angkat dan pasang ke dispenser.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">ℹ</span>
                    <span>Wilayah di luar Merjosari sementara belum dapat dilayani.</span>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/62895702831600?text=Halo%20Hydro%20Malang,%20saya%20di%20wilayah%20Merjosari%20ingin%20pesan%20air%20mineral."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-linear-to-r from-emerald-600 to-teal-500 text-white font-bold text-sm shadow-md hover:from-emerald-500 hover:to-teal-400 transition-all flex items-center justify-center gap-2"
              >
                <span>Pesan Sekarang (Gratis Ongkir Merjosari)</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
