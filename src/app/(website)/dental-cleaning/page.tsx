import ContactSection from "@/components/Contact";
import { HeroImage } from "@/components/HeroImage";
import HighlightedLocations from "@/components/HighlightedLocations";
import Review from "@/components/Review";
import WwoDentalCleaning from "@/components/WwoDentalCleaning";
import React from "react";

export const metadata = {
  title: "Dental Clinic Cleaning | Professional Hygiene & Sanitation Services",
  description:
    "Ensure a safe and sterile environment for patients and staff with our expert Dental Clinic Cleaning services. We provide thorough, hygienic, and compliant cleaning solutions tailored for dental practices. Maintaining a clean and sterile environment is crucial for any dental clinic. Proper hygiene not only protects patients from infections but also ensures a safe and healthy workspace for staff. Professional dental clinic cleaning goes beyond routine tidying—it involves thorough disinfection of treatment areas, waiting rooms, and high-touch surfaces, creating a hygienic atmosphere that promotes patient safety, builds trust, and enhances the overall professionalism of the clinic.",
};

const Page = () => {
  return (
    <div>
      <HeroImage
        title="Professional Dental Clinic Cleaning"
        description="Maintain a sterile, safe, and hygienic dental environment with our expert cleaning services tailored for dental clinics and healthcare facilities."
        backgroundImage="/services/DentalCleaning1.jpg"
        imageAlt="Dental Clinic Cleaning Services"
      />

      <WwoDentalCleaning />
      <Review />
      <HighlightedLocations />
      <ContactSection />
    </div>
  );
};

export default Page;
