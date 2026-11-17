export default function PurificationProcess() {
  const mineralProfile = [
    { name: "pH Alami", value: "7.4 – 7.8", unit: "pH", desc: "Seimbang & menyegarkan" },
    { name: "TDS (Zat Terlarut)", value: "65 – 85", unit: "ppm", desc: "Ringan di ginjal" },
    { name: "Kalsium (Ca)", value: "18.5", unit: "mg/L", desc: "Kepadatan tulang" },
    { name: "Magnesium (Mg)", value: "8.2", unit: "mg/L", desc: "Fungsi saraf & otot" },
    { name: "Kalium (K)", value: "3.4", unit: "mg/L", desc: "Keseimbangan elektrolit" },
    { name: "Bikarbonat (HCO3)", value: "68.0", unit: "mg/L", desc: "Stabilitas pencernaan" },
  ];

  return (
    <div id="proses" className="bg-slate-50/80 rounded-2xl p-6 sm:p-7 border border-slate-200/90 h-full flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between gap-3 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
              Uji Lab Independen (KAN)
            </span>
            <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">
              Profil Mineral &amp; Kemurnian
            </h3>
          </div>
          <span className="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 text-[11px] font-bold shrink-0">
            SNI 3553:2015
          </span>
        </div>

        <p className="text-xs text-slate-600 mt-3 mb-5 leading-relaxed">
          Diproses melalui teknologi nano filter modern tanpa pengawet, klorin, atau pemanis buatan.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {mineralProfile.map((m, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-white border border-slate-200/80"
            >
              <div className="text-[11px] font-semibold text-slate-500">{m.name}</div>
              <div className="flex items-baseline gap-1 my-1">
                <span className="text-lg font-extrabold text-sky-600">{m.value}</span>
                <span className="text-[10px] font-semibold text-slate-400">{m.unit}</span>
              </div>
              <div className="text-[11px] text-slate-500 leading-tight">{m.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-slate-200 text-xs text-slate-500 flex items-center gap-2">
        <svg className="w-4 h-4 text-sky-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        <span>100% bebas bromat &amp; aman dikonsumsi setiap hari.</span>
      </div>
    </div>
  );
}
