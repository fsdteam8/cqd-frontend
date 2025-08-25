import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const WwoDentalCleaning = () => {
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
                  src="/services/DentalCleaning2.jpg"
                  alt="Professional Data Centre Cleaning Services"
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
                  CQD Cleaning Services provides specialized cleaning solutions
                  for data centres and server rooms, ensuring dust-free,
                  static-safe environments that safeguard critical IT
                  infrastructure and performance.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  We use anti-static, non-abrasive methods to clean raised
                  floors, server cabinets, cable trays, and HVAC vents, helping
                  you prevent downtime and prolong equipment life.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Raised floor and subfloor dust removal
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Server racks & equipment surface cleaning
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Anti-static vacuuming & cleaning techniques
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  HVAC and vent sanitization
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Cable tray & overhead surface dusting
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
            {/* Left side - Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d]">
                Why Choose Us
              </h2>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700">
                  Our data centre cleaning services are performed by technicians
                  trained in handling sensitive electronic environments. We
                  prioritize safety, precision, and compliance with industry
                  best practices.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  CQD Cleaning Services is committed to keeping your data centre
                  clean, safe, and running at optimal performance with minimal
                  disruption to your operations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Experienced in mission-critical environments
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Anti-static & equipment-safe processes
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Scheduled cleanings without operational downtime
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Transparent quotes & detailed service logs
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Trusted by IT firms and data providers
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
                  src="/services/DentalCleaning3.jpg"
                  alt="Data Centre Cleaning Experts at Work"
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
              <div className="relative w-full aspect-[536/656] max-w-[500px] overflow-hidden">
                <Image
                  src="/images/dentla1.jpg"
                  alt="Professional Data Centre Cleaning Services"
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
                Why Dental Clinic Cleaning is Essential
              </h2>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700">
                  Regular dental clinic cleaning is vital for preventing the
                  spread of infections and minimizing the risk of
                  cross-contamination between patients and staff. By maintaining
                  safe and sterile surfaces, treatment rooms, and common areas,
                  clinics can ensure a hygienic environment that supports the
                  health of everyone inside. Additionally, a clean and
                  well-maintained clinic creates a professional and welcoming
                  atmosphere, helping to instill confidence in patients while
                  promoting a positive and trustworthy image for the practice.
                </p>

                {/* <p className="text-base md:text-lg text-gray-700">
                  We use anti-static, non-abrasive methods to clean raised
                  floors, server cabinets, cable trays, and HVAC vents, helping
                  you prevent downtime and prolong equipment life.
                </p> */}
              </div>

              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Raised floor and subfloor dust removal
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Server racks & equipment surface cleaning
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Anti-static vacuuming & cleaning techniques
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  HVAC and vent sanitization
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Cable tray & overhead surface dusting
                </div>
              </div> */}

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
            {/* Left side - Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d]">
                Benefits of Professional Dental Clinic Cleaning
              </h2>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700">
                  Professional dental clinic cleaning offers several key
                  advantages that go beyond basic upkeep. Trained cleaning
                  experts use specialized methods designed specifically for
                  medical and dental settings, ensuring every surface is
                  thoroughly disinfected. Eco-friendly and non-toxic cleaning
                  products are employed to safeguard both patients and staff
                  from harmful chemicals. By
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  Coutsourcing cleaning tasks, clinic staff can focus more on
                  patient care, saving valuable time and effort. Additionally,
                  professional cleaning helps maintain strict compliance with
                  health and safety regulations, providing a safe, hygienic, and
                  trustworthy environment for everyone.
                </p>

                <h2 className="text-xl md:text-xl lg:text-2xl font-bold text-[#14213d]">
                  Services Included in Dental Clinic Cleaning
                </h2>
                <p className="text-base md:text-lg text-gray-700">
                  Our dental clinic cleaning services are designed to meet the
                  rigorous standards of medical environments. We are experienced
                  in mission-critical settings, ensuring that every cleaning
                  task is performed with precision and care. Specialized
                  anti-static and equipment-safe processes protect sensitive
                  dental instruments and electronic devices while maintaining a
                  sterile environment. We offer flexible, scheduled cleanings
                  that avoid any disruption to your clinic’s operations,
                  allowing staff to focus on patient care. Additionally, our
                  services come with transparent quotes and detailed service
                  logs, giving you full confidence in the quality and
                  consistency of our cleaning.
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

            {/* Right side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-full aspect-[536/656] max-w-[646px] rounded-tr-[100px] rounded-bl-[100px] overflow-hidden">
                <Image
                  src="/images/dentla2.jpg"
                  alt="Data Centre Cleaning Experts at Work"
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

export default WwoDentalCleaning;
