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

const Beaconsfield = () => {
  return (
    <div className="container max-w-9xl mx-auto px-4 md:px-6">
      {/* Commercial Cleaning Services in Beaconsfield section */}
      <section>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-40 py-8 md:py-10 lg:py-12">
          <div className="md:col-span-1">
            <h1 className="text-2xl md:3xl lg:text-4xl font-bold leading-normal text-primary">
              Commercial Cleaning Services in Beaconsfield
            </h1>
            <p className="text-base md:text-lg font-normal leading-[120%] text-primary pt-4">
              Are you looking for trusted commercial cleaning services in
              Beaconsfield? At CQD Cleaning Service, we provide professional,
              tailored solutions to keep your business spaces spotless,
              hygienic, and welcoming. From daily office cleaning to deep carpet
              care, window cleaning, and specialist sanitization, our expert
              team works to the highest standards to ensure your premises always
              look their best. Serving Beaconsfield and surrounding areas, we
              are committed to reliability, quality, and customer satisfaction.
              Contact us today to discover how our commercial cleaning services
              in Beaconsfield can support your business.
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
              src="/location/beaconsfield1.jpg"
              alt="beaconsfield cleaning services"
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
                src="/location/beaconsfield2.jpg"
                alt="beaconsfield cleaning services"
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
              professional cleaning across Buckinghamshire. Businesses in
              Beaconsfield choose us because we combine expertise, eco-friendly
              products, and attention to detail with competitive pricing.
            </p>
            <ul className="list-disc list-inside pt-4 space-y-2">
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Reliable & Consistent:</strong> High-quality cleaning on
                every visit.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Tailored Solutions :</strong> Flexible cleaning packages
                to match your needs.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Affordable Rates :</strong> Professional service at
                competitive prices.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Eco-Friendly Methods :</strong> Safe, sustainable
                products and modern equipment.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Minimal Disruption :</strong> Discreet and efficient
                service during or outside working hours.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Customer Satisfaction :</strong> A spotless environment
                that exceeds expectations.
              </li>
            </ul>
            <LocationPhoneCta />
          </div>
        </div>
      </section>

      {/*Our Commercial Cleaning Services in Beaconsfield 
 section */}
      <section>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-40 py-8 md:py-10 lg:py-12">
          <div className="md:col-span-1">
            <h1 className="text-2xl md:3xl lg:text-4xl font-bold leading-normal text-primary">
              Our Commercial Cleaning Services in Beaconsfield
            </h1>
            <p className="text-base md:text-lg font-normal leading-[120%] text-primary pt-4">
              We offer a wide range of commercial cleaning services in
              Beaconsfield, designed to meet the needs of different industries
              and businesses. Whether you run an office, retail outlet, or
              hospitality venue, our team provides reliable cleaning to keep
              your premises safe and professional.
              <br />
              Our services include daily and weekly{" "}
              <strong> office cleaning,</strong> ensuring a tidy and productive
              workspace, as well as specialist <strong>carpet cleaning</strong>{" "}
              to remove stains, dirt, and allergens. For businesses that want a
              perfect first impression, we provide streak-free{" "}
              <strong>window cleaning</strong> both inside and out. We also
              maintain <strong>washrooms</strong> to the highest hygienic
              standards, making them safe and welcoming for staff and visitors
              alike.
              <br />
              For customer-facing businesses, we deliver professional{" "}
              <strong>retail cleaning,</strong> ensuring shops and showrooms
              remain spotless, while our{" "}
              <strong>restaurant and pub cleaning</strong> covers everything
              from kitchens to dining areas. Hospitality businesses can rely on
              our <strong>hotel cleaning services</strong> to refresh guest
              rooms, lobbies, and shared spaces to professional standards.
              <br />
              We also serve educational and healthcare sectors with safe and
              hygienic <strong>school, nursery, and GP cleaning,</strong> along
              with specialist services for{" "}
              <strong>
                gyms, cinemas, theatres, event venues, industrial workshops,
                transport fleets, and marine vessels.
              </strong>{" "}
              Whatever your industry, our cleaning team provides tailored
              solutions to keep your premises looking their very best.
            </p>
            <LocationPhoneCta />
          </div>
          <div className="md:col-span-1">
            <Image
              src="/location/beaconsfield2.jpg"
              alt="bracknell cleaning services"
              width={700}
              height={700}
              className="w-full h-[350px] md:h-[650px] rounded-[20px] object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <ServicesHighlightedLocations
          title="Expert Cleaning Services in Beaconsfield & Surrounding Areas"
          description="CQD Cleaning Service proudly serves businesses in Beaconsfield and across the wider region, including:"
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
              How much does commercial cleaning in Beaconsfield cost?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
              The price depends on the size of your premises, the services
              required, and cleaning frequency. We provide tailored quotes to
              suit your needs.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="safety">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
              Do you offer one-off deep cleaning services in Beaconsfield?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
              Yes. We provide both regular cleaning contracts and one-off deep
              cleans.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="customization">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
              Can you clean outside business hours?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
              Absolutely. We offer early morning, evening, and weekend cleaning
              to avoid disruption.
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
              What types of businesses do you clean in Beaconsfield?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
              We clean offices, schools, gyms, nurseries, healthcare practices,
              restaurants, hotels, retail shops, and more.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="deep-cleaning1">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
              How do I get a quote for commercial cleaning in Beaconsfield?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
              Simply contact us via phone, email, or our website to request a
              free, no-obligation quote.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <LocationPhoneCta />
      </section>
    </div>
  );
};

export default Beaconsfield;
