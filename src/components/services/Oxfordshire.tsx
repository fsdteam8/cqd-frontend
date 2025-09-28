import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import ServicesHighlightedLocations from "./ServicesHighlightedLocations";

const Oxfordshire = () => {
  return (
    <div className="container max-w-9xl mx-auto px-4 md:px-6">
      {/*Professional Commercial Cleaning Service in Oxfordshire section */}
      <section>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-40 py-8 md:py-10 lg:py-12">
          <div className="md:col-span-1">
            <h1 className="text-2xl md:3xl lg:text-4xl font-bold leading-normal text-primary">
             Professional Commercial Cleaning Service in Oxfordshire
            </h1>
            <p className="text-base md:text-lg font-normal leading-[120%] text-primary pt-4">
              Are you searching for a trusted commercial cleaning service in Oxfordshire? At CQD Cleaning Service, we provide tailored cleaning solutions to keep your workplace spotless, hygienic, and professional. Whether you need regular office cleaning, deep cleaning, or specialist services, our experienced team ensures your business always makes a great impression. Serving Oxfordshire and the surrounding areas, we focus on delivering consistent quality and client satisfaction.
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
              src="/location/oxfordshire1.jpg"
              alt="oxfordshire cleaning services"
              width={700}
              height={700}
              className="w-full h-[350px] md:h-[370px] rounded-[20px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us? */}
      <section>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-40 py-8 md:py-10 lg:py-12">
          <div className="md:col-span-1 relative">
            <div className=" sticky top-28 z-40">
              <Image
                src="/location/oxfordshire2.jpg"
                alt="oxfordshire cleaning services"
                width={700}
                height={700}
                className="w-full h-[350px] md:h-[490px] rounded-[20px] object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-1 ">
            <h2 className="text-2xl md:3xl lg:text-4xl font-bold leading-normal text-primary">
              Why Choose Us?
            </h2>
            <p className="text-base md:text-lg font-normal leading-[120%] text-primary pt-4">
             With years of expertise, CQD Cleaning Service has become a trusted name for commercial cleaning in Oxfordshire. We understand that every business has unique requirements, and our services are designed to provide maximum flexibility and value.

            </p>
            <p className="text-base md:text-lg font-normal leading-[120%] text-primary pt-4">
             Here’s why companies choose us:
            </p>
            <ul className="list-disc list-inside pt-4 space-y-2">
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Reliability & Consistency:</strong>  Always on time, always professional.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Tailored Solutions :</strong> From daily cleaning to one-off deep cleans, we adapt to your needs.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Customer Satisfaction:</strong> Our goal is to exceed your expectations, every time.

              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Affordable & Flexible:</strong>Competitive rates with flexible schedules that suit your business hours.

              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Eco-Friendly Approach:</strong> We use advanced tools and eco-conscious products for safe, sustainable cleaning.

              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Discreet & Efficient:</strong>We respect your workspace and minimize disruption to daily operations.
              </li>
            </ul>
            <p className="text-base md:text-lg font-normal leading-[120%] text-primary pt-4">
              Choose CQD Cleaning Service for a spotless, productive, and welcoming work environment in Oxfordshire.

            </p>
          </div>
        </div>
      </section>

      {/* Our Commercial Cleaning Services in Oxfordshire section  */}
      <section>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-40 py-8 md:py-10 lg:py-12">
          <div className="md:col-span-1 ">
            <h2 className="text-2xl md:3xl lg:text-4xl font-bold leading-normal text-primary">
             Our Commercial Cleaning Services in Oxfordshire
            </h2>
            <p className="text-base md:text-lg font-normal leading-[120%] text-primary pt-4">
             We are proud to offer a wide range of commercial cleaning services across Oxfordshire, covering all industries and business types. Whether you run an office, a retail store, or a healthcare facility, we have the expertise to keep it clean and hygienic.
            </p>
            <p className="text-base md:text-lg font-normal leading-[120%] text-primary pt-4">
              Our services include:
            </p>
            <ul className="list-disc list-inside pt-4 space-y-2">
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Window Cleaning</strong> Keep your windows sparkling and streak-free with our professional window cleaning service. We help businesses across Oxfordshire maintain a polished, welcoming appearance inside and out.

              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Carpet Cleaning </strong>Our deep carpet cleaning service removes stains, dirt, and allergens, restoring freshness to your workplace. Perfect for offices, schools, and hospitality venues across Oxfordshire.

              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Washroom Cleaning </strong>We provide hygienic and sanitized washroom cleaning, ensuring facilities for staff and visitors are always fresh and spotless. Trusted by businesses throughout Oxfordshire.

              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Public Transport Cleaning  </strong> Our team delivers thorough cleaning for buses, trains, and other public transport services, helping maintain safe and hygienic travel across Oxfordshire.

              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Private Transport Cleaning  </strong>
               From taxis to company cars and vans, we offer professional vehicle cleaning services to keep business fleets in Oxfordshire looking their best.

              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Marine & Boat Cleaning  </strong>Our specialist cleaning service for boats and marine vessels ensures they remain polished, clean, and ready for use throughout Oxfordshire.



              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>
                  Commercial Fleet & Logistic Vehicle Cleaning {" "}
                </strong>
                We help logistics companies maintain a professional image with regular fleet cleaning services across Oxfordshire.

              </li>

              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Office Cleaning </strong>Reliable daily or weekly office cleaning tailored to your schedule. We create productive and professional workspaces for businesses across Oxfordshire.

              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>General Commercial Cleaning  </strong>
                From warehouses to retail spaces, our general cleaning services cover all types of commercial premises in Oxfordshire.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Church Cleaning  </strong>Respectful and detailed cleaning for churches and other places of worship across Oxfordshire.

              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Mosque Cleaning  </strong>We provide thorough mosque cleaning to maintain clean, welcoming prayer areas for communities in Oxfordshire.

              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Event Space Cleaning  </strong>Our pre- and post-event cleaning ensures that venues across Oxfordshire are spotless, organized, and ready for the next occasion.

              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Dental Cleaning  </strong>Specialist cleaning services designed for dental practices and clinics, maintaining the highest hygiene standards in Oxfordshire.

              </li>

              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>School Cleaning </strong>We deliver safe, hygienic cleaning for schools and colleges across Oxfordshire, ensuring a healthy environment for students and staff.

              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Nursery Cleaning  </strong>Our nursery cleaning service focuses on child safety and hygiene, trusted by childcare providers across Oxfordshire.

              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Gym Cleaning </strong> We sanitize gym equipment, floors, and changing facilities to keep leisure centres and fitness clubs in Oxfordshire fresh and hygienic.

              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Data Centre Cleaning  </strong> Our precision cleaning protects sensitive IT and data equipment, helping businesses across Oxfordshire maintain dust-free facilities.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Retail Cleaning </strong>We keep shops and retail outlets spotless, creating inviting shopping experiences for customers across Oxfordshire.

              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>GP Surgeries Cleaning </strong> Our team provides professional cleaning for GP surgeries and healthcare practices, supporting safe patient care in Oxfordshire.

              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Pubs and Restaurants Cleaning </strong>From kitchens to dining areas, we deliver comprehensive cleaning for hospitality venues across Oxfordshire.

              </li>

              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Soft Play Cleaning  </strong> We provide deep cleaning for soft play centres, ensuring safe and hygienic play areas for children in Oxfordshire.

              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Cinema Cleaning </strong>Our cinema cleaning service keeps auditoriums and communal spaces fresh and inviting for moviegoers across Oxfordshire.

              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Clubs Cleaning  </strong> We deliver hygienic and welcoming cleaning for entertainment clubs and venues across Oxfordshire.

              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Accountancy Offices Cleaning </strong>{" "}
                Professional cleaning for accountancy and financial offices, ensuring tidy and presentable workplaces throughout Oxfordshire.

              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Showroom Cleaning </strong> We help businesses impress clients with immaculate showroom cleaning across Oxfordshire.

              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Theatres Cleaning </strong>Detailed cleaning for theatres, including seating, stages, and backstage areas across Oxfordshire.

              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Workshop Space Cleaning </strong> Our workshop cleaning service ensures safe, organized, and hygienic working environments across Oxfordshire.

              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Hotel Cleaning </strong>From guest rooms to lobbies, we provide thorough hotel cleaning that keeps hospitality standards high across Oxfordshire.

              </li>
            </ul>
          </div>
          <div className="md:col-span-1 relative">
            <div className=" sticky top-28 z-40">
              <Image
                src="/location/oxfordshire3.jpg"
                alt="oxfordshire cleaning services"
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
          title="Expert Cleaning Services in Oxfordshire and Surrounding Areas"
          description="At CQD Cleaning Service, we extend our commercial cleaning service in Oxfordshire to businesses across nearby towns and counties. Wherever you’re located, our team is ready to deliver professional and reliable cleaning solutions.
We proudly serve businesses in:

"
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
              Do you provide one-off deep cleaning as well as regular contracts?

            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
              Yes. We offer both one-off deep cleans for special occasions and regular contract cleaning tailored to your schedule and business needs.

            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="safety">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
             Are your cleaning products safe and eco-friendly?

            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
              Absolutely. We prioritize environmentally friendly cleaning solutions that are safe for your staff, customers, and the environment.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="customization">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
              Can you work outside of business hours?
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
               Yes. We provide flexible cleaning schedules, including evenings and weekends, to minimize disruption to your operations.

            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="pricing">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
              Do you offer cleaning services for schools and healthcare facilities?

            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
             Yes. We specialize in cleaning sensitive environments like schools, nurseries, GP surgeries, dental practices, and healthcare facilities with strict hygiene standards.

            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="deep-cleaning">
            <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
             How do you ensure consistent quality in your cleaning services?

            </AccordionTrigger>
            <AccordionContent className="text-base font-medium text-gray-700">
              Our team follows a structured checklist system, regular supervision, and ongoing staff training to maintain high-quality, reliable results every time.

            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
};

export default Oxfordshire;
