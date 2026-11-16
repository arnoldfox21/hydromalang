import type {
  Brand,
  CoverageAreaItem,
  FAQItem,
  Product,
  SiteData,
  SiteSettings,
} from "./types";

export function formatRupiah(amount: number): string {
  return `Rp ${amount.toLocaleString("id-ID")}`;
}

export const DEFAULT_SETTINGS: SiteSettings = {
  id: "default",
  wa_number: "62895702831600",
  shopee_url: "https://shopee.co.id/hydromalang",
  free_shipping_area: "Perumahan Graha Merjosari Asri",
  delivery_estimate: "10 - 20 Menit",
  operational_hours: "Setiap Hari: 07.00 - 21.00 WIB",
  promo_badge: "Air Mineral Populer Resmi • Gratis Ongkir Graha Merjosari Asri",
};

export const DEFAULT_BRANDS: Brand[] = [
  {
    id: "cleo",
    name: "Cleo Pure Water",
    status: "Tersedia Sekarang",
    available: true,
    description:
      "Air murni demineral bebas bromat dengan teknologi nano filter modern.",
    sort_order: 1,
  },
  {
    id: "club",
    name: "Club",
    status: "Segera Hadir",
    available: false,
    description: "Air mineral pegunungan pilihan keluarga Indonesia.",
    sort_order: 2,
  },
  {
    id: "aqua",
    name: "Aqua",
    status: "Segera Hadir",
    available: false,
    description: "Air mineral legendaris dari sumber mata air alami pilihan.",
    sort_order: 3,
  },
  {
    id: "le-minerale",
    name: "Le Minerale",
    status: "Segera Hadir",
    available: false,
    description:
      "Air mineral alami dengan kandungan mineral esensial seimbang.",
    sort_order: 4,
  },
];

