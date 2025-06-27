import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section
      id="about"
      className="w-full flex items-center justify-center px-4 pt-8"
    >
      <div className="container  px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Image container - responsive and properly sized */}
          <div className="relative w-full mx-auto lg:max-w-none lg:w-[536px] lg:h-[656px] overflow-hidden rounded-lg">
            <Image
              src="/images/about.png"
              alt="Commercial Cleaning Services"
              width={536}
              height={656}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Content container */}
          <div className="flex flex-col space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-medium tracking-wider mb-2">
              About CQD Cleaning
            </h2>

            <p className="text-base font-medium sm:text-base leading-[120%]">
              Since 2012, CQD Cleaning Company has offered trusted, top-quality
              cleaning for homes and businesses. We’re committed to excellence
              and exceeding every client’s expectations—every time.
            </p>

            <p className="text-base font-medium sm:text-base leading-[120%] mt-2">
              At CQD Cleaning Company, our expert team and advanced tools ensure
              top-tier cleanliness, health, and safety—delivering spotless
              results you can trust every time.
            </p>

            {/* Features grid - responsive with 1 column on mobile, 2 on larger screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
              <div className="bg-[#F2F2F2] rounded-tr-[30px] rounded-br-[30px] rounded-bl-[30px] h-[52px] flex items-center justify-center">
                <h3 className="font-medium">Revolutioni the Industry</h3>
              </div>

              <div className="bg-[#F2F2F2] rounded-tr-[30px] rounded-br-[30px] rounded-bl-[30px] h-[52px] flex items-center justify-center">
                <h3 className="font-medium">Affordability & Flexibility</h3>
              </div>

              <div className="bg-[#F2F2F2] rounded-tr-[30px] rounded-br-[30px] rounded-bl-[30px] h-[52px] flex items-center justify-center">
                <h3 className="font-medium">Privacy & Efficiency</h3>
              </div>

              <div className="bg-[#F2F2F2] rounded-tr-[30px] rounded-br-[30px] rounded-bl-[30px] h-[52px] flex items-center justify-center">
                <h3 className="font-medium">Commitment to Quality</h3>
              </div>

              <div className="bg-[#F2F2F2] rounded-tr-[30px] rounded-br-[30px] rounded-bl-[30px] h-[52px] flex items-center justify-center">
                <h3 className="font-medium">Anonymous Identities</h3>
              </div>

              <div className="bg-[#F2F2F2] rounded-tr-[30px] rounded-br-[30px] rounded-bl-[30px] h-[52px] flex items-center justify-center">
                <h3 className="font-medium">Simplified Process</h3>
              </div>
            </div>

            {/* CTA Button - centered on mobile, left-aligned on larger screens */}
            <div className="flex justify-center sm:justify-start pt-8">
              <Link
                href="#pricing"
                className="px-8 py-3 text-xl font-semibold tracking-[0.34px] rounded-full bg-[#0F2A5C] !text-white hover:bg-[#0F2A5C]/90"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
