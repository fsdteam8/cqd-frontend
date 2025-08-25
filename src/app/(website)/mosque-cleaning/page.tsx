import ContactSection from "@/components/Contact";
import { HeroImage } from "@/components/HeroImage";
import HighlightedLocations from "@/components/HighlightedLocations";
import Review from "@/components/Review";
import WwoMosqueCleaning from "@/components/WwoMosqueCleaning";
import React from "react";

export const metadata = {
  title: "Specialized Mosque Cleaning Services by CQD Professionals",
  description:
    "CQD offers respectful and thorough mosque cleaning using safe, eco-friendly products to ensure a clean, serene, and spiritually uplifting environment for worshippers.",
};

const Page = () => {
  return (
    <div>
      <HeroImage
        title="Professional Mosque Cleaning"
        description="Ensure a clean, peaceful, and respectful worship environment with our specialized mosque cleaning services for prayer areas, ablution spaces, and more."
        backgroundImage="/services/mosqueCleaning1.jpg"
        imageAlt="Mosque Cleaning Services"
      />

      <WwoMosqueCleaning />
      <Review />
      <HighlightedLocations />
      <ContactSection />
    </div>
  );
};

export default Page;
