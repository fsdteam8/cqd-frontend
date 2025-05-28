import About from "@/components/About";
// import BlogCarousel from "@/components/blog/BlogCarousel";
import Contact from "@/components/Contact";
import HeroVideo from "@/components/HeroVideo";
import HighlightedLocations from "@/components/HighlightedLocations";
import HowItWork from "@/components/HowItWork";
import PricingSection from "@/components/Pricing/PricingSection";
import Review from "@/components/Review";
import TrustedPartners from "@/components/TrustedPartners";
import WhyChooseUs from "@/components/WhyChooseUs";
import BlogPage from "./blog/page";
// import { getBlogPosts } from "@/lib/data";


export const metadata = {
  title: "CQD Cleaning Services: Excellence Since 2012",
  description: "CQD Cleaning Services has proudly provided top-tier cleaning since 2012, delivering spotless results with a commitment to excellence.",

};



export default async function Home() {
  // const posts = await getBlogPosts();
  return (
    <div className="w-full mx-auto">
      <HeroVideo />
      <About />
      <WhyChooseUs />
      <HowItWork />
      <TrustedPartners />
      <PricingSection />
      <HighlightedLocations />
      {/* <BlogCarousel posts={posts}  /> */}
      <BlogPage />
      <Review />
      <Contact />
    </div>
  );
}
