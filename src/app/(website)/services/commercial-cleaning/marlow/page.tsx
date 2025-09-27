
import Marlow from "@/components/services/Marlow";
import ServicesHighlightedLocations from "@/components/services/ServicesHighlightedLocations";
import React from "react";
import FAQ from "./_components/FAQ";

export const metadata = {
  title: " Commercial Cleaning Services in Marlow | CQD Cleaning Service",
  description:
    "Looking for professional commercial cleaning services in Marlow? CQD Cleaning Service provides reliable, eco-friendly cleaning for offices, schools, gyms, restaurants, and more.",
};

const MaidenheadPage = () => {
  return (
    <div>
      <Marlow />
      <ServicesHighlightedLocations
        title="Expert Cleaning Services in Marlow & Surrounding Areas"
        description="At CQD Cleaning Service, we provide expert cleaning solutions in Marlow and across nearby towns.
We serve businesses in:

"
      />
      <FAQ/>
    </div>
  );
};

export default MaidenheadPage;
