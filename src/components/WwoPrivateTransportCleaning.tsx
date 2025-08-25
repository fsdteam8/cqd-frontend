import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const WwoPrivateTransportCleaning = () => {
  return (
    <div>
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative w-full aspect-[536/656] max-w-[536px]  overflow-hidden">
                <Image
                  src="/images/private-transport2.jpg"
                  alt="private transport cleaning"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 536px"
                  priority
                  className="rounded-tl-[80px] rounded-br-[80px]"
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
                  Keeping private vehicles clean and sanitized is essential for both health and comfort. Regular private transport cleaning ensures that your car, van, or other personal vehicles remain free from dust, germs, and allergens, providing a safer environment for drivers and passengers alike. A well-maintained vehicle not only enhances comfort and hygiene but also creates a positive impression for anyone who rides in it. By investing in professional cleaning, you can ensure a pleasant, safe, and enjoyable travel experience every time.
                </p>

                {/* <p className="text-base md:text-lg text-gray-700">
                  We tailor every service to meet the expectations of private vehicle owners and professional drivers, ensuring your car remains spotless, hygienic, and presentable. From regular maintenance cleans to detailed interior treatments, CQD Cleaning Services offers trusted, professional care that enhances comfort, promotes health, and upholds your vehicle’s polished image.
                </p> */}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Private Jet Cleaning
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Helicopter Detailing
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  VIP Limousine or Fleet Vehicle Cleaning
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

      {/* why choose us content  */}

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
                  At CQD Cleaning Services, we provide specialized private transport cleaning for chauffeur cars, limousines, corporate fleets, and rideshare vehicles. Our team uses eco-friendly products and advanced cleaning methods to remove dirt, allergens, and bacteria—delivering a spotless, hygienic interior that reflects professionalism and care. Whether it’s a luxury sedan or executive van, we tailor our private vehicle cleaning to meet your specific standards.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  From upholstery and carpet care to touchpoint disinfection and window cleaning, we ensure every ride is clean, fresh, and presentable for your clients or passengers. With flexible scheduling and attention to detail, CQD Cleaning Services offers reliable fleet detailing and chauffeur car sanitation that helps maintain your brand’s image and keeps vehicles looking their best, inside and out.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Upholstery care and leather treatment
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Exterior polishing
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Cabin disinfection and scent renewal
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Confidential and high-end service
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
                  src="/images/private-transport3.jpg"
                  alt="private transport cleaning"
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





      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative w-full aspect-[536/656] max-w-[456px]  overflow-hidden">
                <Image
                  src="/images/privetTransport1.jpg"
                  alt="private transport cleaning"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 536px"
                  priority
                  className="rounded-tl-[80px] rounded-br-[80px]"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d]">
                Why Private Transport Cleaning is Essential 
              </h2>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700">
                  Professional private transport cleaning is crucial for maintaining both the health and comfort of passengers and drivers. Regular cleaning helps eliminate germs, bacteria, and allergens, ensuring a safe and hygienic environment inside your vehicle. Beyond health, consistent cleaning preserves the interior and exterior quality of your vehicle, protecting upholstery, carpets, and paintwork from wear and damage. A clean vehicle also leaves a lasting first impression, projecting professionalism and care, whether for personal use or business purposes. With proper maintenance, your private transport not only looks great but also provides a reliable, safe, and comfortable ride every time.
                </p>

                {/* <p className="text-base md:text-lg text-gray-700">
                  We tailor every service to meet the expectations of private vehicle owners and professional drivers, ensuring your car remains spotless, hygienic, and presentable. From regular maintenance cleans to detailed interior treatments, CQD Cleaning Services offers trusted, professional care that enhances comfort, promotes health, and upholds your vehicle’s polished image.
                </p> */}
              </div>

              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Private Jet Cleaning
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Helicopter Detailing
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  VIP Limousine or Fleet Vehicle Cleaning
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

      {/* why choose us content  */}

      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side - Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d]">
               Benefits of Professional Private Transport Cleaning
              </h2>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700">
                  Opting for professional private transport cleaning offers numerous advantages for both vehicle owners and passengers. A clean and sanitized vehicle ensures a healthier and safer environment, reducing the risk of germs and allergens. Regular professional cleaning also preserves the aesthetics and resale value of your vehicle, keeping interiors fresh and exteriors polished. With an expert cleaning team handling every detail, vehicle management becomes stress-free, saving you time and effort. Additionally, our eco-friendly and safe cleaning solutions provide effective results without harming the environment, ensuring your private transport remains spotless and sustainable.
                </p>

                {/* <p className="text-base md:text-lg text-gray-700">
                  From upholstery and carpet care to touchpoint disinfection and window cleaning, we ensure every ride is clean, fresh, and presentable for your clients or passengers. With flexible scheduling and attention to detail, CQD Cleaning Services offers reliable fleet detailing and chauffeur car sanitation that helps maintain your brand’s image and keeps vehicles looking their best, inside and out.
                </p> */}
              </div>

              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Upholstery care and leather treatment
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Exterior polishing
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Cabin disinfection and scent renewal
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Confidential and high-end service
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

            {/* Right side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-full aspect-[536/656] max-w-[436px] rounded-tr-[100px] rounded-bl-[100px] overflow-hidden">
                <Image
                  src="/images/privetTransport2.jpg"
                  alt="private transport cleaning"
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

export default WwoPrivateTransportCleaning;
