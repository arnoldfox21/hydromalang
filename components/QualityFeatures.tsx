export default function QualityFeatures() {
  const features = [
    {
      title: "Brand Populer & 100% Original",
      description:
        "Menyediakan air minum mineral bermerek populer terpercaya seperti Cleo, Club, dll. Saat ini ready stok resmi Cleo dengan jaminan segel pabrik utuh.",
      iconBg: "bg-sky-50 text-sky-600",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      badge: "Resmi & Asli",
    },
    {
      title: "Teknologi Pemurnian Nano Filter Cleo",
      description:
        "Diproses menggunakan nano filter mutakhir sehingga menghasilkan air murni bebas bromat, bebas klorin, dan bebas zat anorganik yang membebani ginjal.",
      iconBg: "bg-cyan-50 text-cyan-600",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      badge: "Kemurnian 99.9%",
    },
    {
      title: "Galon Food-Grade & 100% BPA Free",
      description:
        "Kemasan galon resmi berstandar pangan internasional, steril, bebas zat kimia berbahaya bisphenol-A sehingga sangat aman bagi balita dan lansia.",
      iconBg: "bg-emerald-50 text-emerald-600",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      badge: "Aman Keluarga",
    },
    {
      title: "100% Gratis Ongkir Graha Merjosari Asri",
      description:
        "Khusus seluruh warga Perumahan Graha Merjosari Asri, nikmati pengantaran kilat bebas ongkos kirim tanpa minimum pembelian galon.",
      iconBg: "bg-amber-50 text-amber-600",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      badge: "Bebas Ongkir",
    },
    {
      title: "Layanan Antar Sampai ke Dispenser",
      description:
        "Kurir kami dengan senang hati membantu mengangkat dan memasang galon langsung ke dispenser rumah Anda, tanpa perlu repot.",
      iconBg: "bg-indigo-50 text-indigo-600",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      badge: "Bebas Repot",
    },
    {
      title: "Harga Resmi Terjangkau & Transparan",
      description:
        "Harga bersaing mulai Rp 19.000 untuk galon 12.8L, Rp 20.000 untuk galon 15L & kemasan kecil, serta Rp 50.000 untuk paket perdana komplit 19L + Galon.",
      iconBg: "bg-rose-50 text-rose-600",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      badge: "Harga Terbaik",
    },
  ];

  return (
    <section id="keunggulan" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-sky-600 uppercase bg-sky-50 px-3 py-1.5 rounded-full border border-sky-100">
            Kualitas &amp; Layanan Terpercaya
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Mengapa Memilih Layanan <span className="text-sky-600">Hydro Malang</span>?
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Menghadirkan air minum mineral bermerek populer (saat ini ready Cleo) dengan kemudahan pesan antar tanpa repot bagi warga Perumahan Graha Merjosari Asri.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-3xl bg-slate-50/60 hover:bg-white border border-slate-200/80 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xs ${item.iconBg}`}
                  >
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold text-sky-700 bg-sky-100/70 px-2.5 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center text-xs font-semibold text-sky-600 group-hover:text-sky-700">
                <span>Layanan Khusus Graha Merjosari Asri</span>
                <svg className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
