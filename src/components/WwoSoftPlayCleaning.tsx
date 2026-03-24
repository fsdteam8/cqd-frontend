import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import ServicePhoneCta from "./ServicePhoneCta";

const WwoSoftPlayCleaning = () => {
  return (
    <div>
      {/* Trusted Soft Play Cleaning Services by CQD Cleaning Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative w-full aspect-[536/456] max-w-[536px] overflow-hidden">
                <Image
                  src="/services/softPlayCleaing4.jpg"
                  alt="Professional Soft Play Cleaning Services"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 536px"
                  priority
                  className="rounded-tl-[100px] rounded-br-[100px]"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d]">
                Trusted Soft Play Cleaning Services by CQD Cleaning
              </h2>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700">
                  CQD Cleaning Services offers professional soft play cleaning
                  services that ensure children play areas are clean and safe to
                  play with. We have a trained team, who thoroughly cleans ball
                  pits, slides, climbing structures, and cushioned floors by
                  using environment friendly products, which are non-toxic. We
                  clean using deep, gentle cleaning techniques to get dirt,
                  germs and bacteria removed, but also keeping all equipment
                  safe and in ideal condition.
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
          </div>
        </div>
      </section>
      {/* What is Soft Play? Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side - Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d]">
                What is Soft Play?
              </h2>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700">
                  Soft play is an indoor play area especially designed with
                  padded surfaces and padded equipment such as ball pits,
                  tunnels, slides, and climb structures. Due to the soft
                  surface, the areas are safe and enjoyable so that the children
                  can explore, play and practice their physical and social
                  skills without the danger of being hurt by the hard surfaces.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  These soft play areas are prevalent in nurseries, play
                  centers, schools and family entertainment. Soft plays should
                  be cleaned on a routine basis in order to achieve their
                  cleanliness, safety, and children and caretakers friendly
                  environment.
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
              <div className="relative w-full aspect-[536/556] max-w-[536px] rounded-tr-[100px] rounded-bl-[100px] overflow-hidden">
                <Image
                  src="/services/softPlayCleaing5.jpg"
                  alt="Soft Play Cleaning Experts at Work"
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

      {/* What We Offer Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative w-full aspect-[536/656] max-w-[536px] overflow-hidden">
                <Image
                  src="/services/softPlayCleaing2.jpg"
                  alt="Professional Soft Play Cleaning Services"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 536px"
                  priority
                  className="rounded-tl-[100px] rounded-br-[100px]"
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
                  CQD Cleaning Services specializes in professional soft play
                  cleaning designed to keep your play areas safe, hygienic, and
                  inviting for children of all ages.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  We use child-friendly, non-toxic, and eco-safe cleaning
                  products combined with expert techniques to sanitize play
                  equipment, mats, ball pits, and soft surfaces, preventing
                  germs and allergens.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Deep cleaning of soft play equipment & mats
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Sanitization of ball pits and play zones
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Use of non-toxic and child-safe cleaning agents
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Anti-bacterial treatment for high-touch areas
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Regular maintenance cleaning to ensure safety
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

      {/* Why Choose Us Section */}
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
                  Our soft play cleaning specialists are trained to handle
                  delicate play materials with utmost care, ensuring thorough
                  sanitation while maintaining the integrity of your equipment.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  CQD Cleaning Services guarantees a clean, safe, and hygienic
                  environment for children, helping you meet safety standards
                  and providing peace of mind to parents and staff.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Certified cleaning experts for play environments
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Use of eco-friendly & hypoallergenic products
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Flexible scheduling to minimize disruption
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Transparent pricing with no hidden fees
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  100% satisfaction guarantee on all services
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
                  src="/services/softPlayCleaing3.jpg"
                  alt="Soft Play Cleaning Experts at Work"
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

      {/* How Are Soft Play Areas Cleaned? Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-6 pb-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d] text-center">
              How Are Soft Play Areas Cleaned?
            </h2>

            <div className="space-y-4">
              <p className="text-base md:text-lg text-gray-700 text-center">
                Cleaning of soft play areas is critical to issue safety, hygiene
                and durability of equipment. Our soft play cleaning process
                involves:
              </p>
            </div>
          </div>
          <ul className="pt-4">
            <li className="text-lg md:text-xl text-gray-700">
              <strong>Assessment & Preparation:</strong> The first task is to
              survey the playground and list down all surfaces, high touch
              points, and equipment that needs to be cleaned.
            </li>
            <li className="text-lg md:text-xl text-gray-700 py-3">
              <strong>Surface Cleaning:</strong> Slides, climbing frames,
              cushioned flooring, ball pits are cleaned with non-toxic,
              eco-friendly products that get rid of external dirt, germs and
              bacteria but do not destroy the integrity of the equipment.
            </li>
            <li className="text-lg md:text-xl text-gray-700">
              <strong>Ball Pits Deep Cleaning:</strong> Balls are pulled out,
              sterilized and vigorously washed and pits are vacuumed or wiped so
              as to get rid of the concealed mess.
            </li>
            <li className="text-lg md:text-xl text-gray-700 py-3">
              <strong>Disinfection:</strong>Handles, bars, and seating areas are
              disposed of; high touch surfaces are cleaned in disinfectant to
              keep germs off them.
            </li>
            <li className="text-lg md:text-xl text-gray-700">
              <strong>Final Inspection:</strong>Following the cleaning we make
              sure that everywhere is secure, dry and on which children can
              play. Any damage is checked on equipment and the place is left
              clean and hygienic.
            </li>
          </ul>
          <p className="text-base md:text-lg text-gray-700 text-center pt-5">
            Periodic cleaning of soft plays makes it safe, joyful, and healthy
            to the context of children as well as ensuring equipment is in
            excellent condition.
          </p>
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
    </div>
  );
};

export default WwoSoftPlayCleaning;
