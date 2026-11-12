"use client";

import { useState } from "react";

const WA_NUMBER = "62895702831600";

export default function WaterCalculator() {
  const [mode, setMode] = useState<"family" | "office">("family");
  const [peopleCount, setPeopleCount] = useState<number>(4);

  // Constants
  // Medical recommendation: ~2 liters / person / day
  const litersPerPersonDay = mode === "family" ? 2.2 : 1.2; // Office is ~8 hours
  const daysPerMonth = mode === "family" ? 30 : 22; // Working days for office

  const totalLitersMonthly = Math.round(peopleCount * litersPerPersonDay * daysPerMonth);
  const gallonsMonthly = Math.max(1, Math.ceil(totalLitersMonthly / 15));
  const gallonsWeekly = Math.max(1, Math.ceil(gallonsMonthly / 4));
  const estimatedCost = gallonsMonthly * 20000;
  
  // Single-use bottle comparison (600ml @ Rp 3.000 = Rp 5.000/liter vs Rp 1.333/liter in gallon)
  const singleUseCost = Math.round(totalLitersMonthly * 4500);
  const savings = singleUseCost - estimatedCost;

  const waOrderText = `Halo Hydro Malang, saya sudah menghitung kebutuhan air untuk ${
    mode === "family" ? "Keluarga" : "Kantor"
  } (${peopleCount} orang). Estimasi butuh ${gallonsMonthly} galon (Air 15L)/bulan. Mohon info ketersediaan dan konfirmasi pengantaran. Terima kasih!`;

  return (
    <section id="kalkulator" className="py-20 bg-linear-to-b from-white via-sky-50/50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-sky-100 overflow-hidden">
          {/* Header Banner */}
          <div className="bg-linear-to-r from-sky-700 via-sky-600 to-cyan-600 px-6 sm:px-10 py-8 text-white text-center">
            <span className="inline-block text-xs uppercase font-extrabold tracking-widest bg-white/20 px-3 py-1 rounded-full mb-3">
              Fitur Interaktif
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Kalkulator Kebutuhan Air Minum Hydro Malang
            </h2>
            <p className="text-sm sm:text-base text-sky-100 mt-2 max-w-xl mx-auto">
              Ketahui berapa galon yang dibutuhkan keluarga atau kantor Anda setiap bulannya untuk hidrasi optimal dan hemat biaya.
            </p>
          </div>

          <div className="p-6 sm:p-10 space-y-8">
            {/* Mode Selector */}
            <div className="flex justify-center">
              <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
                <button
                  type="button"
                  onClick={() => {
                    setMode("family");
                    setPeopleCount(4);
                  }}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                    mode === "family"
                      ? "bg-white text-sky-700 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span>Keluarga / Rumah Tangga</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMode("office");
                    setPeopleCount(15);
                  }}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                    mode === "office"
                      ? "bg-white text-sky-700 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span>Kantor / Kafe / Usaha</span>
                </button>
              </div>
            </div>

            {/* Slider Input */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-slate-800">
                  {mode === "family" ? "Jumlah Anggota Keluarga:" : "Jumlah Karyawan / Staf Kantor:"}
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-2xl sm:text-3xl font-extrabold text-sky-600">
                    {peopleCount}
                  </span>
                  <span className="text-sm font-semibold text-slate-500">Orang</span>
                </div>
              </div>

              <input
                type="range"
                min={mode === "family" ? 1 : 2}
                max={mode === "family" ? 12 : 60}
                value={peopleCount}
                onChange={(e) => setPeopleCount(parseInt(e.target.value, 10))}
                className="w-full h-3 bg-sky-100 rounded-lg appearance-none cursor-pointer accent-sky-600"
              />

              <div className="flex justify-between text-xs text-slate-400">
                <span>{mode === "family" ? "1 Orang" : "2 Orang"}</span>
                <span>{mode === "family" ? "6 Orang" : "30 Orang"}</span>
                <span>{mode === "family" ? "12+ Orang" : "60+ Orang"}</span>
              </div>
            </div>

            {/* Results Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {/* Card 1: Liter & Mingguan */}
              <div className="p-5 rounded-2xl bg-sky-50/70 border border-sky-100 flex flex-col justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase">
                  Konsumsi Mingguan
                </span>
                <div className="my-3">
                  <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                    {gallonsWeekly}
                  </span>
                  <span className="text-sm font-semibold text-slate-600 ml-1.5">
                    Galon / Minggu
                  </span>
                </div>
                <span className="text-xs text-sky-700 font-medium">
                  Setara ~{Math.round(totalLitersMonthly / 4)} liter per minggu
                </span>
              </div>

              {/* Card 2: Kebutuhan Bulanan */}
              <div className="p-5 rounded-2xl bg-linear-to-br from-sky-600 to-cyan-600 text-white shadow-md flex flex-col justify-between">
                <span className="text-xs font-bold text-sky-100 uppercase">
                  Rekomendasi Bulanan
                </span>
                <div className="my-3">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white">
                    {gallonsMonthly}
                  </span>
                  <span className="text-sm font-semibold text-sky-100 ml-1.5">
                    Galon / Bulan
                  </span>
                </div>
                <span className="text-xs text-sky-100 font-medium">
                  {mode === "family" ? "Cukup untuk kebutuhan masak & minum" : "Cukup untuk jamuan tamu & hidrasi staf"}
                </span>
              </div>

              {/* Card 3: Estimasi Pengeluaran */}
              <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-100 flex flex-col justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase">
                  Estimasi Biaya Galon
                </span>
                <div className="my-3">
                  <span className="text-2xl sm:text-3xl font-extrabold text-emerald-700">
                    Rp {estimatedCost.toLocaleString("id-ID")}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 block">
                    / bulan (@ Rp 20.000 Air 15L)
                  </span>
                </div>
                <span className="text-xs text-emerald-800 font-semibold flex items-center gap-1">
                  <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 9.586 14.586 6H12z" clipRule="evenodd" />
                  </svg>
                  Hemat hingga Rp {savings.toLocaleString("id-ID")}/bln vs botol kecil
                </span>
              </div>
            </div>

            {/* Direct Order Button */}
            <div className="pt-4 text-center">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waOrderText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-linear-to-r from-sky-600 to-cyan-500 text-white font-bold text-base shadow-lg shadow-sky-500/25 hover:from-sky-500 hover:to-cyan-400 transition-all transform hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Pesan Paket {gallonsMonthly} Galon via WhatsApp</span>
              </a>
              <p className="text-xs text-slate-500 mt-2">
                *Pengiriman terjadwal dapat diatur sesuai kenyamanan Anda (misal 2 galon tiap hari Senin)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
