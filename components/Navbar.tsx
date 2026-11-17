"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SHOPEE_URL = "https://shopee.co.id/hydromalang";

const navLinks = [
  { name: "Produk", href: "#produk" },
  { name: "Cara Pesan", href: "#wilayah" },
  { name: "Kualitas & Kalkulator", href: "#kualitas" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar({
  waNumber = "62895702831600",
  shopeeUrl = SHOPEE_URL,
}: {
  waNumber?: string;
  shopeeUrl?: string;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const waHref = `https://wa.me/${waNumber}?text=Halo%20Hydro%20Malang,%20saya%20warga%20Graha%20Merjosari%20Asri%20ingin%20pesan%20air%20mineral%20Cleo.`;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <Link href="#beranda" className="flex items-center gap-3 group shrink-0">
            <div className="relative h-10 w-26 sm:h-11 sm:w-28 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Logo Hydro Malang"
                fill
                sizes="(max-width: 640px) 104px, 112px"
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-sky-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href={shopeeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-slate-600 hover:text-orange-600 hover:bg-orange-50 font-semibold text-xs transition-colors"
            >
              <span>Shopee</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            <a
              href="#order-section"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors"
            >
              <span>Pesan Sekarang</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-700 hover:text-sky-600 hover:bg-slate-100 focus:outline-hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-5 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-sky-600 hover:bg-slate-50"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 mt-2 border-t border-slate-100 grid grid-cols-2 gap-2.5">
            <a
              href={shopeeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-orange-50 text-orange-700 border border-orange-200 font-bold text-xs"
            >
              <span>Shopee Store</span>
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-sky-600 text-white font-bold text-xs"
            >
              <span>Chat WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
