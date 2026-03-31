import Image from "next/image";
import React from "react";
import LocationPhoneCta from "./LocationPhoneCta";

import img1 from "../../../public/location/Bicester1.jpg"
import img2 from "../../../public/location/Bicester2.jpg"
import img3 from "../../../public/location/Bicester3.jpg"

const Banbury = () => {
  return (
    <div className="container max-w-9xl mx-auto px-4 md:px-6">
      {/* Professional Commercial Cleaning Services in Oxford section */}
      <section>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-40 py-8 md:py-10 lg:py-12">
          <div className="md:col-span-1">
            <h1 className="text-2xl md:3xl lg:text-4xl font-bold leading-normal text-primary">
              Commercial Cleaning Services in Banbury
            </h1>
            <p className="text-base md:text-lg font-normal leading-[120%] text-primary pt-4">
              Are you looking for trusted <strong>commercial cleaning services in
              Banbury?</strong> At CQD Cleaning Service, we deliver professional and
              tailored cleaning solutions for businesses across Banbury and the
              surrounding areas. From daily office cleaning and deep carpet care
              to window cleaning and specialist sanitization, our experienced
              team ensures your workplace remains spotless, hygienic, and
              welcoming. With a focus on quality, reliability, and customer
              satisfaction, we are the go-to choice for businesses seeking
              dependable cleaning services in Banbury
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
              // src="/location/Bicester1.jpg"
              src={img1}
              alt="maidenhead cleaning services"
              width={700}
              height={700}
              className="w-full h-[350px] md:h-[410px] rounded-[20px] object-cover"
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
                // src="/location/Bicester2.jpg"
                src={img2}
                alt="oxford cleaning services"
                width={700}
                height={700}
                className="w-full h-[350px] md:h-[500px] rounded-[20px] object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-1 ">
            <h2 className="text-2xl md:3xl lg:text-4xl font-bold leading-normal text-primary">
            Why Choose CQD Cleaning Service?
            </h2>
            <p className="text-base md:text-lg font-normal leading-[120%] text-primary pt-4">
             Since 2012, CQD Cleaning Service has built a reputation for delivering high-quality cleaning services across Oxfordshire and beyond. Businesses in Banbury choose us because we combine experience, eco-friendly products, and attention to detail with flexible and affordable solutions.
            </p>

            <ul className="list-disc list-inside pt-4 space-y-2">
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Reliable & Consistent:</strong>Every clean is carried out to the highest standards.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Tailored Cleaning Plans:</strong>  Services designed around your business requirements.

              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Affordable Pricing :</strong> Competitive rates without compromising on quality.

              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Eco-Friendly Methods:</strong> Safe, sustainable cleaning products and modern equipment
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Efficient & Discreet:</strong> Cleaning completed with minimal disruption.

              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Customer Focused  :</strong> Dedicated to exceeding client expectations.
              </li>
            </ul>
            <LocationPhoneCta />
          </div>
        </div>
      </section>
      {/* Our Commercial Cleaning Services in Oxford  */}
      <section>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-40 py-8 md:py-10 lg:py-12">
          <div className="md:col-span-1 ">
            <h2 className="text-2xl md:3xl lg:text-4xl font-bold leading-normal text-primary">
             Our Commercial Cleaning Services in Banbury
            </h2>
            <p className="text-base md:text-lg font-normal leading-[120%] text-primary pt-4">
             We offer a wide range of <strong>commercial cleaning services in Banbury,</strong> designed to meet the needs of different businesses and industries:
            </p>
            <ul className="list-disc list-inside pt-4 space-y-2">
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Office Cleaning </strong> –Daily or weekly cleaning for a professional and productive workspace.

              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Carpet Cleaning</strong> –  Deep cleaning to remove dirt, stains, and allergens.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Window Cleaning</strong> –  Streak-free interior and exterior window cleaning.

              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Washroom Cleaning</strong> – Hygienic and fully sanitized washroom facilities.

              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Retail Cleaning </strong> – Spotless cleaning for shops, showrooms, and retail outlets
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>School & Nursery Cleaning </strong> –  Safe and hygienic environments for children and staff.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Gym Cleaning </strong> –  Sanitizing gym equipment, floors, and changing areas.

              </li>

              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Healthcare & GP Cleaning</strong> – Specialist cleaning for clinics, dental surgeries, and medical centres.

              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Restaurant & Pub Cleaning</strong> –  Kitchens, dining areas, and bars professionally cleaned.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Hotel Cleaning </strong>Guest rooms, receptions, and shared areas maintained to high standards.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Event Venue Cleaning </strong> – Pre- and post-event
                deep cleaning services.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Industrial & Workshop Cleaning</strong> –  Clean seating, auditoriums, and backstage areas.

              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Cinema & Theatre Cleaning</strong> – Clean auditoriums,
                seating, and backstage spaces.
              </li>

              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Soft Play Cleaning</strong> – Hygienic cleaning for
                children’s play areas.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Transport & Fleet Cleaning </strong> – From taxis to commercial fleets, keeping vehicles spotless.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Marine & Boat Cleaning </strong>– Professional cleaning
                for marine vessels.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Professional Office Cleaning </strong> – Accountancy, legal, and consultancy offices kept tidy and professional.
              </li>
            </ul>
            <LocationPhoneCta />
          </div>
          <div className="md:col-span-1 relative">
            <div className=" sticky top-28 z-40">
              <Image
                // src="/location/Bicester3.jpg"
                src={img3}
                alt="oxford cleaning services"
                width={700}
                height={700}
                className="w-full h-[350px] md:h-[500px] rounded-[20px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banbury;
