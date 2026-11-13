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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-sky-500 selection:text-white">
      {/* Header / Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Keunggulan & Kualitas Hydro Malang */}
        <QualityFeatures />

        {/* Katalog Produk & Harga */}
        <ProductSection />

        {/* Kalkulator Kebutuhan Air Minum Interaktif */}
        <WaterCalculator />

        {/* Proses Pemurnian & Profil Mineral */}
        <PurificationProcess />

        {/* Jangkauan Area Antar Malang Raya */}
        <CoverageArea />

        {/* Formulir Pemesanan Cepat WA */}
        <OrderForm />

        {/* FAQ - Pertanyaan Umum */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
