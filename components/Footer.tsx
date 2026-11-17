import Image from "next/image";
import Link from "next/link";
import {
  DEFAULT_PRODUCTS,
  DEFAULT_SETTINGS,
  formatRupiah,
} from "@/lib/defaults";
import type { Product, SiteSettings } from "@/lib/types";

export default function Footer({
  products = DEFAULT_PRODUCTS,
  settings = DEFAULT_SETTINGS,
}: {
  products?: Product[];
  settings?: SiteSettings;
}) {
  const shopeeUrl = settings.shopee_url;
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="#beranda" className="inline-block">
              <div className="relative h-14 w-36 brightness-110">
                <Image
                  src="/logo.png"
                  alt="Logo Hydro Malang"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Hydro Malang menyediakan air minum mineral bermerek populer dan terpercaya seperti Cleo, Club, dan lainnya. Khusus Perumahan Graha Merjosari Asri gratis ongkir kurir kilat, serta melayani pemesanan ke seluruh wilayah Malang lewat toko online Shopee resmi kami.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-semibold text-slate-300">
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">Brand Resmi Cleo</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">100% Bersegel Pabrik</span>
              <a
                href={shopeeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-md bg-orange-950/70 border border-orange-700/60 text-orange-400 hover:text-orange-300 transition-colors"
              >
                Shopee Official Store ↗
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#beranda" className="hover:text-cyan-400 transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#produk" className="hover:text-cyan-400 transition-colors">
                  Produk &amp; Harga
                </a>
              </li>
              <li>
                <a href="#kualitas" className="hover:text-cyan-400 transition-colors">
                  Kualitas &amp; Kalkulator
                </a>
              </li>
              <li>
                <a href="#wilayah" className="hover:text-cyan-400 transition-colors">
                  Cara Pesan &amp; Wilayah
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Daftar Produk
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {products.map((prod) => (
                <li key={prod.id}>
                  <a href="#produk" className="hover:text-cyan-400 transition-colors">
                    {prod.name} — {formatRupiah(prod.price)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Layanan &amp; Pemesanan
            </h4>
            <div className="space-y-2 text-xs leading-relaxed">
              <div>
                <span className="text-slate-200 font-semibold block">Kurir Kilat (100% Gratis Ongkir):</span>
                <span className="text-emerald-400 font-bold">Khusus Perumahan Graha Merjosari Asri</span>
              </div>
              <div>
                <span className="text-slate-200 font-semibold block">Pemesanan Luar Graha Merjosari:</span>
                <a
                  href={shopeeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 font-bold underline block"
                >
                  Toko Shopee Official ↗
                </a>
              </div>
              <div>
                <span className="text-slate-200 font-semibold block">WhatsApp CS:</span>
                +{settings.wa_number}
              </div>
              <div>
                <span className="text-slate-200 font-semibold block">Jam Operasional:</span>
                {settings.operational_hours}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Hydro Malang. Hak Cipta Dilindungi Undang-Undang.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-slate-400">Penyedia Air Minum Mineral Populer Terpercaya</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
