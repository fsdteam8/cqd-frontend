import Image from "next/image";
import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import LocationPhoneCta from "./LocationPhoneCta";
import ServicesHighlightedLocations from "./ServicesHighlightedLocations";

const Buckinghamshire = () => {
  return (
    <div className="container max-w-9xl mx-auto px-4 md:px-6">
      {/* Commercial Cleaning Services in Reading section */}
      <section>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-40 py-8 md:py-10 lg:py-12">
          <div className="md:col-span-1">
            <h1 className="text-2xl md:3xl lg:text-4xl font-bold leading-normal text-primary">
              Commercial Cleaning Service in Buckinghamshire
            </h1>
            <p className="text-base md:text-lg font-normal leading-[120%] text-primary pt-4">
              Are you searching for trusted commercial cleaning services in Buckinghamshire? At CQD Cleaning Service, we deliver professional, tailored cleaning solutions to businesses of all sizes. From daily office cleaning to deep carpet care, window cleaning, and specialist sanitization, our expert team ensures your premises remain spotless, hygienic, and welcoming. Serving Buckinghamshire and surrounding areas, we pride ourselves on reliability, quality, and customer satisfaction. Contact us today to discover how our commercial cleaning services in Buckinghamshire can support your business.
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
              src="/location/buckinghamshire1.jpg"
              alt="buckinghamshire cleaning services"
              width={700}
              height={700}
              className="w-full h-[350px] md:h-[440px] rounded-[20px] object-cover"
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
                src="/location/buckinghamshire2.jpg"
                alt="buckinghamshire cleaning services"
                width={700}
                height={700}
                className="w-full h-[350px] md:h-[500px] rounded-[20px] object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-1 ">
            <h2 className="text-2xl md:3xl lg:text-4xl font-bold leading-normal text-primary">
             Why Choose CQD Cleaning Service?
            </h2>
            <p className="text-base md:text-lg font-normal leading-[120%] text-primary pt-4">
              Since 2012, CQD Cleaning Service has been a trusted provider of professional cleaning across Buckinghamshire. Businesses choose us because we combine expertise, eco-friendly practices, and attention to detail with competitive pricing.
            </p>
            <ul className="list-disc list-inside pt-4 space-y-2">
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Reliable & Consistent:</strong>High-quality cleaning delivered on every visit.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Tailored Solutions :</strong> Flexible cleaning packages designed around your needs.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Affordable Rates :</strong> Professional service at competitive prices.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Eco-Friendly Methods :</strong>  Non-toxic, sustainable products and modern equipment.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Minimal Disruption :</strong> Discreet and efficient cleaning during or outside working hours.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Customer Satisfaction :</strong> A spotless environment that exceeds expectations.
              </li>
            </ul>
            <LocationPhoneCta />
          </div>
        </div>
      </section>

      {/* Our Commercial Cleaning Services in Buckinghamshire section */}
      <section>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-40 py-8 md:py-10 lg:py-12">
          <div className="md:col-span-1">
            <h1 className="text-2xl md:3xl lg:text-4xl font-bold leading-normal text-primary">
              Our Commercial Cleaning Services in Buckinghamshire
            </h1>
            <p className="text-base md:text-lg font-normal leading-[120%] text-primary pt-4">
              We provide a full range of commercial cleaning services across Buckinghamshire, designed to meet the needs of offices, retail outlets, hospitality venues, and specialist industries.
              <br />
             Our services include daily and weekly office cleaning to keep workplaces tidy and productive, as well as expert carpet cleaning to remove stains, dirt, and allergens. For businesses that value a great first impression, we offer professional window cleaning inside and out. We also maintain washrooms to the highest hygienic standards, ensuring they are safe and welcoming for staff and visitors.
 <br />
             For retail businesses, we deliver spotless shop and showroom cleaning, while our restaurant and pub cleaning covers kitchens, dining areas, and bar spaces. Hotels can rely on our hospitality cleaning to refresh guest rooms, lobbies, and shared areas to professional standards.

              <br />
             We also work with schools, nurseries, healthcare practices, and gyms, providing safe and hygienic environments tailored to their needs. Beyond that, our team delivers specialist cleaning for cinemas, theatres, event venues, industrial workshops, transport fleets, and marine vessels. Whatever your industry, CQD offers reliable, tailored solutions to keep your premises looking their very best.

            </p>
            <LocationPhoneCta />
          </div>
          <div className="md:col-span-1">
            <Image
              src="/location/buckinghamshire3.jpg"
              alt="buckinghamshire cleaning services"
              width={700}
              height={700}
              className="w-full h-[350px] md:h-[600px] rounded-[20px] object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <ServicesHighlightedLocations
          title="Expert Cleaning Services in Buckinghamshire & Surrounding Areas"
          description="CQD Cleaning Service proudly serves businesses across Buckinghamshire and nearby locations, including:"
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
              How much does commercial cleaning in Buckinghamshire cost?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
             The price depends on the size of your premises, required services, and cleaning frequency. We provide tailored quotes to suit your needs.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="safety">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
              Do you offer one-off deep cleaning services in Buckinghamshire?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
               Yes. We provide both ongoing contracts and one-off deep cleaning solutions.

            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="customization">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
               Can you clean outside business hours?

            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
              Absolutely. We offer early morning, evening, and weekend cleaning to minimise disruption.
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
              What types of businesses do you clean in Buckinghamshire?

            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
              We clean offices, schools, gyms, nurseries, healthcare practices, restaurants, hotels, retail shops, industrial sites, and more.

            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="deep-cleaning1">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
              How do I get a quote for commercial cleaning in Buckinghamshire?

            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
             Simply contact us by phone, email, or through our website to request a free, no-obligation quote.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <LocationPhoneCta />
      </section>
    </div>
  );
};

export default Buckinghamshire;
