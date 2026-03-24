import Image from "next/image";
import React from "react";
import LocationPhoneCta from "./LocationPhoneCta";

const Watford = () => {
  return (
    <div className="container max-w-9xl mx-auto px-4 md:px-6">
      {/* Professional Commercial Cleaning Services in Oxford section */}
      <section>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-40 py-8 md:py-10 lg:py-12">
          <div className="md:col-span-1">
            <h1 className="text-2xl md:3xl lg:text-4xl font-bold leading-normal text-primary">
              Professional Cleaning Services in Watford
            </h1>
            <p className="text-base md:text-lg font-normal leading-[120%] text-primary pt-4">
              Searching for trusted cleaning services in Watford? At CQD
              Cleaning Service, we provide tailored cleaning solutions for
              businesses of all sizes. From daily office cleaning to deep
              cleaning, carpet care, and specialist sanitization, our team
              ensures your workplace remains spotless, hygienic, and
              professional. Serving Watford and surrounding areas, we pride
              ourselves on reliability, flexibility, and customer satisfaction.
              Contact us today to learn how our cleaning services in Watford can
              help keep your business at its best.
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
              src="/location/watford1.jpg"
              alt="maidenhead cleaning services"
              width={700}
              height={700}
              className="w-full h-[350px] md:h-[400px] rounded-[20px] object-cover"
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
                src="/location/watford2.jpg"
                alt="oxford cleaning services"
                width={700}
                height={700}
                className="w-full h-[350px] md:h-[410px] rounded-[20px] object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-1 ">
            <h2 className="text-2xl md:3xl lg:text-4xl font-bold leading-normal text-primary">
              Why Choose Us?
            </h2>
            <p className="text-base md:text-lg font-normal leading-[120%] text-primary pt-4">
              Since 2012, CQD Cleaning Service has been providing professional
              cleaning services in Watford for offices, schools, gyms,
              restaurants, and more. Businesses choose us because:
            </p>

            <ul className="list-disc list-inside pt-4 space-y-2">
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Reliable & Professional:</strong>Consistent,
                high-quality cleaning every time.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Tailored Solutions:</strong>Services designed around
                your business needs and schedule.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Affordable & Flexible:</strong> Competitive pricing
                without compromising quality.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Eco-Friendly Cleaning:</strong> Safe, sustainable
                products and advanced equipment.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Discreet & Efficien:</strong>Minimal disruption while
                delivering spotless results.
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
              Our Cleaning Services in Watford
            </h2>
            <p className="text-base md:text-lg font-normal leading-[120%] text-primary pt-4">
              At CQD Cleaning Service, we offer a full range of professional
              cleaning services in Watford, designed to keep your business
              clean, hygienic, and welcoming. Whether you need daily office
              cleaning, specialist sanitization, or one-off deep cleans, our
              expert team ensures the highest standards.
            </p>
            <ul className="list-disc list-inside pt-4 space-y-2">
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Office Cleaning</strong> Our office cleaning services in
                Watford ensure tidy, hygienic, and productive work environments
                with flexible daily, weekly, or monthly schedules.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Carpet Cleaning</strong> We provide professional carpet
                cleaning in Watford to remove stains, dirt, and allergens,
                keeping your workplace fresh and inviting.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Window Cleaning</strong> Our window cleaning in Watford
                covers both interior and exterior windows, leaving a
                streak-free, sparkling finish.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Washroom Cleaning</strong> Maintain spotless and
                sanitized facilities with our thorough washroom cleaning in
                Watford, ensuring a pleasant experience for staff and visitors.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Retail Cleaning</strong> Our retail cleaning services in
                Watford help shops and showrooms maintain polished displays and
                spotless floors to impress customers
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>School & Nursery Cleaning</strong> We deliver reliable
                school and nursery cleaning in Watford, creating safe, hygienic
                environments for students, children, and staff.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Gym Cleaning</strong>Our gym cleaning in Watford
                includes sanitizing equipment, changing areas, and floors to
                provide a safe and healthy workout environment.
              </li>

              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Healthcare & GP Cleaning</strong> We specialize in
                healthcare and GP cleaning in Watford, ensuring clinics meet
                strict hygiene and safety standards.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Restaurant & Pub Cleaning</strong> Our restaurant and
                pub cleaning in Watford keeps kitchens, dining areas, and bars
                spotless and compliant with hygiene regulations.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Hotel Cleaning</strong> We provide hotel cleaning in
                Watford, covering guest rooms, lobbies, and shared areas to
                ensure a welcoming experience.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Event Venue Cleaning</strong> Our event cleaning
                services in Watford prepare your venue before and after events,
                leaving spaces fresh, spotless, and ready to use.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Specialist Cleaning</strong> From data centres and
                workshops to bespoke business needs, our specialist cleaning in
                Watford is tailored for precision and safety.
              </li>
            </ul>
            <LocationPhoneCta />
          </div>
          <div className="md:col-span-1 relative">
            <div className=" sticky top-28 z-40">
              <Image
                src="/location/watford3.jpg"
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

export default Watford;
