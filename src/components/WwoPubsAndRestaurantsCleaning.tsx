import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import ServicePhoneCta from "./ServicePhoneCta";

const WwoPubsAndRestaurantsCleaning = () => {
  return (
    <div>
      {/* first Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d]">
            What We Offer
          </h2> */}

          <div className="space-y-4">
            <p className="text-base md:text-lg text-gray-700">
              At <strong>CQD Cleaning Services,</strong> we provide
              comprehensive pubs & restaurants cleaning Service solutions. Our
              goal is to maintain hygienic, welcoming environments that meet
              food safety standards and leave a lasting positive impression on
              your guests.
            </p>

            <p className="text-base md:text-lg text-gray-700">
              Our expert team uses professional-grade, eco-friendly products to
              clean every part of your establishment, from kitchens and bars to
              dining areas and restrooms, ensuring a spotless and sanitary
              venue.
            </p>

            <h4 className="text-xl lg:text-2xl font-bold text-[#14213d]">
              Our Services Include:
            </h4>
            <ul>
              <li className="text-base md:text-lg text-gray-700">
                Thorough kitchen and food prep area sanitation
              </li>
              <li className="text-base md:text-lg text-gray-700">
                Bar counter and seating area cleaning
              </li>
              <li className="text-base md:text-lg text-gray-700">
                Floor scrubbing and carpet cleaning
              </li>
              <li className="text-base md:text-lg text-gray-700">
                Restroom deep cleaning and deodorization
              </li>
              <li className="text-base md:text-lg text-gray-700">
                Use of food-safe and environmentally friendly disinfectants
              </li>
            </ul>
            <p className="text-base md:text-lg text-gray-700">
              With <strong>CQD Cleaning Services,</strong> your pub or
              restaurant will always look its best, creating a safe and inviting
              space for both customers and staff.
            </p>
          </div>
        </div>
         <div className="flex items-center justify-center mt-8 md:mt-10 pt-2">
          <a href="tel:+8801494911001">
            <button className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-normal text-[#0F2A5C]">
              <span className="font-semibold border border-black/20 py-2 px-10 rounded-[10px]">
                Call Us : <strong>01494 911001</strong>
              </span>
            </button>
          </a>
        </div>
      </section>
      {/* What We Offer Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative w-full aspect-[536/656] max-w-[536px] overflow-hidden">
                <Image
                  src="/services/pubsCleaning1.jpg"
                  alt="Professional Pubs and Restaurants Cleaning Services"
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
                  CQD Cleaning Services specializes in comprehensive cleaning
                  solutions for pubs and restaurants. We help maintain hygienic,
                  welcoming environments that comply with food safety standards
                  and leave a great impression on your guests.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  Our expert team uses professional-grade, eco-friendly products
                  to clean dining areas, kitchens, bars, restrooms, and all
                  high-touch surfaces to ensure a spotless and sanitary venue.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Thorough kitchen and food prep area sanitation
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Bar counter and seating area cleaning
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Floor scrubbing and carpet cleaning
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Restroom deep cleaning and deodorization
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Use of food-safe and environmentally friendly disinfectants
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
                  At CQD Cleaning Services, we understand the unique challenges
                  of cleaning hospitality venues. Our team is trained to uphold
                  the highest hygiene standards while minimizing disruption to
                  your business.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  We offer flexible cleaning schedules, competitive pricing, and
                  a commitment to your satisfaction — ensuring your pub or
                  restaurant is always guest-ready.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Trusted by local pubs and restaurants
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Certified cleaning professionals
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Customized cleaning plans to fit your hours
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Transparent pricing with no hidden costs
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  100% satisfaction guarantee on every service
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
                  src="/services/pubsCleaning3.jpg"
                  alt="Pubs and Restaurants Cleaning Experts"
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

      {/* Why Pubs & Restaurants Cleaning Is Crucial Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d] pb-4">
            Why Pubs & Restaurants Cleaning Is Crucial
          </h2>

          <div className="space-y-4">
            <p className="text-base md:text-lg text-gray-700">
              Maintaining cleanliness in pubs and restaurants is essential for
              customer satisfaction, safety, and business success.
            </p>

            <div>
              <h4 className="text-xl lg:text-2xl font-bold text-[#14213d]">
                1. Customer Perception & Retention
              </h4>
              <ul>
                <li className="text-base md:text-lg text-gray-700">
                  90% of customers consider cleanliness when choosing where to
                  eat.
                </li>
                <li className="text-base md:text-lg text-gray-700">
                  66% won’t return to a restaurant with poor hygiene.
                </li>
                <li className="text-base md:text-lg text-gray-700">
                  86% judge kitchen cleanliness by restroom standards.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl lg:text-2xl font-bold text-[#14213d]">
                2. Health & Safety Compliance
              </h4>
              <ul>
                <li className="text-base md:text-lg text-gray-700">
                  Cleanliness prevents foodborne illnesses and ensures
                  compliance with health inspections.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl lg:text-2xl font-bold text-[#14213d]">
                3. Financial Impact
              </h4>
              <ul>
                <li className="text-base md:text-lg text-gray-700">
                  Clean restaurants attract more visitors and can increase
                  customer spending.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl lg:text-2xl font-bold text-[#14213d]">
                4. Brand Reputation & Reviews
              </h4>
              <ul>
                <li className="text-base md:text-lg text-gray-700">
                  75% of consumers avoid restaurants with negative cleanliness
                  reviews.
                </li>
                <li className="text-base md:text-lg text-gray-700">
                  Positive hygiene practices enhance your online reputation.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl lg:text-2xl font-bold text-[#14213d]">
                5. Employee Morale
              </h4>
              <ul>
                <li className="text-base md:text-lg text-gray-700">
                  A clean environment boosts staff satisfaction and
                  productivity.
                </li>
              </ul>
            </div>
          </div>
        </div>
         <div className="flex items-center justify-center mt-8 md:mt-10 pt-2">
          <a href="tel:+8801494911001">
            <button className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-normal text-[#0F2A5C]">
              <span className="font-semibold border border-black/20 py-2 px-10 rounded-[10px]">
                Call Us : <strong>01494 911001</strong>
              </span>
            </button>
          </a>
        </div>
      </section>

      {/* Restaurants Cleaning Procedure Section */}
      <section className="w-full py-8 md:py-10 lg:py-14 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d] pb-3" >
            Restaurants Cleaning Procedure
          </h2>

          <div className="space-y-4">
            <p className="text-base md:text-lg text-gray-700">
              At <strong>CQD Cleaning Service,</strong> we follow a systematic
              cleaning procedure to ensure hygiene, safety, and a welcoming
              environment:
            </p>

            <div>
              <ul className="list-decimal">
                <li className="text-base md:text-lg text-gray-700">
                  <strong>Kitchen Cleaning – </strong> Sanitize prep surfaces,
                  appliances, sinks, and floors using food-safe disinfectants.
                </li>
                <li className="text-base md:text-lg text-gray-700">
                  <strong>Dining & Bar Area – </strong> Dust, polish, and
                  sanitize tables, chairs, counters, and high-touch surfaces;
                  clean floors and carpets.
                </li>
                <li className="text-base md:text-lg text-gray-700">
                  <strong>Restroom Cleaning – </strong> Deep clean toilets,
                  sinks, mirrors; restock supplies and deodorize.
                </li>
                <li className="text-base md:text-lg text-gray-700">
                  <strong>Waste Management – </strong> Remove trash and food
                  waste, sanitize bins.
                </li>
                <li className="text-base md:text-lg text-gray-700">
                  <strong>High-Touch Sanitization –</strong> Regularly disinfect
                  door handles, switches, and POS systems.
                </li>
                <li className="text-base md:text-lg text-gray-700">
                  <strong>Final Inspection –</strong> Ensure all areas are
                  spotless, sanitized, and meet health standards.
                </li>
              </ul>
              <p className="text-base md:text-lg text-gray-700 pt-2">
                This streamlined procedure keeps your restaurant safe, hygienic,
                and guest-ready at all times.
              </p>
            </div>
          </div>
        </div>
         <div className="flex items-center justify-center mt-8 md:mt-10 pt-2">
          <a href="tel:+8801494911001">
            <button className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-normal text-[#0F2A5C]">
              <span className="font-semibold border border-black/20 py-2 px-10 rounded-[10px]">
                Call Us : <strong>01494 911001</strong>
              </span>
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default WwoPubsAndRestaurantsCleaning;
