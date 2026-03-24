import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import ServicePhoneCta from "./ServicePhoneCta";

const WwoNurseryCleaning = () => {
  return (
    <div>
      {/* What We Offer Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative w-full aspect-[536/656] max-w-[536px] overflow-hidden">
                <Image
                  src="/services/nurseryCleaning1.jpg"
                  alt="Professional Nursery Cleaning Services"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 536px"
                  priority
                  className="rounded-tl-[100px] rounded-br-[100px]"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d]">
                What We Offer
              </h2>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700">
                  CQD Cleaning Services provides specialized nursery cleaning
                  tailored to maintain a safe, hygienic, and nurturing
                  environment for children and staff. Our expert team uses
                  child-safe, eco-friendly products to ensure thorough cleaning
                  without harmful chemicals.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  From playrooms and classrooms to restrooms and nap areas, we
                  focus on eliminating germs and allergens to create a healthy
                  space that supports your nursery’s daily activities.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Daily & scheduled cleaning to fit nursery hours
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Sanitization of toys, furniture, and surfaces
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Safe restroom and diaper changing area cleaning
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Use of non-toxic, eco-friendly disinfectants
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Waste removal and odor control for a fresh environment
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-4">
                <Link href={"/#pricing"}>
                  <Button className="bg-[#14213d] hover:bg-[#233862] text-white rounded-full px-8 py-6 text-lg font-medium">
                    Request a Quote
                  </Button>
                </Link>
                <ServicePhoneCta />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side - Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d]">
                Why Choose Us
              </h2>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700">
                  CQD Cleaning Services recognizes the unique challenges of
                  maintaining cleanliness in nurseries. Our trained cleaning
                  specialists follow strict protocols to ensure safety and
                  hygiene while minimizing disruption to your daily routines.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  We offer flexible scheduling options, competitive pricing, and
                  a commitment to quality — helping your nursery stay spotless,
                  safe, and welcoming for children, parents, and staff alike.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Trusted by nurseries and childcare centers
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Certified cleaning professionals with childcare experience
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Customized cleaning plans to suit nursery schedules
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Transparent pricing with no hidden fees
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  100% satisfaction guarantee on all cleaning services
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-4">
                <Link href={"/#pricing"}>
                  <Button className="bg-[#14213d] hover:bg-[#233862] text-white rounded-full px-8 py-6 text-lg font-medium">
                    Request a Quote
                  </Button>
                </Link>
                <ServicePhoneCta />
              </div>
            </div>

            {/* Right side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-full aspect-[536/656] max-w-[536px] rounded-tr-[100px] rounded-bl-[100px] overflow-hidden">
                <Image
                  src="/services/nurseryCleaning3.jpg"
                  alt="Expert Nursery Cleaning Professionals"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 536px"
                  priority
                  className="rounded-tr-[100px] rounded-bl-[100px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WwoNurseryCleaning;
