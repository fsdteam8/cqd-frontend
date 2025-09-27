import Image from "next/image";
import React from "react";

import ServicesHighlightedLocations from "./ServicesHighlightedLocations";

const London = () => {
  return (
    <div className="container max-w-9xl mx-auto px-4 md:px-6">
      {/*Professional Cleaning Services in Bracknell section */}
      <section>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-40 py-8 md:py-10 lg:py-12">
          <div className="md:col-span-1">
            <h1 className="text-2xl md:3xl lg:text-4xl font-bold leading-normal text-primary">
              Professional Commercial Cleaning Service in London
            </h1>
            <p className="text-base md:text-lg font-normal leading-[120%] text-primary pt-4">
              Are you searching for a trusted{" "}
              <strong>commercial cleaning service in London?</strong> At CQD
              Cleaning Service, we provide tailored cleaning solutions to keep
              your workplace spotless, hygienic, and professional. Whether you
              need regular office cleaning, deep cleaning, or specialist
              services, our experienced team ensures your business always makes
              a great impression. Serving London and the surrounding areas, we
              focus on delivering consistent quality and client satisfaction.
            </p>
          </div>
          <div className="md:col-span-1">
            <Image
              src="/location/london1.jpg"
              alt="london cleaning services"
              width={700}
              height={700}
              className="w-full h-[350px] md:h-[300px] rounded-[20px] object-cover"
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
                src="/location/london2.jpg"
                alt="london cleaning services"
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
              With years of expertise, CQD Cleaning Service has become a trusted
              name for <strong>commercial cleaning in London.</strong> We
              understand that every business has unique requirements, and our
              services are designed to provide maximum flexibility and value.
            </p>
            <p className="text-base md:text-lg font-normal leading-[120%] text-primary pt-4">
              Here’s why companies choose us:
            </p>
            <ul className="list-disc list-inside pt-4 space-y-2">
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Reliable & Consistent:</strong> Always on time, always
                professional.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Tailored Solutions :</strong> From daily cleaning to
                one-off deep cleans, we adapt to your needs.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Customer Satisfaction:</strong> Our goal is to exceed
                your expectations, every time.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Affordable & Flexible:</strong>Competitive rates with
                flexible schedules that suit your business hours.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Eco-Friendly Approach:</strong>We use advanced tools and
                eco-conscious products for safe, sustainable cleaning.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Discreet & Efficient:</strong>We respect your workspace
                and minimize disruption to daily operations.
              </li>
            </ul>
            <p className="text-base md:text-lg font-normal leading-[120%] text-primary pt-4">
              Choose CQD Cleaning Service for a spotless, productive, and
              welcoming work environment in London.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commercial Cleaning Services in London section  */}
      <section>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-40 py-8 md:py-10 lg:py-12">
          <div className="md:col-span-1 ">
            <h2 className="text-2xl md:3xl lg:text-4xl font-bold leading-normal text-primary">
              Our Commercial Cleaning Services in London
            </h2>
            <p className="text-base md:text-lg font-normal leading-[120%] text-primary pt-4">
              We are proud to offer a wide range of commercial cleaning services
              in London, covering all industries and business types. Whether you
              run an office, a retail store, or a healthcare facility, we have
              the expertise to keep it clean and hygienic.
            </p>
            <p className="text-base md:text-lg font-normal leading-[120%] text-primary pt-4">
              Our services include:
            </p>
            <ul className="list-disc list-inside pt-4 space-y-2">
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Window Cleaning in London – </strong> Keep your windows
                sparkling and streak-free.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Carpet Cleaning in London –</strong> Deep cleaning to
                remove stains, dirt, and allergens.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Washroom Cleaning in London –</strong> Hygienic,
                sanitized, and fresh facilities for staff and visitors.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Public Transport Cleaning in London – </strong> Thorough
                cleaning for buses, trains, and other transport.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Private Transport Cleaning in London – </strong>
                Professional cleaning for taxis, company cars, and vans.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Marine & Boat Cleaning in London – </strong>Keep vessels
                clean, polished, and ready to use.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>
                  Commercial Fleet & Logistic Vehicle Cleaning in London –{" "}
                </strong>
                Maintain a professional fleet image.
              </li>

              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Office Cleaning in London –</strong>Reliable daily or
                weekly office cleaning for a productive workspace.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>General Commercial Cleaning in London – </strong>
                Covering warehouses, retail, and all business types.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Church Cleaning in London – </strong>Respectful,
                detailed cleaning for places of worship.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Mosque Cleaning in London – </strong>Clean, welcoming
                prayer areas maintained to high standards.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Event Space Cleaning in London – </strong>Pre- and
                post-event cleaning for spotless venues.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Dental Cleaning in London – </strong> Specialist
                cleaning for clinics and dental practices.
              </li>

              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>School Cleaning in London –</strong>Safe, hygienic
                learning environments for students and staff.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Nursery Cleaning in London – </strong> Deep cleaning
                with a focus on child safety and hygiene.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Gym Cleaning in London –</strong> Sanitized equipment,
                floors, and facilities for a healthy workout space.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Data Centre Cleaning in London – </strong> Dust-free
                precision cleaning to protect sensitive equipment.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Retail Cleaning in London –</strong> Spotless shops and
                display areas that impress customers.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>GP Surgeries Cleaning in London –</strong> Safe,
                hygienic environments for healthcare facilities.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Pubs and Restaurants Cleaning in London –</strong>Clean
                dining areas and hygienic kitchens.
              </li>

              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Soft Play Cleaning in London – </strong> Deep cleaning
                to keep play areas safe for children.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Cinema Cleaning in London –</strong> Fresh, clean
                auditoriums and communal spaces.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Clubs Cleaning in London – </strong> Hygienic, welcoming
                spaces for entertainment venues.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Accountancy Offices Cleaning in London –</strong>{" "}
                Professional, tidy work environments.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Showroom Cleaning in London –</strong> Immaculate
                presentation to impress clients.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Theatres Cleaning in London –</strong>Spotless seating,
                stages, and backstage areas.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Workshop Space Cleaning in London –</strong> Clean,
                safe, and organized workspaces.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Hotel Cleaning in London –</strong> Guest rooms,
                lobbies, and shared spaces kept pristine.
              </li>
            </ul>
          </div>
          <div className="md:col-span-1 relative">
            <div className=" sticky top-28 z-40">
              <Image
                src="/location/london3.jpg"
                alt="london cleaning services"
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
          title="Expert Cleaning Services in London and Surrounding Areas"
          description="At CQD Cleaning Service, we extend our commercial cleaning service in London to businesses across Greater London and nearby counties. Wherever you’re located, our team is ready to deliver professional and reliable cleaning solutions.
We proudly serve businesses in:
"
        />
      </section>
    </div>
  );
};

export default London;
