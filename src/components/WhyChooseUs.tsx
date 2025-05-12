import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const WhyChooseUs = () => {
  return (
    <section>
      <div className="container w-full mx-auto px-4 py-16 md:py-24 ">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 min-h-[80vh]">
          {/* Left column - Text content */}
          <div className="space-y-6 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Why choose us
            </h2>

            <p className="text-base md:text-lg text-gray-700">
              Lorem ipsum dolor sit amet consectetur. Turpis dignissim tortor
              tellus eget pulvinar risus tempor congue. Gravida tortor molestie
              cursus in elementum. Ultricies non est tincidunt quisque leo id
              suspendisse ut eget. Porttitor amet non dictum dolor. Mauris
              consequat facilisi faucibus venenatis nunc sit. Mi elementum metus
              ipsum rutrum. Varius porttitor nunc vestibulum tristique
              sollicitudin pretium amet turpis eget.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6">
              <div className="bg-gray-100 rounded-full px-6 py-4 text-center">
                <h3 className="text-3xl md:text-4xl font-bold">13</h3>
                <p className="text-sm md:text-base">Years Experience</p>
              </div>

              <div className="bg-gray-100 rounded-full px-6 py-4 text-center">
                <h3 className="text-3xl md:text-4xl font-bold">500+</h3>
                <p className="text-sm md:text-base">Happy Customers</p>
              </div>

              <div className="bg-gray-100 rounded-full px-6 py-4 text-center">
                <h3 className="text-3xl md:text-4xl font-bold">1000+</h3>
                <p className="text-sm md:text-base">Successful services</p>
              </div>
            </div>

            <div className="pt-4">
              <Button className="rounded-full px-8 py-6 h-auto bg-black hover:bg-gray-800 text-white">
                Get Start <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right column - Images */}
          <div className="grid grid-cols-2 gap-4 max-w-[530px]">
            {/* <Image
              src="/images/wcu1.png"
              alt="Cleaning professionals in masks"
              width={400}
              height={300}
              className="rounded-3xl object-cover w-[250px] h-[250px]"
            /> */}

<div className="relative w-[250px] h-[250px] group">
  <Image
    src="/images/wcu1.png"
    alt="Cleaning professionals in masks"
    fill
    className="rounded-3xl object-cover transition-opacity duration-300 group-hover:opacity-0"
  />
  <Image
    src="/images/hover1.png"
    alt="Cleaning professionals in masks hover"
    fill
    className="rounded-3xl object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
  />
</div>
<div className="relative w-[250px] h-[250px] group">
  <Image
    src="/images/wcu2.png"
    alt="Cleaning professionals in masks"
    fill
    className="rounded-3xl object-cover transition-opacity duration-300 group-hover:opacity-0"
  />
  <Image
    src="/images/hover2.png"
    alt="Cleaning professionals in masks hover"
    fill
    className="rounded-3xl object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
  />
</div>

<div className="relative w-[250px] h-[250px] group">
  <Image
    src="/images/wcu3.png"
    alt="Cleaning professionals in masks"
    fill
    className="rounded-3xl object-cover transition-opacity duration-300 group-hover:opacity-0"
  />
  <Image
    src="/images/hover3.png"
    alt="Cleaning professionals in masks hover"
    fill
    className="rounded-3xl object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
  />
</div>

<div className="relative w-[250px] h-[250px] group">
  <Image
    src="/images/wcu4.png"
    alt="Cleaning professionals in masks"
    fill
    className="rounded-3xl object-cover transition-opacity duration-300 group-hover:opacity-0"
  />
  <Image
    src="/images/hover4.png"
    alt="Cleaning professionals in masks hover"
    fill
    className="rounded-3xl object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
  />
</div>

     



          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
