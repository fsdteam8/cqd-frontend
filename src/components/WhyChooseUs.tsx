import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const WhyChooseUs = () => {
  return (
    <section className="">
      <div className="container w-full mx-auto px-4 mt-10 lg:mt-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 min-h-[80vh]">
          {/* Left column - Text content */}
          <div className="space-y-6 max-w-4xl">
            <h2 className="text-2xl md:text-5xl font-medium tracking-wider">
              <span className="block lg:mb-4 mb-2">Why You Should Choose</span>
              <span className="block">CQD for Flexible Cleaning</span>
            </h2>

            <p className="text-base md:text-lg font-normal text-[#0F2A5C] text-justify">
              At CQD Cleaning Service, we offer affordable, top-tier cleaning
              solutions without compromising quality. Choose flexible packages
              tailored to your needs and enjoy efficient service with our
              10-mile radius system that reduces cost and saves time. Our fully
              trained professionals are committed to delivering spotless results
              with care, precision, and unmatched dedication.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 ">
              <div className="bg-gray-100  rounded-full px-6 py-4 text-center">
                <h3 className="text-3xl md:text-4xl font-bold">13</h3>
                <p className="text-sm md:text-base">Years Experience</p>
              </div>

              <div className="bg-gray-100 rounded-full px-6 py-4 text-center">
                <h3 className="text-3xl md:text-4xl font-bold">500+</h3>
                <p className="text-sm md:text-base">Happy Customers</p>
              </div>

              <div className="bg-gray-100 rounded-full px-6 lg:py-4 text-center">
                <h3 className="text-3xl md:text-4xl font-bold">1000+</h3>
                <p className="text-sm md:text-base">Successful services</p>
              </div>
            </div>

            <div className="pt-4 flex justify-center lg:justify-end">
              <Link
                href="/#pricing"
                className="rounded-full px-8 py-4 h-auto text-base font-medium bg-[#0F2A5C] hover:bg-[#0F2A5C]/90 !text-white"
              >
                Get Start
                <ArrowRight
                  className="ml-2 h-4 w-4  inline-block"
                  stroke="currentColor"
                  fill="none"
                />
              </Link>
            </div>
          </div>

          {/* Right column - Images */}
          <div className="grid grid-cols-2 gap-4 max-w-[530px]">
            <div className="relative  w-[150px] lg:w-[250px] h-[150px] lg:h-[250px] group">
              <Image
                src="/images/wcu1.png"
                alt="Commercial Cleaning Services"
                fill
                className="rounded-3xl object-cover transition-opacity duration-300 group-hover:opacity-0"
              />
              <Image
                src="/images/hover1.png"
                alt="Cleaning professionals in masks hover"
                fill
                className="rounded-3xl object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
            <div className="relative w-[150px] lg:w-[250px] h-[150px] lg:h-[250px] group">
              <Image
                src="/images/wcu2.png"
                alt="Commercial Cleaning Services"
                fill
                className="rounded-3xl object-cover transition-opacity duration-300 group-hover:opacity-0"
              />
              <Image
                src="/images/hover2.png"
                alt="Commercial Cleaning Services"
                fill
                className="rounded-3xl object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>

            <div className="relative w-[150px] lg:w-[250px] h-[150px] lg:h-[250px] group">
              <Image
                src="/images/wcu3.png"
                alt="Maintaining a clean and healthy environment"
                fill
                className="rounded-3xl object-cover transition-opacity duration-300 group-hover:opacity-0"
              />
              <Image
                src="/images/hover3.png"
                alt="Maintaining a clean and healthy environment"
                fill
                className="rounded-3xl object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>

            <div className="relative w-[150px] lg:w-[250px] h-[150px] lg:h-[250px] group">
              <Image
                src="/images/wcu4.png"
                alt="Tools for a perfect window cleaning"
                fill
                className="rounded-3xl object-cover transition-opacity duration-300 group-hover:opacity-0"
              />
              <Image
                src="/images/hover4.png"
                alt="Tools for a perfect window cleaning"
                fill
                className="rounded-3xl object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
