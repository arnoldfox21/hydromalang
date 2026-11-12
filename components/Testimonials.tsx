export default function Testimonials() {
  const reviews = [
    {
      name: "Ibu Ratna Wulandari",
      role: "Warga Graha Merjosari Asri",
      location: "Blok B, Graha Merjosari Asri",
      avatarBg: "bg-pink-100 text-pink-600",
      initials: "RW",
      text: "Sangat terbantu ada Hydro Malang di perumahan kami! Pesan Cleo galon 15L lewat WA, 15 menit kemudian sudah sampai di depan pagar. Mas kurirnya ramah banget, langsung dibantu pasang ke dispenser di dapur.",
      rating: 5,
    },
    {
      name: "Bpk. Dimas Prasetyo",
      role: "Warga Graha Merjosari Asri",
      location: "Blok A, Graha Merjosari Asri",
      avatarBg: "bg-amber-100 text-amber-700",
      initials: "DP",
      text: "Keluarga kami memang cocoknya minum air Cleo karena rasanya ringan dan segar. Senang sekali sekarang bisa pesan rutin dengan gratis ongkir khusus perumahan kita. Galonnya selalu bersih dan segelnya original pabrik.",
      rating: 5,
    },
    {
      name: "Hendra Gunawan",
      role: "Warga Graha Merjosari Asri",
      location: "Blok C, Graha Merjosari Asri",
      avatarBg: "bg-sky-100 text-sky-700",
      initials: "HG",
      text: "Kemarin baru beli paket perdana Cleo 19L + Galon baru seharga Rp 50.000. Kondisi galon mulus kinclong dan tersegel rapat. Praktis tanpa perlu repot keluar perumahan bawa galon berat-berat pakai motor.",
      rating: 5,
    },
    {
      name: "Ibu Anisa Maulida",
      role: "Warga Graha Merjosari Asri",
      location: "Blok D, Graha Merjosari Asri",
      avatarBg: "bg-teal-100 text-teal-700",
      initials: "AM",
      text: "Respon admin WA cepat dan pengantaran tepat waktu. Biasanya saya pesan Cleo 12.8L yang slim biar enteng diangkat. Pelayanan mantap untuk warga Graha Merjosari Asri!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-sky-600 uppercase bg-sky-50 px-3 py-1.5 rounded-full border border-sky-100">
            Kata Warga
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Dipercaya Warga <span className="text-sky-600">Perumahan Graha Merjosari Asri</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Kepuasan tetangga dan warga perumahan adalah dedikasi utama kami dalam menghadirkan air minum mineral bermerek berkualitas setiap hari.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-50/70 border border-slate-200/90 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-500/10 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-amber-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 mt-6 pt-4 border-t border-slate-200/60">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm shrink-0 shadow-2xs ${rev.avatarBg}`}
                >
                  {rev.initials}
                </div>
                <div>
                  <div className="text-base font-bold text-slate-900">{rev.name}</div>
                  <div className="text-xs text-sky-600 font-semibold">{rev.role}</div>
                  <div className="text-[11px] text-slate-400">{rev.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
