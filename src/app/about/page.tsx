"use client";

import React from "react";
import HeroSection from "@/components/fragments/About/hero-section";
import VisionMisionSection from "@/components/fragments/About/vision-mision-section";
import StorySection from "@/components/fragments/About/story-section";
import ValuesSection from "@/components/fragments/About/values-section";
import LocationSection from "@/components/fragments/About/location-section";
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
