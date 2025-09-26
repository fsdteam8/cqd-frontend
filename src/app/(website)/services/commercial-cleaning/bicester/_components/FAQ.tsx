import React from "react";

const FAQ = () => {
  return (
    <div>
      <section className="container max-w-9xl mx-auto px-4 md:px-6">
        <div className="py-8 md:py-10 lg:py-12">
          <div className="md:col-span-1">
            <h2 className="text-2xl md:3xl lg:text-4xl font-bold leading-normal text-primary">
              Frequently Asked Questions
            </h2>

            <ul className="list-decimal list-inside pt-4 space-y-5">
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>
                 How much does commercial cleaning in Bicester cost?
                </strong>
                <br />
                Pricing depends on premises size, type of cleaning, and frequency. We offer tailored, affordable packages for all businesses.
              </li>

              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Do you provide one-off or deep cleaning services?</strong>
                <br />
                Yes, we provide both regular cleaning contracts and one-off deep cleaning services.
              </li>

              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Can you clean outside business hours?</strong>
                <br />
               Yes, we work evenings, weekends, or early mornings to avoid disruption.
              </li>

              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Are your cleaning products eco-friendly and safe?</strong>
                <br />
                Absolutely — we use non-toxic, sustainable products and modern equipment.
              </li>

              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>What types of businesses do you serve in Bicester?</strong>
                <br />
               We clean offices, schools, nurseries, gyms, restaurants, hotels, healthcare facilities, retail shops, workshops, data centres, and more.
              </li>

              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>How can I get a quote for cleaning services in Bicester?</strong>
                <br />
                 Contact us via phone, email, or our website for a free, no-obligation quote
              </li>

              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Do you provide specialist cleaning services?</strong>
                <br />
                 Yes, we offer specialist cleaning for theatres, soft play areas, dental clinics, data centres, mosques, and other unique commercial spaces.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
