import Maidenhead from "@/components/services/Maidenhead";
import ServicesHighlightedLocations from "@/components/services/ServicesHighlightedLocations";
import React from "react";

export const metadata = {
  title: "Commercial Cleaning Services in Maidenhead | CQD Cleaning ",
  description:
    "Looking for professional commercial cleaning services in Maidenhead? CQD Cleaning Service provides tailored cleaning solutions for offices, schools, gym more",
};

const MaidenheadPage = () => {
  return (
    <div>
      <Maidenhead />
      <ServicesHighlightedLocations
        title="Expert Cleaning Services in Maidenhead & Surrounding Areas"
        description="At CQD Cleaning Service, we proudly deliver professional cleaning solutions not only in Maidenhead but also across the wider region. Whether you require office cleaning, commercial cleaning, or specialist cleaning services, our dedicated team is ready to support businesses of all sizes.
We provide expert cleaning services in the following areas:
"
      />
    </div>
  );
};

export default MaidenheadPage;
