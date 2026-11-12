import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hydromalang.com"),
  title: "Hydro Malang - Kesegaran Murni Pegunungan untuk Hidup Sehat",
  description:
    "Hydro Malang menghadirkan air mineral murni berkualitas tinggi dari mata air alami pegunungan Malang. Higienis, kaya mineral esensial, dan siap antar cepat se-Malang Raya.",
  keywords: [
    "Hydro Malang",
    "air mineral Malang",
    "pesan galon Malang",
    "air minum pegunungan Malang",
    "air mineral higienis Malang",
    "distributor air minum Malang Raya",
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
