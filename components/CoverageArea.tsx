import { DEFAULT_COVERAGE_AREAS } from "@/lib/defaults";
import type { CoverageAreaItem } from "@/lib/types";

export default function CoverageArea({
  coverageAreas = DEFAULT_COVERAGE_AREAS,
  shopeeUrl = "https://shopee.co.id/hydromalang",
}: {
  coverageAreas?: CoverageAreaItem[];
  shopeeUrl?: string;
}) {
  const primary =
    coverageAreas.find((a) => a.is_primary) || DEFAULT_COVERAGE_AREAS[0];
  const activeRegion = {
    name: primary.name,
    subAreas:
      primary.sub_areas && primary.sub_areas.length > 0
        ? primary.sub_areas
        : ["Cluster Melati", "Cluster Anggrek", "Cluster Lavender"],
    estimate: primary.estimate || "10 - 20 Menit",
    badge: primary.badge || "100% GRATIS ONGKIR",
  };

  const shopeeRegions = coverageAreas.filter((a) => !a.is_primary);

  return (
    <section id="wilayah" className="py-16 sm:py-20 bg-slate-50/70 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-bold tracking-wider text-sky-600 uppercase">
            Jangkauan &amp; Cara Pesan
          </span>
          <h2 className="mt-1.5 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Dua Jalur Pemesanan Mudah
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Kami memisahkan jalur pengiriman agar warga perumahan mendapat pengantaran tercepat, sementara area Malang lainnya tetap terlayani via Shopee.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 1: Graha Merjosari Asri */}
          <div className="rounded-2xl bg-emerald-600 text-white p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-100">
                  Jalur 1 • Kurir Langsung
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white text-emerald-800 text-[11px] font-extrabold">
                  {activeRegion.badge}
                </span>
              </div>

              <h3 className="text-2xl font-extrabold">{activeRegion.name}</h3>
              <p className="text-sm text-emerald-50 leading-relaxed">
                Khusus warga perumahan Graha Merjosari Asri. Tidak ada minimum order — kurir siap antar dalam{" "}
                <strong className="text-white">{activeRegion.estimate}</strong> dan bantu pasang ke dispenser.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                {activeRegion.subAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs font-medium bg-white/15 px-3 py-2 rounded-xl"
                  >
                    <svg className="w-4 h-4 text-emerald-200 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/20 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-emerald-100">
                Bayar di tempat (COD) / QRIS
              </span>
              <a
                href="#order-section"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white text-emerald-800 hover:bg-emerald-50 font-bold text-xs transition-colors"
              >
                <span>Pesan via WhatsApp</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 2: Luar Area via Shopee */}
          <div className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                  Jalur 2 • Marketplace
                </span>
                <span className="px-2.5 py-1 rounded-full bg-orange-50 text-orange-700 border border-orange-200 text-[11px] font-bold">
                  Shopee Official Store
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900">
                Luar Area / Malang Raya
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Berada di luar Graha Merjosari Asri? Seluruh produk Cleo tersedia di Toko Shopee kami dengan pilihan pengiriman instan maupun reguler.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {shopeeRegions.map((reg, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200/70"
                  >
                    <div className="text-xs font-bold text-slate-800">{reg.name}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{reg.note}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-slate-500">
                ShopeePay, SPayLater, Transfer
              </span>
              <a
                href={shopeeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs transition-colors"
              >
                <span>Buka Toko Shopee</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
