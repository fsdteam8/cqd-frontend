import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import ServicePhoneCta from "./ServicePhoneCta";

const WwoSchoolCleaning = () => {
  return (
    <div>
      {/* Importance of Gym Cleanliness section  */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d] text-center">
            Meet CQD Cleaning: Masters of Deep School Cleaning
          </h2>
          <p className="text-base md:text-lg text-gray-700 text-center pt-4">
            CQD Cleaning Consultancy specializes in school cleaning. We are
            proud of the fact that we maintain clean and safe environments that
            allow students and staff to thrive. Our trained workforce and
            cleaning technology provides us with a tailored cleaning service
            (personalized to your school) to bring safety and sanity.
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

      {/* Reliable Public School Cleaning in London section  */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d] text-center">
              Reliable Public School Cleaning in London
            </h2>
            <p className="text-base md:text-lg text-gray-700 text-center pt-4">
              We help state-funded schools maintain clean, safe environments all
              year round — without disrupting your day-to-day operations.
            </p>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mt-6">
              {/* Left side - Image */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                <div className="relative w-full aspect-[536/656] max-w-[536px] overflow-hidden">
                  <Image
                    src="/services/schoolCleaning4.jpg"
                    alt="Professional School Cleaning Services"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 536px"
                    priority
                    className="rounded-tl-[100px] rounded-br-[100px]"
                  />
                </div>
              </div>

              {/* Right side - Content */}
              <div className="w-full lg:w-1/2 flex flex-col gap-4">
                <div>
                  <h3 className="text-[22px] md:text-[26px] lg:text-3xl font-semibold text-[#14213d] pt-4">
                    Our Services Include:
                  </h3>
                  <ul className="list-disc list-inside space-y-2 pt-4">
                    <li className="text-base md:text-lg font-medium text-gray-700">
                      Daily, weekly, or on holiday cleaning.
                    </li>
                    <li className="text-base md:text-lg font-medium text-gray-700">
                      Regular deep cleaning at the end of the term and at the
                      end of the year.
                    </li>
                    <li className="text-base md:text-lg font-medium text-gray-700">
                      Custom exam, event, and inspection plans.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-[22px] md:text-[26px] lg:text-3xl font-semibold text-[#14213d] pt-4">
                    School Areas We Cover:
                  </h3>
                  <ul className="list-disc list-inside space-y-2 pt-4">
                    <li className="text-base md:text-lg font-medium text-gray-700">
                      Classrooms, staff common room, reception areas
                    </li>
                    <li className="text-base md:text-lg font-medium text-gray-700">
                      Auditoriums, sports facilities
                    </li>
                    <li className="text-base md:text-lg font-medium text-gray-700">
                      Washrooms, canteen, and science labs
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-[22px] md:text-[26px] lg:text-3xl font-semibold text-[#14213d] pt-4">
                    What Makes Us Stand Out:
                  </h3>
                  <ul className="list-disc list-inside space-y-2 pt-4">
                    <li className="text-base md:text-lg font-medium text-gray-700">
                      Qualified personnel with DBS clearance
                    </li>
                    <li className="text-base md:text-lg font-medium text-gray-700">
                      Eco-friendly goods and allergy-free techniques
                    </li>
                    <li className="text-base md:text-lg font-medium text-gray-700">
                      Antiviral fogging and touchpoint sanitisation
                    </li>
                  </ul>
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
        </div>
      </section>
      {/* Premium Private School Cleaning Services section  */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d] text-center">
              Premium Private School Cleaning Services
            </h2>
            <p className="text-base md:text-lg text-gray-700 text-center pt-4">
              Our services are tailored to meet the high standards of
              independent schools. We ensure spotless, welcoming spaces that
              reflect your institution’s values.
            </p>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mt-10">
              {/* Left side - Image */}
              <div className="w-full lg:w-1/2  flex flex-col gap-4">
                <div>
                  <h3 className="text-[22px] md:text-[26px] lg:text-3xl font-semibold text-[#14213d] pt-10">
                    Tailored Cleaning Solutions:
                  </h3>
                  <ul className="list-disc list-inside space-y-2 pt-4">
                    <li className="text-base md:text-lg font-medium text-gray-700">
                      A wide variety of cleaning schedules, daily, weekly, or
                      termly
                    </li>
                    <li className="text-base md:text-lg font-medium text-gray-700">
                      Holiday, special event, or open day cleans
                    </li>
                    <li className="text-base md:text-lg font-medium text-gray-700">
                      Finely discreet services, of minimum disturbance
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-[22px] md:text-[26px] lg:text-3xl font-semibold text-[#14213d] pt-10">
                    Spaces We Clean:
                  </h3>
                  <ul className="list-disc list-inside space-y-2 pt-4">
                    <li className="text-base md:text-lg font-medium text-gray-700">
                      Class Rooms, Lounges, reception
                    </li>
                    <li className="text-base md:text-lg font-medium text-gray-700">
                      IT suites, arts room, libraries.
                    </li>
                    <li className="text-base md:text-lg font-medium text-gray-700">
                      Gym spaces, washrooms, and hangout rooms
                    </li>
                  </ul>
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

              {/* Right side - Content */}
              <div className="w-full lg:w-1/2">
                <div className="relative w-full aspect-[736/656] max-w-[536px] overflow-hidden">
                  <Image
                    src="/services/schoolCleaning5.jpg"
                    alt="Professional School Cleaning Services"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 536px"
                    priority
                    className="rounded-tl-[100px] rounded-br-[100px]"
                  />
                </div>
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
                  src="/services/schoolCleaning2.jpg"
                  alt="Professional School Cleaning Services"
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
                  CQD Cleaning Services provides specialized school cleaning
                  solutions designed to maintain a healthy and safe environment
                  for students and staff. We understand the unique needs of
                  educational facilities and tailor our services accordingly.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  From classrooms to cafeterias and restrooms, our team uses
                  eco-friendly products and proven techniques to keep every
                  corner clean and sanitized, helping to reduce illness and
                  promote focus and learning.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Daily, weekly & holiday cleaning schedules
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Classroom, hallway & restroom sanitation
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Cafeteria & common area deep cleaning
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Safe & eco-friendly cleaning supplies
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Waste management & odor control
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

      {/* Why Choose Our Cleaning Service section  */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d] text-center">
              Why Choose Our Cleaning Service
            </h2>
            <p className="text-base md:text-lg text-gray-700 text-center pt-4">
              When it comes to school cleaning services, quality matters. We
              deliver the standards that decision‑makers expect:
            </p>
            <div>
              <ul className="list-disc list-inside space-y-2 pt-4">
                <li className="text-base md:text-lg font-medium text-gray-700">
                  <strong className="font-bold">Reliably clean :</strong> Your
                  learning environments remain clean and wholesome. We are up to
                  the health requirements of schools and above in all
                  cleanliness.
                </li>
                <li className="text-base md:text-lg font-medium text-gray-700">
                  <strong className="font-bold">
                    Fully checked, DBS cleared cleaners :
                  </strong>{" "}
                  All cleaners have undergone background checks, training, and
                  experience. We realize how important a role safety and trust
                  play in a learning environment.
                </li>
                <li className="text-base md:text-lg font-medium text-gray-700">
                  <strong className="font-bold">
                    Schools in London: Flexible cleaning :
                  </strong>{" "}
                  Our services are designed to suit your timing: early mornings,
                  after school hours, before exams, and during school holidays.
                  Your daily schedule remains undisturbed.
                </li>
                <li className="text-base md:text-lg font-medium text-gray-700">
                  <strong className="font-bold">
                    Clear charges without any hidden charges :
                  </strong>{" "}
                  Clear, competitive prices. No surprises. You get transparent
                  pricing of all services, including customized services.
                </li>
                <li className="text-base md:text-lg font-medium text-gray-700">
                  <strong className="font-bold">
                    Allergy-safe and environmentally-conscious means :
                  </strong>{" "}
                  We put on child-safe, low-VOC products that are
                  school-friendly. It is non-hazardous to students, employees,
                  and sensitive surroundings.
                </li>
                <li className="text-base md:text-lg font-medium text-gray-700">
                  <strong className="font-bold">
                    Satisfaction guaranteed :
                  </strong>{" "}
                  No cleaning was satisfactory. We will go back and set it
                  straight. We support our service each time.
                </li>
              </ul>
            </div>
          </div>
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
      {/* Why Choose Us Section */}
      {/* <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d]">
                Why Choose Us
              </h2>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700">
                  CQD Cleaning Services understands the importance of a clean
                  and safe school environment to foster student wellbeing and
                  academic success. Our experienced staff work around your
                  schedule with minimal disruption.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  We offer competitive pricing, thorough cleaning standards, and
                  flexible plans to accommodate all school sizes — ensuring your
                  educational facility is always ready for learning.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Trusted by schools and educational institutions
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Fully trained & background-checked cleaners
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Customizable cleaning plans & schedules
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Transparent pricing with no hidden fees
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  100% satisfaction guarantee
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
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-full aspect-[536/656] max-w-[536px] rounded-tr-[100px] rounded-bl-[100px] overflow-hidden">
                <Image
                  src="/services/schoolCleaning3.jpg"
                  alt="School Cleaning Professionals"
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
      </section> */}
    </div>
  );
};

export default WwoSchoolCleaning;
