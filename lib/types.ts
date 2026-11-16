export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  unit: string;
  badge: string;
  description: string;
  image: string;
  popular: boolean;
  in_stock: boolean;
  features: string[];
  wa_text: string;
  sort_order: number;
}

export interface Brand {
  id: string;
  name: string;
  status: string;
  available: boolean;
  description: string;
  sort_order: number;
}

export interface SiteSettings {
  id: string;
  wa_number: string;
  shopee_url: string;
  free_shipping_area: string;
  delivery_estimate: string;
  operational_hours: string;
  promo_badge: string;
}

export interface CoverageAreaItem {
  id: string;
  name: string;
  note: string;
  status: string;
  is_primary: boolean;
  sub_areas: string[];
  estimate: string;
  badge: string;
  sort_order: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  shopee_link: boolean;
  sort_order: number;
}

export interface SiteData {
  products: Product[];
  brands: Brand[];
  settings: SiteSettings;
  coverageAreas: CoverageAreaItem[];
  faqs: FAQItem[];
}
