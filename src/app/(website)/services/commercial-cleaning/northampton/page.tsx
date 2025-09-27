
import Northampton from "@/components/services/Northampton";
import ServicesHighlightedLocations from "@/components/services/ServicesHighlightedLocations";
import React from "react";
import FAQ from "./_components/FAQ";

export const metadata = {
  title: "Commercial Cleaning Services in Northampton | CQD Cleaning",
  description:
    " Looking for professional commercial cleaning services in Northampton? CQD Cleaning Service provides reliable cleaning for offices, schools, gyms, and more.",
};

const MaidenheadPage = () => {
  return (
    <div>
      <Northampton />
      <ServicesHighlightedLocations
        title="Expert Cleaning Services in Northampton & Surrounding Areas"
        description="At CQD Cleaning Service, we deliver expert commercial cleaning solutions in Northampton and across nearby towns. We serve businesses in:
"
      />
      <FAQ/>
    </div>
  );
};

export default MaidenheadPage;
