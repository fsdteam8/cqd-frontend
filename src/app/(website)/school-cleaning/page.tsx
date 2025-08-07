import ContactSection from "@/components/Contact";
import { HeroImage } from "@/components/HeroImage";
import Review from "@/components/Review";
import SchoolCleaningFaq from "@/components/SchoolCleaningFaq";
import SchoolHighlightedLocations from "@/components/SchoolHighlightedLocations";
import WwoSchoolCleaning from "@/components/WwoSchoolCleaning";
import React from "react";

export const metadata = {
  title: "Expert School Cleaning Services by CQD Professionals",
  description:
    "CQD provides thorough school cleaning solutions using eco-friendly products and proven techniques to ensure a safe, clean, and healthy learning environment for students and staff.",
};

const Page = () => {
  return (
    <div>
      <HeroImage
        title="Professional School Cleaning"
        description="Maintain a clean, safe, and healthy learning environment with our expert school cleaning services designed for educational institutions of all sizes."
        backgroundImage="/services/schoolCleaning1.jpg"
        imageAlt="School Cleaning Services"
      />

      <WwoSchoolCleaning />
      <Review />
      <SchoolHighlightedLocations />
      <SchoolCleaningFaq/>
      <ContactSection />
    </div>
  );
};

export default Page;
