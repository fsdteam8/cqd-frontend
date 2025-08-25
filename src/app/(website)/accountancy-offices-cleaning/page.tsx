import ContactSection from "@/components/Contact";
import { HeroImage } from "@/components/HeroImage";
import HighlightedLocations from "@/components/HighlightedLocations";
import Review from "@/components/Review";
import WwoAccountancyOfficeCleaning from "@/components/WwoAccountancyOfficeCleaning";
import React from "react";

export const metadata = {
  title: "Accountancy Office Cleaning | Expert Office & Workspace Cleaning Services",
  description:
    "Keep your accountancy office clean, organized, and hygienic with our professional office cleaning services. We provide deep cleaning, sanitization, and maintenance for desks, workstations, restrooms, and common areas.",
};

const Page = () => {
  return (
    <div>
      <HeroImage
        title="Professional Accountancy Office Cleaning"
        description="Maintain a pristine, organized environment in your accountancy office with our specialized cleaning services designed for accuracy and professionalism."
        backgroundImage="/services/accountancyOfficesCleaning1.jpg"
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
