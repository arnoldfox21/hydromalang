"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Bagaimana cara memesan air mineral Hydro Malang?",
    answer:
      "Pemesanan sangat mudah! Anda cukup menekan tombol 'Pesan via WhatsApp' atau mengisi Formulir Pemesanan Cepat di website ini. Tim admin kami akan segera mengonfirmasi pesanan dan menugaskan armada kurir terdekat ke alamat Anda.",
  },
  {
    question: "Wilayah mana saja yang saat ini dijangkau dan apakah ada gratis ongkir?",
    answer:
      "Saat ini Hydro Malang memfokuskan layanan pesan antar 100% GRATIS ONGKIR khusus untuk wilayah Kelurahan Merjosari (termasuk perumahan Joyo Grand, Joyo Suryo, Joyo Mulyo, Joyo Utomo, Joyo Tambaksari, Villa Bukit Tidar, Dinoyo Asri, dan seluruh area kos di Merjosari). Wilayah di luar Merjosari dinonaktifkan sementara dan akan segera hadir bertahap.",
  },
  {
    question: "Bagaimana standar kebersihan dan sterilisasi galon Hydro Malang?",
    answer:
      "Setiap galon yang masuk melewati 4 tahap pencucian otomatis: pencucian sikat pembersih kerak, pembilasan air bertekanan tinggi ozon (O3), sterilisasi sinar UV, dan pengisian di dalam ruangan bertekanan positif bebas debu. Kami menyegel setiap galon dengan tutup food-grade dan segel hologram resmi.",
  },
  {
    question: "Bagaimana jika saya belum memiliki galon Hydro Malang sebelumnya?",
    answer:
      "Anda bisa memilih varian 'Air 19L+Galon' seharga Rp 50.000 yang sudah lengkap termasuk galon baru 100% BPA Free Food-Grade plus isi air mineral Hydro Malang 19 Liter. Untuk pemesanan berikutnya, Anda tinggal memesan isi ulang sesuai ukuran galon (Air 15L Rp 20.000 atau Air 12.8L Rp 19.000).",
  },
  {
    question: "Apakah melayani kerja sama pengadaan rutin kantor, sekolah, atau kafe?",
    answer:
      "Tentu saja! Kami memiliki divisi B2B yang melayani ratusan kantor, coworking space, kafe, dan hotel di Malang Raya. Kami menyediakan fasilitas jadwal pengantaran otomatis mingguan, faktur/invoice resmi bertempo, dan fasilitas pinjam unit dispenser untuk komitmen kuota tertentu.",
  },
  {
    question: "Berapa lama estimasi pengiriman pesanan sampai di lokasi Merjosari?",
    answer:
      "Untuk wilayah Merjosari, kurir kami standby di titik strategis sehingga pesanan tiba super cepat rata-rata 15 - 30 menit setelah konfirmasi pesanan di WhatsApp. Kurir juga siap membantu mengangkat galon sampai ke dalam kamar kos atau lantai 2.",
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
            Temukan jawaban lengkap seputar produk, pemesanan, dan layanan pengantaran Hydro Malang.
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
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 bg-white text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 animate-in fade-in-50 duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-3xl bg-linear-to-r from-sky-50 to-cyan-50 border border-sky-200 text-center space-y-3">
          <h4 className="font-bold text-slate-900 text-base">
            Masih memiliki pertanyaan lain yang belum terjawab?
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
            Customer service kami siap membantu Anda dengan ramah setiap hari dari pukul 07.00 hingga 20.00 WIB.
          </p>
          <a
            href="https://wa.me/62895702831600?text=Halo%20Admin%20Hydro%20Malang,%20saya%20ingin%20bertanya%20seputar%20layanan%20dan%20produk."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-sky-600 text-white text-sm font-bold shadow-md hover:bg-sky-500 transition-all"
          >
            <span>Hubungi Customer Service Kami</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
