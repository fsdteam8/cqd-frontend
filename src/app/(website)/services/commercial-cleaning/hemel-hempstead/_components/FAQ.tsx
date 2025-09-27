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
          How much does commercial cleaning in Hemel Hempstead cost?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
              Pricing depends on premises size, type of cleaning, and frequency. We offer tailored, affordable packages for all businesses.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="safety">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
             Do you provide one-off or deep cleaning services?
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
           What types of businesses do you serve in Hemel Hempstead?

            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
                 We clean offices, schools, nurseries, gyms, restaurants, hotels, healthcare facilities, retail shops, workshops, data centres, and more.

            </AccordionContent>
          </AccordionItem>
           <AccordionItem value="cleaning">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
               How can I get a quote for cleaning services in Hemel Hempstead?

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
               Yes, we offer specialist cleaning for theatres, soft play areas, dental clinics, data centres, mosques, and other unique commercial spaces

            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
};

export default FAQ;
