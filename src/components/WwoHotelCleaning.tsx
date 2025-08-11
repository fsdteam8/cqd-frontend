import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const WwoHotelCleaning = () => {
  return (
    <div>
      {/* The Importance of Hotel Cleaning Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative w-full aspect-[536/656] max-w-[536px] overflow-hidden">
                <Image
                  src="/services/hotelCleaning7.jpg"
                  alt="Professional Hotel Cleaning Services"
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
                The Importance of Hotel Cleaning
              </h2>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700">
                  Cleanliness is the cornerstone of guest satisfaction. A
                  well-maintained room not only enhances comfort but also builds
                  trust and loyalty. According to industry research, room
                  cleanliness is a primary factor that influences positive
                  reviews and repeat bookings.
                </p>

                <h3 className="text-lg md:text-xl text-gray-700 font-semibold">
                  Key Benefits:
                </h3>
                <ul className="list-disc list-inside space-y-2 pt-2">
                  <li className="text-base md:text-lg font-medium text-gray-700">
                    Increased guest satisfaction and positive reviews
                  </li>
                  <li className="text-base md:text-lg font-medium text-gray-700">
                    Protection of your brand&apos;s reputation
                  </li>
                  <li className="text-base md:text-lg font-medium text-gray-700">
                    Ensured compliance with health and safety standards
                  </li>
                  <li className="text-base md:text-lg font-medium text-gray-700">
                    Boosted employee productivity and morale
                  </li>
                </ul>
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

      {/* Our Comprehensive Cleaning Protocols  Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side - Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d]">
                Our Comprehensive Cleaning Protocols
              </h2>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700">
                  We follow globally recognized cleaning protocols adapted for
                  every part of your hotel. Our approach combines efficiency
                  with a detail-oriented perspective, ensuring no corner is
                  overlooked.
                </p>

                <h3 className="text-lg md:text-xl text-gray-700 font-semibold">
                  Guest Room Cleaning:{" "}
                </h3>
                <ul className="list-disc list-inside space-y-2 pt-2">
                  <li className="text-base md:text-lg font-medium text-gray-700">
                    Ventilate the room before starting the cleaning process.
                  </li>
                  <li className="text-base md:text-lg font-medium text-gray-700">
                    Changing all bed linens and towels.
                  </li>
                  <li className="text-base md:text-lg font-medium text-gray-700">
                    Disinfecting high-touch surfaces such as remotes, light
                    switches, and door handles.
                  </li>
                  <li className="text-base md:text-lg font-medium text-gray-700">
                    Thoroughly cleaning and sanitizing the bathroom.
                  </li>
                  <li className="text-base md:text-lg font-medium text-gray-700">
                    Dusting all furniture, fixtures, and decorative items
                  </li>
                  <li className="text-base md:text-lg font-medium text-gray-700">
                    Vacuuming carpets and mopping hard floors.
                  </li>
                  <li className="text-base md:text-lg font-medium text-gray-700">
                    Replenish amenities and report any maintenance issues.
                  </li>
                  <li className="text-base md:text-lg font-medium text-gray-700">
                    TEmptying all trash bins and replacing liners.
                  </li>
                </ul>

                <h3 className="text-lg md:text-xl text-gray-700 font-semibold">
                  Public Area Maintenance:
                </h3>
                <ul className="list-disc list-inside space-y-2 pt-2">
                  <li className="text-base md:text-lg font-medium text-gray-700">
                    Cleaning and disinfecting lobbies, elevators, corridors, and
                    lounges.
                  </li>
                  <li className="text-base md:text-lg font-medium text-gray-700">
                    Sanitizing gym equipment, poolside furniture, and business
                    centers.
                  </li>
                  <li className="text-base md:text-lg font-medium text-gray-700">
                    Conducting regular cleaning and checks of public restrooms.
                  </li>
                  <li className="text-base md:text-lg font-medium text-gray-700">
                    Emptying public trash bins and replacing liners.
                  </li>
                </ul>

                <h3 className="text-lg md:text-xl text-gray-700 font-semibold">
                  Food & Beverage Areas:
                </h3>
                <ul className="list-disc list-inside space-y-2 pt-2">
                  <li className="text-base md:text-lg font-medium text-gray-700">
                    Sanitizing tables, chairs, menus, and food preparation
                    surfaces.
                  </li>
                  <li className="text-base md:text-lg font-medium text-gray-700">
                    Ensuring proper labeling and disposal of expired items.
                  </li>
                  <li className="text-base md:text-lg font-medium text-gray-700">
                    Cleaning dishware using high-temperature sanitation cycles
                    to kill germs.
                  </li>
                </ul>
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
                  src="/services/hotelCleaning5.jpg"
                  alt="Expert Hotel Cleaning Professionals"
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

      {/* Tailored Hotel Cleaning Solutions That Keep Your Property Immaculate Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative w-full aspect-[536/656] max-w-[536px] overflow-hidden">
                <Image
                  src="/services/hotelCleaning4.jpg"
                  alt="Professional Hotel Cleaning Services"
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
                Tailored Hotel Cleaning Solutions That Keep Your Property
                Immaculate
              </h2>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700">
                  When it comes to <strong>hotel housekeeping,</strong> we
                  combine unwavering reliability with strategic attention to
                  detail. Our <strong>clean hotel</strong> promise means your
                  property is presented immaculately—from the check-in desk to
                  the final hallway.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  As your dedicated <strong>hotel cleaner</strong> partner, we
                  tailor every <strong>hotel house cleaning</strong> plan to
                  your unique needs: training staff to reflect your values,
                  mobilizing quickly when occupancy changes, and delivering
                  top-quality results no matter how dynamic your operation.
                </p>
                <p className="text-base md:text-lg text-gray-700">
                  In the realm of <strong>housekeeping hotellerie,</strong>{" "}
                  excellence isn’t optional—it’s essential. That’s why we
                  deliver professional precision with a personal touch—ensuring
                  guests—and managers—are always delighted, and always asking,
                  “Why haven’t we done this sooner?”
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
          </div>
        </div>
      </section>

      {/* Premium Hotel Housekeeping Services for a Spotless Guest Experience Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side - Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d]">
                Premium Hotel Housekeeping Services for a Spotless Guest
                Experience
              </h2>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700">
                  Experience the difference a truly clean hotel can make—where
                  pristine rooms meet professional polish and peace of mind. Our
                  hotel housekeeping services are engineered for hoteliers who
                  demand elite standards without the fluff.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  With a highly trained hotel cleaner team that delivers bespoke
                  housekeeping hotellerie solutions, we ensure every corner
                  shines, every surface impresses, and every guest feels
                  welcome.
                </p>
                <p className="text-base md:text-lg text-gray-700">
                  Whether it&apos;s a sunlit lobby, a quiet corridor, or a guest
                  room prepared for a delicate arrival, our hotel house cleaning
                  is discreet, dependable, and consistent—no matter the season
                  or the schedule. We don’t just clean; we help elevate your
                  brand’s reputation by maintaining an atmosphere of trust and
                  invitation.
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
              <div className="relative w-full aspect-[536/656] max-w-[536px] rounded-tr-[100px] rounded-bl-[100px] overflow-hidden">
                <Image
                  src="/services/hotelCleaning5.jpg"
                  alt="Expert Hotel Cleaning Professionals"
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

      {/* _______________________ */}
      {/* What We Offer Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative w-full aspect-[536/656] max-w-[536px] overflow-hidden">
                <Image
                  src="/services/hotelCleaning2.jpg"
                  alt="Professional Hotel Cleaning Services"
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
                  CQD Cleaning Services specializes in high-quality hotel
                  cleaning designed to create a pristine and inviting
                  environment for every guest. We provide detailed cleaning
                  services tailored to the hospitality industry.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  From guest rooms and lobbies to restrooms and kitchens, our
                  trained staff use eco-friendly products and proven techniques
                  to maintain impeccable hygiene and comfort throughout your
                  hotel.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Daily guest room & suite cleaning
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Sanitization of bathrooms & shared spaces
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Lobby, hallway & elevator detailing
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Use of eco-friendly, non-toxic products
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Linen & towel change coordination
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
                  At CQD Cleaning Services, we understand the importance of a
                  clean, well-maintained hotel in creating a lasting impression.
                  Our dedicated staff ensures every room and common area meets
                  the highest cleanliness standards.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  We work discreetly and flexibly around your guest schedule,
                  including early check-outs, late check-ins, and special
                  events. Our mission is to enhance guest satisfaction through
                  excellence in cleanliness.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Trusted by hotels, inns & resorts
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Staff trained in hospitality cleaning standards
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Flexible scheduling around guest needs
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Transparent pricing with no hidden fees
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  100% satisfaction guaranteed
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
                  src="/services/hotelCleaning3.jpg"
                  alt="Expert Hotel Cleaning Professionals"
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

      {/* Personalized Cleaning for Every Guest Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative w-full aspect-[536/656] max-w-[536px] overflow-hidden">
                <Image
                  src="/services/hotelCleaning8.jpg"
                  alt="Professional Hotel Cleaning Services"
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
              <h2 className="text-2xl lg:text-3xl font-bold text-[#14213d]">
                Personalized Cleaning for Every Guest
              </h2>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700">
                  Whether it&apos;s a business traveler, a honeymooning couple,
                  or a family on vacation, we customize our cleaning methods to
                  meet the specific needs of your guests.
                </p>

                <h3 className="text-lg md:text-xl text-gray-700 font-semibold">
                  Examples Include:
                </h3>
                <ul className="list-disc list-inside space-y-2 pt-2">
                  <li className="text-base md:text-lg font-medium text-gray-700">
                    Allergy-sensitive room preparation with a focus on air
                    quality.
                  </li>
                  <li className="text-base md:text-lg font-medium text-gray-700">
                    Turn-down service with optional aromatherapy.
                  </li>
                  <li className="text-base md:text-lg font-medium text-gray-700">
                    Detailed cleaning and special amenity arrangements for VIP
                    rooms.
                  </li>
                  <li className="text-base md:text-lg font-medium text-gray-700">
                    Quick refresh services for guests with shorter stays.
                  </li>
                </ul>

                <h2 className="text-2xl lg:text-3xl font-bold text-[#14213d]">
                  Our Commitment to Excellence
                </h2>

                <p className="text-base md:text-lg text-gray-700">
                  At CQD Cleaning Services, we don’t just clean—we create
                  comfort. Our team is passionate about hospitality and
                  understands that every detail matters. From the mirrors to the
                  mattresses, we ensure your guests feel cared for from the
                  moment they arrive.
                </p>
                <h4 className="text-xl lg:text-2xl font-bold text-[#14213d]">
                  Ready to elevate your hotel’s cleanliness?
                </h4>
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
    </div>
  );
};

export default WwoHotelCleaning;
