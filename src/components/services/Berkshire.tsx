import Image from "next/image";
import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ServicesHighlightedLocations from "./ServicesHighlightedLocations";

const Berkshire = () => {
  return (
    <div className="container max-w-9xl mx-auto px-4 md:px-6">
        {/*Commercial Cleaning Services in Berkshire section */}
              <section>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-40 py-8 md:py-10 lg:py-12">
                  <div className="md:col-span-1">
                    <h1 className="text-2xl md:3xl lg:text-4xl font-bold leading-normal text-primary">
                   Commercial Cleaning Services in Berkshire
                    </h1>
                    <p className="text-base md:text-lg font-normal leading-[120%] text-primary pt-4">
                    Are you searching for trusted <strong>commercial cleaning services in Berkshire?</strong> At CQD Cleaning Service, we provide professional and tailored cleaning solutions for businesses across the county. From daily office cleaning and carpet care to window cleaning and specialist sanitization, our expert team ensures your workplace remains spotless, hygienic, and welcoming. Serving Berkshire and the surrounding areas, we are committed to delivering quality, reliability, and customer satisfaction. Contact us today to learn how our <strong>commercial cleaning services in Berkshire</strong> can keep your business looking its very best.
                    </p>
                  </div>
                  <div className="md:col-span-1">
                    <Image
                      src="/location/berkshire1.jpg"
                      alt="berkshire cleaning services"
                      width={700}
                      height={700}
                      className="w-full h-[350px] md:h-[340px] rounded-[20px] object-cover"
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
                        src="/location/berkshire2.jpg"
                        alt="berkshire cleaning services"
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
                     Since 2012, CQD Cleaning Service has been a trusted provider of commercial cleaning throughout Berkshire. Businesses rely on us because we combine professionalism, eco-friendly products, and attention to detail to deliver exceptional results every time.

                    </p>
                    <ul className="list-disc list-inside pt-4 space-y-2">
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                        <strong>Reliable & Consistent:</strong> Every clean is carried out to the highest standards.

                      </li>
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                        <strong>Tailored Solutions :</strong> Flexible cleaning packages designed around your needs.

                      </li>
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                        <strong>Affordable Pricing : </strong>Affordable rates without compromising on quality.

                      </li>
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                        <strong>Eco-Friendly Cleaning :</strong>Sustainable products and modern equipment.

        
                      </li>
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                        <strong>Discreet & Efficient:</strong> Cleaning carried out with minimal disruption.
        
                      </li>
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                        <strong>Customer Focused  :</strong> Dedicated to ensuring client satisfaction at all times.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
      

      {/* Our Commercial Cleaning Services in Bracknell  */}
            <section>
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-40 py-8 md:py-10 lg:py-12">
                
                <div className="md:col-span-1 ">
                   <h2 className="text-2xl md:3xl lg:text-4xl font-bold leading-normal text-primary">Our Commercial Cleaning Services in Berkshire</h2>
                  <p className="text-base md:text-lg font-normal leading-[120%] text-primary pt-4">
                  We offer a wide range of cleaning services in Berkshire, designed to keep your business premises clean, safe, and professional:
      
                  </p>
                  <ul className="list-disc list-inside pt-4 space-y-2">
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary"><strong>Office Cleaning </strong> Daily or weekly office cleaning to maintain productivity and professionalism.

</li>
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary"><strong>Carpet Cleaning</strong>  Deep carpet care to remove stains, dirt, and allergens.

</li>
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary"><strong>Window Cleaning</strong>  Interior and exterior window cleaning with a streak-free finish.

      
      
      </li>
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary"><strong>Washroom Cleaning </strong> Fully sanitized and hygienic facilities for staff and visitors.
</li>
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary"><strong>Retail Cleaning </strong>Keep shops, showrooms, and retail spaces spotless.
</li>
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary"><strong>School & Nursery Cleaning</strong>Safe, hygienic environments for children and staff.

</li>
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary"><strong>Gym Cleaning</strong>Sanitizing equipment, floors, and changing areas.

</li>
      
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary"><strong>Healthcare & GP Cleaning</strong>Specialist cleaning for medical and dental practices.

</li>
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary"><strong>Restaurant & Pub Cleaning </strong> Professional cleaning for kitchens, dining rooms, and bars.

</li>
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary"><strong>Hotel Cleaning </strong>Guest rooms, receptions, and communal areas refreshed.
</li>
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary"><strong>Event Venue Cleaning  </strong>Pre- and post-event deep cleaning services.

</li>
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary"><strong>Industrial & Workshop Cleaning  </strong>Removal of dust, debris, and waste.


</li>
                     
      
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary"><strong>Cinema & Theatre Cleaning</strong>Clean auditoriums, seating, and backstage areas.

</li>
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary"><strong>Soft Play Cleaning </strong> Safe and hygienic cleaning for children’s play areas.

</li>
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary"><strong>Transport & Fleet Cleaning</strong> From taxis to logistics fleets, keeping vehicles spotless.

</li>
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary"><strong>Marine & Boat Cleaning </strong>  Professional cleaning for marine vessels.

</li>
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary"><strong>Professional Office Cleaning</strong>Accountancy, legal, and consultancy offices kept spotless.

</li>
      
                  </ul>
                </div>
                <div className="md:col-span-1 relative">
                  <div className=" sticky top-28 z-40">
                 <Image src="/location/berkshire3.jpg" alt="berkshire cleaning services" width={700} height={700} className="w-full h-[350px] md:h-[500px] rounded-[20px] object-cover"/>
                </div>
                </div>
              </div>
            </section>


             <section>
                    <ServicesHighlightedLocations
                      title="Expert Cleaning Services in Berkshire & Surrounding Areas"
                      description="CQD Cleaning Service proudly delivers cleaning solutions across Berkshire and nearby regions, including:"
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
                           How much does commercial cleaning in Berkshire cost?

            
                        </AccordionTrigger>
                        <AccordionContent className="text-base font-medium text-gray-700">
                          The cost depends on the size of your premises, the type of service, and cleaning frequency. We offer tailored packages to fit your needs.

            
                        </AccordionContent>
                      </AccordionItem>
            
                      <AccordionItem value="safety">
                        <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
                          Do you provide one-off deep cleaning services in Berkshire?

                        </AccordionTrigger>
                        <AccordionContent className="text-base font-medium text-gray-700">
                        Yes, we offer both long-term contracts and one-off deep cleaning.

                        </AccordionContent>
                      </AccordionItem>
            
                      <AccordionItem value="customization">
                        <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
                           Can you clean outside business hours?

            
                        </AccordionTrigger>
                        <AccordionContent className="text-base font-medium text-gray-700">
                          Absolutely. We work evenings, early mornings, and weekends to avoid disruption.

            
                        </AccordionContent>
                      </AccordionItem>
            
                      <AccordionItem value="pricing">
                        <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
                        Do you use eco-friendly cleaning products?

                        </AccordionTrigger>
                        <AccordionContent className="text-base font-medium text-gray-700">
                          Yes. We only use non-toxic, sustainable products alongside modern cleaning equipment.

                        </AccordionContent>
                      </AccordionItem>
            
                      <AccordionItem value="deep-cleaning">
                        <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
                         What types of businesses do you serve in Berkshire?

            
                        </AccordionTrigger>
                        <AccordionContent className="text-base font-medium text-gray-700">
                           We provide cleaning for offices, schools, nurseries, gyms, hotels, restaurants, retail shops, healthcare practices, industrial spaces, and more.
            
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="deep-cleaning">
                        <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
                          How can I get a quote for cleaning services in Berkshire?
                        </AccordionTrigger>
                        <AccordionContent className="text-base font-medium text-gray-700">
                           Contact us by phone, email, or through our website, and we’ll provide a free, no-obligation quote.

            
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </section>

      
    </div>
  );
};

export default Berkshire;
