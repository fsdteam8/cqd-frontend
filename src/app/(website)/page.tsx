import About from "@/components/About";
import BlogCarousel from "@/components/blog/BlogCarousel";
import Contact from "@/components/Contact";
import HeroVideo from "@/components/HeroVideo";
import HighlightedLocations from "@/components/HighlightedLocations";
import HowItWork from "@/components/HowItWork";
import PricingSection from "@/components/Pricing/PricingSection";
import Review from "@/components/Review";
import TrustedPartners from "@/components/TrustedPartners";
import WhyChooseUs from "@/components/WhyChooseUs";
import { getBlogPosts } from "@/lib/data";

export default async function Home() {
  const posts = await getBlogPosts();
  return (
    <div className="w-full mx-auto">
      <HeroVideo />
      <About />
      <WhyChooseUs />
      <HowItWork />
      <TrustedPartners />
      <PricingSection/>
      <HighlightedLocations />
      <BlogCarousel posts={posts} />
      <Review />
      <Contact />
      
    </div>
  );
}
