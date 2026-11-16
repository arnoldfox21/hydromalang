"use client";

import { useState } from "react";
import type { Brand } from "@/lib/types";

interface BrandManagerProps {
  brands: Brand[];
  onChange: (brands: Brand[]) => void;
  onNotify: (msg: string, isError?: boolean) => void;
}

export default function BrandManager({
  brands,
  onChange,
  onNotify,
}: BrandManagerProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [available, setAvailable] = useState(false);
  const [saving, setSaving] = useState(false);

  const toggleAvailable = async (brand: Brand) => {
    const nextAvailable = !brand.available;
    const nextStatus = nextAvailable ? "Tersedia Sekarang" : "Segera Hadir";

    try {
      const res = await fetch("/api/admin/brands", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...brand,
          available: nextAvailable,
          status: nextStatus,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        onNotify(data.error || "Gagal mengubah status merek.", true);
        return;
      }
      onChange(brands.map((b) => (b.id === brand.id ? data.brand : b)));
      onNotify(`${brand.name} diubah ke "${nextStatus}".`);
    } catch {
      onNotify("Gagal menghubungi server.", true);
    }
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setSaving(true);

    try {
      const res = await fetch("/api/admin/brands", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          description: description.trim(),
          available,
          status: available ? "Tersedia Sekarang" : "Segera Hadir",
          sort_order: brands.length + 1,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        onNotify(data.error || "Gagal menambah merek.", true);
        return;
      }
      onChange([...brands, data.brand]);
      setName("");
      setDescription("");
      setAvailable(false);
      onNotify("Merek baru berhasil ditambahkan.");
    } catch {
      onNotify("Gagal menghubungi server.", true);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (brand: Brand) => {
    if (!confirm(`Hapus merek "${brand.name}"?`)) return;
    try {
      const res = await fetch(
        `/api/admin/brands?id=${encodeURIComponent(brand.id)}`,
        { method: "DELETE" }
      );
      if (!res.ok) {
        const data = await res.json();
        onNotify(data.error || "Gagal menghapus merek.", true);
        return;
      }
      onChange(brands.filter((b) => b.id !== brand.id));
      onNotify("Merek berhasil dihapus.");
    } catch {
      onNotify("Gagal menghubungi server.", true);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-900">Kelola Merek / Brand</h2>
        <p className="text-sm text-slate-500">
          Atur merek yang tampil di katalog beserta status ketersediaannya.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="bg-white rounded-2xl border border-slate-200 p-4 flex flex-col justify-between gap-3 shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-1">
                <h3 className="font-bold text-slate-900">{brand.name}</h3>
                <span
                  className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                    brand.available
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {brand.status}
                </span>
              </div>
              <p className="text-xs text-slate-600">{brand.description}</p>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => toggleAvailable(brand)}
                className="px-3 py-1.5 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-700 font-semibold text-xs cursor-pointer"
              >
                {brand.available ? "Set Segera Hadir" : "Set Tersedia"}
              </button>
              <button
                type="button"
                onClick={() => handleDelete(brand)}
                className="px-3 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 font-semibold text-xs cursor-pointer"
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>

      <form
        onSubmit={handleAdd}
        className="bg-white rounded-2xl border border-slate-200 p-5 space-y-4 shadow-xs"
      >
        <h3 className="font-bold text-slate-900 text-sm">Tambah Merek Baru</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama Merek (mis. Pristine)"
            className="px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm"
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Deskripsi singkat"
            className="px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm"
          />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <label className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={available}
              onChange={(e) => setAvailable(e.target.checked)}
              className="w-4 h-4 accent-sky-600"
            />
            Langsung Tersedia Sekarang
          </label>
          <button
            type="submit"
            disabled={saving}
            className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm cursor-pointer"
          >
            {saving ? "Menambah..." : "+ Tambah Merek"}
          </button>
        </div>
      </form>
    </div>
  );
}
