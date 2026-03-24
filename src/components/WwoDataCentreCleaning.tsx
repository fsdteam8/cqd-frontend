import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import ServicePhoneCta from "./ServicePhoneCta";

const WwoDataCenterCleaning = () => {
  return (
    <div>
      {/* Introducing CQD Cleaning – Your Trusted Data Centre Cleaning Specialists Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative w-full aspect-[536/556] max-w-[536px] overflow-hidden">
                <Image
                  src="/services/dataCenter4.jpg"
                  alt="Expert Data Centre Cleaning Services"
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
                Introducing CQD Cleaning – Your Trusted Data Centre Cleaning
                Specialists
              </h2>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700">
                  CQD Cleaning Services is dedicated to providing professional
                  data centre cleaning services that keep your vital
                  infrastructure free of contaminants and keep your business
                  operational.Our specially trained crew is fully equipped to
                  clean server rooms and equipment racks, shared facilities, all
                  without impacting your business or sensitive equipment with
                  special, non-invasive cleaning materials to keep your
                  technology safe and secure. From standard maintenance to the
                  intensive, scheduled cleaning, our data centre cleaning
                  services guarantee every space is clean, well-organised, and
                  fully optimised to operate reliably.
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
      {/*  What is a Data Centre? Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side - Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d]">
                What is a Data Centre?
              </h2>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700">
                  A data centre is a highly specialized facility that holds the
                  critical IT infrastructure for the organization, including
                  servers, storage systems, networking hardware and
                  communication devices. Data centres are meant to be highly
                  performing, reliable and secure with regards to processing,
                  storage and management of digital information.
                </p>
                <p className="text-base md:text-lg text-gray-700">
                  These data centers possess ample cooling mechanisms, power
                  back-up, fire safety and security equipment so that sensitive
                  data is not hampered and operations continue. Data centres
                  play an important part in the operations of businesses, cloud
                  providers and technology companies to host the critical
                  applications, websites, cloud services and operations of
                  companies.
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
                  src="/services/dataCenter5.jpg"
                  alt="Technician Performing Data Centre Cleaning"
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
                  src="/services/dataCenter2.jpg"
                  alt="Expert Data Centre Cleaning Services"
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
                  At CQD Cleaning Services, we specialize in professional data
                  centre and server room cleaning. Our team ensures your
                  mission-critical IT environments are free from dust and
                  static, minimizing risks and boosting equipment longevity.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  We use non-abrasive, anti-static cleaning methods to treat
                  every surface—from raised floors to server racks—ensuring
                  optimal airflow and protection from contaminants that can harm
                  performance.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Subfloor and raised floor particulate removal
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Equipment & server rack surface disinfection
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Anti-static HEPA vacuuming
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  HVAC and air vent cleaning
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Overhead cable tray dust removal
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
                  Our certified technicians are trained to clean sensitive IT
                  environments with utmost care. We follow best practices that
                  meet industry standards, ensuring your infrastructure remains
                  protected during every step of the cleaning process.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  CQD Cleaning Services guarantees thorough, disruption-free
                  data centre cleaning tailored to your schedule—keeping your
                  operations secure and efficient.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Specialized in high-security server rooms
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Static-safe equipment cleaning methods
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Flexible scheduling to avoid downtime
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Transparent pricing & detailed service reporting
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Trusted by tech companies and data centres
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
                  src="/services/dataCenter3.jpg"
                  alt="Technician Performing Data Centre Cleaning"
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

      {/* How We Handle Server Room Cleaning Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-6 pb-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d] text-center">
              How We Handle Server Room Cleaning
            </h2>

            <div className="space-y-4">
              <p className="text-base md:text-lg text-gray-700 text-center">
                At <strong>CQD Cleaning Services,</strong> we follow a
                meticulous process to ensure your{" "}
                <strong>server room cleaning</strong> is safe, thorough, and
                disruption-free:
              </p>
            </div>
          </div>
          <ul className="pt-4">
            <li className="text-lg md:text-xl text-gray-700">
              <strong>Assessment & Planning:</strong> First we assess your
              layout, equipment and unique cleaning needs of your server room to
              develop an individual full-service maintenance but low-cost plan.
            </li>
            <li className="text-lg md:text-xl text-gray-700 py-3">
              <strong>Pre-Clean Preparation:</strong> Where necessary, our staff
              destroys or de-energizes unrelated equipment and, when sensitive
              equipment is in use, applies static-safe tools and protective
              garments.
            </li>
            <li className="text-lg md:text-xl text-gray-700">
              <strong>Dust & Contaminant removal:</strong> We decontaminate
              servers, racks, cables, vents and floors of dust, dirt and debris
              using the latest non-intrusive method without intervention to your
              day-to-day activities.
            </li>
            <li className="text-lg md:text-xl text-gray-700 py-3">
              <strong>Cleaning Works on Equipment in details:</strong>Delicate
              parts are subjected to special cleaning solutions that allow
              excellent levels of sanitation without damaging hardware and
              networking devices.
            </li>
            <li className="text-lg md:text-xl text-gray-700">
              <strong>Post-Clean Inspection:</strong>The final process involves
              inspection by cleaning all areas to ensure the environment is
              clean, and orderly and fully functional. In-depth reports are
              availed at your disposal.
            </li>
            <li className="text-lg md:text-xl text-gray-700 py-3">
              <strong>Flexible Scheduling:</strong> Our regular cleaning will
              happen at your convenience; we organize it around your hours of
              operation so that you do not lose equipment time and keep your
              data centre secure and effective.
            </li>
          </ul>
          <p className="text-base md:text-lg text-gray-700 text-center pt-5">
            With CQD Cleaning Services, your server rooms are maintained to the
            highest standards, protecting your critical infrastructure while
            keeping operations smooth and uninterrupted.
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

export default WwoDataCenterCleaning;
