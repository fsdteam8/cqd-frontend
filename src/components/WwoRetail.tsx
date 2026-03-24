import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import ServicePhoneCta from "./ServicePhoneCta";

const WwoRetail = () => {
  return (
    <div>
      {/* first Section */}
      <section className="w-full py-7 md:py-9 lg:py-3 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="space-y-2">
            <p className="text-base md:text-lg text-gray-700">
              Since 2012, CQD Cleaning Service has been providing trusted,
              high-quality cleaning for retailers and Retail Cleaning is one of
              the integral parts of CQD Cleaning Service . We are dedicated to
              excellence, ensuring every client experiences spotless results,
              every time.
            </p>

            <p className="text-base md:text-lg text-gray-700">
              Our expert team, advanced tools, and eco-friendly techniques
              deliver top-tier cleanliness, health, and safety standards, giving
              you peace of mind with every service.
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
         {/* What Is Retail Cleaning? Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side - Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d]">
                What Is Retail Cleaning?
              </h2>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700">
                  Retail cleaning refers to the professional cleaning and maintenance of stores, shopping centres, boutiques, supermarkets, and other retail spaces to ensure they remain clean, hygienic, and visually appealing for customers and staff.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  It goes beyond basic tidying — retail cleaning focuses on creating a safe, welcoming environment that enhances the shopping experience and reflects positively on your brand. This can include sanitizing high-touch areas, polishing display units, maintaining spotless floors, restocking restrooms, and ensuring that entrances, fitting rooms, and checkout areas are always presentable.
                </p>
                <p className="text-base md:text-lg text-gray-700">
                  By investing in regular retail cleaning, businesses can improve customer satisfaction, encourage repeat visits, and maintain a professional image while ensuring compliance with hygiene and safety standards.
                </p>
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
              <div className="relative w-full aspect-[536/556] max-w-[536px] rounded-tr-[100px] rounded-bl-[100px] overflow-hidden">
                <Image
                  src="/services/retail4.jpg"
                  alt="Expert Retail Cleaning Professionals"
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
      {/* What We Offer Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative w-full aspect-[536/656] max-w-[536px] overflow-hidden">
                <Image
                  src="/services/retail2.jpg"
                  alt="Professional Retail Cleaning Services"
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
                  CQD Cleaning Services delivers specialized retail cleaning
                  tailored to maintain a spotless, welcoming environment that
                  enhances your customer experience and supports business
                  success.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  Our expert team uses eco-friendly cleaning products and proven
                  techniques to sanitize floors, displays, restrooms, and
                  high-traffic areas while minimizing disruption to your
                  operations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Floor cleaning & high-traffic area sanitation
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Restroom cleaning & restocking
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Display & shelving dusting and polishing
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Trash removal & waste management
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Flexible scheduling to suit your business hours
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
                  At CQD Cleaning Services, we recognize how vital cleanliness
                  is in retail settings for maintaining a positive brand image
                  and customer satisfaction.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  Our experienced cleaners deliver reliable, thorough cleaning
                  with minimal disruption, flexible scheduling, and transparent
                  pricing — ensuring your retail space always looks its best.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Trusted by retail stores & shopping centres
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Experienced & background-checked cleaning professionals
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Tailored cleaning plans for your business needs
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Clear, upfront pricing with no hidden fees
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  100% satisfaction guarantee on all services
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
                  src="/services/retail3.jpg"
                  alt="Expert Retail Cleaning Professionals"
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
      {/* CQD Retail Cleaning: Why It Matters & How We Help Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-6 pb-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d] text-center">
              CQD Retail Cleaning: Why It Matters & How We Help
            </h2>

            <div className="space-y-4">
              <p className="text-base md:text-lg text-gray-700 text-left">
                 A clean retail space boosts customer satisfaction, enhances your brand image, and ensures a safe environment for staff and shoppers. At <strong>CQD Cleaning Service,</strong> we use professional expertise, eco-friendly products, and flexible scheduling to keep your retail space consistently spotless.
              </p>
              <p className="text-base md:text-lg text-gray-700 text-left">
                Our services cover every aspect of retail cleaning, including :
              </p>
            </div>
          </div>
          <ul className="pt-4">
            <li className="text-lg md:text-xl text-gray-700">
              Floor & high-traffic area sanitation to maintain a polished and safe environment.
            </li>
            <li className="text-lg md:text-xl text-gray-700 py-3">
              Display and shelving cleaning to ensure products are presented attractively.
            </li>
            <li className="text-lg md:text-xl text-gray-700">
              Restroom cleaning and restocking for hygiene and customer comfort.
            </li>
            <li className="text-lg md:text-xl text-gray-700 py-3">
              Waste management to keep your store tidy and clutter-free.
            </li>
          </ul>
          <p className="text-base md:text-lg text-gray-700 text-left pt-5">
           With <strong>CQD Cleaning,</strong> your retail space not only looks immaculate but also creates a welcoming atmosphere that encourages repeat visits and reinforces customer trust. Our dedicated team works around your business hours, ensuring minimal disruption while maintaining the highest cleaning standards.
          </p>
          <p className="text-base md:text-lg text-gray-700 text-left pt-5">
           We focus on reliability, attention to detail, and consistent results, helping your retail business make a lasting positive impression every day.
          </p>
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

export default WwoRetail;
