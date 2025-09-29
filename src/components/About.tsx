import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section
      id="about"
      className="w-full flex items-center justify-center px-4 pt-8"
    >
      <div className="container  px-4 md:px-6">
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image container - responsive and properly sized */}
          {/* <div className="relative w-full mx-auto lg:max-w-none lg:w-[536px] lg:h-[656px] overflow-hidden rounded-lg"> */}
          {/* <div className="lg:col-span-1 relative w-full mx-auto lg:h-[656px] overflow-hidden rounded-lg">
            <Image
              src="/images/about.png"
              alt="Commercial Cleaning Services"
              width={536}
              height={656}
              className="w-full h-full object-cover"
              priority
            />
          </div> */}
          <div className="lg:col-span-1 relative">
            <div className=" sticky top-28 z-40">
              <Image
                src="/images/about.png"
                alt="Commercial Cleaning Services"
                width={536}
                height={656}
                className="w-full h-[370px] md:h-[600px] rounded-[20px] object-cover"
              />
            </div>
          </div>

          {/* Content container */}
          <div className="lg:col-span-1 flex flex-col space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-medium tracking-wider mb-2">
              About CQD Cleaning
            </h1>

            <p className="text-base font-medium sm:text-base leading-[120%]">
              Since 2012, CQD Cleaning Service has offered trusted, top-quality
              cleaning . We’re committed to excellence and exceeding every
              client’s expectations—every time.
            </p>
            <div className="w-full flex items-center justify-center">
              <div className="w-full md:w-2/3 bg-[#0F2A5C] p-6 rounded-[10px] text-white">
                <h5 className="text-lg md:text-xl font-medium leading-normal !text-white text-center pb-6">
                  We don’t just clean, we make your space shine like never
                  before
                </h5>
              <Link href="/contact">
                <button type="button" className="w-full flex items-center justify-center">
                  <span className="bg-gray-500 py-2 px-4 ">
                    speak to our team
                  </span>
                  <span className="bg-black p-2">
                    <ChevronRight />
                  </span>
                </button>
              </Link>
              </div>
            </div>

            <p className="text-base font-medium sm:text-base leading-[120%] mt-2">
              At CQD Cleaning Service, our expert team and advanced tools ensure
              top-tier cleanliness, health, and safety—delivering spotless
              results you can trust every time.
            </p>
            {/* button  */}
            <div className="flex items-center justify-center mt-8 md:mt-10 pt-2">
              <button className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-normal text-[#0F2A5C]">
                <span className="font-semibold border border-black/20  py-2 px-10  rounded-[10px]">
                  Call Us : <strong>09888988</strong>
                </span>
              </button>
            </div>

            {/* Features grid - responsive with 1 column on mobile, 2 on larger screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
              <div className="bg-[#F2F2F2] rounded-tr-[30px] rounded-br-[30px] rounded-bl-[30px] h-[52px] flex items-center justify-center">
                <h3 className="font-medium">Revolutionising the Industry</h3>
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
