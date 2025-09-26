import ServicesHighlightedLocations from "@/components/services/ServicesHighlightedLocations";
import Slough from "@/components/services/Slough";
import React from "react";
import FAQ from "./_components/FAQ";

export const metadata = {
  title: "Cleaning Services in Slough | CQD Commercial Cleaning",
  description:
    " Looking for professional cleaning services in Slough? CQD Cleaning Service offers expert, reliable, and eco-friendly cleaning for offices, schools, gyms, restaurants, and more. Serving Slough and surrounding areas",
};

const MaidenheadPage = () => {
  return (
    <div>
      <Slough />
      <ServicesHighlightedLocations
        title="Professional Cleaning Services in Slough"
        description="At CQD Cleaning Service, we deliver expert cleaning solutions in Slough and the wider region.
"
      />
      <FAQ/>
    </div>
  );
};

export default MaidenheadPage;
