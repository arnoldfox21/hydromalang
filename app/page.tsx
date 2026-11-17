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
import { OrderCartProvider } from "@/components/OrderCartContext";
import { getSiteData } from "@/lib/data";

export const revalidate = 60;

export default async function Home() {
  const { products, brands, settings, coverageAreas, faqs } =
    await getSiteData();

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 overflow-x-clip selection:bg-sky-500 selection:text-white">
      <Navbar waNumber={settings.wa_number} shopeeUrl={settings.shopee_url} />

      <OrderCartProvider products={products}>
        <main className="flex-1">
          <Hero
            promoBadge={settings.promo_badge}
            shopeeUrl={settings.shopee_url}
          />

          <ProductSection
            products={products}
            brands={brands}
            waNumber={settings.wa_number}
            shopeeUrl={settings.shopee_url}
          />

          <QualityFeatures />

          <section className="pb-16 sm:pb-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                <PurificationProcess />
                <WaterCalculator products={products} />
              </div>
            </div>
          </section>

          <CoverageArea
            coverageAreas={coverageAreas}
            shopeeUrl={settings.shopee_url}
          />

          <OrderForm
            products={products}
            waNumber={settings.wa_number}
            shopeeUrl={settings.shopee_url}
          />

          <FAQSection faqs={faqs} shopeeUrl={settings.shopee_url} />
        </main>
      </OrderCartProvider>

      <Footer products={products} settings={settings} />

      <FloatingWhatsApp waNumber={settings.wa_number} />
    </div>
  );
}
