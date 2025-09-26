import React from "react";

const Frequently_Asked_Questions = () => {
  return (
    <div>
      <section className="container max-w-9xl mx-auto px-4 md:px-6">
        <div className="py-8 md:py-10 lg:py-12">
          <div className="md:col-span-1 ">
            <h2 className="text-2xl md:3xl lg:text-4xl font-bold leading-normal text-primary">
              Frequently Asked Questions
            </h2>

            <ul className="list-decimal list-inside pt-4 space-y-5">
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>
                  How much does commercial cleaning in Aylesbury cost?
                </strong>{" "} <br />
                Pricing depends on the size of your premises, type of cleaning,
                and frequency. We offer tailored packages to suit your business.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong> Do you offer one-off deep cleaning services?</strong> <br />  Yes, we provide both regular cleaning contracts and one-off deep cleaning services.

              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Can you clean outside business hours?</strong> <br /> Yes, we work evenings, weekends, or early mornings to avoid disruption.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>Are your cleaning products safe and eco-friendly?</strong> <br /> Absolutely. We use non-toxic, sustainable cleaning products and modern equipment.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>What types of businesses do you serve in Aylesbury?</strong> <br /> We serve offices, schools, nurseries, gyms, restaurants, hotels, healthcare facilities, retail shops, workshops, data centres, and more.
              </li>
              <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                <strong>How do I get a quote for cleaning services in Aylesbury?</strong> <br /> You can contact us via phone, email, or our website. We’ll provide a free, no-obligation quote.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Frequently_Asked_Questions;
