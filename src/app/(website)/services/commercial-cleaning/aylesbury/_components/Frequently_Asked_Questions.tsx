import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

const Frequently_Asked_Questions = () => {
  return (
    <div>
       <section className="container max-w-9xl mx-auto px-4 md:px-6  py-8 md:py-10 lg:py-12">
        <h2 className="text-3xl md:text-4xl lg:text-[44px] leading-normal text-center font-bold text-[#14213d]">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-4 mt-5">
          <AccordionItem value="schedule">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
             How much does commercial cleaning in Aylesbury cost?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
              Pricing depends on the size of your premises, type of cleaning, and frequency. We offer tailored packages to suit your business.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="safety">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
             Do you offer one-off or deep cleaning services?
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
             Yes, we work evenings, weekends, or early mornings to avoid disruption..
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="pricing">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
             Are your cleaning products safe and eco-friendly?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
              Absolutely. We use non-toxic, sustainable cleaning products and modern equipment.

            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="deep-cleaning">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
              What types of businesses do you serve in Aylesbury?

            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
               We serve offices, schools, nurseries, gyms, restaurants, hotels, healthcare facilities, retail shops, workshops, data centres, and more.

            </AccordionContent>
          </AccordionItem>
           <AccordionItem value="cleaning">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
             How do I get a quote for cleaning services in Aylesbury?

            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
               You can contact us via phone, email, or our website. We’ll provide a free, no-obligation quote.

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

export default Frequently_Asked_Questions;
