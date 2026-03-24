import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import ServicePhoneCta from "./ServicePhoneCta";

const WwoAccountancyOfficeCleaning = () => {
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
                  src="/services/accountancyOfficesCleaning2.jpg"
                  alt="Professional Accountancy Office Cleaning Services"
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
                  Maintaining a clean and organized accountancy office is
                  essential for both hygiene and professionalism. Accountancy
                  office cleaning ensures that workspaces, desks, and common
                  areas are free from dust, dirt, and germs, creating a
                  healthier environment for employees and clients alike. A
                  spotless office not only enhances productivity and focus among
                  staff but also leaves a positive impression on clients,
                  reflecting the professionalism and attention to detail of your
                  firm.
                </p>

                {/* <p className="text-base md:text-lg text-gray-700">
                  Our team uses non-intrusive, eco-friendly products to clean
                  workstations, meeting rooms, waiting areas, and common spaces
                  — always with discretion and professionalism.
                </p> */}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Desk & workstation sanitization
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Disinfecting phones, keyboards & electronics
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Carpet vacuuming & stain removal
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Breakroom & kitchen surface cleaning
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Restroom deep cleaning & replenishment
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
                  Our accountancy office cleaning team is trained to maintain
                  confidentiality and minimize disruption during cleanings. We
                  know how to clean in professional environments where privacy
                  and appearance matter.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  From flexible scheduling to tailored cleaning plans, CQD
                  Cleaning Services ensures your office remains clean, safe, and
                  impressively maintained for both staff and clients.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Discreet & professional staff
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Secure handling of office environments
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Flexible after-hours availability
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Custom cleaning packages for accountants
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Trusted by top accountancy firms
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
                  src="/services/accountancyOfficesCleaning3.jpg"
                  alt="Accountancy Office Cleaning Experts at Work"
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
                  src="/images/officeCline3.jpg"
                  alt="Professional Accountancy Office Cleaning Services"
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
                Why Accountancy Office Cleaning is Essential
              </h2>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700">
                  Professional accountancy office cleaning is vital for
                  maintaining a healthy and productive work environment. Regular
                  cleaning helps ensure health and hygiene benefits for both
                  staff and clients by reducing germs, allergens, and dust in
                  the office. A clean workspace also supports tidiness and
                  organization, making it easier for employees to focus and work
                  efficiently. Beyond functionality, a well-maintained office
                  creates a professional and welcoming environment that leaves a
                  positive impression on clients and visitors, reflecting the
                  care and professionalism of your accountancy firm.
                </p>

                {/* <p className="text-base md:text-lg text-gray-700">
                  Our team uses non-intrusive, eco-friendly products to clean
                  workstations, meeting rooms, waiting areas, and common spaces
                  — always with discretion and professionalism.
                </p> */}
              </div>

              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Desk & workstation sanitization
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Disinfecting phones, keyboards & electronics
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Carpet vacuuming & stain removal
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Breakroom & kitchen surface cleaning
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Restroom deep cleaning & replenishment
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
                Our Accountancy Office Cleaning Services
              </h2>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700">
                  Our accountancy office cleaning services are designed to keep
                  every corner of your office spotless, sanitized, and
                  well-maintained. We provide thorough desk and workstation
                  sanitization, ensuring that workspaces are clean and safe for
                  daily use. High-touch items such as phones, keyboards, and
                  other electronics are carefully disinfected to minimize germs.
                  Our team handles carpet vacuuming and stain removal to
                  maintain a fresh and professional look throughout your office.
                  We also clean breakrooms and kitchen surfaces, keeping
                  communal areas hygienic and inviting. Additionally, restrooms
                  receive deep cleaning and replenishment, ensuring a sanitary
                  environment for both staff and clients. With our .
                  comprehensive approach, every area of your accountancy office
                  is maintained to the highest standards of cleanliness and
                  professionalism.
                </p>

                {/* <p className="text-base md:text-lg text-gray-700">
                  From flexible scheduling to tailored cleaning plans, CQD
                  Cleaning Services ensures your office remains clean, safe, and
                  impressively maintained for both staff and clients.
                </p> */}
              </div>

              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Discreet & professional staff
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Secure handling of office environments
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Flexible after-hours availability
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Custom cleaning packages for accountants
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Trusted by top accountancy firms
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
                  src="/images/officeCline2.jpg"
                  alt="Accountancy Office Cleaning Experts at Work"
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
                  src="/images/officeCline1.jpg"
                  alt="Professional Accountancy Office Cleaning Services"
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
                Benefits of Professional Accountancy Office Cleaning
              </h2>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700">
                  Opting for professional accountancy office cleaning provides
                  numerous advantages for both your employees and your business.
                  A clean and sanitized office creates a healthier and safer
                  workspace, reducing the risk of germs and allergens. Regular
                  cleaning also contributes to increased staff productivity and
                  morale, as employees feel more comfortable and focused in a
                  tidy environment. By maintaining desks, carpets, and office
                  fixtures, professional cleaning helps prolong the life of
                  furniture and equipment, saving costs in the long run. With an
                  experienced cleaning team handling every detail, office
                  maintenance becomes stress-free, allowing your staff to focus
                  on their work while ensuring the office consistently looks
                  professional and welcoming.
                </p>

                {/* <p className="text-base md:text-lg text-gray-700">
                  Our team uses non-intrusive, eco-friendly products to clean
                  workstations, meeting rooms, waiting areas, and common spaces
                  — always with discretion and professionalism.
                </p> */}
              </div>

              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Desk & workstation sanitization
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Disinfecting phones, keyboards & electronics
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Carpet vacuuming & stain removal
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Breakroom & kitchen surface cleaning
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Restroom deep cleaning & replenishment
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default WwoAccountancyOfficeCleaning;
