"use client";

import { useState } from "react";

const SHOPEE_URL = "https://shopee.co.id/hydromalang";

interface FAQItem {
  question: string;
  answer: string;
  shopeeLink?: boolean;
}

const faqs: FAQItem[] = [
  {
    question: "Bagaimana cara memesan air mineral di Hydro Malang?",
    answer:
      "Pemesanan sangat mudah! Bagi warga Perumahan Graha Merjosari Asri, Anda bisa langsung menekan tombol 'Pesan via WhatsApp' atau mengisi formulir pemesanan untuk pengantaran langsung bebas ongkir. Bagi Anda yang berada di luar Graha Merjosari, silakan pesan langsung melalui toko Shopee resmi kami.",
    shopeeLink: true,
  },
  {
    question: "Wilayah mana saja yang dijangkau dan bagaimana ketentuan gratis ongkirnya?",
    answer:
      "Pengantaran kurir kilat langsung 100% GRATIS ONGKIR berlaku khusus untuk warga Perumahan Graha Merjosari Asri (Blok A, B, C, D, E). Untuk seluruh wilayah lainnya di Kota Malang dan sekitarnya, pemesanan dilayani via Shopee dengan opsi kurir Instant, Same Day, maupun Reguler.",
    shopeeLink: true,
  },
  {
    question: "Merek air mineral apa saja yang dijual di Hydro Malang?",
    answer:
      "Kami menjual air minum mineral bermerek populer yang sudah terpercaya di Indonesia seperti Cleo, Club, dan lainnya. Saat ini, stok yang tersedia untuk dipesan adalah merek Cleo (tersedia kemasan galon 19L, 15L, 12.8L, dan kemasan kecil). Merek populer lainnya akan segera hadir bertahap.",
  },
  {
    question: "Apakah produk Cleo yang dijual dijamin asli dan bersegel resmi?",
    answer:
      "Pasti! Seluruh produk Cleo yang kami sediakan dijamin 100% original, langsung dari jalur distribusi resmi pabrik, bersegel utuh dengan tutup resmi dan hologram pengaman. Bebas dari risiko kontaminasi dan pemalsuan.",
  },
  {
    question: "Bagaimana jika saya belum memiliki galon sebelumnya?",
    answer:
      "Anda bisa memilih varian 'Cleo Air 19L + Galon' seharga Rp 50.000 yang sudah lengkap termasuk galon baru resmi 100% BPA-Free Food Grade plus isi air murni Cleo 19 Liter siap pakai di dispenser. Tersedia baik via pemesanan langsung maupun di Shopee.",
  },
  {
    question: "Berapa lama estimasi pengantaran pesanan sampai di rumah?",
    answer:
      "Untuk warga Perumahan Graha Merjosari Asri, kurir standby sehingga pesanan tiba rata-rata dalam 10 - 20 menit setelah konfirmasi WhatsApp, dan kurir siap membantu angkat ke dispenser. Untuk pemesanan via Shopee di luar area, estimasi pengiriman disesuaikan dengan layanan pilihan Anda (Shopee Instant tiba dalam hitungan jam).",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-sky-600 uppercase bg-sky-50 px-3 py-1.5 rounded-full border border-sky-100">
            Pusat Informasi
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Temukan jawaban lengkap seputar produk Cleo, pengantaran Graha Merjosari Asri, dan pemesanan via Shopee.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left bg-white hover:bg-sky-50/50 flex items-center justify-between gap-4 transition-colors cursor-pointer"
                >
                  <span className="font-bold text-slate-900 text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "bg-sky-600 text-white rotate-180" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <svg className="w-4 h-4 fill-none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 bg-white text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 animate-in fade-in-50 duration-200 space-y-3">
                    <p>{faq.answer}</p>
                    {faq.shopeeLink && (
                      <div className="pt-1">
                        <a
                          href={SHOPEE_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700 hover:underline bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-200"
                        >
                          <span>Kunjungi Toko Shopee Hydro Malang</span>
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-3xl bg-linear-to-r from-sky-50 via-cyan-50 to-orange-50 border border-sky-200 text-center space-y-3">
          <h4 className="font-bold text-slate-900 text-base">
            Masih memiliki pertanyaan seputar stok atau pengantaran?
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
            Customer service kami siap membantu dengan ramah setiap hari mulai pukul 07.00 hingga 20.00 WIB.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <a
              href="https://wa.me/62895702831600?text=Halo%20Admin%20Hydro%20Malang,%20saya%20ingin%20tanya%20seputar%20produk%20dan%20layanan."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-sky-600 text-white text-sm font-bold shadow-md hover:bg-sky-500 transition-all"
            >
              <span>Hubungi WhatsApp CS</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a
              href={SHOPEE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-orange-500 text-white text-sm font-bold shadow-md hover:bg-orange-600 transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19.78 7.37l-1.92-3.84C17.5 2.82 16.77 2.37 16 2.37H8c-.77 0-1.5.45-1.86 1.16L4.22 7.37c-.6.93-.34 2.16.59 2.76.3.2.66.3 1.02.3h.17l.8 9.57C6.88 20.89 7.6 21.63 8.5 21.63h7c.9 0 1.62-.74 1.7-1.63l.8-9.57h.17c.36 0 .72-.1 1.02-.3.93-.6 1.19-1.83.59-2.76z" />
              </svg>
              <span>Buka Toko Shopee</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
