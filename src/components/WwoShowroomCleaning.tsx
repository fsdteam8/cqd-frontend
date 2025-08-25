import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const WwoShowroomCleaning = () => {
  return (
    <div>
      {/* first Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d]">
            Why Choose Us
          </h2> */}

          <div className="space-y-4">
            <p className="text-base md:text-lg text-gray-700">
              As a showroom owner, your products will make their first
              impression in your showroom! Professional showroom cleaning
              service providers will clean all the surfaces, floors, and
              displays of your showroom. Creating a shiny and hygienic place to
              provide a better experience to customers.
            </p>

            <p className="text-base md:text-lg text-gray-700">
              CQD cleaning services use advanced and eco-friendly cleaning
              methods. We are capable of offering you customized cleaning
              solutions and flexible scheduling. Whether your priority is
              cleaning the restrooms, entrance area, windows, floors, etc., we
              create a customized plan that suits your requirements and enhances
              your showroom&lsquo;s visual appeal. It will not just improve your
              brand credibility, product presentation, etc., and attract more
              customers, resulting in better sales.
            </p>
            <p className="text-base md:text-lg text-gray-700">
              Contact us today for a free quote and find out how to make your
              products stand your and make your business shine with the help of
              your team!
            </p>
          </div>
        </div>
      </section>

      {/* Comprehensive Showroom Cleaning Services Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-6 pb-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d] text-center">
              Comprehensive Showroom Cleaning Services
            </h2>

            <div className="space-y-4">
              <p className="text-base md:text-lg text-gray-700 text-center">
                Showroom cleaning services cover a wide range of tasks to keep
                commercial spaces spotless and inviting. These services create a
                positive customer experience and business image.
              </p>
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#14213d] text-left">
            Regular showroom cleaning Services You Need:
          </h3>
          <ul className="pt-4">
            <li className="text-lg md:text-xl text-gray-700">
              <strong>Dusting and Polishing</strong> Includes dusting and
              polishing surfaces like shelves, displays, counters, and
              furniture.
            </li>
            <li className="text-lg md:text-xl text-gray-700 py-3">
              <strong>Floor Care</strong> Includes sweeping, mopping, and
              polishing for a fresh appearance.
            </li>
            <li className="text-lg md:text-xl text-gray-700">
              <strong>Window and Glass Cleaning</strong> Both inside and out for
              maximum visibility and natural light.
            </li>
            <li className="text-lg md:text-xl text-gray-700 py-3">
              <strong>Waste Management</strong>Clear all the bins and recycle to
              maintain hygiene.
            </li>
            <li className="text-lg md:text-xl text-gray-700">
              <strong>Sanitising High-Touch Areas </strong>Like door handles,
              light switches, and seating, to reduce the spread of germs.
            </li>
            <li className="text-lg md:text-xl text-gray-700 py-3">
              <strong>Restroom Cleaning and Restocking</strong> Providing a
              clean and comfortable environment for visitors and staff.
            </li>
            <li className="text-lg md:text-xl text-gray-700 ">
              <strong>Entrance and Reception Cleaning</strong>This is important
              to give a warm welcome to customers.
            </li>
            <li className="text-lg md:text-xl text-gray-700 py-3">
              <strong>Flexible Cleaning Schedules </strong>Customizable daily
              maintenance and deep cleaning service based on requirements.
            </li>
            <li className="text-lg md:text-xl text-gray-700">
              <strong>Cleaning with Eco-Friendly products</strong> To be safe
              and ensure a sustainable cleaning service.
            </li>
          </ul>
          <p className="text-base md:text-lg text-gray-700 text-center pt-5">
            These services will keep the showroom looking clean and hygienic. As
            a final outcome, helping your business!
          </p>
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
                  src="/services/showRoomCleaning2.jpg"
                  alt="Professional Showroom Cleaning Services"
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
                  CQD Cleaning Services delivers expert showroom cleaning
                  tailored to maintain a sparkling, welcoming environment that
                  highlights your products and impresses your customers.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  We use gentle yet effective cleaning techniques suitable for
                  all showroom surfaces including floors, display cases,
                  lighting fixtures, and glass panels to ensure flawless
                  presentation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Floor and carpet deep cleaning
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Glass and display case polishing
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Dusting and sanitizing fixtures
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Upholstery and furniture cleaning
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Waste removal and odor control
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
                  Our showroom cleaning team is trained to handle delicate
                  materials and surfaces with care while delivering outstanding
                  results that enhance your business image.
                </p>

                <p className="text-base md:text-lg text-gray-700">
                  CQD Cleaning Services is dedicated to providing reliable,
                  efficient cleaning with flexible scheduling to minimize
                  disruption and keep your showroom always guest-ready.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Expertise in delicate surface care
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Eco-friendly and safe cleaning products
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Flexible scheduling to suit your hours
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Transparent pricing and detailed reports
                </div>
                <div className="bg-gray-100 rounded-full py-3 px-6 text-center text-[#14213d] font-medium">
                  Trusted by retail and exhibition businesses
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
                  src="/services/showRoomCleaning3.jpg"
                  alt="Showroom Cleaning Experts at Work"
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

      {/* Retail and Dealership Cleaning Section */}
      <section className="w-full py-8 md:py-10 lg:py-14 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d] text-center pb-3">
            Retail and Dealership Cleaning
          </h2>

          <div className="space-y-4">
            <p className="text-base md:text-lg text-gray-700 text-center">
              Cleaning services go beyond general cleaning. They also provide
              Specialized Cleaning services for retail and dealerships. This
              includes store fixtures, kitchens, and breakrooms. Supermarkets,
              departmental stores, car dealerships, boutique stores, etc., all
              require special cleaning services. It requires a highly
              experienced, trained, and skilled team to perform specialized
              cleanings.
            </p>
          </div>
        </div>
      </section>

      {/* Our Showroom Cleaning Services Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-6 pb-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d] text-center">
              Our Showroom Cleaning Services
            </h2>

            <div className="space-y-4">
              <p className="text-base md:text-lg text-gray-700 text-center">
                Your showroom deserves a clean look! For that, it needs
                specialist showroom cleaning services that enhance all the
                displays, impress every visitor, and maintain a spotless,
                inviting atmosphere every day.
              </p>
            </div>
          </div>
          <ul className="pt-4">
            <li className="text-lg md:text-xl text-gray-700">
              <strong>Precision Display Cleaning</strong> Delicately dust and
              polish display units, ensuring your products shine under any
              lighting.
            </li>
            <li className="text-lg md:text-xl text-gray-700 py-3">
              <strong>Cleaning Frequently Touched Area</strong> Deep cleaning
              and sanitizing the entrances, walkways, and reception areas to
              keep them clean.
            </li>
            <li className="text-lg md:text-xl text-gray-700">
              <strong>Spotless Glass & Windows</strong> Streak-free cleaning for
              glass panels, windows, and partitions, ensuring a crystal-clear
              view inside and out.
            </li>
            <li className="text-lg md:text-xl text-gray-700 py-3">
              <strong>Luxury Flooring</strong>We clean and polish floor tiles,
              carpets, etc., maintaining a gorgeous showroom.
            </li>
            <li className="text-lg md:text-xl text-gray-700">
              <strong>Eco-Friendly Cleaning Solutions </strong>We use safe,
              sustainable products to protect surfaces, staff, and customers
              without compromising anything.
            </li>
            <li className="text-lg md:text-xl text-gray-700 py-3">
              <strong>Expert Dealership & Retail Cleaner</strong> We have
              experts on our team for cleaning car dealerships, furniture
              showrooms, and high-end retail spaces.
            </li>
            <li className="text-lg md:text-xl text-gray-700 py-3">
              <strong>Flexible Service Time</strong>This is important to give a
              warm welcome to customers.
            </li>
            <li className="text-lg md:text-xl text-gray-700">
              <strong>Flexible Cleaning Schedules </strong>We provide you with
              flexible schedules to keep your showroom clean at any time.
            </li>
          </ul>
          <p className="text-base md:text-lg text-gray-700 text-center pt-5">
            Ready to transform your showroom into a top-tier model of freshness?
            Find out how our high-quality cleaning can be used to transform your
            space. Request a free quote today.
          </p>
        </div>
      </section>

      {/* Why Choose Our Showroom Cleaning Services? Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container max-w-9xl mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-6 pb-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213d] text-center">
              Why Choose Our Showroom Cleaning Services?
            </h2>

            <div className="space-y-4">
              <p className="text-base md:text-lg text-gray-700 text-center">
                Well, we have got the expertise and the necessary specialists to
                provide the best showroom cleaning services, designed to
                showcase your products at their absolute best!
              </p>
            </div>
          </div>
          <ul className="pt-4">
            <li className="text-lg md:text-xl text-gray-700">
              <strong>Specialist & Expertise</strong> We have years of
              experience in cleaning many retail, dealership, supermarket, and
              other showrooms.
            </li>
            <li className="text-lg md:text-xl text-gray-700 py-3">
              <strong>Attention to Detail </strong> We are sure not to miss any
              spot and keep your showroom dust-free!
            </li>
            <li className="text-lg md:text-xl text-gray-700">
              <strong>Flexible Scheduling </strong> Daytime, evening, or
              after-hours cleaning to suit your business.
            </li>
            <li className="text-lg md:text-xl text-gray-700 py-3">
              <strong>Eco-Friendly Cleaning</strong>We use eco-friendly products
              to clean showrooms to keep people safe.
            </li>
            <li className="text-lg md:text-xl text-gray-700">
              <strong>Consistent Service Quality </strong>We maintain the same
              service standard, no matter the location of your showroom.
            </li>
            <li className="text-lg md:text-xl text-gray-700 py-3">
              <strong>Trusted & Fully Experienced Team</strong> Our team has
              reliable professionals you can depend on.
            </li>
          </ul>
          <p className="text-base md:text-lg text-gray-700 text-center pt-5">
            Let us help you create a spotless environment that leaves your
            customers impressed from the moment they walk in!{" "}
            <strong>Request your free quote today.</strong>
          </p>
        </div>
      </section>
    </div>
  );
};

export default WwoShowroomCleaning;
