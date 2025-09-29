import Hero from "@/components/fragments/Homepage/hero-section";
import WhyExist from "@/components/fragments/Homepage/why-exist-section";
import About from "@/components/fragments/Homepage/about-section";
import Product from "@/components/fragments/Homepage/product-section";
import WhyUs from "@/components/fragments/Homepage/why-us-section";
import Contact from "@/components/elements/contact-section";

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
