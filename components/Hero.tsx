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
              <span>Air Mineral Populer Resmi • Gratis Ongkir Graha Merjosari Asri</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Air Mineral Populer,{" "}
              <span className="bg-linear-to-r from-sky-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                Kesegaran Alami
              </span>{" "}
              Diantar Cepat ke Rumah
            </h1>

            {/* Sub-headline description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Hydro Malang menyediakan pilihan air minum mineral bermerek populer dan terpercaya seperti <strong>Cleo, Club, dan lainnya</strong>. Saat ini stok yang tersedia khusus <strong>Cleo</strong> dengan jaminan 100% original bersegel pabrik. Pengantaran kilat <strong>100% Gratis Ongkir khusus Perumahan Graha Merjosari Asri</strong>.
            </p>

            {/* Quick feature highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-left">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/70 border border-sky-100 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Brand Resmi</div>
                  <div className="text-[11px] text-slate-500">Ready: Cleo Segel Asli</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/70 border border-sky-100 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Kemurnian Teruji</div>
                  <div className="text-[11px] text-slate-500">Bebas Bromat &amp; Higienis</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/70 border border-sky-100 shadow-2xs col-span-2 sm:col-span-1">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Graha Merjosari Asri</div>
                  <div className="text-[11px] text-emerald-600 font-bold">100% Gratis Ongkir</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-4">
              <a
                href="#order-section"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-linear-to-r from-sky-600 to-cyan-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-sky-500/25 hover:from-sky-500 hover:to-cyan-400 hover:shadow-xl transition-all text-center flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
              >
                <span>Pesan Cleo Sekarang</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a
                href="https://shopee.co.id/hydromalang"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-500/25 transition-all text-center flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.78 7.37l-1.92-3.84C17.5 2.82 16.77 2.37 16 2.37H8c-.77 0-1.5.45-1.86 1.16L4.22 7.37c-.6.93-.34 2.16.59 2.76.3.2.66.3 1.02.3h.17l.8 9.57C6.88 20.89 7.6 21.63 8.5 21.63h7c.9 0 1.62-.74 1.7-1.63l.8-9.57h.17c.36 0 .72-.1 1.02-.3.93-.6 1.19-1.83.59-2.76z" />
                </svg>
                <span>Order via Shopee</span>
              </a>

              <a
                href="#produk"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white border border-sky-200 text-slate-700 hover:text-sky-600 hover:border-sky-300 hover:bg-sky-50/50 font-bold text-sm sm:text-base shadow-xs transition-all text-center flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
                <span>Lihat Produk</span>
              </a>
            </div>

            {/* Guarantee note */}
            <p className="text-xs text-slate-500 flex items-center justify-center lg:justify-start gap-2 pt-1">
              <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>100% Bebas Ongkir khusus Graha Merjosari Asri • Wilayah lain di Malang bisa order lewat Shopee</span>
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

              {/* Gallon Product SVG layer */}
              <div className="relative z-10 w-72 sm:w-80 h-72 sm:h-80 drop-shadow-2xl transition-transform duration-500 hover:scale-105">
                <Image
                  src="/images/product-gallon.svg"
                  alt="Galon Air Mineral Populer Hydro Malang"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Floating Quality Badge */}
              <div className="absolute bottom-6 left-4 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-sky-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  Cleo
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Stok Ready: Cleo</div>
                  <div className="text-[11px] text-emerald-600 font-semibold">100% Asli Bersegel Resmi</div>
                </div>
              </div>

              {/* Floating Free Ongkir Badge */}
              <div className="absolute top-6 right-4 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-emerald-100 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-black text-emerald-700">GRATIS ONGKIR GRAHA MERJOSARI ASRI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
