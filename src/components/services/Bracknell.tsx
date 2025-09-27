import Image from "next/image";
import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ServicesHighlightedLocations from "./ServicesHighlightedLocations";

const Bracknell = () => {
  return (
    <div className="container max-w-9xl mx-auto px-4 md:px-6">
        {/*Professional Cleaning Services in Bracknell section */}
              <section>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-40 py-8 md:py-10 lg:py-12">
                  <div className="md:col-span-1">
                    <h1 className="text-2xl md:3xl lg:text-4xl font-bold leading-normal text-primary">
                     Professional Cleaning Services in Bracknell
                    </h1>
                    <p className="text-base md:text-lg font-normal leading-[120%] text-primary pt-4">
                     Are you searching for trusted cleaning services in Bracknell? At CQD Cleaning Service, we specialize in delivering professional, tailored cleaning solutions for businesses of all sizes. From daily office cleaning to deep carpet care and specialist sanitization, our experienced team ensures your workplace remains spotless, hygienic, and welcoming. Proudly serving Bracknell and surrounding areas, we are committed to quality, reliability, and customer satisfaction. Contact us today to see how our cleaning services in Bracknell can keep your business looking its best.
                    </p>
                  </div>
                  <div className="md:col-span-1">
                    <Image
                      src="/location/bracknell1.jpg"
                      alt="bracknell cleaning services"
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
                        src="/location/bracknell2.jpg"
                        alt="bracknell cleaning services"
                        width={700}
                        height={700}
                        className="w-full h-[350px] md:h-[470px] rounded-[20px] object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-1 ">
                    <h2 className="text-2xl md:3xl lg:text-4xl font-bold leading-normal text-primary">
                     Why Choose Us?
                    </h2>
                    <p className="text-base md:text-lg font-normal leading-[120%] text-primary pt-4">
                      Since 2012, CQD Cleaning Service has been providing exceptional cleaning services in Bracknell. Our clients choose us because we combine professionalism, eco-friendly methods, and attention to detail for outstanding results every time.
                    </p>
                    <ul className="list-disc list-inside pt-4 space-y-2">
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                        <strong>Reliable & Consistent:</strong>  Every visit is carried out to the highest standard.
                      </li>
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                        <strong>Tailored Solutions :</strong> Flexible plans designed around your business needs.
                      </li>
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                        <strong>Affordable Pricing: </strong> Competitive rates without compromising on quality.
                      </li>
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                        <strong>Eco-Friendly Products:</strong>Safe, sustainable cleaning products and modern equipment.
        
                      </li>
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                        <strong>Discreet & Efficient:</strong> Minimal disruption to your daily operations.
        
                      </li>
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary">
                        <strong>Customer Satisfaction :</strong> We go above and beyond to deliver spotless results.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
      

      {/* Our Commercial Cleaning Services in Bracknell  */}
            <section>
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-40 py-8 md:py-10 lg:py-12">
                
                <div className="md:col-span-1 ">
                   <h2 className="text-2xl md:3xl lg:text-4xl font-bold leading-normal text-primary">Our Commercial Cleaning Services in Bracknell</h2>
                  <p className="text-base md:text-lg font-normal leading-[120%] text-primary pt-4">
                  We offer a wide range of professional cleaning services in Bracknell to keep your business spaces clean, hygienic, and professional:
      
                  </p>
                  <ul className="list-disc list-inside pt-4 space-y-2">
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary"><strong>Office Cleaning </strong> Daily or weekly office cleaning for a productive and professional workspace.
</li>
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary"><strong>Carpet Cleaning</strong> Deep cleaning to remove dirt, stains, and allergens.
</li>
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary"><strong>Window Cleaning</strong> Interior and exterior window cleaning with streak-free results.

      
      
      </li>
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary"><strong>Washroom Cleaning </strong> Fully sanitized and hygienic washroom facilities.</li>
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary"><strong>Retail Cleaning </strong>Keep shops, showrooms, and retail spaces spotless.
</li>
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary"><strong>School & Nursery Cleaning</strong>Safe and hygienic environments for children.
</li>
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary"><strong>Gym Cleaning</strong> Sanitizing equipment, floors, and changing rooms.
</li>
      
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary"><strong>Healthcare & GP Cleaning</strong>Specialist cleaning for clinics and practices.
</li>
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary"><strong>Restaurant & Pub Cleaning </strong>Kitchens, dining areas, and bars professionally cleaned.
</li>
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary"><strong>Hotel Cleaning </strong>Guest rooms, lobbies, and shared spaces refreshed daily.
</li>
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary"><strong>Event Venue Cleaning  </strong>Pre- and post-event deep cleaning services.
</li>
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary"><strong>Event Space Cleaning </strong> Our event space cleaning services in Oxford prepare your venue before and after events, leaving it spotless.</li>
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary"><strong>Specialist Cleaning</strong>  From data centres to workshops and bespoke spaces.
</li>
      
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary"><strong>Cinema & Theatre Cleaning</strong>Spotless auditoriums, seating, and backstage areas.
</li>
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary"><strong>Soft Play Cleaning </strong> Safe and hygienic cleaning for play zones.
</li>
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary"><strong>Workshop & Industrial Cleaning</strong> Dust, debris, and waste removal from industrial areas.
</li>
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary"><strong>Marine & Boat Cleaning </strong> Professional cleaning for marine vessels.
</li>
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary"><strong>Transport & Fleet Cleaning</strong>  From taxis to logistics fleets, keeping vehicles spotless.
</li>
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary"><strong>Dental & Medical Cleaning</strong>  Hygienic solutions for dental and medical facilities.
</li>
                      <li className="text-base md:text-lg font-normal leading-[120%] text-primary"><strong>Accountancy & Professional Office Cleaning</strong>Maintain tidy and organized workspaces.
</li>
      
                  </ul>
                </div>
                <div className="md:col-span-1 relative">
                  <div className=" sticky top-28 z-40">
                 <Image src="/location/beaconsfield3.jpg" alt="bracknell cleaning services" width={700} height={700} className="w-full h-[350px] md:h-[500px] rounded-[20px] object-cover"/>
                </div>
                </div>
              </div>
            </section>


             <section>
                    <ServicesHighlightedLocations
                      title="Expert Cleaning Services in Bracknell & Surrounding Areas"
                      description="CQD Cleaning Service proudly provides cleaning services in Bracknell and the wider region. We serve businesses in:"
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
                           How much does commercial cleaning in Bracknell cost?
            
                        </AccordionTrigger>
                        <AccordionContent className="text-base font-medium text-gray-700">
                          Costs depend on the size of your premises, cleaning type, and frequency. We offer tailored packages to suit your needs.
            
                        </AccordionContent>
                      </AccordionItem>
            
                      <AccordionItem value="safety">
                        <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
                          Do you provide one-off deep cleaning services?
            
                        </AccordionTrigger>
                        <AccordionContent className="text-base font-medium text-gray-700">
                         Yes, we provide both regular contracts and one-off deep cleans.
            
                        </AccordionContent>
                      </AccordionItem>
            
                      <AccordionItem value="customization">
                        <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
                          Can you clean outside business hours?
            
                        </AccordionTrigger>
                        <AccordionContent className="text-base font-medium text-gray-700">
                          Absolutely. We offer evening, early morning, and weekend services to avoid disruption.
            
                        </AccordionContent>
                      </AccordionItem>
            
                      <AccordionItem value="pricing">
                        <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
                         Are your cleaning products safe and eco-friendly?
                        </AccordionTrigger>
                        <AccordionContent className="text-base font-medium text-gray-700">
                         Yes, we use non-toxic, sustainable cleaning products and advanced equipment.
            
                        </AccordionContent>
                      </AccordionItem>
            
                      <AccordionItem value="deep-cleaning">
                        <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
                         What types of businesses do you clean in Bracknell?
            
                        </AccordionTrigger>
                        <AccordionContent className="text-base font-medium text-gray-700">
                          We serve offices, schools, nurseries, gyms, restaurants, hotels, healthcare facilities, retail shops, workshops, and more.
            
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="deep-cleaning">
                        <AccordionTrigger className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#14213d]">
                         How can I get a quote for cleaning services in Bracknell?
                        </AccordionTrigger>
                        <AccordionContent className="text-base font-medium text-gray-700">
                          Contact us by phone, email, or our website for a free, no-obligation quote.
            
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </section>

      
    </div>
  );
};

export default Bracknell;
