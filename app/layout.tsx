import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hydromalang.com"),
  title: "Hydro Malang - Air Minum Mineral Populer & Antar Cepat Graha Merjosari Asri",
  description:
    "Hydro Malang menyediakan air minum mineral bermerek populer seperti Cleo, Club, dan lainnya. Siap antar kilat 100% gratis ongkir khusus Perumahan Graha Merjosari Asri, Malang.",
  keywords: [
    "Hydro Malang",
    "air mineral Cleo Malang",
    "pesan galon Graha Merjosari Asri",
    "air mineral Merjosari Malang",
    "galon Cleo Malang",
    "gratis ongkir Graha Merjosari Asri",
  ],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Hydro Malang - Air Mineral Alami Pegunungan",
    description:
      "Nikmati kemurnian sejati dari alam pegunungan Malang. Diproses higienis dengan teknologi modern untuk kesegaran keluarga dan perkantoran Anda.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-cyan-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
