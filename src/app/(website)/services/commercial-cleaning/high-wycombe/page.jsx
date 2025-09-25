import ContactSection from "@/components/Contact";
import { HeroImage } from "@/components/HeroImage";
import HighlightedLocations from "@/components/HighlightedLocations";
import Review from "@/components/Review";
import WwoAccountancyOfficeCleaning from "@/components/WwoAccountancyOfficeCleaning";
import React from "react";

export const metadata = {
  title: " Commercial Cleaning Services in High Wycombe | CQD Cleaning ",
  description:
    "Looking for commercial cleaning services in High Wycombe? CQD Cleaning Service offers reliable, professional, and eco-friendly cleaning service.",
};

const Page = () => {
  return (
    <div>
      <HeroImage
        title="Professional Commercial Cleaning Services in High Wycombe"
        description="Searching for trusted commercial cleaning services in High Wycombe? At CQD Cleaning Service, we specialize in delivering professional and tailored cleaning solutions for businesses of all sizes. From routine office cleaning to deep cleaning, carpet care, and specialist sanitization, our team ensures your workplace is spotless, hygienic, and welcoming. Serving High Wycombe and the surrounding areas, we focus on delivering outstanding quality, efficiency, and customer satisfaction. Get in touch today to see how our commercial cleaning services in High Wycombe can transform your business environment."
        backgroundImage="/services/high-wycombe2.jpg"
        imageAlt="Accountancy Office Cleaning Services"
      />

      <WwoAccountancyOfficeCleaning />
      <Review />
      <HighlightedLocations />
      <ContactSection />
    </div>
  );
};

export default Page;
