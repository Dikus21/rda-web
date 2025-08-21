import Hero from "@/components/fragments/Homepage/hero";
import WhyExist from "@/components/fragments/Homepage/why-exist";
import About from "@/components/fragments/Homepage/about";
import Product from "@/components/fragments/Homepage/product";
import WhyUs from "@/components/fragments/Homepage/why-us";
import Contact from "@/components/fragments/Homepage/contact";

export default function Page() {
  // Server component by default; renders client sections inside (valid).
  return (
    <div className="min-h-screen bg-bg text-text">
      <Hero />
      <WhyExist />
      <About />
      <Product />
      <WhyUs />
      <Contact />
    </div>
  );
}