export const DEFAULT_PRODUCTS: Product[] = [
  {
    id: "cleo-kecil",
    name: "Cleo Air Mineral Kecil",
    brand: "Cleo",
    price: 20000,
    unit: "/ paket",
    badge: "Cleo • Praktis & Higienis",
    description:
      "Air mineral murni Cleo kemasan kecil yang higienis dan praktis. Sangat pas untuk kebutuhan tamu, bekal harian, rapat, atau acara keluarga.",
    image: "/images/products/cleo-220ml.jpeg",
    popular: false,
    in_stock: true,
    features: [
      "Produk Cleo resmi 100% bersegel pabrik",
      "Air demineral murni bebas zat anorganik",
      "Kemasan ergonomis praktis disajikan",
      "Segel higienis anti-bocor standar pabrik",
      "Cocok untuk konsumsi tamu & keluarga",
    ],
    wa_text:
      "Halo Hydro Malang, saya warga Graha Merjosari Asri ingin pesan *Cleo Air Mineral Kecil* (Rp 20.000).\n\nMohon konfirmasi ketersediaan dan pengantaran ke rumah saya. Terima kasih!",
    sort_order: 1,
  },
  {
    id: "cleo-12-8l",
    name: "Cleo Air 12.8L",
    brand: "Cleo",
    price: 19000,
    unit: "/ galon",
    badge: "Cleo • Slim & Ringan",
    description:
      "Galon Cleo ukuran 12.8 Liter ukuran slim yang ringan dan hemat tempat. Solusi tepat agar mudah diangkat dan dipasang langsung ke dispenser.",
    image: "/images/products/cleo-12L.jpeg",
    popular: false,
    in_stock: true,
    features: [
      "Volume 12.8 Liter ramah dispenser",
      "Bobot lebih ringan, mudah diangkat",
      "Air murni Cleo berstandar nano filter",
      "Segel resmi ganda dari pabrik Cleo",
      "Hemat biaya untuk konsumsi harian",
    ],
    wa_text:
      "Halo Hydro Malang, saya warga Graha Merjosari Asri ingin pesan *Cleo Air 12.8L* (Rp 19.000).\n\nMohon konfirmasi ketersediaan dan pengantaran ke rumah saya. Terima kasih!",
    sort_order: 2,
  },
  {
    id: "cleo-15l",
    name: "Cleo Air 15L",
    brand: "Cleo",
    price: 20000,
    unit: "/ galon",
    badge: "Cleo • Ukuran Favorit",
    description:
      "Galon Cleo kapasitas 15 Liter dengan handle ergonomis yang sangat nyaman dibawa. Pilihan favorit keluarga untuk kesegaran murni sepanjang hari.",
    image: "/images/products/cleo-15L.jpeg",
    popular: true,
    in_stock: true,
    features: [
      "Kapasitas 15 Liter standar keluarga",
      "Desain galon dengan pegangan praktis",
      "Kemurnian terjaga dengan segel pabrik",
      "Bebas bromat & bebas mikroplastik",
      "Siap antar kilat tanpa ongkir",
    ],
    wa_text:
      "Halo Hydro Malang, saya warga Graha Merjosari Asri ingin pesan *Cleo Air 15L* (Rp 20.000).\n\nMohon konfirmasi ketersediaan dan pengantaran ke rumah saya. Terima kasih!",
    sort_order: 3,
  },
  {
    id: "cleo-19l-galon",
    name: "Cleo Air 19L + Galon",
    brand: "Cleo",
    price: 50000,
    unit: "/ paket baru",
    badge: "Cleo • Lengkap Dengan Galon",
    description:
      "Paket pembelian perdana Cleo 19 Liter lengkap beserta galon barunya yang 100% bebas BPA (Food Grade). Tidak perlu punya galon kosong sebelumnya.",
    image: "/images/products/cleo-galon-19L.png",
    popular: false,
    in_stock: true,
    features: [
      "Sudah termasuk 1 Galon Baru + Air 19L",
      "Galon resmi bebas BPA 100% Food Grade",
      "Cocok untuk pelanggan baru atau tambah stok",
      "Tutup bersegel asli langsung dari pabrik",
      "Langsung dibantu pasang ke dispenser",
    ],
    wa_text:
      "Halo Hydro Malang, saya warga Graha Merjosari Asri ingin pesan *Cleo Air 19L + Galon* (Rp 50.000).\n\nMohon konfirmasi ketersediaan dan pengantaran ke rumah saya. Terima kasih!",
    sort_order: 4,
  },
];

export const DEFAULT_COVERAGE_AREAS: CoverageAreaItem[] = [
  {
    id: "graha-merjosari-asri",
    name: "Perumahan Graha Merjosari Asri (Aktif)",
    note: "Pengantaran kurir langsung 100% GRATIS ONGKIR tanpa minimal order.",
    status: "TERSEDIA SEKARANG",
    is_primary: true,
    sub_areas: ["Cluster Melati", "Cluster Anggrek", "Cluster Lavender"],
    estimate: "10 - 20 Menit",
    badge: "100% GRATIS ONGKIR",
    sort_order: 1,
  },
  {
    id: "merjosari-lainnya",
    name: "Area Merjosari Lainnya",
    note: "Joyo Grand, Bukit Tidar, Dinoyo Asri, Joyo Utomo & sekitarnya",
    status: "Bisa via Shopee",
    is_primary: false,
    sub_areas: [],
    estimate: "",
    badge: "",
    sort_order: 2,
  },
  {
    id: "lowokwaru-tlogomas",
    name: "Lowokwaru & Tlogomas",
    note: "Dinoyo, Tlogomas, Jatimulyo, Tunggulwulung",
    status: "Bisa via Shopee",
    is_primary: false,
    sub_areas: [],
    estimate: "",
    badge: "",
    sort_order: 3,
  },
  {
    id: "suhat-klojen",
    name: "Suhat & Klojen",
    note: "Jl. Soekarno Hatta, Oro-oro Dowo, Kauman, Rampal",
    status: "Bisa via Shopee",
    is_primary: false,
    sub_areas: [],
    estimate: "",
    badge: "",
    sort_order: 4,
  },
  {
    id: "blimbing-sukun-malang",
    name: "Blimbing, Sukun & Seluruh Malang",
    note: "Sawojajar, Arjosari, Pandanwangi, Kebonsari",
    status: "Bisa via Shopee",
    is_primary: false,
    sub_areas: [],
    estimate: "",
    badge: "",
    sort_order: 5,
  },
];

