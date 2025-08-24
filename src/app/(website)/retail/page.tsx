import ContactSection from "@/components/Contact";
import { HeroImage } from "@/components/HeroImage";
import HighlightedLocations from "@/components/HighlightedLocations";
import Review from "@/components/Review";
import WwoRetail from "@/components/WwoRetail";
import React from "react";

export const metadata = {
  title: "Expert Retail Cleaning Services by CQD Professionals",
  description:
    "CQD provides exceptional retail cleaning services using eco-friendly products and precise techniques to ensure a spotless, welcoming, and hygienic shopping environment.",
};

const Page = () => {
  return (
    <div>
      <HeroImage
        // title="Professional Retail Cleaning"
        title="CQD The Top  Retail Cleaning Service Provider   In UK"
        description="Maintain a pristine and inviting retail space with our expert cleaning services tailored to enhance your customers' shopping experience."
        backgroundImage="/services/retail1.jpg"
        imageAlt="Retail Cleaning Services"
      />

      <WwoRetail />
      <Review />
      <HighlightedLocations />
      <ContactSection />
    </div>
  );
};

export default Page;
