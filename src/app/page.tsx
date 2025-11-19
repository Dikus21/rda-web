import Hero from "@/components/fragments/homepage/hero-section";
import WhyExist from "@/components/fragments/homepage/why-exist-section";
import About from "@/components/fragments/homepage/about-section";
import Product from "@/components/fragments/homepage/product-section";
import WhyUs from "@/components/fragments/homepage/why-us-section";
import Contact from "@/components/elements/contact-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solusi Pengelolaan Sampah & Energi Terbarukan",
  description:
    "Solusi energi dan pengolahan limbah terintegrasi untuk pemerintah dan industri: dari pemilahan, pencacahan, pengeringan hingga RDF briket siap pakai.",
};
export default function Page() {
  // Server component by default; renders client sections inside (valid).
  return (
    <div className="min-h-screen bg-bg text-text">
      <Hero />
      <WhyExist />
      <About />
      <Product />
      <WhyUs />
      <Contact
        title="Dapatkan katalog & penawaran harga"
        subtitle="Hubungi kami via WhatsApp atau Email. Tim sales akan membantu
              menyesuaikan solusi sesuai kebutuhan Anda."
      />
    </div>
  );
}