export const DEFAULT_FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Bagaimana cara memesan air mineral di Hydro Malang?",
    answer:
      "Pemesanan sangat mudah! Bagi warga Perumahan Graha Merjosari Asri, Anda bisa langsung menekan tombol 'Pesan via WhatsApp' atau mengisi formulir pemesanan untuk pengantaran langsung bebas ongkir. Bagi Anda yang berada di luar Graha Merjosari, silakan pesan langsung melalui toko Shopee resmi kami.",
    shopee_link: true,
    sort_order: 1,
  },
  {
    id: "faq-2",
    question:
      "Wilayah mana saja yang dijangkau dan bagaimana ketentuan gratis ongkirnya?",
    answer:
      "Pengantaran kurir kilat langsung 100% GRATIS ONGKIR berlaku khusus untuk warga Perumahan Graha Merjosari Asri (Cluster Melati, Anggrek, dan Lavender). Untuk seluruh wilayah lainnya di Kota Malang dan sekitarnya, pemesanan dilayani via Shopee dengan opsi kurir Instant, Same Day, maupun Reguler.",
    shopee_link: true,
    sort_order: 2,
  },
  {
    id: "faq-3",
    question: "Merek air mineral apa saja yang dijual di Hydro Malang?",
    answer:
      "Kami menjual air minum mineral bermerek populer yang sudah terpercaya di Indonesia seperti Cleo, Club, dan lainnya. Saat ini, stok yang tersedia untuk dipesan adalah merek Cleo (tersedia kemasan galon 19L, 15L, 12.8L, dan kemasan kecil). Merek populer lainnya akan segera hadir bertahap.",
    shopee_link: false,
    sort_order: 3,
  },
  {
    id: "faq-4",
    question: "Apakah produk Cleo yang dijual dijamin asli dan bersegel resmi?",
    answer:
      "Pasti! Seluruh produk Cleo yang kami sediakan dijamin 100% original, langsung dari jalur distribusi resmi pabrik, bersegel utuh dengan tutup resmi dan hologram pengaman. Bebas dari risiko kontaminasi dan pemalsuan.",
    shopee_link: false,
    sort_order: 4,
  },
  {
    id: "faq-5",
    question: "Bagaimana jika saya belum memiliki galon sebelumnya?",
    answer:
      "Anda bisa memilih varian 'Cleo Air 19L + Galon' seharga Rp 50.000 yang sudah lengkap termasuk galon baru resmi 100% BPA-Free Food Grade plus isi air murni Cleo 19 Liter siap pakai di dispenser. Tersedia baik via pemesanan langsung maupun di Shopee.",
    shopee_link: false,
    sort_order: 5,
  },
  {
    id: "faq-6",
    question:
      "Berapa lama estimasi pengantaran pesanan sampai di rumah?",
    answer:
      "Untuk warga Perumahan Graha Merjosari Asri, kurir standby sehingga pesanan tiba rata-rata dalam 10 - 20 menit setelah konfirmasi WhatsApp, dan kurir siap membantu angkat ke dispenser. Untuk pemesanan via Shopee di luar area, estimasi pengiriman disesuaikan dengan layanan pilihan Anda (Shopee Instant tiba dalam hitungan jam).",
    shopee_link: false,
    sort_order: 6,
  },
];

export const DEFAULT_SITE_DATA: SiteData = {
  products: DEFAULT_PRODUCTS,
  brands: DEFAULT_BRANDS,
  settings: DEFAULT_SETTINGS,
  coverageAreas: DEFAULT_COVERAGE_AREAS,
  faqs: DEFAULT_FAQS,
};
