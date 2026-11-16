"use client";

import { useState } from "react";
import type { SiteSettings } from "@/lib/types";

interface SettingsManagerProps {
  settings: SiteSettings;
  onChange: (settings: SiteSettings) => void;
  onNotify: (msg: string, isError?: boolean) => void;
}

export default function SettingsManager({
  settings,
  onChange,
  onNotify,
}: SettingsManagerProps) {
  const [form, setForm] = useState<SiteSettings>(settings);
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch("/api/admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        onNotify(data.error || "Gagal menyimpan pengaturan.", true);
        return;
      }
      onChange(data.settings);
      onNotify("Pengaturan toko berhasil disimpan.");
    } catch {
      onNotify("Gagal menghubungi server.", true);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h2 className="text-xl font-bold text-slate-900">Pengaturan Toko</h2>
        <p className="text-sm text-slate-500">
          Perbarui nomor WhatsApp, link Shopee, dan informasi layanan di seluruh website.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-xs"
      >
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Nomor WhatsApp (format 628xxx tanpa + atau spasi)
          </label>
          <input
            type="text"
            required
            value={form.wa_number}
            onChange={(e) => setForm({ ...form, wa_number: e.target.value })}
            placeholder="62895702831600"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Link Toko Shopee
          </label>
          <input
            type="url"
            required
            value={form.shopee_url}
            onChange={(e) => setForm({ ...form, shopee_url: e.target.value })}
            placeholder="https://shopee.co.id/hydromalang"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Area Gratis Ongkir Utama
            </label>
            <input
              type="text"
              value={form.free_shipping_area}
              onChange={(e) =>
                setForm({ ...form, free_shipping_area: e.target.value })
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Estimasi Pengantaran
            </label>
            <input
              type="text"
              value={form.delivery_estimate}
              onChange={(e) =>
                setForm({ ...form, delivery_estimate: e.target.value })
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Jam Operasional
          </label>
          <input
            type="text"
            value={form.operational_hours}
            onChange={(e) =>
              setForm({ ...form, operational_hours: e.target.value })
            }
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Teks Badge Promo (Hero)
          </label>
          <input
            type="text"
            value={form.promo_badge}
            onChange={(e) => setForm({ ...form, promo_badge: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm"
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={saving}
            className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 disabled:opacity-60 text-white font-bold text-sm cursor-pointer"
          >
            {saving ? "Menyimpan..." : "Simpan Pengaturan"}
          </button>
        </div>
      </form>
    </div>
  );
}
