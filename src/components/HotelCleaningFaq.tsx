import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HotelCleaningFaq = () => {
  return (
    <div>
      <section className="container max-w-9xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl lg:text-[44px] leading-normal text-center font-bold text-[#14213d]">
          Frequently Asked Questions About Expert Hotel Cleaning Services
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-4 mt-5">
          <AccordionItem value="schedule">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
              What makes your hotel cleaning services special?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
              We stand out by offering personalized cleaning solutions and a
              professional crew focused on keeping every area spotless and
              welcoming.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="safety">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
              How often should hotel cleaning services be scheduled?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
              The frequency varies, but daily cleaning of guest rooms plus
              periodic deep cleans of shared spaces works well.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="customization">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
              Are your cleaners properly trained?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
              Our staff undergoes rigorous training to meet industry standards
              and prioritize guest safety and satisfaction.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="pricing">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
              Can hotel cleaning services be customized to fit my hotel?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
              Yes, our services are flexible and designed around your hotel’s
              unique requirements.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="deep-cleaning">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
              Do your hotel cleaning services cover common areas?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
              Our cleaning services include thorough attention to common spaces
              such as corridors, lobbies, and public restrooms.
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

export default HotelCleaningFaq;
