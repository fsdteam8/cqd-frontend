import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SchoolCleaningFaq = () => {
  return (
    <div>
      <section className="container max-w-9xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl leading-normal text-center font-bold text-[#14213d]">
          Frequently Asked Questions about School Cleaning Services
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-4 mt-5">
          <AccordionItem value="schedule">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
              What kind of cleaning schedule do you have for schools?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
              Our cleaning schedules are flexible and fitted to the requirements
              of your school. Choices such as daily, weekly, holiday, term-end,
              and deep cleaning plans are available to keep classrooms, offices,
              and common areas clean all year long.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="safety">
          <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
              What are the safety measures in school cleaning?
            </AccordionTrigger>
             <AccordionContent className="text-base font-medium text-gray-700">
              Our school cleaners conduct thorough safety measures. All
              employees are DBS-approved, educated on health and safety
              regulations, and apply child and adult-friendly non-toxic
              products.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="customization">
          <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
              Is it possible to customize cleaning plans according to individual
              schools?
            </AccordionTrigger>
             <AccordionContent className="text-base font-medium text-gray-700">
              Yes. We also collaborate with every school to develop custom
              cleaning routines and programs that suit the schedule, budget, and
              hygiene needs of the school, including special cleaning whenever
              there are exams, events, etc.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="pricing">
          <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
              What is the pricing of cleaning services in schools?
            </AccordionTrigger>
             <AccordionContent className="text-base font-medium text-gray-700">
              Pricing is determined by the size of the school, cleaning
              frequency, and type of services needed. We provide clear pricing
              with no added costs, and we customize plans to offer affordable
              solutions.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="deep-cleaning">
          <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
              Do you offer deep cleaning and sanitisation in schools?
            </AccordionTrigger>
             <AccordionContent className="text-base font-medium text-gray-700">
              Absolutely. We provide extensive deep cleaning, including
              antiviral fogging and disinfection of high-touch surfaces to
              minimize the transmission of germs and ensure a healthy learning
              space.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="qualifications">
          <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
              What are the qualifications of your professional school cleaners?
            </AccordionTrigger>
             <AccordionContent className="text-base font-medium text-gray-700">
              Our cleaners are carefully trained, DBS checked, and regularly
              assessed on their quality. They are aware of the special hygienic
              requirements of an educational facility and are adhering to the
              best practices.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="hire">
          <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
              How will the school hire your cleaning services?
            </AccordionTrigger>
             <AccordionContent className="text-base font-medium text-gray-700">
              Just call us or contact us online. We will meet with you to assess
              which facilities cleaning services your school needs, provide a
              free consultation, and devise a customized facilities cleaning
              plan with clear pricing and scheduling.
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

export default SchoolCleaningFaq;
