import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import ServicePhoneCta from "./ServicePhoneCta";

const WwoCinemaCleaning = () => {
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
                  src="/services/cinemaCleaning2.jpg"
                  alt="Professional Cinema and Theater Cleaning Services"
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
                  Cinema Cleaning plays a vital role in keeping theatres and auditoriums fresh, welcoming, and hygienic for all visitors. With hundreds of guests walking in and out every day, maintaining a spotless environment is essential to create the perfect movie-going experience. Clean seating areas, sanitized restrooms, and tidy lobbies not only enhance customer comfort but also reflect positively on your cinema’s reputation. By investing in professional cinema cleaning, you ensure a safe and hygienic atmosphere where guests can relax and enjoy their time without concerns about cleanliness.
                </p>

                {/* <p className="text-base md:text-lg text-gray-700">
                  Our staff is trained to handle large-capacity venues with high foot
                  traffic, ensuring clean seating, sticky-free floors, and sanitized
                  high-touch areas for an outstanding viewing experience.
                </p> */}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Deep cleaning of theater seating and floors
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Lobby, restrooms & concession area sanitation
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Gum, spill, and stain removal services
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Daily, weekly & after-event cleanups
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Disinfection of handrails, handles & counters
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
                  Our cinema cleaning team is equipped with the tools and experience
                  needed to maintain high standards of cleanliness in entertainment
                  venues. We ensure spotless environments that enhance audience comfort.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  From small indie theaters to large multiplexes, CQD Cleaning Services
                  ensures a clean, safe, and guest-ready space without interrupting your
                  daily operations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Flexible schedules for off-hour cleaning
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Quick turnaround before & after screenings
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Industry-grade eco-friendly cleaning supplies
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Professional and trained cinema crew
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  100% satisfaction & hygiene guaranteed
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
                  src="/services/cinemaCleaning3.jpg"
                  alt="Cinema Cleaning Experts in Action"
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




       {/* Our Cleaning Process */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative w-full aspect-[536/656] max-w-[486px] overflow-hidden">
                <Image
                  src="/images/cenama1.jpg"
                  alt="Professional Cinema and Theater Cleaning Services"
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
                Our Cleaning Process
              </h2>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700">
                  At the heart of our cinema cleaning services is a process designed for both efficiency and flexibility. Understanding that cinemas operate on tight schedules, we provide off-hour cleaning to avoid disrupting screenings and ensure a quick turnaround before and after shows. Our team uses industry-grade, eco-friendly cleaning supplies that are safe for guests while effectively eliminating dirt, stains, and germs. Supported by a professional and highly trained cinema cleaning crew, we maintain 100% satisfaction and hygiene standards at every step. From deep-cleaning seats and carpets to sanitizing restrooms, lobbies, and concession areas, we ensure every corner of your cinema is spotless and welcoming. With our expert cleaning process, your theatre will consistently provide a safe, comfortable, and pristine environment for every moviegoer.
                </p>

                {/* <p className="text-base md:text-lg text-gray-700">
                  Our staff is trained to handle large-capacity venues with high foot
                  traffic, ensuring clean seating, sticky-free floors, and sanitized
                  high-touch areas for an outstanding viewing experience.
                </p> */}
              </div>

              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Deep cleaning of theater seating and floors
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Lobby, restrooms & concession area sanitation
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Gum, spill, and stain removal services
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Daily, weekly & after-event cleanups
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Disinfection of handrails, handles & counters
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
               Benefits of Professional Cinema Cleaning
              </h2>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700">
                 Investing in professional cinema cleaning brings a host of benefits for both your guests and staff. A thoroughly cleaned and sanitized environment creates a healthier atmosphere, reducing the spread of germs and allergens. Regular cleaning also leads to improved air quality and overall comfort, ensuring every visitor enjoys a pleasant movie-going experience. By properly maintaining seats, carpets, and other cinema furniture, you prolong their lifespan and reduce the need for costly replacements. Finally, with an expert cleaning team handling every detail, cinema management becomes stress-free, allowing staff to focus on providing excellent service rather than worrying about hygiene.

                </p>

                {/* <p className="text-base md:text-lg text-gray-700">
                  From small indie theaters to large multiplexes, CQD Cleaning Services
                  ensures a clean, safe, and guest-ready space without interrupting your
                  daily operations.
                </p> */}
              </div>

              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Flexible schedules for off-hour cleaning
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Quick turnaround before & after screenings
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Industry-grade eco-friendly cleaning supplies
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Professional and trained cinema crew
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  100% satisfaction & hygiene guaranteed
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
              <div className="relative w-full aspect-[536/656] max-w-[436px] rounded-tr-[100px] rounded-bl-[100px] overflow-hidden">
                <Image
                  src="/images/cenama2.jpg"
                  alt="Cinema Cleaning Experts in Action"
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

export default WwoCinemaCleaning;
