import { Button } from "./ui/button"
import Image from "next/image"

const WwoCarpet = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="container max-w-9xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-full aspect-[536/656] max-w-[536px] rounded-3xl overflow-hidden">
              <Image
                src="/images/cc1.png"
                alt="Carpet cleaning with steam"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 536px"
                priority
                className="rounded-3xl"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d]">What We Offer</h2>

            <div className="space-y-4">
              <p className="text-base md:text-lg text-gray-700">
                Lorem ipsum dolor sit amet consectetur. Consequat ac arcu sem est. Cursus ut adipiscing enim eu enim.
                Eget enim luctus nec cras. Consectetur gravida sapien nisi phasellus erat. Etiam mauris leo non ipsum
                quis platea. Id egestas ut in enim pellentesque fermentum. Faucibus vestibulum.
              </p>

              <p className="text-base md:text-lg text-gray-700">
                Lorem ipsum dolor sit amet consectetur. Rutrum at vivamus volutpat erat. Mattis malesuada cras
                suspendisse tempus mattis. Aliquam odio vestibulum eu venenatis laoreet eu. Massa fermentum.
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
  )
}

export default WwoCarpet 
