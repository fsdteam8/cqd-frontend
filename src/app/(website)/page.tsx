import About from "@/components/About";
import Contact from "@/components/Contact";
import HeroVideo from "@/components/HeroVideo";
import HighlightedLocations from "@/components/HighlightedLocations";
import HowItWork from "@/components/HowItWork";
import PricingSection from "@/components/Pricing/PricingSection";
import Review from "@/components/Review";
import TrustedPartners from "@/components/TrustedPartners";
import WhyChooseUs from "@/components/WhyChooseUs";
import BlogContainer from "./blog/_components/BlogContainer";
// import Head from "next/head";
import JsonLd from "@/components/jsonLD";

// export const metadata = {
//   title: "CQD Cleaning Services: Excellence Since 2012",
//   description:
//     "CQD Cleaning Services has proudly provided top-tier cleaning since 2012, delivering spotless results with a commitment to excellence.",
// };
export const metadata = {
  title: "CQD Cleaning Services: Excellence Since 2012",
  description:
    "CQD Cleaning Services has proudly provided top-tier cleaning since 2012, delivering spotless results with a commitment to excellence.",
  openGraph: {
    type: "website",
    url: "https://www.cqdcleaningservices.com/",
    title: "CQD Cleaning Services | Commercial & Office Cleaning UK",
    description:
      "Professional commercial cleaning services for offices, warehouses, and gyms. Serving High Wycombe, Maidenhead & nearby areas. No contract plans available.",
    images: [
      {
        url: "https://www.cqdcleaningservices.com/images/blue-logo.svg",
        alt: "CQD Cleaning Services Logo",
      },
    ],
    siteName: "CQD Cleaning Services",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "CQD Cleaning Services | Commercial & Office Cleaning UK",
    description:
      "Expert floor, office, and warehouse cleaning in High Wycombe & beyond. Book flexible cleaning plans with CQD today.",
    images: [
      "https://www.cqdcleaningservices.com/images/blue-logo.svg",
    ],
  },
};


export default async function Home() {
  return (
    <>
      
      <JsonLd />
      <div className="w-full mx-auto">
        <HeroVideo />
        <About />
        <WhyChooseUs />
        <HowItWork />
        <TrustedPartners />
        <PricingSection />
        <HighlightedLocations />
        <BlogContainer />
        <Review />
        <Contact />
      </div>
    </>
  );
}
