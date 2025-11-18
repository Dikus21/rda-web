"use client";

import HeroSection from "@/components/fragments/about/hero-section";
import LocationSection from "@/components/fragments/about/location-section";
import StorySection from "@/components/fragments/about/story-section";
import ValuesSection from "@/components/fragments/about/values-section";
import VisionMisionSection from "@/components/fragments/about/vision-mision-section";
import React from "react";

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
