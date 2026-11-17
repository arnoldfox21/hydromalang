import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#0284c7",
};

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
    icon: [
      { url: "/images/favicon/favicon.ico", sizes: "any" },
      { url: "/images/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/images/favicon/favicon.ico",
    apple: [
      { url: "/images/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/images/favicon/site.webmanifest",
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
    <html lang="id" className={`scroll-smooth ${plusJakartaSans.variable}`}>
      <body className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-sky-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
