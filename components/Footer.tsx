import Image from "next/image";
import Link from "next/link";

const SHOPEE_URL = "https://shopee.co.id/hydromalang";

export default function Footer() {
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
                href={SHOPEE_URL}
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
                <a href="#keunggulan" className="hover:text-cyan-400 transition-colors">
                  Keunggulan
                </a>
              </li>
              <li>
                <a href="#produk" className="hover:text-cyan-400 transition-colors">
                  Produk &amp; Harga
                </a>
              </li>
              <li>
                <a href="#proses" className="hover:text-cyan-400 transition-colors">
                  Standar Mutu
                </a>
              </li>
              <li>
                <a href="#kalkulator" className="hover:text-cyan-400 transition-colors">
                  Kalkulator Kebutuhan
                </a>
              </li>
              <li>
                <a href="#wilayah" className="hover:text-cyan-400 transition-colors">
                  Wilayah Antar &amp; Shopee
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Daftar Produk (Ready: Cleo)
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#produk" className="hover:text-cyan-400 transition-colors">
                  Cleo Air Mineral Kecil — Rp 20.000
                </a>
              </li>
              <li>
                <a href="#produk" className="hover:text-cyan-400 transition-colors">
                  Cleo Air 12.8L — Rp 19.000
                </a>
              </li>
              <li>
                <a href="#produk" className="hover:text-cyan-400 transition-colors">
                  Cleo Air 15L — Rp 20.000
                </a>
              </li>
              <li>
                <a href="#produk" className="hover:text-cyan-400 transition-colors">
                  Cleo Air 19L + Galon — Rp 50.000
                </a>
              </li>
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
                  href={SHOPEE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 font-bold underline block"
                >
                  Toko Shopee: shopee.co.id/hydromalang ↗
                </a>
              </div>
              <div>
                <span className="text-slate-200 font-semibold block">WhatsApp CS:</span>
                0895-7028-31600
              </div>
              <div>
                <span className="text-slate-200 font-semibold block">Jam Operasional:</span>
                Setiap Hari: 07.00 - 20.00 WIB
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
