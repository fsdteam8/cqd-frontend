import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const WwoMosqueCleaning = () => {
  return (
    <div>
      {/* CQD Cleaning – Experts in Mosque Cleaning Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side - Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d]">
                CQD Cleaning – Experts in Mosque Cleaning
              </h2>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700">
                  CQD Cleaning Services is a professional mosque cleaning
                  company that provides its expertise to clean your places of
                  worship, ensuring that they are clean, hygienic and welcoming
                  to all visitors. Our experienced team will employ the use of
                  environmentally friendly, safe cleaning supplies as well as
                  delicate methods to ensure that the orderliness and splendor
                  of your mosque is not compromised.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  Whether that is the routine cleaning or the cleaning
                  associated with a special religious occasion, our mosque
                  cleaning services will leave every corner looking freshly
                  scrubbed, tidy and ready to convey the respect and peace that
                  your community requires.
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
              <div className="relative w-full aspect-[536/556] max-w-[536px] rounded-tr-[100px] rounded-bl-[100px] overflow-hidden">
                <Image
                  src="/services/mosqueCleaning3.jpg"
                  alt="Mosque Cleaning Professionals"
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
                  src="/services/mosqueCleaning2.jpg"
                  alt="Professional Mosque Cleaning Services"
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
                  At CQD Cleaning Services, we provide dedicated mosque cleaning
                  services that honor the sacredness of these spaces. We ensure
                  cleanliness and hygiene while respecting the cultural and
                  spiritual significance of every masjid.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  From prayer halls to ablution areas, our trained staff uses
                  non-toxic, halal-compliant products to maintain a peaceful and
                  pure environment for worshippers. We tailor our services to
                  meet your schedule and religious needs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Scheduled daily, weekly, or event-based cleaning
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Prayer area carpet & floor sanitization
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Wudu (ablution) & restroom deep cleaning
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Eco-friendly, halal-certified cleaning products
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Trash removal & scent refreshment
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
                  At CQD Cleaning Services, we understand the importance of
                  maintaining the sanctity and cleanliness of mosques. Our team
                  is trained to work respectfully within Islamic guidelines and
                  uphold the highest standards of hygiene.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  We’re committed to providing discreet, reliable, and
                  affordable mosque cleaning services — ensuring a clean,
                  tranquil atmosphere for your congregation to worship in peace.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Trusted by mosques across Southern England
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Respectful & trained cleaning professionals
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Tailored services for prayer times & events
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Transparent pricing — no hidden costs
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  100% satisfaction guarantee
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
                  src="/services/mosqueCleaning4.jpg"
                  alt="Mosque Cleaning Professionals"
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

      {/* Benefits of Cleaning Mosque Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-6 pb-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d] text-center">
             Benefits of Cleaning Mosque
            </h2>

            <div className="space-y-4">
              <p className="text-base md:text-lg text-gray-700 text-center">
                Cleanliness and hygiene of the mosque is crucial to the physical body, spiritual as well as the comfort of the congregation. There are plenty of benefits to regular cleaning of the mosque:
              </p>
            </div>
          </div>
          <ul className="pt-4">
            <li className="text-lg md:text-xl text-gray-700">
              <strong>Healthy Environment:</strong>Frequent cleaning diminishes dust, germs, and allergens, which makes the environment cleaner and healthier among worshippers.
            </li>
            <li className="text-lg md:text-xl text-gray-700 py-3">
              <strong>Quicker Spiritual Climate:</strong> A clean mosque builds a sense of respect and reverence hence forming an atmosphere of calm prayer and inciting thoughts.
            </li>
            <li className="text-lg md:text-xl text-gray-700">
              <strong>Scores A Property Savings:</strong>Cleaning and maintenance using proper means ensure carpets, flooring, furniture, and fixtures are preserved with increased life expectancy.
            </li>
            <li className="text-lg md:text-xl text-gray-700 py-3">
              <strong>Improved Safety:</strong>The elimination of dirt, spills, and clutter eliminates accidents, where everybody will work in a safe environment.
            </li>
            <li className="text-lg md:text-xl text-gray-700">
              <strong>Good Community Image:</strong>A clean mosque depicts a sign of care and professionalism and after leaving a personal impression on the visitors, this leaves an impression to the community at large.
            </li>
            <li className="text-lg md:text-xl text-gray-700 py-3">
              <strong>Ready to Occurrences:</strong>Cleaning the mosque on a regular basis means that the place is always prepared in case of daily worship, Jummah, and other special religious events.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default WwoMosqueCleaning;
