import Image from "next/image";
import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ServicesHighlightedLocations from "./ServicesHighlightedLocations";

const Reading = () => {
  return (
    <div className="container max-w-9xl mx-auto px-4 md:px-6">
      {/* Commercial Cleaning Services in Reading section */}
      <section>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-40 py-8 md:py-10 lg:py-12">
          <div className="md:col-span-1">
            <h1 className="text-2xl md:3xl lg:text-4xl font-bold leading-normal text-primary">
              Commercial Cleaning Services in Reading
            </h1>
            <p className="text-base md:text-lg font-normal leading-[120%] text-primary pt-4">
              Are you looking for trusted commercial cleaning services in
              Reading? At CQD Cleaning Service, we deliver professional,
              tailored cleaning solutions for businesses of all sizes. From
              daily office cleaning to deep carpet care, window cleaning, and
              specialist sanitization, our dedicated team ensures your workplace
              stays spotless, hygienic, and welcoming. Serving Reading and
              surrounding areas, we are committed to reliability, quality, and
              customer satisfaction. Contact us today to see how our commercial
              cleaning services in Reading can support your business.
            </p>
              {/* button  */}
            <div className="flex items-center justify-center mt-8 md:mt-10">
              <button className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-normal text-[#0F2A5C]">
                <span className="font-semibold border border-black/20  py-2 px-10  rounded-[10px]">
                  Call Us : <strong>01494 911001</strong>
                </span>
              </button>
            </div>
          </div>
          <div className="md:col-span-1">
            <Image
              src="/location/reading1.jpg"
              alt="reading cleaning services"
              width={700}
              height={700}
              className="w-full h-[350px] md:h-[400px] rounded-[20px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Choose CQD Cleaning Service?  */}
      <section>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-40 py-8 md:py-10 lg:py-12">
          <div className="md:col-span-1 relative">
            <div className=" sticky top-28 z-40">
              <Image
                src="/location/reading2.jpg"
                alt="reading cleaning services"
                width={700}
                height={700}
                className="w-full h-[350px] md:h-[470px] rounded-[20px] object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-1 ">
            <h2 className="text-2xl md:3xl lg:text-4xl font-bold leading-normal text-primary">
              Why Choose CQD Cleaning Service?
            </h2>
            <p className="text-base md:text-lg font-normal leading-[120%] text-primary pt-4">
              Since 2012, CQD Cleaning Service has been a trusted provider of
              professional cleaning across Berkshire. Businesses in Reading
              choose us because we combine experience, eco-friendly products,
              and attention to detail with competitive pricing.
            </p>
            <ul className="list-disc list-inside pt-4 space-y-2">
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Reliable & Consistent:</strong> High-quality cleaning
                delivered every time.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Tailored Solutions :</strong> Flexible packages to suit
                your business needs.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Affordable Rates :</strong> Professional service at
                competitive prices.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Eco-Friendly Methods :</strong> Non-toxic, sustainable
                products and equipment.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Minimal Disruption :</strong> Cleaning scheduled during
                or outside working hours.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Customer Satisfaction :</strong> A spotless environment
                that exceeds expectations.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Commercial Cleaning Services in Reading
 section */}
      <section>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-40 py-8 md:py-10 lg:py-12">
          <div className="md:col-span-1">
            <h1 className="text-2xl md:3xl lg:text-4xl font-bold leading-normal text-primary">
              Our Commercial Cleaning Services in Reading
            </h1>
            <p className="text-base md:text-lg font-normal leading-[120%] text-primary pt-4">
              We offer a wide range of commercial cleaning services in Reading,
              designed to keep your premises clean, safe, and professional.
              <br />
              Our services include regular office cleaning for productive
              workspaces, as well as deep carpet cleaning to remove stains,
              dirt, and allergens. To help businesses make the best impression,
              we provide streak-free window cleaning inside and out. We also
              maintain washrooms to the highest hygienic standards for staff and
              visitors. <br />
              For customer-facing businesses, we offer retail cleaning to keep
              shops and showrooms spotless, while our restaurant and pub
              cleaning covers everything from kitchens to dining spaces. Hotels
              can depend on us for thorough hospitality cleaning, ensuring guest
              rooms, lobbies, and shared areas remain fresh and welcoming.{" "}
              <br />
              We also provide safe and hygienic cleaning for schools, nurseries,
              healthcare practices, and gyms, along with specialist services for
              event venues, theatres, cinemas, industrial sites, transport
              fleets, and marine vessels. Whatever your industry, CQD delivers
              tailored cleaning solutions that keep your business looking its
              very best.
            </p>
          </div>
          <div className="md:col-span-1">
            <Image
              src="/location/reading3.jpg"
              alt="reading cleaning services"
              width={700}
              height={700}
              className="w-full h-[350px] md:h-[550px] rounded-[20px] object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <ServicesHighlightedLocations
          title="Expert Cleaning Services in Reading & Surrounding Areas"
          description="CQD Cleaning Service proudly serves businesses in Reading and nearby locations, including:"
        />
      </section>
      {/* Frequently Asked Questions  section  */}
      <section className="container max-w-9xl mx-auto px-4 md:px-6  py-8 md:py-10 lg:py-12">
        <h2 className="text-3xl md:text-4xl lg:text-[44px] leading-normal text-center font-bold text-[#14213d]">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-4 mt-5">
          <AccordionItem value="schedule">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
              How much does commercial cleaning in Reading cost?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
              The cost depends on the size of your premises, the services you
              need, and cleaning frequency. We provide tailored quotes.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="safety">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
              Do you offer one-off deep cleaning services in Reading?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
              Yes, we offer both contract cleaning and one-off deep cleans.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="customization">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
              Can you clean outside business hours?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
              Of course. We provide early morning, evening, and weekend cleaning
              to minimise disruption.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="pricing">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
              Are your cleaning products eco-friendly?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
              Yes, we use non-toxic, sustainable products and modern equipment.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="deep-cleaning">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
              What types of businesses do you clean in Reading?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
              We clean offices, schools, nurseries, healthcare practices, gyms,
              restaurants, hotels, retail shops, and more.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="deep-cleaning1">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
              How do I get a quote for commercial cleaning in Reading?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
              Simply contact us by phone, email, or via our website to request a
              free, no-obligation quote.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
};

export default Reading;
