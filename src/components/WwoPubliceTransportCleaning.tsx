import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

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
                  At CQD Cleaning Services, we specialize in professional public
                  transport cleaning solutions, including bus cleaning, train
                  sanitation, and fleet interior cleaning. Our experienced team
                  uses advanced equipment and eco-friendly products to deliver
                  high standards of hygiene and cleanliness across all vehicle
                  interiors.
                </p>

                <p className="text-base md:text-lg text-gray-700">
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
                </p>
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

              <div className="mt-4">
                <Link href={"/#pricing"}>
                  <Button className="bg-[#14213d] hover:bg-[#233862] text-white rounded-full px-8 py-6 text-lg font-medium">
                    Request a Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* why choose us content  */}

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

              <div className="mt-4">
                <Link href={"/#pricing"}>
                  <Button className="bg-[#14213d] hover:bg-[#233862] text-white rounded-full px-8 py-6 text-lg font-medium">
                    Request a Quote
                  </Button>
                </Link>
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
