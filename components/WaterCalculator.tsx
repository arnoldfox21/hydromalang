"use client";

import { useState } from "react";
import { formatRupiah } from "@/lib/defaults";
import type { Product } from "@/lib/types";
import { useOrderCart } from "./OrderCartContext";

export default function WaterCalculator({
  products = [],
}: {
  products?: Product[];
}) {
  const [mode, setMode] = useState<"family" | "office">("family");
  const [peopleCount, setPeopleCount] = useState<number>(4);
  const { setItemQty, setDeliveryArea } = useOrderCart();

  const litersPerPersonDay = mode === "family" ? 2.2 : 1.2;
  const daysPerMonth = mode === "family" ? 30 : 22;

  const totalLitersMonthly = Math.round(
    peopleCount * litersPerPersonDay * daysPerMonth
  );
  const gallonsMonthly = Math.max(1, Math.ceil(totalLitersMonthly / 15));
  const gallonsWeekly = Math.max(1, Math.ceil(gallonsMonthly / 4));
  const estimatedCost = gallonsMonthly * 20000;

  const targetProduct =
    products.find((p) => p.in_stock && p.name.toLowerCase().includes("15l")) ||
    products.find((p) => p.in_stock) ||
    products[0];

  const handleApplyToOrder = () => {
    if (targetProduct) {
      setDeliveryArea("graha_merjosari_asri");
      setItemQty(targetProduct.id, gallonsWeekly);
    }
    const el = document.getElementById("order-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="kalkulator"
      className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 h-full flex flex-col justify-between"
    >
      <div className="space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
              Kalkulator Kebutuhan
            </span>
            <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">
              Hitung Kebutuhan Galon Anda
            </h3>
          </div>

          <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200/70">
            <button
              type="button"
              onClick={() => {
                setMode("family");
                setPeopleCount(4);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                mode === "family"
                  ? "bg-white text-sky-700 shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Keluarga
            </button>
            <button
              type="button"
              onClick={() => {
                setMode("office");
                setPeopleCount(15);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                mode === "office"
                  ? "bg-white text-sky-700 shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Kantor
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-slate-700">
              {mode === "family" ? "Jumlah Anggota Keluarga" : "Jumlah Karyawan"}
            </label>
            <span className="text-xl font-extrabold text-sky-600">
              {peopleCount} <span className="text-xs font-semibold text-slate-500">Orang</span>
            </span>
          </div>

          <input
            type="range"
            min={mode === "family" ? 1 : 2}
            max={mode === "family" ? 12 : 60}
            value={peopleCount}
            onChange={(e) => setPeopleCount(parseInt(e.target.value, 10))}
            className="w-full h-2.5 bg-sky-100 rounded-lg appearance-none cursor-pointer accent-sky-600"
          />
        </div>

        {/* Result Summary */}
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3.5 rounded-xl bg-sky-50/80 border border-sky-100">
            <div className="text-[11px] font-semibold text-slate-500">Per Minggu</div>
            <div className="text-xl font-extrabold text-slate-900 mt-0.5">
              {gallonsWeekly} <span className="text-xs font-medium">Galon</span>
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="text-[11px] font-semibold text-slate-500">Per Bulan</div>
            <div className="text-xl font-extrabold text-slate-900 mt-0.5">
              {gallonsMonthly} <span className="text-xs font-medium">Galon</span>
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200/70">
            <div className="text-[11px] font-semibold text-emerald-700">Est. / Bulan</div>
            <div className="text-base sm:text-lg font-extrabold text-emerald-700 mt-1">
              {formatRupiah(estimatedCost)}
            </div>
          </div>
        </div>
      </div>

      {/* Action */}
      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        <span className="text-[11px] text-slate-500">
          Rekomendasi stok mingguan: <strong>{gallonsWeekly} galon 15L</strong>
        </span>
        <button
          type="button"
          onClick={handleApplyToOrder}
          className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition-colors cursor-pointer"
        >
          <span>Pesan {gallonsWeekly} Galon</span>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}
