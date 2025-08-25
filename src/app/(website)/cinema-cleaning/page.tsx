import ContactSection from "@/components/Contact";
import { HeroImage } from "@/components/HeroImage";
import HighlightedLocations from "@/components/HighlightedLocations";
import Review from "@/components/Review";
import WwoCinemaCleaning from "@/components/WwoCinemaCleaning";
import React from "react";

export const metadata = {
  title: "Cinema Cleaning Services | Professional Theatre & Auditorium Cleaning",
  description:
    " Keep your cinema spotless and welcoming with our expert cinema cleaning services. We provide deep cleaning of auditoriums, lobbies, restrooms, and concession areas to ensure hygiene.",
};

const Page = () => {
  return (
    <div>
      <HeroImage
        title="Professional Cinema Cleaning"
        description="Deliver a spotless and comfortable cinema environment with our specialized cleaning services designed for auditoriums, lobbies, and common areas."
        backgroundImage="/services/cinemaCleaning1.jpg"
        imageAlt="Cinema Cleaning Services"
      />

      <WwoCinemaCleaning />
      <Review />
      <HighlightedLocations />
      <ContactSection />
    </div>
  );
};

export default Page;
