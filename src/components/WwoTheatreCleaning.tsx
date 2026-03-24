import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import ServicePhoneCta from "./ServicePhoneCta";

const WwoMovieTheatreCleaning = () => {
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
                  src="/services/theatre2.jpg"
                  alt="Professional Movie Theatre Cleaning Services"
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
                  CQD Cleaning Services delivers expert movie theatre cleaning
                  to ensure a fresh, sanitary, and inviting environment for your
                  guests. Our trained professionals handle high-traffic areas
                  with precision and care.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  From seating areas and concession stands to restrooms and
                  entryways, we use safe, eco-friendly products to remove
                  spills, stains, and germs, maintaining a spotless viewing
                  experience.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Deep cleaning of seats, armrests & cup holders
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Concession area & restroom sanitation
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Floor cleaning & stain removal
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Safe, non-toxic cleaning agents
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Odor removal & air quality control
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
                  At CQD Cleaning Services, we understand how important
                  cleanliness is to your theatre’s reputation. We ensure every
                  auditorium, lobby, and restroom is consistently spotless and
                  welcoming.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  Our services are tailored to your schedule — including
                  pre-show, post-show, or overnight cleaning — so your
                  operations remain smooth and your audiences always enjoy a
                  clean, comfortable visit.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Trusted by cinemas & entertainment venues
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Experienced cleaners in high-traffic environments
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Flexible scheduling that fits your showtimes
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Clear pricing with no hidden charges
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  100% satisfaction guaranteed
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
                  src="/services/theatre3.jpg"
                  alt="Expert Movie Theatre Cleaning Professionals"
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
      {/* CQD The Best Theatre Cleaning Service In UK Section */}
      <section className="w-full py-8 md:py-12 lg:py-14 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d] text-center pb-3">
              CQD The Best Theatre Cleaning Service In UK
            </h2>
            <p className="text-base md:text-lg text-gray-700 text-justify">
              Ensure a spotless, comfortable, and hygienic environment for every
              guest with our expert <strong>theatre cleaning</strong> services,
              specifically designed for cinemas and movie theatres. At{" "}
              <strong>CQD Cleaning Services,</strong> we specialize in
              maintaining theatres to the highest standards of cleanliness. Our
              trained professionals focus on every detail to create a fresh,
              sanitary, and inviting space for your audience.
            </p>

            <p className="text-base md:text-lg text-gray-700 text-justify">
              Our comprehensive theatre cleaning covers deep{" "}
              <strong>
                cleaning of seats, armrests, and cup holders, sanitation of
                concession areas and restrooms, and floor cleaning with stain
                removal.
              </strong>{" "}
              We use safe, non-toxic, and eco-friendly cleaning products to
              maintain a healthy environment while also managing{" "}
              <strong>odors and air quality.</strong> Every high-traffic area is
              handled with precision, ensuring your theatre is spotless and
              ready for every showing.
            </p>
            <p className="text-base md:text-lg text-gray-700 text-justify">
              Cleanliness is crucial to a positive guest experience. That’s why
              our services are designed to{" "}
              <strong>
                keep every auditorium, lobby, and restroom immaculately clean,
                fit seamlessly with your operating schedule
              </strong>{" "}
              — whether pre-show, post-show, or overnight — and{" "}
              <strong>maintain a professional, welcoming atmosphere.</strong> We
              offer{" "}
              <strong>
                transparent pricing with no hidden fees and a 100% satisfaction
                guarantee.
              </strong>
            </p>
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
      {/* Why Theatre Cleaning Services Are Worth It
 Section */}
      <section className="w-full py-8 md:py-10 lg:py-14 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d] text-center pb-3">
              Why Theatre Cleaning Services Are Worth It
            </h2>
            <p className="text-base md:text-lg text-gray-700 text-justify">
              Investing in professional{" "}
              <strong>theatre cleaning services</strong> is essential for any
              cinema or entertainment venue that wants to offer a premium
              experience. A clean, well-maintained theatre leaves a lasting
              impression on your guests. From spotless seats and fresh-smelling
              auditoriums to sanitized restrooms and concession areas,
              professional cleaning ensures every visitor enjoys a safe,
              comfortable, and inviting environment, encouraging repeat visits.
            </p>

            <p className="text-base md:text-lg text-gray-700 text-justify">
              Theatres are high-traffic spaces where germs, bacteria, and
              allergens can accumulate quickly. Regular professional cleaning
              reduces these risks, protecting both your patrons and staff while
              maintaining a healthy environment. Additionally, deep cleaning
              helps preserve the appearance and longevity of seats, carpets,
              floors, and other surfaces, preventing costly repairs or
              replacements and keeping your theatre looking its best year-round.
            </p>
            <p className="text-base md:text-lg text-gray-700 text-justify">
              Professional cleaners also save your staff time and effort by
              handling the labor-intensive cleaning tasks efficiently. This
              allows your team to focus on delivering excellent customer service
              and smooth operations. Moreover, a consistently clean theatre
              enhances your venue’s reputation and ensures compliance with
              hygiene standards, reflecting professionalism to every visitor.
            </p>
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
    </div>
  );
};

export default WwoMovieTheatreCleaning;
