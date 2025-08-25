import ContactSection from "@/components/Contact";
import { HeroImage } from "@/components/HeroImage";
import HighlightedLocations from "@/components/HighlightedLocations";
import Review from "@/components/Review";
import WwoCommercialCleaning from "@/components/WwoCommercialCleaning";
import React from "react";

export const metadata = {
  title: "Professional Commercial Cleaning Services | Reliable Office & Business Cleaning",
  description:
    "Expert professional commercial cleaning services tailored for offices, retail stores, and business facilities. Ensure a spotless, safe, and welcoming environment with our reliable cleaning solutions.",
};

const Page = () => {
  return (
    <div>
      <HeroImage
        title="Professional Commercial Cleaning"
        description="Keep your commercial space pristine and professional with our expert cleaning services designed for all types of businesses."
        backgroundImage="/services/commercialCleaning1.jpg"
        imageAlt="Commercial Cleaning Services"
      />

      <WwoCommercialCleaning />
      <Review />
      <HighlightedLocations />
      <ContactSection />
    </div>
  );
};

export default Page;
