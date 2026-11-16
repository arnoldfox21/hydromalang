"use client";

import { useState } from "react";
import { formatRupiah } from "@/lib/defaults";
import type { Product } from "@/lib/types";

interface ProductManagerProps {
  products: Product[];
  onChange: (products: Product[]) => void;
  onNotify: (msg: string, isError?: boolean) => void;
}

const EMPTY_PRODUCT: Omit<Product, "id"> = {
  name: "",
  brand: "Cleo",
  price: 20000,
  unit: "/ galon",
  badge: "Cleo • Segel Resmi",
  description: "",
  image: "/images/products/cleo-galon-19L.png",
  popular: false,
  in_stock: true,
  features: ["Produk resmi 100% bersegel pabrik"],
  wa_text: "",
  sort_order: 1,
};

export default function ProductManager({
  products,
  onChange,
  onNotify,
}: ProductManagerProps) {
  const [editing, setEditing] = useState<Partial<Product> | null>(null);
  const [featuresText, setFeaturesText] = useState("");
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [tempUploadedUrl, setTempUploadedUrl] = useState<string | null>(null);

  const openNew = () => {
    setTempUploadedUrl(null);
    setEditing({
      ...EMPTY_PRODUCT,
      sort_order: products.length + 1,
    });
    setFeaturesText(EMPTY_PRODUCT.features.join("\n"));
  };

  const openEdit = (prod: Product) => {
    setTempUploadedUrl(null);
    setEditing({ ...prod });
    setFeaturesText((prod.features || []).join("\n"));
  };

  const closeModal = async () => {
    // If admin uploaded a new blob image during this modal session and cancelled, clean it up
    if (tempUploadedUrl) {
      await fetch("/api/admin/upload", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: tempUploadedUrl }),
      }).catch(() => {});
    }
    setTempUploadedUrl(null);
    setEditing(null);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editing) return;

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) {
        onNotify(data.error || "Gagal upload gambar.", true);
        return;
      }

      // Clean up any previous unsaved upload from this same modal session
      if (tempUploadedUrl) {
        await fetch("/api/admin/upload", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: tempUploadedUrl }),
        }).catch(() => {});
      }

      setTempUploadedUrl(data.url);
      setEditing({ ...editing, image: data.url });
      onNotify("Foto produk berhasil diunggah ke Vercel Blob.");
    } catch {
      onNotify("Terjadi kesalahan saat mengunggah foto.", true);
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editing) return;
    setSaving(true);

    const features = featuresText
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);

    const payload = {
      ...editing,
      features,
      wa_text:
        editing.wa_text?.trim() ||
        `Halo Hydro Malang, saya warga Graha Merjosari Asri ingin pesan *${editing.name}* (${formatRupiah(Number(editing.price) || 0)}).\n\nMohon konfirmasi ketersediaan dan pengantaran ke rumah saya. Terima kasih!`,
    };

    try {
      const isUpdate = Boolean(editing.id);
      const res = await fetch("/api/admin/products", {
        method: isUpdate ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        onNotify(data.error || "Gagal menyimpan produk.", true);
        setSaving(false);
        return;
      }

      const saved: Product = data.product;
      const next = isUpdate
        ? products.map((p) => (p.id === saved.id ? saved : p))
        : [...products, saved];
      next.sort((a, b) => a.sort_order - b.sort_order);
      onChange(next);
      setTempUploadedUrl(null);
      setEditing(null);
      onNotify(
        isUpdate ? "Produk berhasil diperbarui." : "Produk baru berhasil ditambahkan."
      );
    } catch {
      onNotify("Gagal menghubungi server.", true);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (prod: Product) => {
    if (!confirm(`Hapus produk "${prod.name}"? Foto di Blob juga akan dihapus.`)) {
      return;
    }

    try {
      const res = await fetch(
        `/api/admin/products?id=${encodeURIComponent(prod.id)}`,
        { method: "DELETE" }
      );
      const data = await res.json();
      if (!res.ok) {
        onNotify(data.error || "Gagal menghapus produk.", true);
        return;
      }
      onChange(products.filter((p) => p.id !== prod.id));
      onNotify("Produk dan foto lama berhasil dihapus.");
    } catch {
      onNotify("Gagal menghubungi server.", true);
    }
  };

  const toggleStock = async (prod: Product) => {
    try {
      const res = await fetch("/api/admin/products", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...prod, in_stock: !prod.in_stock }),
      });
      const data = await res.json();
      if (!res.ok) {
        onNotify(data.error || "Gagal mengubah status stok.", true);
        return;
      }
      onChange(products.map((p) => (p.id === prod.id ? data.product : p)));
      onNotify(
        `${prod.name} ditandai ${!prod.in_stock ? "Ready Stok" : "Stok Habis"}.`
      );
    } catch {
      onNotify("Gagal menghubungi server.", true);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Kelola Produk</h2>
          <p className="text-sm text-slate-500">
            Tambah, ubah harga, upload foto (Vercel Blob), atau atur stok produk.
          </p>
        </div>
        <button
          type="button"
          onClick={openNew}
          className="px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow-sm cursor-pointer"
        >
          + Tambah Produk
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((prod) => (
          <div
            key={prod.id}
            className="bg-white rounded-2xl border border-slate-200 p-4 flex gap-4 items-start shadow-xs"
          >
            <div className="w-20 h-20 rounded-xl bg-slate-50 border border-slate-200 shrink-0 overflow-hidden flex items-center justify-center p-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={prod.image}
                alt={prod.name}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-1.5 mb-1">
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-sky-100 text-sky-800">
                  {prod.brand}
                </span>
                {prod.popular && (
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                    Populer
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => toggleStock(prod)}
                  className={`text-xs font-bold px-2 py-0.5 rounded-full cursor-pointer ${
                    prod.in_stock
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-rose-100 text-rose-700"
                  }`}
                >
                  {prod.in_stock ? "Ready Stok" : "Habis"}
                </button>
              </div>

              <h3 className="font-bold text-slate-900 truncate">{prod.name}</h3>
              <p className="text-sm font-extrabold text-sky-700">
                {formatRupiah(prod.price)}{" "}
                <span className="text-xs font-normal text-slate-500">
                  {prod.unit}
                </span>
              </p>

              <div className="flex items-center gap-2 mt-3">
                <button
                  type="button"
                  onClick={() => openEdit(prod)}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs cursor-pointer"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(prod)}
                  className="px-3 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 font-semibold text-xs cursor-pointer"
                >
                  Hapus
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit Modal */}
      {editing && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="text-lg font-extrabold text-slate-900">
                {editing.id ? "Edit Produk" : "Tambah Produk Baru"}
              </h3>
              <button
                type="button"
                onClick={closeModal}
                className="text-slate-400 hover:text-slate-600 font-bold text-lg px-2 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 mt-4">
              {/* Image Upload */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Foto Produk (disimpan di Vercel Blob)
                </label>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center p-1 shrink-0 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={editing.image || "/images/products/cleo-galon-19L.png"}
                      alt="Preview"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp,image/gif,image/svg+xml"
                      onChange={handleImageUpload}
                      disabled={uploading}
                      className="block w-full text-xs text-slate-600 file:mr-3 file:py-2 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100"
                    />
                    {uploading && (
                      <p className="text-xs text-sky-600 font-semibold">
                        Mengunggah foto...
                      </p>
                    )}
                    <input
                      type="text"
                      value={editing.image || ""}
                      onChange={(e) =>
                        setEditing({ ...editing, image: e.target.value })
                      }
                      placeholder="/images/products/..."
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs text-slate-700"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nama Produk *
                  </label>
                  <input
                    type="text"
                    required
                    value={editing.name || ""}
                    onChange={(e) =>
                      setEditing({ ...editing, name: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Merek
                  </label>
                  <input
                    type="text"
                    value={editing.brand || ""}
                    onChange={(e) =>
                      setEditing({ ...editing, brand: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Harga (Rp) *
                  </label>
                  <input
                    type="number"
                    required
                    min={0}
                    value={editing.price ?? 0}
                    onChange={(e) =>
                      setEditing({ ...editing, price: Number(e.target.value) })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Satuan
                  </label>
                  <input
                    type="text"
                    value={editing.unit || ""}
                    onChange={(e) =>
                      setEditing({ ...editing, unit: e.target.value })
                    }
                    placeholder="/ galon"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Urutan
                  </label>
                  <input
                    type="number"
                    value={editing.sort_order ?? 1}
                    onChange={(e) =>
                      setEditing({
                        ...editing,
                        sort_order: Number(e.target.value),
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Badge Label
                </label>
                <input
                  type="text"
                  value={editing.badge || ""}
                  onChange={(e) =>
                    setEditing({ ...editing, badge: e.target.value })
                  }
                  placeholder="Cleo • Ukuran Favorit"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Deskripsi
                </label>
                <textarea
                  rows={3}
                  value={editing.description || ""}
                  onChange={(e) =>
                    setEditing({ ...editing, description: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Keunggulan / Fitur (1 baris per poin)
                </label>
                <textarea
                  rows={4}
                  value={featuresText}
                  onChange={(e) => setFeaturesText(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm"
                />
              </div>

              <div className="flex flex-wrap gap-6 pt-1">
                <label className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={editing.in_stock !== false}
                    onChange={(e) =>
                      setEditing({ ...editing, in_stock: e.target.checked })
                    }
                    className="w-4 h-4 accent-sky-600"
                  />
                  Stok Tersedia (Ready)
                </label>

                <label className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={Boolean(editing.popular)}
                    onChange={(e) =>
                      setEditing({ ...editing, popular: e.target.checked })
                    }
                    className="w-4 h-4 accent-sky-600"
                  />
                  Tandai &quot;Paling Banyak Dipesan&quot;
                </label>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={saving || uploading}
                  className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 disabled:opacity-60 text-white font-bold text-sm cursor-pointer"
                >
                  {saving ? "Menyimpan..." : "Simpan Produk"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
