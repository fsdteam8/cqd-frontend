import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import ServicePhoneCta from "./ServicePhoneCta";

const WwoClubsCleaning = () => {
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
                  src="/services/clubCleaning2.jpg"
                  alt="Professional Club Cleaning Services"
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
                  Running a successful club isn’t just about music, lights, and entertainment, it&apos;s also about maintaining a safe and hygienic environment for your guests. Clubs cleaning plays a vital role in creating a welcoming atmosphere where visitors can enjoy themselves without concerns about cleanliness or safety. From the dance floor to the bar counters, every corner of your club should reflect professionalism and care.

                </p>

                {/* <p className="text-base md:text-lg text-gray-700">
                  We clean high-traffic zones, sanitize common touchpoints, and remove post-event debris to maintain a vibrant and health-conscious space — whether it’s a nightclub, lounge, or event club.
                </p> */}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Deep cleaning of dance floors & lounges
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Disinfection of restrooms & bar areas
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Trash removal & post-event cleanup
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Mirror, glass, and surface polishing
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Customized cleaning schedules
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
                  We understand the unique cleaning demands of clubs and nightlife venues. Our trained professionals use eco-friendly, high-performance products to ensure thorough sanitation and unmatched cleanliness.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  With CQD Cleaning Services, your club is cleaned efficiently and discreetly — ensuring minimal disruption and maximum shine before your next event.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Experienced in nightlife environments
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Flexible cleaning after-hours
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Attention to detail & sanitation
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Fully insured & trained staff
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Trusted by venues across the city
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
                  src="/services/clubCleaning3.jpg"
                  alt="Nightclub Cleaning Crew at Work"
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



      {/* Why Club Cleaning is Necessary*/}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative w-full aspect-[536/656] max-w-[500px] overflow-hidden">
                <Image
                  src="/images/club2.jpg"
                  alt="Professional Club Cleaning Services"
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
                Why Club Cleaning is Necessary
              </h2>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700">
                  Clubs are high-traffic venues where hundreds of people gather to socialize, dance, and enjoy themselves. With such constant activity, spills, stains, and dirt can quickly build up, creating an unhygienic environment. Club cleaning is necessary not only to maintain a fresh and welcoming atmosphere but also to protect the health and safety of guests and staff.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                 A clean club reduces the spread of germs, eliminates unpleasant odors, and prevents pest problems that can arise in food and drink areas. Regular cleaning also extends the life of your furniture, dance floors, and sound equipment, saving money in the long run. Most importantly, a spotless venue leaves a lasting positive impression, encouraging guests to return and recommend your club to others.
                </p>
              </div>

              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Deep cleaning of dance floors & lounges
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Disinfection of restrooms & bar areas
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Trash removal & post-event cleanup
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Mirror, glass, and surface polishing
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Customized cleaning schedules
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

      {/* Our Club Cleaning Technique */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side - Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d]">
                Our Club Cleaning Technique
              </h2>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700">
                  Our club cleaning technique is designed to keep every corner of your venue spotless and inviting. We carry out deep cleaning of dance floors and lounges to ensure they remain safe, hygienic, and free from sticky spills or stains. Restrooms and bar areas are thoroughly disinfected to eliminate germs and maintain a fresh environment for guests. We also handle efficient trash removal and complete post-event cleanup, so your club is always ready for the next big night. In addition, mirrors, glass, and surfaces are polished to give your venue a bright and professional look. To fit your operations, we offer 
                </p>

                <p className="text-base md:text-lg text-gray-700">
                 customized cleaning schedules that can be arranged before or after business hours, ensuring minimal disruption to your club’s activities.

                </p>
              </div>

              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Experienced in nightlife environments
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Flexible cleaning after-hours
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Attention to detail & sanitation
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Fully insured & trained staff
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Trusted by venues across the city
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
              <div className="relative w-full aspect-[536/656] max-w-[480px] rounded-tr-[100px] rounded-bl-[100px] overflow-hidden">
                <Image
                  src="/images/club1.jpg"
                  alt="Nightclub Cleaning Crew at Work"
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

export default WwoClubsCleaning;
