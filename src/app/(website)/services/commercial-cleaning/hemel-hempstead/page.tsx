import Hemel_Hempstead from "@/components/services/Hemel_Hempstead";
import ServicesHighlightedLocations from "@/components/services/ServicesHighlightedLocations";
import React from "react";
import FAQ from "./_components/FAQ";

export const metadata = {
  title: "Commercial Cleaning Services in Hemel Hempstead | CQD Cleaning",
  description:
    "Looking for professional commercial cleaning services in Hemel Hempstead? CQD Cleaning Service provides reliable, eco-friendly cleaning for offices, schools, gyms, and more.",
};

const MaidenheadPage = () => {
  return (
    <div>
      <Hemel_Hempstead />
      <ServicesHighlightedLocations
        title="Expert Cleaning Services in Hemel Hempstead & Surrounding Areas"
        description="At CQD Cleaning Service, we deliver expert commercial cleaning solutions in Hemel Hempstead and across nearby towns. We serve businesses in:
"
      />
      <FAQ/>
    </div>
  );
};

export default MaidenheadPage;
