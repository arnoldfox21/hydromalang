"use client";

import { useState } from "react";
import type { CoverageAreaItem, FAQItem } from "@/lib/types";

interface ContentManagerProps {
  coverageAreas: CoverageAreaItem[];
  faqs: FAQItem[];
  onCoverageChange: (items: CoverageAreaItem[]) => void;
  onFaqsChange: (items: FAQItem[]) => void;
  onNotify: (msg: string, isError?: boolean) => void;
}

export default function ContentManager({
  coverageAreas,
  faqs,
  onCoverageChange,
  onFaqsChange,
  onNotify,
}: ContentManagerProps) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [shopeeLink, setShopeeLink] = useState(false);

  const [areaName, setAreaName] = useState("");
  const [areaNote, setAreaNote] = useState("");
  const [areaStatus, setAreaStatus] = useState("Bisa via Shopee");

  const addFaq = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim() || !answer.trim()) return;

    const res = await fetch("/api/admin/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "faq",
        question: question.trim(),
        answer: answer.trim(),
        shopee_link: shopeeLink,
        sort_order: faqs.length + 1,
      }),
    });
    const data = await res.json();
    if (!res.ok) {
      onNotify(data.error || "Gagal menambah FAQ.", true);
      return;
    }
    onFaqsChange([...faqs, data.item]);
    setQuestion("");
    setAnswer("");
    setShopeeLink(false);
    onNotify("FAQ baru berhasil ditambahkan.");
  };

  const deleteFaq = async (id: string) => {
    if (!confirm("Hapus FAQ ini?")) return;
    const res = await fetch(
      `/api/admin/content?type=faq&id=${encodeURIComponent(id)}`,
      { method: "DELETE" }
    );
    if (!res.ok) {
      onNotify("Gagal menghapus FAQ.", true);
      return;
    }
    onFaqsChange(faqs.filter((f) => f.id !== id));
    onNotify("FAQ dihapus.");
  };

  const addArea = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!areaName.trim()) return;

    const res = await fetch("/api/admin/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "coverage",
        name: areaName.trim(),
        note: areaNote.trim(),
        status: areaStatus.trim() || "Bisa via Shopee",
        is_primary: false,
        sub_areas: [],
        sort_order: coverageAreas.length + 1,
      }),
    });
    const data = await res.json();
    if (!res.ok) {
      onNotify(data.error || "Gagal menambah wilayah.", true);
      return;
    }
    onCoverageChange([...coverageAreas, data.item]);
    setAreaName("");
    setAreaNote("");
    onNotify("Wilayah antar baru ditambahkan.");
  };

  const deleteArea = async (id: string) => {
    if (!confirm("Hapus wilayah ini?")) return;
    const res = await fetch(
      `/api/admin/content?type=coverage&id=${encodeURIComponent(id)}`,
      { method: "DELETE" }
    );
    if (!res.ok) {
      onNotify("Gagal menghapus wilayah.", true);
      return;
    }
    onCoverageChange(coverageAreas.filter((a) => a.id !== id));
    onNotify("Wilayah dihapus.");
  };

  return (
    <div className="space-y-10">
      {/* Wilayah Antar */}
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Wilayah Antar</h2>
          <p className="text-sm text-slate-500">
            Daftar area layanan kurir langsung dan area yang dilayani via Shopee.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {coverageAreas.map((area) => (
            <div
              key={area.id}
              className="bg-white rounded-2xl border border-slate-200 p-4 flex justify-between items-start gap-3 shadow-xs"
            >
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-slate-900 text-sm">
                    {area.name}
                  </h3>
                  {area.is_primary && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      Utama
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 mt-1">{area.note}</p>
                <span className="inline-block mt-2 text-[11px] font-semibold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-md">
                  {area.status}
                </span>
              </div>
              {!area.is_primary && (
                <button
                  type="button"
                  onClick={() => deleteArea(area.id)}
                  className="text-xs font-semibold text-rose-600 hover:text-rose-700 px-2 py-1 cursor-pointer"
                >
                  Hapus
                </button>
              )}
            </div>
          ))}
        </div>

        <form
          onSubmit={addArea}
          className="bg-white rounded-2xl border border-slate-200 p-4 grid grid-cols-1 sm:grid-cols-3 gap-3 shadow-xs"
        >
          <input
            type="text"
            required
            value={areaName}
            onChange={(e) => setAreaName(e.target.value)}
            placeholder="Nama Wilayah"
            className="px-3 py-2 rounded-xl border border-slate-300 text-sm"
          />
          <input
            type="text"
            value={areaNote}
            onChange={(e) => setAreaNote(e.target.value)}
            placeholder="Keterangan area / perumahan"
            className="px-3 py-2 rounded-xl border border-slate-300 text-sm"
          />
          <div className="flex gap-2">
            <input
              type="text"
              value={areaStatus}
              onChange={(e) => setAreaStatus(e.target.value)}
              placeholder="Status"
              className="flex-1 px-3 py-2 rounded-xl border border-slate-300 text-sm"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm cursor-pointer"
            >
              Tambah
            </button>
          </div>
        </form>
      </div>

      {/* FAQ */}
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            FAQ (Pertanyaan Umum)
          </h2>
          <p className="text-sm text-slate-500">
            Kelola daftar pertanyaan dan jawaban yang tampil di bagian bawah website.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-2xl border border-slate-200 p-4 flex justify-between items-start gap-4 shadow-xs"
            >
              <div>
                <h3 className="font-bold text-slate-900 text-sm">
                  {faq.question}
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
              <button
                type="button"
                onClick={() => deleteFaq(faq.id)}
                className="text-xs font-semibold text-rose-600 hover:text-rose-700 px-2 py-1 shrink-0 cursor-pointer"
              >
                Hapus
              </button>
            </div>
          ))}
        </div>

        <form
          onSubmit={addFaq}
          className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 shadow-xs"
        >
          <h3 className="font-bold text-slate-900 text-sm">Tambah FAQ Baru</h3>
          <input
            type="text"
            required
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Pertanyaan"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm"
          />
          <textarea
            rows={3}
            required
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Jawaban lengkap"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm"
          />
          <div className="flex flex-wrap items-center justify-between gap-3">
            <label className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={shopeeLink}
                onChange={(e) => setShopeeLink(e.target.checked)}
                className="w-4 h-4 accent-sky-600"
              />
              Tampilkan tombol link Shopee di jawaban ini
            </label>
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm cursor-pointer"
            >
              + Tambah FAQ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
