import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

const FAQ = () => {
  return (
    <div>
       <section className="container max-w-9xl mx-auto px-4 md:px-6  py-8 md:py-10 lg:py-12">
        <h2 className="text-3xl md:text-4xl lg:text-[44px] leading-normal text-center font-bold text-[#14213d]">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-4 mt-5">
          <AccordionItem value="schedule">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
           How much does commercial cleaning in Luton cost?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
               Pricing depends on premises size, type of cleaning, and frequency. We offer tailored, affordable packages for all businesses.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="safety">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
              Do you provide one-off deep cleaning services?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
               Yes, we provide both regular cleaning contracts and one-off deep cleaning services.

            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="customization">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
                Can you clean outside business hours?

            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
              Yes, we work evenings, weekends, or early mornings to avoid disruption.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="pricing">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
             Are your cleaning products eco-friendly and safe?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
                Absolutely — we use non-toxic, sustainable products and modern equipment.

            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="deep-cleaning">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
              What types of businesses do you serve in Luton?

            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
                 We clean offices, schools, nurseries, gyms, restaurants, hotels, healthcare facilities, retail shops, workshops, data centres, and more.

            </AccordionContent>
          </AccordionItem>
           <AccordionItem value="cleaning">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
                How can I get a quote for cleaning services in Luton?

            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
               Contact us via phone, email, or our website for a free, no-obligation quote.

            </AccordionContent>
          </AccordionItem>
           <AccordionItem value="c-cleaning">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
             Do you provide specialist cleaning services?

            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
               Yes, we offer specialist cleaning for theatres, soft play areas, dental clinics, data centres, mosques, and other unique commercial spaces.

            </AccordionContent>
          </AccordionItem>
        </Accordion>
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

export default FAQ;
