import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QualityFeatures from "@/components/QualityFeatures";
import ProductSection from "@/components/ProductSection";
import WaterCalculator from "@/components/WaterCalculator";
import PurificationProcess from "@/components/PurificationProcess";
import CoverageArea from "@/components/CoverageArea";
import OrderForm from "@/components/OrderForm";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { getSiteData } from "@/lib/data";

export const revalidate = 60;

export default async function Home() {
  const { products, brands, settings, coverageAreas, faqs } =
    await getSiteData();

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 overflow-x-clip selection:bg-sky-500 selection:text-white">
      {/* Header / Navigation */}
      <Navbar waNumber={settings.wa_number} shopeeUrl={settings.shopee_url} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          promoBadge={settings.promo_badge}
          shopeeUrl={settings.shopee_url}
        />

        {/* Keunggulan & Kualitas Hydro Malang */}
        <QualityFeatures />

        {/* Katalog Produk & Harga */}
        <ProductSection
          products={products}
          brands={brands}
          waNumber={settings.wa_number}
          shopeeUrl={settings.shopee_url}
        />

        {/* Kalkulator Kebutuhan Air Minum Interaktif */}
        <WaterCalculator />

        {/* Proses Pemurnian & Profil Mineral */}
        <PurificationProcess />

        {/* Jangkauan Area Antar Malang Raya */}
        <CoverageArea
          coverageAreas={coverageAreas}
          shopeeUrl={settings.shopee_url}
        />

        {/* Formulir Pemesanan Cepat WA */}
        <OrderForm
          products={products}
          waNumber={settings.wa_number}
          shopeeUrl={settings.shopee_url}
        />

        {/* FAQ - Pertanyaan Umum */}
        <FAQSection faqs={faqs} shopeeUrl={settings.shopee_url} />
      </main>

      {/* Footer */}
      <Footer products={products} settings={settings} />

      {/* Persistent Floating WhatsApp Button */}
      <FloatingWhatsApp waNumber={settings.wa_number} />
    </div>
  );
}
