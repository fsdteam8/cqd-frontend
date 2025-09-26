
import ServicesHighlightedLocations from "@/components/services/ServicesHighlightedLocations";
import Watford from "@/components/services/Watford"

import React from "react";

export const metadata = {
  title:
    "Cleaning Services in Watford | Professional Commercial & Office Cleaning",
  description:
    " Looking for reliable cleaning services in Watford? CQD Cleaning Service offers expert commercial, office, and specialist cleaning tailored to your needs. Affordable, eco-friendly, and professional cleaning in Watford and nearby areas.",
};

const OxfordPage = () => {
  return (
    <div>
      <Watford/>
      <ServicesHighlightedLocations
        title="Professional Cleaning Services in Watford"
        description="At CQD Cleaning Service, we proudly deliver professional cleaning solutions not only in Watford but also across the wider region. Whether you require office cleaning, commercial cleaning, or specialist cleaning services, our dedicated team is ready to support businesses of all sizes with reliable and affordable cleaning solutions."
      />
    </div>
  );
};

export default OxfordPage;
