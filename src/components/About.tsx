import Image from "next/image";
import { Button } from "./ui/button";

const About = () => {
  return (
    <section id="about" className="w-full min-h-screen flex items-center justify-center px-4">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Image container - responsive and properly sized */}
          <div className="relative w-full max-w-md mx-auto lg:max-w-none overflow-hidden rounded-lg">
            <Image
              src="/images/about.png"
              alt="CQD Cleaning professional with cleaning equipment"
              width={600}
              height={700}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Content container */}
          <div className="flex flex-col space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              About CQD Cleaning
            </h2>

            <p className="text-base sm:text-lg">
              Since 2012, CQD Cleaning Services has been providing top-quality
              cleaning solutions to homes and businesses. Our mission is to
              deliver exceptional cleaning services that exceed our
              clients&lsquo; expectations
            </p>

            <p className="text-base sm:text-lg">
              With a team of trained professionals and state-of-the-art
              equipment, we&lsquo;re committed to maintaining the highest
              standards of cleanliness, health, and safety in every space we
              clean.
            </p>

            {/* Features grid - responsive with 1 column on mobile, 2 on larger screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-muted rounded-lg p-4">
                <h3 className="font-medium">Revolutionizing the Industry</h3>
              </div>

              <div className="bg-muted rounded-lg p-4">
                <h3 className="font-medium">Affordability & Flexibility</h3>
              </div>

              <div className="bg-muted rounded-lg p-4">
                <h3 className="font-medium">Privacy & Efficiency</h3>
              </div>

              <div className="bg-muted rounded-lg p-4">
                <h3 className="font-medium">Commitment to Quality</h3>
              </div>

              <div className="bg-muted rounded-lg p-4">
                <h3 className="font-medium">Anonymous Identities</h3>
              </div>

              <div className="bg-muted rounded-lg p-4">
                <h3 className="font-medium">Simplified Process</h3>
              </div>
            </div>

            {/* CTA Button - centered on mobile, left-aligned on larger screens */}
            <div className="flex justify-center sm:justify-start mt-6">
              <Button className="px-8 py-6 text-base rounded-full bg-black text-white hover:bg-gray-800">
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
