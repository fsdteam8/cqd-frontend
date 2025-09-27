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
        How much does commercial cleaning in High Wycombe cost?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
               Our pricing depends on the size of your premises and the type of cleaning required. We offer affordable, tailored packages to suit your budget.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="safety">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
          Do you provide one-off deep cleaning services in High Wycombe?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
               Yes, we offer both regular cleaning contracts and one-off deep cleans to suit your business needs.

            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="customization">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
             Can you clean outside business hours?

            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
              Absolutely — we work around your schedule, offering evening, weekend, and early morning cleaning to avoid disruption.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="pricing">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
           Do you use eco-friendly products?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
               Yes, we prioritize sustainable, non-toxic cleaning solutions to protect both people and the environment.

            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="deep-cleaning">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
       What types of businesses do you clean in High Wycombe?

            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
               We serve offices, schools, gyms, restaurants, retail shops, hotels, healthcare facilities, and more.

            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
};

export default FAQ;
