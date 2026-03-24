import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import ServicePhoneCta from "./ServicePhoneCta";

const WwoGPSurgeriesCleaning = () => {
  return (
    <div>
      {/* What We Offer Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative w-full aspect-[536/656] max-w-[536px] overflow-hidden">
                <Image
                  src="/services/gPSurgeries2.jpg"
                  alt="Professional GP Surgeries Cleaning Services"
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
                  CQD Cleaning Services specializes in comprehensive GP
                  surgeries cleaning, designed to uphold the highest standards
                  of hygiene and infection control in healthcare settings.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  Our team uses hospital-grade, eco-friendly cleaning products
                  to sanitize consultation rooms, waiting areas, reception
                  desks, and restrooms, ensuring a safe and welcoming
                  environment for patients and staff.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Thorough consultation room disinfection
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Waiting room and reception area hygiene
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Restroom cleaning and sanitization
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Use of medical-grade, eco-friendly disinfectants
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Waste disposal compliant with healthcare regulations
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
                  At CQD Cleaning Services, we recognize the vital importance of
                  cleanliness and infection prevention in GP surgeries. Our
                  fully trained team follows strict healthcare cleaning
                  protocols to protect patients and staff alike.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  We offer flexible scheduling, transparent pricing, and a
                  satisfaction guarantee to ensure your surgery remains pristine
                  and safe with minimal disruption.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Trusted by healthcare professionals
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Certified & experienced cleaning specialists
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Tailored cleaning schedules to fit surgery hours
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
                  src="/services/gPSurgeries3.jpg"
                  alt="Expert GP Surgeries Cleaning Professionals"
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

      {/* Keeping GP Surgeries Spotless – CQD, the UK’s Top  GP Surgery Cleaning Company Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative w-full aspect-[536/530] max-w-[536px] overflow-hidden">
                <Image
                  src="/services/gPSurgeries4.jpg"
                  alt="Professional GP Surgeries Cleaning Services"
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
                Keeping GP Surgeries Spotless – CQD, the UK’s Top GP Surgery
                Cleaning Company
              </h2>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700">
                  Maintaining a clean and sterile environment is essential for
                  every GP surgery. Our GP Surgery Cleaning services are
                  designed to meet strict healthcare hygiene standards, ensuring
                  that patients and staff remain safe from germs and infections.
                  At CQD Cleaning Services, we provide expert cleaning solutions
                  tailored to the unique needs of GP practices, from
                  consultation rooms and waiting areas to restrooms and
                  reception spaces. With our hospital-grade, eco-friendly
                  products and trained cleaning specialists, we help your
                  surgery stay spotless, welcoming, and compliant with
                  healthcare regulations.
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

      {/* What is a GP Surgery in the UK? Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side - Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d]">
                What is a GP Surgery in the UK?
              </h2>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700">
                  A <strong>GP surgery</strong> in the UK is a local medical
                  practice where patients receive primary healthcare from a{" "}
                  <strong>General Practitioner</strong> (family doctor). These
                  surgeries are often the first point of contact for
                  non-emergency medical issues, offering services such as
                  consultations, health check-ups, vaccinations, and referrals
                  to specialists.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  Unlike what the word “surgery” might suggest, a GP surgery is
                  not usually a place for major operations in UK healthcare
                  terminology, it refers to the doctor’s clinic or office. GP
                  surgeries are typically part of the{" "}
                  <strong>NHS (National Health Service),</strong> providing free
                  healthcare to registered patients, and are supported by a team
                  that may include nurses, healthcare assistants, and
                  administrative staff.
                </p>
                <p className="text-base md:text-lg text-gray-700">
                  Because they handle high volumes of patients daily and must
                  maintain strict hygiene to prevent the spread of infections,{" "}
                  <strong>
                    cleanliness and sanitation in GP surgeries are essential.
                  </strong>
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
                  src="/services/gPSurgeries5.jpg"
                  alt="Expert GP Surgeries Cleaning Professionals"
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
      {/* Why Deep Cleaning is Necessary in GP Surgeries Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-6 pb-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d] text-center">
              Why Deep Cleaning is Necessary in GP Surgeries
            </h2>

            <div className="space-y-4">
              <p className="text-base md:text-lg text-gray-700 text-left">
                GP surgeries welcome a large number of patients every day, many
                of whom may be unwell or carrying infectious illnesses. This
                constant footfall increases the risk of germs, bacteria, and
                viruses spreading — not just between patients, but also to
                staff. While daily cleaning tackles surface-level dirt,{" "}
                <strong>
                  deep cleaning goes further to eliminate hidden contaminants in
                  hard-to-reach areas.
                </strong>
              </p>
              <p className="text-base md:text-lg text-gray-700 text-left">
                Deep cleaning in a GP surgery is essential because it:
              </p>
            </div>
          </div>
          <ul className="pt-4">
            <li className="text-lg md:text-xl text-gray-700">
              <strong>Prevents the spread of infections</strong> by removing
              harmful pathogens from all surfaces, equipment, and touchpoints.
            </li>
            <li className="text-lg md:text-xl text-gray-700 py-3">
              <strong>Meets strict NHS and CQC hygiene standards, </strong>{" "}
              helping the practice remain compliant with health regulations.
            </li>
            <li className="text-lg md:text-xl text-gray-700">
              <strong>Protects patients and staff </strong> by creating a safer,
              healthier environment.
            </li>
            <li className="text-lg md:text-xl text-gray-700 py-3">
              <strong>Maintains a professional appearance,</strong> reassuring
              patients that the surgery is clean and well cared for.
            </li>
            <li className="text-lg md:text-xl text-gray-700">
              <strong>Extends the lifespan of fixtures and equipment </strong>{" "}
              by removing built-up dirt, dust, and grime.
            </li>
          </ul>
          <p className="text-base md:text-lg text-gray-700 text-left pt-5">
            In healthcare settings, cleanliness isn’t just about appearances —
            it’s about <strong>patient safety and public health.</strong> That’s
            why a scheduled deep cleaning programme is a crucial part of GP
            surgery maintenance.
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

export default WwoGPSurgeriesCleaning;
