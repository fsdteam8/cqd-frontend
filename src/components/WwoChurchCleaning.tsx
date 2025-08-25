import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const WwoChurchCleaning = () => {
  return (
    <div>
      {/* Welcome to CQD Cleaning –The Specialists in Professional Church Cleaning Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d]">
                Welcome to CQD Cleaning –The Specialists in Professional Church
                Cleaning
              </h2>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700">
                  CQD Cleaning Services offers specially tailored church
                  cleaning services that will ensure your holy places are clean,
                  hospitable, and reverential. Our environmentally conscious
                  cleaning team operates to the highest standards, adopting
                  green cleaning products and procedures in the sanctuary to the
                  fellowship hall to ensure the beauty and cleanliness your
                  congregation deserves. From routine maintenance to special
                  events, our church cleaning services will make every location
                  embrace the tranquility and sanctity of your place of worship.
                </p>
              </div>

              <div className="mt-4">
                <Link href={"/#pricing"}>
                  <Button className="bg-[#14213d] hover:bg-[#233862] text-white rounded-full px-8 py-6 text-lg font-medium">
                    Request a Quote
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-full aspect-[536/556] max-w-[536px] rounded-tr-[100px] rounded-bl-[100px] overflow-hidden">
                <Image
                  src="/services/churchCleaning2.jpg"
                  alt="Dedicated Church Cleaning Service"
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
            {/* Left Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative w-full aspect-[536/656] max-w-[536px] overflow-hidden">
                <Image
                  src="/services/churchCleaning4.jpg"
                  alt="Professional Church Cleaning"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 536px"
                  priority
                  className="rounded-tl-[100px] rounded-br-[100px]"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d]">
                What We Offer
              </h2>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700">
                  At CQD Cleaning Services, we provide specialized church
                  cleaning services designed to maintain the beauty, peace, and
                  cleanliness of your sacred spaces. From sanctuaries to
                  fellowship halls, we ensure a respectful and thorough cleaning
                  process.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  Whether it’s weekly services or special events, our
                  experienced team uses eco-friendly products and detailed
                  methods to preserve the integrity of your worship environment
                  while ensuring safety and hygiene.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Regular & event-based cleaning schedules
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Pews, carpets & altar area cleaning
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Restroom & kitchen sanitization
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Non-toxic, eco-safe cleaning supplies
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Respectful team trained for religious spaces
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

      {/* Why Choose Us Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d]">
                Why Choose Us
              </h2>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700">
                  We understand the unique requirements of maintaining
                  cleanliness and reverence within churches. Our trained team
                  provides reliable service with attention to detail, honoring
                  the significance of every area we clean.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  With flexible scheduling, fair pricing, and a satisfaction
                  guarantee, CQD Cleaning Services is trusted by religious
                  organizations for delivering a consistently clean and
                  welcoming worship environment.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Trusted by churches across Southern England
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Respectful, background-checked staff
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Tailored services for all faith-based needs
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Transparent pricing with no surprises
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  100% satisfaction guarantee
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

            {/* Right Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-full aspect-[536/656] max-w-[536px] rounded-tr-[100px] rounded-bl-[100px] overflow-hidden">
                <Image
                  src="/services/churchCleaning3.jpg"
                  alt="Dedicated Church Cleaning Service"
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

      {/* How to Clean a Church – CQD Professional Cleaning Service Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-6 pb-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d] text-center">
              How to Clean a Church – CQD Professional Cleaning Service
            </h2>

            <div className="space-y-4">
              <p className="text-base md:text-lg text-gray-700 text-center">
                A clean church is very important in creating a respect and
                peaceful environment among the congregation in the church. CQD
                Cleaning Services offers extensive experience and specialization
                in professional church cleaning services, which will not leave
                any corner of your worship location without a spot but keep its
                religious atmosphere untouched.
              </p>
            </div>
          </div>

          {/* multiple step  */}
          <div>
            <h4 className="text-xl lg:text-2xl font-bold text-[#14213d] pb-2">
              Step 1: Plan and Prepare
            </h4>
            <p className="text-base md:text-lg text-gray-700 ">
              Starting with cleaning the church during low-traffic hours and
              when the church remains unpopulated. Assemble all the required
              equipment, environmentally friendly cleaning products, microfiber
              towels, mops, vacuums, dusters, and gloves. Maintaining safety,
              keeping ladders and other equipment in place.
            </p>
          </div>
          <div className="my-4">
            <h4 className="text-xl lg:text-2xl font-bold text-[#14213d] pb-2">
              Step 2: Dust and Wipe Surfaces
            </h4>
            <p className="text-base md:text-lg text-gray-700 ">
              Dust all furniture, pews, altars, and decorative items carefully.
              Wipe windowsills, frames, and light fixtures. Don’t forget
              high-touch areas like door handles, railings, and podiums.
            </p>
          </div>
          <div>
            <h4 className="text-xl lg:text-2xl font-bold text-[#14213d] pb-2">
              Step 3: Clean Floors and Carpets
            </h4>
            <p className="text-base md:text-lg text-gray-700 ">
              Carpet vacuuming must be done completely and mopping of hard
              floors using correct cleaners must be done on areas under pews. In
              case of rough traffic or hard-to-remove stains, you may want to
              choose professional carpet cleaning.
            </p>
          </div>
          <div className="my-4">
            <h4 className="text-xl lg:text-2xl font-bold text-[#14213d] pb-2">
              Step 4: Sanitize Restrooms and Kitchens
            </h4>
            <p className="text-base md:text-lg text-gray-700 ">
              Clean and disinfect sinks, toilets, counters, and kitchen
              surfaces. Refill soap, paper towels, and other essentials to keep
              the space hygienic for all visitors.
            </p>
          </div>
          <div>
            <h4 className="text-xl lg:text-2xl font-bold text-[#14213d] pb-2">
              Step 5: Special Areas and Details
            </h4>
            <p className="text-base md:text-lg text-gray-700 ">
              Be particularly mindful of the concept of sacred space like the
              altar or communion space. Carefully polish Polish metal or wood,
              hymnals and Bibles and other materials are well organized.
            </p>
          </div>
          <div className="mt-4">
            <h4 className="text-xl lg:text-2xl font-bold text-[#14213d] pb-2">
              Step 6: Trash Removal and Final Touches
            </h4>
            <p className="text-base md:text-lg text-gray-700 ">
              Empty trash bins, replace liners, and check for missed spots. Make
              sure all chairs, kneelers, and pews are aligned, leaving the
              church ready for worship.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WwoChurchCleaning;
