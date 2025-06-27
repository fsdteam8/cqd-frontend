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
import Head from "next/head";

export const metadata = {
  title: "CQD Cleaning Services: Excellence Since 2012",
  description:
    "CQD Cleaning Services has proudly provided top-tier cleaning since 2012, delivering spotless results with a commitment to excellence.",
};

export default async function Home() {
  return (
    <>
      <Head>
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="CQD Cleaning Services | Commercial & Office Cleaning UK"
        />
        <meta
          name="twitter:description"
          content="Expert floor, office, and warehouse cleaning in High Wycombe & beyond. Book flexible cleaning plans with CQD today."
        />
        <meta
          name="twitter:image"
          content="https://www.cqdcleaningservices.com/images/blue-logo.svg"
        />
        <meta
          name="twitter:url"
          content="https://www.cqdcleaningservices.com/"
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.cqdcleaningservices.com/"
        />
        <meta
          property="og:title"
          content="CQD Cleaning Services | Commercial & Office Cleaning UK"
        />
        <meta
          property="og:description"
          content="Professional commercial cleaning services for offices, warehouses, and gyms. Serving High Wycombe, Maidenhead & nearby areas. No contract plans available."
        />
        <meta
          property="og:image"
          content="https://www.cqdcleaningservices.com/images/blue-logo.svg"
        />
        <meta
          property="og:image:alt"
          content="CQD Cleaning Services Logo"
        />
        <meta
          property="og:site_name"
          content="CQD Cleaning Services"
        />
        <meta property="og:locale" content="en_GB" />

        {/* JSON-LD Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "CQD Cleaning Services",
              image:
                "https://www.cqdcleaningservices.com/images/blue-logo.svg",
              "@id": "https://www.cqdcleaningservices.com/#business",
              url: "https://www.cqdcleaningservices.com/",
              telephone: "+44 1494 911001",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1 Aston Court, Kingsmead Business Park",
                addressLocality: "High Wycombe",
                addressRegion: "Buckinghamshire",
                postalCode: "HP11 1LA",
                addressCountry: "GB",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 51.611258,
                longitude: -0.704654,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "08:00",
                  closes: "18:00",
                },
              ],
              priceRange: "££",
              sameAs: [
                "https://www.facebook.com/CQDCleaningServices",
                "https://www.linkedin.com/company/cqdcleaningservices",
              ],
            }),
          }}
        />
      </Head>
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
