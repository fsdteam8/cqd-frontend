import Image from "next/image";
import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ServicesHighlightedLocations from "./ServicesHighlightedLocations";

const MiltonKeynes = () => {
  return (
    <div className="container max-w-9xl mx-auto px-4 md:px-6">
      {/* Professional Commercial Cleaning Services in Milton Keynes section */}
      <section>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-40 py-8 md:py-10 lg:py-12">
          <div className="md:col-span-1">
            <h1 className="text-2xl md:3xl lg:text-4xl font-bold leading-normal text-primary">
              Professional Commercial Cleaning Services in Milton Keynes
            </h1>
            <p className="text-base md:text-lg font-normal leading-[120%] text-primary pt-4">
              Looking for trusted commercial cleaning services in Milton Keynes? At CQD Cleaning Service, we provide professional, tailored cleaning solutions for businesses of all sizes. From regular office cleaning to deep cleaning, carpet care, and specialist sanitization, our expert team ensures your workplace remains spotless, hygienic, and welcoming. Serving Milton Keynes and nearby areas, we focus on delivering high-quality results with reliability and customer satisfaction. Contact us today to see how our commercial cleaning services in Milton Keynes can help your business shine.
            </p>
              {/* button  */}
            <div className="flex items-center justify-center mt-8 md:mt-10">
              <button className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-normal text-[#0F2A5C]">
                <span className="font-semibold border border-black/20  py-2 px-10  rounded-[10px]">
                  Call Us : <strong>09888988</strong>
                </span>
              </button>
            </div>
          </div>
          <div className="md:col-span-1">
            <Image
              src="/location/milton-keynes1.jpg"
              alt="milton keynes cleaning services"
              width={700}
              height={700}
              className="w-full h-[350px] md:h-[430px] rounded-[20px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us?  */}
      <section>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-40 py-8 md:py-10 lg:py-12">
          <div className="md:col-span-1 relative">
            <div className=" sticky top-28 z-40">
              <Image
                src="/location/milton-keynes2.jpg"
                alt="milton keynes cleaning services"
                width={700}
                height={700}
                className="w-full h-[350px] md:h-[500px] rounded-[20px] object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-1 ">
            <h2 className="text-2xl md:3xl lg:text-4xl font-bold leading-normal text-primary">
              Why Choose Us?
            </h2>
            <p className="text-base md:text-lg font-normal leading-[120%] text-primary pt-4">
              At CQD Cleaning Service, we’ve been providing reliable commercial cleaning services in Milton Keynes since 2012. Businesses trust us because we combine professionalism, attention to detail, and eco-friendly methods to deliver exceptional results.
            </p>
            <ul className="list-disc list-inside pt-4 space-y-2">
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Reliable & Consistent:</strong> High-quality cleaning for every visit.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Tailored Solutions:</strong> Flexible cleaning plans to match your business needs.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Affordable Pricing:</strong> Competitive rates with no compromise on quality.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Eco-Friendly Products:</strong> Safe cleaning products and modern equipment.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Discreet & Efficient:</strong> Minimal disruption to your business operations.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Customer Satisfaction:</strong> We go above and beyond to ensure a spotless environment.
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Our Commercial Cleaning Services in Milton Keynes section  */}
      <section>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-40 py-8 md:py-10 lg:py-12">
          <div className="md:col-span-1 ">
            <h2 className="text-2xl md:3xl lg:text-4xl font-bold leading-normal text-primary">
              Our Commercial Cleaning Services in Milton Keynes
            </h2>
            <p className="text-base md:text-lg font-normal leading-[120%] text-primary pt-4">
              We offer a comprehensive range of professional cleaning services in Milton Keynes to keep your business spaces clean, hygienic, and professional:
            </p>
            <ul className="list-disc list-inside pt-4 space-y-2">
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Office Cleaning </strong>  Daily, weekly, or one-off office cleaning to maintain a tidy, hygienic, and productive workspace.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Carpet Cleaning</strong> Deep carpet cleaning to remove dirt, stains, and allergens, keeping your floors fresh and welcoming.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Window Cleaning </strong> Interior and exterior window cleaning for streak-free, sparkling results that enhance your building’s appearance.
              </li>

              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Washroom Cleaning </strong> Hygienic and sanitized washroom cleaning to maintain fresh and welcoming facilities.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Retail Cleaning </strong>  Keeping shops, showrooms, and retail spaces spotless and customer-ready.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>School Cleaning </strong>  Creating safe, clean, and healthy learning environments for students and staff.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Nursery Cleaning</strong> Specialized nursery cleaning focused on hygiene and child safety.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Gym Cleaning</strong>{" "}
                Sanitizing gym equipment, floors, changing rooms, and facilities to ensure a healthy workout environment.
              </li>

              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Healthcare & GP Surgeries Cleaning </strong> Maintaining strict hygiene standards for clinics, GP surgeries, and healthcare facilities.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Restaurant & Pub Cleaning </strong> Cleaning kitchens, dining areas, bars, and food prep spaces to meet health standards.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Hotel Cleaning </strong> Full hotel cleaning including guest rooms, lobbies, hallways, and shared spaces.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Event Space Cleaning </strong>  Pre- and post-event cleaning to leave venues spotless and ready for use.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Event Space Cleaning </strong> Our event space cleaning
                services in Oxford prepare your venue before and after events,
                leaving it spotless.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Data Centre Cleaning</strong>  Specialist cleaning for data centres, protecting sensitive equipment from dust and contaminants.
              </li>

              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Church Cleaning</strong>  Respectful and detailed cleaning for churches and religious spaces.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Mosque Cleaning </strong> Professional cleaning services for mosques to maintain hygienic and welcoming prayer areas.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Cinema Cleaning</strong>  Cleaning auditoriums, seating, floors, and communal areas for a fresh movie experience.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Clubs Cleaning </strong> Maintaining hygienic and welcoming environments for nightclubs and entertainment venues.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Soft Play Cleaning</strong> Deep cleaning of soft play areas to ensure a safe and hygienic environment for children.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Showroom Cleaning</strong>  Cleaning car showrooms, furniture stores, and display spaces to impress clients.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Theatre Cleaning</strong> Cleaning auditoriums, seating, backstage areas, and lobbies to the highest standard.
              </li>

              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Workshop & Industrial Space Cleaning </strong> Removing dust, debris, and waste from workshops and industrial areas to maintain safety and organization.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Marine & Boat Cleaning </strong>  Professional cleaning for boats, yachts, and marine vessels.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Private Transport Cleaning </strong>  Cleaning taxis, company cars, and other private vehicles to maintain a professional image.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Public Transport Cleaning </strong>  Thorough cleaning for buses, trains, and other public transport vehicles.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Commercial Fleet & Logistic Vehicle Cleaning </strong>Cleaning and maintaining fleets and logistics vehicles to ensure a professional appearance.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>General Commercial Cleaning</strong>  Flexible cleaning services for warehouses, factories, and all other commercial premises.
              </li>
            </ul>
          </div>
          <div className="md:col-span-1 relative">
            <div className=" sticky top-28 z-40">
              <Image
                src="/location/milton-keynes3.jpg"
                alt="milton keynes cleaning services"
                width={700}
                height={700}
                className="w-full h-[350px] md:h-[500px] rounded-[20px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <ServicesHighlightedLocations
        title="Expert Cleaning Services in Milton Keynes & Surrounding Areas"
        description="We proudly serve Milton Keynes and nearby areas, delivering professional cleaning solutions for businesses of all sizes.
We provide services in:"
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
              How much does commercial cleaning in Milton Keynes cost?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
              Pricing depends on the size of your premises, type of cleaning
              required, and frequency. We offer affordable, tailored cleaning
              packages for businesses of all sizes.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="safety">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
             Do you offer one-off or deep cleaning services?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
              Yes! We provide both regular cleaning contracts and one-off deep cleaning services to meet your business needs.

            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="customization">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
               Can you clean outside business hours?

            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
             Absolutely — our team works evenings, weekends, or early mornings to ensure minimal disruption to your operations.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="pricing">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
             Are your cleaning products safe and eco-friendly?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
             Yes, we use sustainable, non-toxic cleaning products and modern equipment to protect your staff, clients, and the environment.

            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="deep-cleaning">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
              What types of businesses do you clean in Milton Keynes?

            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
               We serve offices, schools, nurseries, gyms, restaurants, hotels, healthcare facilities, retail shops, workshops, data centres, and more.

            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
};

export default MiltonKeynes;
