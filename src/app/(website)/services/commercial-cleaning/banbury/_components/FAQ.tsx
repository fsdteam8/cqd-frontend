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
              How much does commercial cleaning in Banbury cost?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
               Our pricing depends on your building size, type of service, and frequency. We offer tailored packages for each business.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="safety">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
              Do you provide one-off deep cleaning services in Banbury?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
               Yes, we provide both one-off deep cleans and long-term cleaning contracts.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="customization">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
              Can you clean outside of normal business hours?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
              Absolutely. We work evenings, early mornings, and weekends to suit your schedule.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="pricing">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
             Are your cleaning products eco-friendly?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
              Yes. We use non-toxic, sustainable cleaning products and advanced equipment.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="deep-cleaning">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
              What types of businesses do you clean in Banbury?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
             We clean offices, schools, gyms, nurseries, hotels, restaurants, healthcare facilities, retail shops, and more.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="cleaning">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
             .How do I get a quote for commercial cleaning services in Banbury?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
              Simply contact us via phone, email, or through our website to request a free, no-obligation quote.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
};

export default FAQ;
