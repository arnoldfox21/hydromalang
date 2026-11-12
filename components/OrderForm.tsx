"use client";

import { useState } from "react";

const WA_NUMBER = "62895702831600";

export default function OrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState<"merjosari" | "other">("merjosari");
  const [address, setAddress] = useState("");
  const [product, setProduct] = useState("Air 15L - Rp 20.000");
  const [quantity, setQuantity] = useState(2);
  const [deliveryTime, setDeliveryTime] = useState("Hari Ini - Segera (Prioritas)");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isMerjosari = area === "merjosari";
    const message = isMerjosari
      ? `*PESANAN BARU - HYDRO MALANG*
----------------------------------
📍 *Wilayah Antar:* Merjosari (100% GRATIS ONGKIR)
👤 *Nama:* ${name || "-"}
📱 *No WA:* ${phone || "-"}
📦 *Produk:* ${product}
🔢 *Jumlah:* ${quantity}
🏠 *Alamat Lengkap:* ${address || "-"}
⏰ *Waktu Antar:* ${deliveryTime}
📝 *Catatan:* ${notes || "-"}
----------------------------------
Mohon konfirmasi ketersediaan & jadwal pengantaran. Terima kasih!`
      : `*KONSULTASI WILAYAH - HYDRO MALANG*
----------------------------------
Halo admin Hydro Malang, saya ingin menanyakan pengantaran di luar Merjosari:
👤 *Nama:* ${name || "-"}
📱 *No WA:* ${phone || "-"}
📍 *Lokasi Alamat:* ${address || "-"}
📦 *Rencana Pesan:* ${product} (${quantity} unit)
----------------------------------
Apakah bisa masuk daftar tunggu / info saat wilayah saya sudah tercover? Terima kasih!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WA_NUMBER}?text=${encoded}`, "_blank");
  };

  return (
    <section id="order-section" className="py-20 bg-linear-to-b from-sky-900 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Value Proposition & Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-block text-xs uppercase font-extrabold tracking-widest text-cyan-400 bg-sky-950/60 border border-cyan-800/60 px-3 py-1 rounded-full">
              Pemesanan Cepat 24 Jam
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Pesan Sekarang, Air Mineral Segar Segera Tiba di Rumah Anda
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Isi data pemesanan di samping untuk pengiriman instan. Tim customer service Hydro Malang akan langsung merespons dan menugaskan armada kurir terdekat dari lokasi Anda.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-800/60 border border-sky-700/50 flex items-center justify-center text-cyan-400 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Hotline Pemesanan / WhatsApp:</div>
                  <div className="text-sm font-bold text-white">0895-7028-31600</div>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-800/60 border border-sky-700/50 flex items-center justify-center text-cyan-400 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Depo Distribusi Utama:</div>
                  <div className="text-sm font-bold text-white">Jl. Raya Tlogomas No. 88, Lowokwaru, Kota Malang</div>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-800/60 border border-sky-700/50 flex items-center justify-center text-cyan-400 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Jam Operasional Pengiriman:</div>
                  <div className="text-sm font-bold text-white">Senin - Minggu (07.00 - 20.00 WIB)</div>
                </div>
              </div>
            </div>

            {/* Payment badge */}
            <div className="pt-4 border-t border-slate-800">
              <span className="text-xs text-slate-400 block mb-2">Metode Pembayaran Fleksibel:</span>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-300">
                <span className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700">Cash on Delivery (COD)</span>
                <span className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700">QRIS All Bank &amp; E-Wallet</span>
                <span className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700">Transfer BCA / Mandiri / BRI</span>
              </div>
            </div>
          </div>

          {/* Right Column: Order Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-sky-100">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Formulir Pemesanan Cepat
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Pesan sekarang tanpa ribet, terhubung langsung ke WhatsApp admin kami.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nama */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Bpk. Budi Santoso"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* No WhatsApp */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Nomor WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Contoh: 08123456789"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Pilihan Wilayah Antar (Khusus Merjosari) */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Pilih Wilayah Pengantaran *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={() => setArea("merjosari")}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        area === "merjosari"
                          ? "border-emerald-500 bg-emerald-50/70 ring-2 ring-emerald-500/20"
                          : "border-slate-200 bg-white hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-900">Kelurahan Merjosari</span>
                        <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-600 text-white">
                          GRATIS ONGKIR
                        </span>
                      </div>
                      <p className="text-[11px] text-emerald-700 mt-1 font-medium">
                        ✓ Aktif • Joyo Grand, Bukit Tidar, Kos &amp; Sekitarnya
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setArea("other")}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        area === "other"
                          ? "border-amber-500 bg-amber-50/70 ring-2 ring-amber-500/20"
                          : "border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-400"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-700">Luar Merjosari</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-200 text-amber-800">
                          Belum Tersedia
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1">
                        🔒 Dinonaktifkan sementara • Segera hadir
                      </p>
                    </button>
                  </div>

                  {/* Notice Alert based on selected area */}
                  {area === "merjosari" ? (
                    <div className="mt-2.5 p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-800 flex items-center gap-2">
                      <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Layanan kilat Merjosari aktif. Pengiriman 100% Bebas Ongkos Kirim!</span>
                    </div>
                  ) : (
                    <div className="mt-2.5 p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-[11px] text-amber-900 flex items-start gap-2">
                      <svg className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>
                        Mohon maaf, saat ini pengantaran baru melayani <strong>khusus wilayah Merjosari</strong>. Wilayah lain dinonaktifkan sementara. Anda tetap dapat mengirim pesan untuk masuk daftar tunggu (waiting list).
                      </span>
                    </div>
                  )}
                </div>

                {/* Pilihan Produk */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Pilihan Produk *
                  </label>
                  <select
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white transition-all font-medium text-slate-800"
                  >
                    <option value="Air Mineral Kecil - Rp 20.000">
                      Air Mineral Kecil - Rp 20.000
                    </option>
                    <option value="Air 12.8L - Rp 19.000">
                      Air 12.8L (Galon Slim) - Rp 19.000
                    </option>
                    <option value="Air 15L - Rp 20.000">
                      Air 15L (Galon Keluarga) - Rp 20.000
                    </option>
                    <option value="Air 19L+Galon - Rp 50.000">
                      Air 19L + Galon Baru (Komplit) - Rp 50.000
                    </option>
                  </select>
                </div>

                {/* Jumlah & Waktu */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Jumlah Pesanan */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Jumlah Pesanan (Galon / Dus)
                    </label>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold flex items-center justify-center transition-colors"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        max="200"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-full text-center py-2 rounded-xl border border-slate-200 text-sm font-bold focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                      />
                      <button
                        type="button"
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold flex items-center justify-center transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Waktu Pengantaran */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Waktu Pengantaran Diinginkan
                    </label>
                    <select
                      value={deliveryTime}
                      onChange={(e) => setDeliveryTime(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white transition-all"
                    >
                      <option value="Hari Ini - Segera (Prioritas)">Hari Ini - Segera</option>
                      <option value="Hari Ini - Pagi (08.00 - 11.00)">Pagi (08.00 - 11.00 WIB)</option>
                      <option value="Hari Ini - Siang (11.00 - 14.00)">Siang (11.00 - 14.00 WIB)</option>
                      <option value="Hari Ini - Sore (14.00 - 17.00)">Sore (14.00 - 17.00 WIB)</option>
                      <option value="Hari Ini - Malam (17.00 - 20.00)">Malam (17.00 - 20.00 WIB)</option>
                      <option value="Besok Pagi">Besok Pagi</option>
                    </select>
                  </div>
                </div>

                {/* Alamat Pengantaran */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Alamat Lengkap di Malang &amp; Patokan Lokasi *
                  </label>
                  <textarea
                    required
                    rows={2}
                    placeholder="Contoh: Jl. Soekarno Hatta No. 45, Blimbing, Malang (Depan Indomaret, pagar hitam)"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                {/* Catatan Tambahan */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Catatan Tambahan (Opsional)
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Tolong bawa uang kembalian Rp 50.000 / bantu angkat ke lantai 2"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className={`w-full py-4 px-6 rounded-xl font-bold text-base shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 text-white ${
                    area === "merjosari"
                      ? "bg-linear-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-emerald-500/25"
                      : "bg-linear-to-r from-amber-600 to-orange-500 hover:from-amber-500 hover:to-orange-400 shadow-amber-500/25"
                  }`}
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>
                    {area === "merjosari"
                      ? "Kirim Pesanan (Gratis Ongkir Merjosari)"
                      : "Chat WA (Konsultasi Area / Waiting List)"}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
