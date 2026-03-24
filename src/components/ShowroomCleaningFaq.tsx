import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ShowroomCleaningFaq = () => {
  return (
    <div>
      <section className="container max-w-9xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl lg:text-[44px] leading-normal text-center font-bold text-[#14213d]">
          FAQ | Showroom Cleaning Service
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-4 mt-5">
          <AccordionItem value="schedule">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
              How do showroom cleaning services vary between retail and car dealerships?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
              Retail focuses on dust-free displays and customer areas. While dealerships need spotless vehicles, glass, and clean floors.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="safety">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
              What specialized equipment is used for showroom floor and window cleaning?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
              Floor polishers, floor scrubbers, squeegees, and water-fed pole systems for perfect cleaning.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="customization">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
              What are the most common challenges in maintaining showroom cleanliness?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
              High foot traffic, hidden dust behind displays, and keeping glass surfaces spotless.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="pricing">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
              How do eco-friendly cleaning products impact showroom presentation and hygiene?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
              Eco-friendly products clean effectively, protect surfaces. It easily supports a healthy and eco-friendly image.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="deep-cleaning">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
              What benefits do regular showroom cleaning services bring to customer perception?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
              A spotless showroom not just boosts the brand image but also encourages customers to visit the showroom repeatedly
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

export default ShowroomCleaningFaq;
