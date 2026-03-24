import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import ServicePhoneCta from "./ServicePhoneCta";

const WwoPubliceTransportCleaning = () => {
  return (
    <div>
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative w-full aspect-[536/656] max-w-[536px]  overflow-hidden">
                <Image
                  src="/images/publicTransportCleaning2.jpg"
                  alt="Public Transport Cleaning"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 536px"
                  priority
                  className="rounded-tl-[80px] rounded-br-[80px]"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d]">
                What We Offer
              </h2>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700">
                  Public transport systems are used by thousands of people every
                  day, making them a hotspot for dirt, germs, and potential
                  infections. Keeping buses, trains, trams, and stations clean
                  is not only about appearance but also about ensuring passenger
                  safety and comfort. Our professional public transport cleaning
                  services are designed to maintain high hygiene standards,
                  improve the travel experience, and extend the life of vehicles
                  and facilities. With specialized cleaning methods and
                  eco-friendly products, we help create a healthier and more
                  welcoming environment for every passenger.
                </p>

                {/* <p className="text-base md:text-lg text-gray-700">
                  We thoroughly clean and sanitize seats, floors, handrails, and
                  windows—removing dirt, germs, and odors to provide a safer,
                  more comfortable environment for passengers and staff. Whether
                  you&lsquo;re managing a municipal fleet or private transit
                  vehicles, our reliable services help maintain vehicle
                  appearance, meet health regulations, and improve rider
                  experience.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  Trust CQD Cleaning Services for efficient, scheduled, and deep
                  cleaning solutions that support a healthier, more professional
                  public transport environment.
                </p> */}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Bus Cleaning Services
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Tram Cleaning
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Train Interior & Exterior Cleaning
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Coach/Intercity Bus Deep Cleaning
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-4">
                <Link href={"/#pricing"}>
                  <Button className="bg-[#14213d] hover:bg-[#233862] text-white rounded-full px-8 py-6 text-lg font-medium">
                    Request a Quote
                  </Button>
                </Link>
                <ServicePhoneCta />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side - Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d]">
                Why Choose Us
              </h2>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700">
                  At CQD Cleaning Services, we offer professional public
                  transport cleaning for buses, trains, and shuttles, delivering
                  high standards of cleanliness and hygiene across all fleet
                  types. Our experienced team uses advanced equipment and
                  eco-friendly products to carry out deep bus cleaning, thorough
                  train sanitation, and complete fleet interior cleaning that
                  targets dirt, bacteria, and odors in high-traffic areas.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  From seat and floor sanitation to windows, handrails, and
                  driver cabins, we ensure every surface is clean, fresh, and
                  safe for passengers and staff. Whether you require scheduled
                  cleaning or intensive deep cleans, CQD Cleaning Services
                  provides reliable, tailored solutions that keep your public
                  transport vehicles in top condition—ready to meet health
                  regulations and enhance rider satisfaction.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Daily or scheduled cleanings
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Sanitation for seats, handles, windows
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Graffiti and odor removal
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Government-compliant eco-cleaning solutions
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-4">
                <Link href={"/#pricing"}>
                  <Button className="bg-[#14213d] hover:bg-[#233862] text-white rounded-full px-8 py-6 text-lg font-medium">
                    Request a Quote
                  </Button>
                </Link>
                <ServicePhoneCta />
              </div>
            </div>

            {/* Right side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-full aspect-[536/656] max-w-[536px] rounded-tr-[100px] rounded-bl-[100px] overflow-hidden">
                <Image
                  src="/images/publicTransportCleaning3.jpg"
                  alt="Public Transport Cleaning Services"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 536px"
                  priority
                  className="rounded-tr-[100px] rounded-bl-[100px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side - Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d]">
                Why Public Transport Cleaning is Essential
              </h2>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700">
                  Public transport is one of the busiest shared spaces, making
                  it a potential hotspot for bacteria, viruses, and allergens.
                  Regular deep cleaning and sanitization help reduce the risk of
                  infections, ensuring passengers and staff travel in a
                  healthier and safer environment.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  Cleanliness directly affects how passengers perceive public
                  transport. A clean bus, train, or station not only looks
                  inviting but also reassures travelers that their wellbeing is
                  prioritized. This builds trust, encourages
                </p>
                <p className="text-base md:text-lg text-gray-700">
                  more people to use public transport, and improves the overall
                  reputation of the transport service.
                </p>
                <p className="text-base md:text-lg text-gray-700">
                  Public transport operators must meet strict cleanliness and
                  hygiene requirements to remain compliant with local health and
                  safety regulations. Professional cleaning ensures vehicles and
                  facilities
                </p>
              </div>

              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Daily or scheduled cleanings
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Sanitation for seats, handles, windows
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Graffiti and odor removal
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Government-compliant eco-cleaning solutions
                </div>
              </div> */}

              <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-4">
                <Link href={"/#pricing"}>
                  <Button className="bg-[#14213d] hover:bg-[#233862] text-white rounded-full px-8 py-6 text-lg font-medium">
                    Request a Quote
                  </Button>
                </Link>
                <ServicePhoneCta />
              </div>
            </div>

            {/* Right side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-full aspect-[536/656] max-w-[536px] rounded-tr-[100px] rounded-bl-[100px] overflow-hidden">
                <Image
                  src="/images/publicTransportCleaning3.jpg"
                  alt="Public Transport Cleaning Services"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 536px"
                  priority
                  className="rounded-tr-[100px] rounded-bl-[100px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-6 pb-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d] text-center">
              Our Public Transport Cleaning Services 
            </h2>

            <div className="space-y-4">
              <p className="text-base md:text-lg text-gray-700 text-left">
                We provide comprehensive cleaning solutions for all types of public transport vehicles. Our services are tailored to meet the specific needs of each system, ensuring both passengers and staff enjoy a safe, clean, and comfortable environment.
              </p>
            </div>
          </div>
          <ul className="pt-4">
            <li className="text-lg md:text-xl text-gray-700">
              <strong>Bus Cleaning Services</strong> Our bus cleaning service covers everything from daily wipe-downs to intensive deep cleans. We focus on high-touch areas such as seats, handles, windows, and floors, ensuring every bus is fresh, hygienic, and ready for passengers.
            </li>
            <li className="text-lg md:text-xl text-gray-700 py-3">
              <strong>Tram Cleaning</strong>{" "}
              Trams experience heavy foot traffic throughout the day, which can lead to dirt buildup and germ spread. Our tram cleaning includes sanitization of interiors, polishing of glass and metal surfaces, and thorough floor and seat cleaning to maintain a spotless and welcoming ride.
            </li>
            <li className="text-lg md:text-xl text-gray-700">
              <strong>Train Interior & Exterior Cleaning</strong>Train Interior & Exterior Cleaning

            </li>
            <li className="text-lg md:text-xl text-gray-700 py-3">
              <strong>Coach / Intercity Bus Deep Cleaning</strong> Long-distance coaches require a higher level of cleaning due to extended passenger use. Our deep cleaning service includes carpet vacuuming, upholstery sanitization, restroom disinfection, and detailed cleaning of air vents and luggage compartments—ensuring a comfortable and hygienic journey for all travelers.
            </li>
          </ul>
        </div>
         <div className="flex items-center justify-center mt-8 md:mt-10 pt-2">
          <a href="tel:+8801494911001">
            <button className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-normal text-[#0F2A5C]">
              <span className="font-semibold border border-black/20 py-2 px-10 rounded-[10px]">
                Call Us : <strong>01494 911001</strong>
              </span>
            </button>
          </a>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side - Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d]">
               Benefits of Professional Public Transport Cleaning
              </h2>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700">
                  Professional cleaning reduces the spread of germs and infections, creating a safer environment for both passengers and staff. Clean and fresh vehicles also improve passenger comfort and satisfaction, encouraging more people to use public transport regularly. At the same time, regular maintenance extends the lifespan of vehicles and facilities by preventing dirt, stains, and damage. Outsourcing to experts ensures cost-effective and efficient cleaning solutions, allowing transport operators to focus on smooth operations without unnecessary downtime.
                </p>

              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-4">
                <Link href={"/#pricing"}>
                  <Button className="bg-[#14213d] hover:bg-[#233862] text-white rounded-full px-8 py-6 text-lg font-medium">
                    Request a Quote
                  </Button>
                </Link>
                <ServicePhoneCta />
              </div>
            </div>

            {/* Right side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-full aspect-[536/656] max-w-[536px] rounded-tr-[100px] rounded-bl-[100px] overflow-hidden">
                <Image
                  src="/images/publicTransportCleaning3.jpg"
                  alt="Public Transport Cleaning Services"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 536px"
                  priority
                  className="rounded-tr-[100px] rounded-bl-[100px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WwoPubliceTransportCleaning;
