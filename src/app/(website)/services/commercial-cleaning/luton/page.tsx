import Luton from "@/components/services/Luton";
import ServicesHighlightedLocations from "@/components/services/ServicesHighlightedLocations";
import React from "react";
import FAQ from "./_components/FAQ";

export const metadata = {
  title: "Commercial Cleaning Services in Luton | CQD Cleaning ",
  description:
    " Looking for professional commercial cleaning services in Luton? CQD Cleaning Service provides reliable, eco-friendly cleaning for offices, schools and more.",
};

const MaidenheadPage = () => {
  return (
    <div>
      <Luton />
      <ServicesHighlightedLocations
        title="Expert Cleaning Services in Luton & Surrounding Areas"
        description="At CQD Cleaning Service, we deliver expert commercial cleaning solutions in Luton and across nearby towns.
We serve businesses in:

"
      />
      <FAQ/>
    </div>
    
  );
};

export default MaidenheadPage;
