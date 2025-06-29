import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const WwoCommercialFleetLogistic = () => {
  return (
    <div>
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative w-full aspect-[536/656] max-w-[536px]  overflow-hidden">
                <Image
                  src="/images/commercial-fleet2.jpg"
                  alt="commercial fleets & logistic vehicles"
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
                  At CQD Cleaning Services, we provide specialized commercial
                  fleet and logistics vehicle cleaning for trucks, vans,
                  delivery vehicles, and heavy transport units. Our professional
                  team uses industrial-grade equipment and eco-conscious
                  products to remove dirt, grease, road grime, and interior
                  contaminants—keeping your fleet clean, hygienic, and
                  road-ready.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  Whether you operate a small delivery team or a large-scale
                  logistics fleet, we offer tailored fleet cleaning solutions
                  including cab sanitization, cargo area detailing, and regular
                  maintenance washes. Our services help maintain vehicle
                  appearance, support driver health and safety, and protect your
                  company’s image with consistent, high-quality results you can
                  count on.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Delivery Vans
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Cargo & Freight Trucks
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Company Cars
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
                  At CQD Cleaning Services, we understand the unique demands of
                  commercial fleets and logistics vehicles. Our experienced team
                  delivers thorough, reliable cleaning using industrial-grade
                  equipment and eco-friendly products designed to tackle tough
                  dirt, grease, and contaminants commonly found on fleet
                  vehicles.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  We prioritize efficiency and flexibility, offering tailored
                  cleaning schedules that minimize downtime and keep your fleet
                  operating smoothly. With a strong commitment to quality and
                  customer satisfaction, CQD Cleaning Services helps protect
                  your vehicles, enhance driver safety, and maintain a
                  professional company image every mile of the way.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Interior disinfection
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Branding-safe exterior washing
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  On-site or off-site service options
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Fleet package deals available
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
                  src="/images/commercial-fleet3.jpg"
                  alt=" commercial fleets & logistic vehicles"
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

export default WwoCommercialFleetLogistic;
