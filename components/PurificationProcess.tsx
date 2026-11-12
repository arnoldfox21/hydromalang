import Image from "next/image";

export default function PurificationProcess() {
  const mineralProfile = [
    { name: "pH Alami", value: "7.4 - 7.8", unit: "pH", desc: "Seimbang, menetralkan keasaman tubuh" },
    { name: "TDS (Zat Terlarut)", value: "65 - 85", unit: "ppm", desc: "Ringan di ginjal & terasa segar" },
    { name: "Kalsium (Ca)", value: "18.5", unit: "mg/L", desc: "Mendukung kepadatan tulang & gigi" },
    { name: "Magnesium (Mg)", value: "8.2", unit: "mg/L", desc: "Membantu fungsi saraf & otot" },
    { name: "Kalium (K)", value: "3.4", unit: "mg/L", desc: "Menjaga keseimbangan elektrolit tubuh" },
    { name: "Bikarbonat (HCO3)", value: "68.0", unit: "mg/L", desc: "Menjaga stabilitas pencernaan" },
  ];

  return (
    <section id="proses" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-sky-600 uppercase bg-sky-50 px-3 py-1.5 rounded-full border border-sky-100">
            Kemurnian Terjamin
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Dari Mata Air Pegunungan Malang Menuju Meja Anda
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Diproses melalui perpaduan keajaiban alam dan teknologi filtrasi berstandar industri tinggi. Kami mengeliminasi seluruh bakteri tanpa membuang kandungan mineral alaminya.
          </p>
        </div>

        {/* Visual Process Diagram SVG */}
        <div className="mt-12 w-full rounded-3xl overflow-hidden border border-sky-100 shadow-xl bg-sky-50/30 p-2 sm:p-4">
          <div className="relative w-full aspect-16/9 sm:aspect-21/9 max-h-[420px]">
            <Image
              src="/images/filtration-process.svg"
              alt="Proses Pemurnian Hydro Malang"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Two Column: Natural Spring Story & Mineral Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-16">
          {/* Left Column: Natural Mountain Landscape Visual & Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative w-full h-72 sm:h-80 rounded-3xl overflow-hidden border border-sky-100 shadow-lg">
              <Image
                src="/images/mountain-spring.svg"
                alt="Sumber Mata Air Pegunungan Malang"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-xs font-bold text-sky-300 uppercase tracking-widest">
                    Keaslian Sumber
                  </span>
                  <h4 className="text-lg font-bold">Mata Air Alami Lereng Vulkanik Malang</h4>
                  <p className="text-xs text-slate-200 mt-1">
                    Air hujan murni yang meresap ke dalam bumi dan disaring secara alami oleh batuan vulkanik selama berdekade.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
              <p>
                Kawasan Malang Raya diberkahi oleh gugusan pegunungan yang menjulang tinggi, menghadirkan air pegunungan dengan komposisi mineral terlengkap dan rasa yang tidak pahit di tenggorokan.
              </p>
              <p>
                Hydro Malang berkomitmen untuk mempertahankan keaslian anugerah alam ini. Setiap tetes yang Anda minum adalah perpaduan hidrasi sejati yang menyehatkan organ tubuh, menyegarkan pikiran, dan menjaga daya tahan tubuh aktif.
              </p>
            </div>
          </div>

          {/* Right Column: Lab Tested Mineral Profile */}
          <div className="lg:col-span-6 bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase">
                  Uji Laboratorium Berkala
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  Profil Mineral Hydro Malang
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                SNI 3553:2015
              </span>
            </div>

            <p className="text-xs text-slate-500 mt-3 mb-6">
              Berdasarkan hasil pengujian berkala laboratorium independen terakreditasi KAN (Komite Akreditasi Nasional).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {mineralProfile.map((m, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-white border border-slate-200/70 hover:border-sky-300 transition-colors shadow-2xs"
                >
                  <div className="text-xs font-bold text-slate-700">{m.name}</div>
                  <div className="flex items-baseline gap-1 my-1">
                    <span className="text-xl font-extrabold text-sky-600">{m.value}</span>
                    <span className="text-[11px] font-semibold text-slate-400">{m.unit}</span>
                  </div>
                  <div className="text-[11px] text-slate-500">{m.desc}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500 flex items-center gap-2">
              <svg className="w-4 h-4 text-sky-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span>Tidak mengandung pemanis buatan, klorin, atau zat kimia pengawet apa pun.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
