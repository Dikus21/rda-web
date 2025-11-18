import React from "react";
import HeroSection from "@/components/fragments/about/hero-section";
import VisionMisionSection from "@/components/fragments/about/vision-mision-section";
import StorySection from "@/components/fragments/about/story-section";
import ValuesSection from "@/components/fragments/about/values-section";
import LocationSection from "@/components/fragments/about/location-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang PT Rimbun Daur Alam",
  description:
    "PT Rimbun Daur Alam adalah perusahaan yang berfokus pada teknologi pengolahan limbah dan energi terbarukan untuk mendukung masa depan yang bersih dan berkelanjutan.",
};

const AboutUsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg text-text">
      <HeroSection />
      <VisionMisionSection />
      <StorySection />
      <ValuesSection />
      <LocationSection />
    </div>
  );
};

export default AboutUsPage;
