import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import ServicePhoneCta from "./ServicePhoneCta";

const WwoCommercialCleaning = () => {
  return (
    <div>

      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative w-full aspect-[536/756] max-w-[536px] overflow-hidden">
                <Image
                  src="/services/commercialCleaning2.jpg"
                  alt="Professional Commercial Cleaning"
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
                  {/* At CQD Cleaning Services, we specialize in comprehensive
                  commercial cleaning solutions designed to keep your business
                  premises spotless, professional, and safe. Our expert team
                  uses eco-friendly supplies and advanced techniques to deliver
                  reliable, high-quality results. */}
                  A clean and well-maintained workplace is essential for both employees and customers. Professional commercial cleaning goes beyond basic tidying; it delivers deep, consistent, and specialized cleaning solutions designed to keep business spaces hygienic, safe, and inviting. From offices and retail stores to warehouses and corporate buildings, our expert cleaning services are tailored to meet the unique needs of every business. With trained professionals, advanced equipment, and eco-friendly products, we ensure your workspace not only looks its best but also supports a healthier and more productive environment.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  Whether it&apos;s offices, retail spaces, warehouses, or
                  medical facilities — we ensure every surface is sanitized and
                  every corner is clean, helping your business make a great
                  impression while supporting health and productivity.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Daily, weekly & custom-scheduled cleaning
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Surface disinfection & sanitization
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Restroom, kitchen & lobby deep cleaning
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Safe & eco-friendly cleaning products
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Waste management & odor elimination
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
                  At CQD Cleaning Services, we’re committed to delivering
                  excellence in commercial cleaning. Our skilled and trustworthy
                  team provides consistent, top-tier service tailored to your
                  business needs — from small offices to large commercial
                  complexes.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  We offer flexible schedules, competitive rates, and guaranteed
                  satisfaction—ensuring your commercial space always looks its
                  best and supports a healthier environment for staff and
                  visitors alike.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Trusted by businesses across Southern England
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Fully trained & insured cleaning professionals
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Scalable plans for all business sizes
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Transparent pricing—no hidden fees
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  100% satisfaction guarantee
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
                  src="/services/commercialCleaning3.jpg"
                  alt="Expert Commercial Cleaning Services"
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

      {/* What is Professional Commercial Cleaning?  */}

           <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative w-full aspect-[536/556] max-w-[536px] overflow-hidden">
                <Image
                  src="/services/commercialCleaning4.jpg"
                  alt="Professional Commercial Cleaning"
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
                What is Professional Commercial Cleaning?
              </h2>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700">
                   Professional commercial cleaning is a specialized service designed for business spaces such as offices, retail stores, warehouses, and other commercial facilities. It goes beyond simple tidying by using systematic processes, advanced equipment, and trained staff to maintain high standards of cleanliness and hygiene. A professionally cleaned workplace leaves a strong impression on clients, creates a welcoming environment, and supports employee health and productivity.
 While standard cleaning usually covers basic tasks like dusting, sweeping, or mopping, professional commercial cleaning provides a much deeper level of care. It includes thorough sanitization of workstations, restrooms, and shared areas, along with eco-friendly products and strict hygiene practices. This ensures businesses remain not only clean in appearance but also safe, compliant, and healthier for daily use.

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
          </div>
        </div>
      </section>

        {/* Why Professional Commercial Cleaning is Important  Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side - Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d]">
            Why Professional Commercial Cleaning is Important
              </h2>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700">
                  Maintaining a clean commercial environment is essential for the health and safety of both employees and clients. Regular professional cleaning reduces the spread of germs, bacteria, and allergens, creating a safer workspace and minimizing the risk of illness. A spotless and well-maintained facility also helps create a professional business image, leaving a positive impression on visitors, clients, and partners. Additionally, professional cleaning ensures compliance with hygiene standards and regulations, helping businesses avoid fines, maintain certifications, and operate smoothly. By investing in professional commercial cleaning, companies can enhance both workplace safety and their overall reputation.


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
                  src="/services/commercialCleaning5.jpg"
                  alt="Expert Commercial Cleaning Services"
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

      {/* Benefits of Hiring Professional Commercial Cleaning  */}

           <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative w-full aspect-[536/556] max-w-[536px] overflow-hidden">
                <Image
                  src="/services/commercialCleaning6.jpg"
                  alt="Professional Commercial Cleaning"
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
                Benefits of Hiring Professional Commercial Cleaning
              </h2>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700">
                   Hiring professional commercial cleaning services offers multiple advantages for businesses of all sizes. First, it improves workplace hygiene and air quality, reducing the spread of germs and creating a healthier environment for employees and visitors. Cleaner spaces also boost staff productivity and morale, as employees feel more comfortable and motivated in a well-maintained workplace. Professional cleaning helps protect your investment by preventing damage to furniture, floors, and equipment, resulting in long-term savings on maintenance and repairs. Additionally, cleaning schedules can be tailored to your business needs, ensuring efficient, convenient, and consistent service without disrupting daily operations.


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
          </div>
        </div>
      </section>



    </div>
  );
};

export default WwoCommercialCleaning;
