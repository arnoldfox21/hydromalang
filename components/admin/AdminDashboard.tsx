"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import type { SiteData } from "@/lib/types";
import BrandManager from "./BrandManager";
import ContentManager from "./ContentManager";
import ProductManager from "./ProductManager";
import SettingsManager from "./SettingsManager";

interface AdminDashboardProps {
  userEmail: string;
  isSeeded: boolean;
  dbError: string | null;
  initialData: SiteData;
}

type TabKey = "products" | "brands" | "settings" | "content";

export default function AdminDashboard({
  userEmail,
  isSeeded: initialSeeded,
  dbError,
  initialData,
}: AdminDashboardProps) {
  const router = useRouter();
  const [tab, setTab] = useState<TabKey>("products");
  const [data, setData] = useState<SiteData>(initialData);
  const [isSeeded, setIsSeeded] = useState(initialSeeded);
  const [seeding, setSeeding] = useState(false);
  const [toast, setToast] = useState<{ msg: string; isError?: boolean } | null>(
    null
  );

  const notify = (msg: string, isError = false) => {
    setToast({ msg, isError });
    setTimeout(() => setToast(null), 4000);
  };

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  };

  const handleSeed = async () => {
    setSeeding(true);
    try {
      const res = await fetch("/api/admin/seed", { method: "POST" });
      const json = await res.json();
      if (!res.ok) {
        notify(json.error || "Gagal mengisi data awal.", true);
        return;
      }
      setIsSeeded(true);
      notify("Data awal berhasil disimpan ke Supabase!");
      router.refresh();
    } catch {
      notify("Gagal menghubungi server.", true);
    } finally {
      setSeeding(false);
    }
  };

  const tabs: { key: TabKey; label: string }[] = [
    { key: "products", label: `Produk (${data.products.length})` },
    { key: "brands", label: `Merek (${data.brands.length})` },
    { key: "settings", label: "Pengaturan Toko" },
    { key: "content", label: "Wilayah & FAQ" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-sky-600 text-white font-black text-sm flex items-center justify-center">
              HM
            </div>
            <div>
              <h1 className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight">
                Admin Hydro Malang
              </h1>
              <p className="text-[11px] text-slate-500 truncate max-w-[160px] sm:max-w-xs">
                {userEmail}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/"
              target="_blank"
              className="px-3 py-1.5 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-700 font-bold text-xs"
            >
              Lihat Web ↗
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Toast notification */}
        {toast && (
          <div
            className={`fixed bottom-5 right-5 z-50 px-4 py-3 rounded-xl shadow-lg font-semibold text-sm text-white ${
              toast.isError ? "bg-rose-600" : "bg-emerald-600"
            }`}
          >
            {toast.msg}
          </div>
        )}

        {/* DB Error Alert */}
        {dbError && (
          <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-sm">
            <strong>Database belum siap:</strong> {dbError}. Jalankan{" "}
            <code className="font-mono bg-rose-100 px-1.5 py-0.5 rounded">
              supabase/schema.sql
            </code>{" "}
            di Supabase SQL Editor terlebih dahulu.
          </div>
        )}

        {/* Seed Banner */}
        {!dbError && !isSeeded && (
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="text-sm text-amber-900">
              <strong>Database masih kosong.</strong> Klik tombol di samping untuk
              mengisi data produk, merek, wilayah, dan FAQ awal secara otomatis.
            </div>
            <button
              type="button"
              onClick={handleSeed}
              disabled={seeding}
              className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shrink-0 cursor-pointer"
            >
              {seeding ? "Mengisi Data..." : "Isi Data Awal (Seed)"}
            </button>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex gap-2 overflow-x-auto pb-1">
          {tabs.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setTab(t.key)}
              className={`px-4 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap transition-colors cursor-pointer ${
                tab === t.key
                  ? "bg-sky-600 text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        {tab === "products" && (
          <ProductManager
            products={data.products}
            onChange={(products) => setData({ ...data, products })}
            onNotify={notify}
          />
        )}

        {tab === "brands" && (
          <BrandManager
            brands={data.brands}
            onChange={(brands) => setData({ ...data, brands })}
            onNotify={notify}
          />
        )}

        {tab === "settings" && (
          <SettingsManager
            settings={data.settings}
            onChange={(settings) => setData({ ...data, settings })}
            onNotify={notify}
          />
        )}

        {tab === "content" && (
          <ContentManager
            coverageAreas={data.coverageAreas}
            faqs={data.faqs}
            onCoverageChange={(coverageAreas) =>
              setData({ ...data, coverageAreas })
            }
            onFaqsChange={(faqs) => setData({ ...data, faqs })}
            onNotify={notify}
          />
        )}
      </main>
    </div>
  );
}
