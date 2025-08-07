import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const WwoGymCleaning = () => {
  return (
    <div>
      {/* Meet CQD Cleaning: Expert Gym Cleaning Services in the UK Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative w-full aspect-[536/656] max-w-[536px] overflow-hidden">
                <Image
                  src="/services/gymCleaning4.jpg"
                  alt="expert Gym Cleaning Services"
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
                Meet CQD Cleaning: Expert Gym Cleaning Services in the UK
              </h2>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700">
                  It’s no secret that gyms, sports centers, and leisure
                  facilities can get dirty fast. From the high-touch surfaces of
                  workout equipment to the humidity of locker rooms and showers,
                  every area demands consistent and thorough cleaning. Our{" "}
                  <strong>professional gym cleaning services</strong> are
                  specifically designed to ensure your entire facility remains a
                  pristine and hygienic sanctuary for your members. We are
                  always ready to tailor our services to meet the unique needs
                  of your space.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  At CQD Cleaning, we equip our staff with specialized, in-house
                  training focused on cleaning public spaces like gyms. Our team
                  is highly skilled in sanitation protocols and health and
                  safety-compliant cleaning methods. We use only top-tier,
                  effective products to keep your gym sanitized, allowing you to
                  focus on what you do best: helping your clients achieve their
                  fitness goals.
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
      {/* Why a Spotless Gym is Non-Negotiable Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side - Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-normal font-bold text-[#14213d]">
                Why a Spotless Gym is Non-Negotiable
              </h2>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700">
                  Maintaining a clean gym is fundamental, not just for keeping
                  members happy, but for adhering to critical health guidelines
                  from organizations like the Centers for Disease Control and
                  Prevention (CDC). Research from Zogics reveals that a
                  significant 56% of gym-goers expect their fitness facility to
                  be thoroughly sanitized and clean. A hygienic and
                  well-maintained gym fosters a positive, motivating atmosphere
                  and is a cornerstone of member retention and loyalty.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  This guide will explore the crucial importance of gym
                  cleanliness, offer practical strategies for keeping your
                  facility spotless, detail the proper techniques for
                  disinfecting equipment, and help you establish an efficient
                  cleaning schedule that guarantees a consistently hygienic
                  environment.
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
                  src="/services/gymCleaning5.jpg"
                  alt="Spotless Gym"
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

      {/* Importance of Gym Cleanliness section  */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d] text-center">
              Importance of Gym Cleanliness
            </h2>
            <p className="text-base md:text-lg text-gray-700 text-center pt-4">
              Creating a safe and healthy environment is paramount for every gym
              member. Regular, meticulous cleaning cultivates a hygienic
              atmosphere that not only motivates people to pursue their fitness
              goals but also helps them feel secure and confident in their
              surroundings.
            </p>

            <h3 className="text-[22px] md:text-[26px] lg:text-3xl font-semibold text-[#14213d] pt-10">
              Why Does Cleanliness Matter So Much?
            </h3>
            <ul className="list-disc list-inside space-y-2 pt-4">
              <li className="text-base md:text-lg font-medium text-gray-700">
                <strong className="font-bold">Health & Safety:</strong>{" "}
                Consistent cleaning significantly lowers the risk of common
                infections like athlete&apos;s foot and other skin or
                respiratory issues that can derail a member&apos;s fitness
                routine.
              </li>
              <li className="text-base md:text-lg font-medium text-gray-700">
                <strong className="font-bold">Member Confidence:</strong> A
                visibly clean and sanitized fitness center builds a foundation
                of trust with your members, encouraging them to return and
                remain committed.
              </li>
              <li className="text-base md:text-lg font-medium text-gray-700">
                <strong className="font-bold">Equipment Longevity:</strong>{" "}
                Regular disinfection and cleaning protect your valuable gym
                equipment from the corrosive effects of sweat and grime,
                preventing premature wear and tear and extending its lifespan.
              </li>
              <li className="text-base md:text-lg font-medium text-gray-700">
                <strong className="font-bold">Professional Image:</strong> A
                pristine gym enhances your reputation in the community,
                reflecting your professionalism and unwavering commitment to
                member well-being.
              </li>
            </ul>

            <p className="text-base md:text-lg text-gray-700 pt-4">
              Creating a safe and healthy environment is paramount for every gym
              member. Regular, meticulous cleaning cultivates a hygienic
              atmosphere that not only motivates people to pursue their fitness
              goals but also helps them feel secure and confident in their
              surroundings.
            </p>
          </div>
        </div>
      </section>

      {/* A Practical Gym Cleaning Checklist: Daily, Weekly, and Monthly Tasks section  */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d] text-center">
              A Practical Gym Cleaning Checklist: Daily, Weekly, and Monthly Tasks
            </h2>

            <div>
              <h3 className="text-[22px] md:text-[26px] lg:text-3xl font-semibold text-[#14213d] pt-10">
              Weekly Cleaning Routine:
            </h3>
            
            <ul className="list-disc list-inside space-y-2 pt-4">
              <li className="text-base md:text-lg font-medium text-gray-700">
                <strong className="font-bold">Thoroughly Clean Exercise Mats:</strong> Remove all mats, clean them with a mild detergent, rinse away any residue, and allow them to air dry completely before returning them. Inspect for damage and replace any worn-out mats.
              </li>
              <li className="text-base md:text-lg font-medium text-gray-700">
                <strong className="font-bold">Vacuum and Dust Diligently:</strong> Vacuum all carpets and rugs to remove dirt, hair, and debris. Don&rsquo;t forget to dust hard-to-reach areas like high corners and air vents.
              </li>
              <li className="text-base md:text-lg font-medium text-gray-700">
                <strong className="font-bold">Clean Windows and Skylights:</strong>{" "}
                Use a quality glass cleaner to wipe down the interior and exterior of all windows and skylights, ensuring the space is well-ventilated to avoid fume buildup.
              </li>
              <li className="text-base md:text-lg font-medium text-gray-700">
                <strong className="font-bold">Sanitize Water Fountains:</strong> Clean and disinfect all water fountains to provide a safe drinking source. Regularly check and replace filters and inspect for any leaks.
              </li>
            </ul>
            </div>
            <div>
              <h3 className="text-[22px] md:text-[26px] lg:text-3xl font-semibold text-[#14213d] pt-10">
             Monthly Deep-Cleaning Tasks:
            </h3>
            
            <ul className="list-disc list-inside space-y-2 pt-4">
              <li className="text-base md:text-lg font-medium text-gray-700">
                <strong className="font-bold">Deep Clean Gym Flooring:</strong> Schedule a deep cleaning based on your flooring type. Scrub and sanitize rubber or vinyl floors with appropriate solutions, and polish or buff hardwood floors to maintain their durability and shine.
              </li>
              <li className="text-base md:text-lg font-medium text-gray-700">
                <strong className="font-bold">Inspect and Clean Ventilation Systems:</strong> Arrange for professional HVAC maintenance to ensure clean and efficient air circulation. Promptly address any signs of mold or mildew.
              </li>
            </ul>
            </div>
            <div>
              <h3 className="text-[22px] md:text-[26px] lg:text-3xl font-semibold text-[#14213d] pt-10">
             Fostering a Culture of Cleanliness Among Members
            </h3>
            
            <ul className="list-disc list-inside space-y-2 pt-4">
              <li className="text-base md:text-lg font-medium text-gray-700">
                <strong className="font-bold">Provide Sanitizing Stations:</strong> Strategically place hand sanitizer and equipment-sanitizing wipe stations throughout the gym to make it convenient for members to practice good hygiene.
              </li>
              <li className="text-base md:text-lg font-medium text-gray-700">
                <strong className="font-bold">Display Clear Hygiene Guidelines:</strong>  Post friendly reminders for members to wipe down equipment after use, use towels, and practice good personal hygiene, such as proper handwashing.
              </li>
              <li className="text-base md:text-lg font-medium text-gray-700">
                <strong className="font-bold">Communicate Your Cleaning Efforts:</strong>   Keep your members informed about your gym&apos;s cleaning protocols and the steps you&apos;re taking to ensure their safety. Transparency about extra precautions, especially during times of heightened health concerns, builds immense trust.
              </li>
            </ul>
            </div>

            <p className="text-base md:text-lg text-gray-700 pt-4">
              Maintaining a clean gym is a shared responsibility that is crucial for the well-being of everyone. By implementing a detailed cleaning checklist with daily, weekly, and monthly tasks, you can create a safe, welcoming, and consistently hygienic environment.
            </p>
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
                  src="/services/gymCleaning2.jpg"
                  alt="Professional Gym Cleaning Services"
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
                  CQD Cleaning Services delivers top-tier gym and fitness center
                  cleaning to help you maintain a hygienic, fresh, and safe
                  workout environment. Our expert team ensures that high-traffic
                  zones remain sanitized and odor-free.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  From weight rooms and locker areas to yoga studios and
                  restrooms, we use industrial-strength, eco-safe products to
                  eliminate bacteria, viruses, and sweat residue for a healthier
                  fitness space.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Disinfection of workout equipment & machines
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Locker room, shower & restroom sanitation
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Floor cleaning for sweat & bacteria removal
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Eco-friendly & non-toxic disinfectant usage
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Odor control & air freshness solutions
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
                  At CQD Cleaning Services, we know that cleanliness is critical
                  to a gym’s reputation. Our team is trained to tackle sweat,
                  germs, and grime using proven techniques and equipment to
                  ensure a spotless facility every time.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  We work on your schedule — early mornings, late nights, or
                  weekends — to avoid disrupting gym operations. Our goal is to
                  help your members feel safe, clean, and motivated to come back
                  every day.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Trusted by gyms, fitness centers & health clubs
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Certified cleaners with fitness facility experience
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Flexible cleaning schedules tailored to your hours
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Affordable pricing with clear cost breakdowns
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  100% satisfaction guarantee on every visit
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
                  src="/services/gymCleaning3.jpg"
                  alt="Expert Gym Cleaning Professionals"
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

export default WwoGymCleaning;
