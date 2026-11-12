import Image from "next/image";

export default function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden pt-8 pb-16 lg:py-24 bg-linear-to-b from-sky-50 via-white to-sky-50/40">
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 sm:w-[600px] sm:h-[600px] bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Compelling Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold tracking-wide shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Air Mineral Murni • Antar Kilat Merjosari, Lowokwaru Malang</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Kemurnian Sejati,{" "}
              <span className="bg-linear-to-r from-sky-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                Kesegaran Alami
              </span>{" "}
              untuk Hidup Sehat
            </h1>

            {/* Sub-headline description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Hydro Malang menyajikan air mineral murni langsung dari sumber mata air alami pegunungan Malang. Diproses higienis dengan teknologi filtrasi modern, ozonisasi ganda, serta mempertahankan mineral esensial seimbang untuk kebugaran tubuh setiap hari.
            </p>

            {/* Quick feature highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-left">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/70 border border-sky-100 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">pH Seimbang</div>
                  <div className="text-[11px] text-slate-500">7.4+ Alami Tubuh</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/70 border border-sky-100 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">SNI & BPOM</div>
                  <div className="text-[11px] text-slate-500">Higienis & Halal</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/70 border border-sky-100 shadow-2xs col-span-2 sm:col-span-1">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Merjosari</div>
                  <div className="text-[11px] text-emerald-600 font-bold">100% Gratis Ongkir</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#order-section"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-linear-to-r from-sky-600 to-cyan-500 text-white font-bold text-base shadow-lg shadow-sky-500/25 hover:from-sky-500 hover:to-cyan-400 hover:shadow-xl hover:shadow-sky-500/35 transition-all text-center flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5"
              >
                <span>Pesan Galon Sekarang</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a
                href="#kalkulator"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white border border-sky-200 text-slate-700 hover:text-sky-600 hover:border-sky-300 hover:bg-sky-50/50 font-bold text-base shadow-xs transition-all text-center flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span>Hitung Kebutuhan Air</span>
              </a>
            </div>

            {/* Guarantee note */}
            <p className="text-xs text-slate-500 flex items-center justify-center lg:justify-start gap-2 pt-1">
              <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Pengantaran kilat 100% Gratis Ongkir khusus wilayah Merjosari (Area lain segera hadir)</span>
            </p>
          </div>

          {/* Right Column: Hero Visual Graphic */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Splash Background Graphic */}
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              {/* Splash SVG layer */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-90 scale-105">
                <Image
                  src="/images/water-splash-hero.svg"
                  alt="Kesegaran Air Hydro Malang"
                  width={550}
                  height={550}
                  className="object-contain"
                  priority
                />
              </div>

              {/* Main Product Gallon Image with floating effect */}
              <div className="relative z-10 w-64 sm:w-72 h-[380px] sm:h-[420px] transition-transform duration-500 hover:scale-105 animate-float">
                <Image
                  src="/images/product-gallon.svg"
                  alt="Hydro Malang Galon 19 Liter"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Floating Badge 1: Segel Higienis */}
              <div className="absolute -top-2 -left-4 sm:left-2 z-20 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-sky-100 flex items-center gap-3 animate-pulse-glow">
                <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-sky-500 to-cyan-400 text-white flex items-center justify-center shadow-md shadow-sky-500/20">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-800">Segel Hologram</div>
                  <div className="text-[11px] text-sky-600 font-semibold">100% Terlindung &amp; Murni</div>
                </div>
              </div>

              {/* Floating Badge 2: TDS Rendah Alami */}
              <div className="absolute -bottom-4 right-0 sm:right-2 z-20 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-sky-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center shadow-md shadow-emerald-500/20">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-800">TDS Ideal &lt; 90 ppm</div>
                  <div className="text-[11px] text-slate-500 font-medium">Rasa Lembut &amp; Menyegarkan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
