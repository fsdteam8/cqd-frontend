
import { Button } from "./ui/button"
import Image from "next/image"

const WwoCarpet = () => {
  return (
<div>
<section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="container max-w-9xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-full aspect-[536/656] max-w-[536px]  overflow-hidden">
              <Image
                src="/images/cc1.png"
                alt=" Professional Carpet Cleaning"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 536px"
                priority
                className=""
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d]">What We Offer</h2>

            <div className="space-y-4">
              <p className="text-base md:text-lg text-gray-700">
                At CQD Cleaning Services, we provide expert carpet cleaning solutions using advanced techniques and eco-friendly products. Our thorough process removes dirt, stains, and allergens, restoring your carpets’ freshness and extending their lifespan with reliable, professional care you can trust.
              </p>

              <p className="text-base md:text-lg text-gray-700">
                At CQD Cleaning Services, we provide expert carpet cleaning using advanced techniques to remove dirt, stains, and allergens, restoring freshness and extending carpet life for a healthier home.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                Deep steam and dry carpet cleaning
              </div>
              <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                Stain removal for tough spots
              </div>
              <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                Allergen and dust mite elimination
              </div>
              <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                Eco-friendly cleaning solutions
              </div>
              <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                Odor neutralization
              </div>
            </div>

            <div className="mt-4">
              <Button className="bg-[#14213d] hover:bg-[#233862] text-white rounded-full px-8 py-6 text-lg font-medium">
                Request a Quote
              </Button>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d]">Why Choose Us</h2>

            <div className="space-y-4">
              <p className="text-base md:text-lg text-gray-700">
                At CQD Cleaning Services, we deliver expert carpet cleaning with advanced techniques and eco-friendly products. Our skilled team ensures deep, thorough cleaning that restores freshness, removes stubborn stains, and extends carpet life—providing exceptional results every time.
              </p>

              <p className="text-base md:text-lg text-gray-700">
                CQD Cleaning Services delivers expert carpet cleaning with advanced techniques, reliable results, and exceptional care to restore freshness and extend your carpet’s life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                Experienced and insured professionals
              </div>
              <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                Flexible scheduling for your convenience
              </div>
              <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                Competitive pricing with no hidden fees
              </div>
              <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                Serving Southern England with pride
              </div>
              <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                100% satisfaction guarantee
              </div>
            </div>

            <div className="mt-4">
              <Button className="bg-[#14213d] hover:bg-[#233862] text-white rounded-full px-8 py-6 text-lg font-medium">
                Request a Quote
              </Button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full aspect-[536/656] max-w-[536px] rounded-tr-[100px] rounded-bl-[100px] overflow-hidden">
              <Image
                src="/images/cc2.png"
                alt="Professional Carpet Cleaning"
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
  )
}

export default WwoCarpet 
