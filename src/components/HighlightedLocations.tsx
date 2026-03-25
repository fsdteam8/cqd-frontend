import { MapPinned } from "lucide-react";
import Link from "next/link";

export default function HighlightedLocations() {
  // const locations = [
  //   "Oxfordshire",
  //   "Aylesbury",
  //   "Watford",
  //   "Slough",
  //   "Milton Keynes",
  //   "Maidenhead",
  //   "Marlow",
  //   "Luton",
  //   "High Wycombe",
  //   "Hemel Hempstead",
  //   "London",
  //   "Northampton",
  //   "Bicester",
  //   "Bracknell",
  //   "Oxford",
  //   "Berkshire",
  //   "Banbury",
  //   "Beaconsfield",
  //   "Reading",
  //   "Buckinghamshire",
  // ];
  const locations = [
    { name: "Oxfordshire", href: "/services/commercial-cleaning/oxfordshire" },
    { name: "Aylesbury", href: "/services/commercial-cleaning/aylesbury" },
    { name: "Watford", href: "/services/commercial-cleaning/watford" },
    { name: "Slough", href: "/services/commercial-cleaning/slough" },
    {
      name: "Milton Keynes",
      href: "/services/commercial-cleaning/milton-keynes",
    },
    { name: "Maidenhead", href: "/services/commercial-cleaning/maidenhead" },
    { name: "Marlow", href: "/services/commercial-cleaning/marlow" },
    { name: "Luton", href: "/services/commercial-cleaning/luton" },
    {
      name: "High Wycombe",
      href: "/services/commercial-cleaning/high-wycombe",
    },
    {
      name: "Hemel Hempstead",
      href: "/services/commercial-cleaning/hemel-hempstead",
    },
    { name: "London", href: "/services/commercial-cleaning/london" },
    { name: "Northampton", href: "/services/commercial-cleaning/northampton" },
    { name: "Bicester", href: "/services/commercial-cleaning/bicester" },
    { name: "Bracknell", href: "/services/commercial-cleaning/bracknell" },
    { name: "Oxford", href: "/services/commercial-cleaning/oxford" },
    { name: "Berkshire", href: "/services/commercial-cleaning/berkshire" },
    { name: "Banbury", href: "/services/commercial-cleaning/banbury" },
    {
      name: "Beaconsfield", href: "/services/commercial-cleaning/beaconsfield"
    },
    { name: "Reading", href: "/services/commercial-cleaning/reading" },
    {
      name: "Buckinghamshire",
      href: "/services/commercial-cleaning/buckinghamshire",
    },
  ];

  return (
    <section
      id="location"
      className="w-full  px-4 md:px-6 lg:px-8 pb-[30px] md:pb-[60px] lg:pb-[80px]"
    >
      <div className="container mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-2">
          Highlighted Locations
        </h2>
        <p className="text-lg md:text-xl my-8">
          Expert Cleaning Services in these and Surrounding Areas! click locations below for more information!
        </p>

        <div className="grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
          {locations.map((location, index) => (
            <Link key={index} href={location.href}>
              <div className="flex items-center w-full gap-2 lg:w-[300px] bg-gray-100 rounded-none rounded-tl-3xl rounded-br-3xl p-3 md:p-4 transition-all hover:bg-gray-200">
                <MapPinned className="h-5 w-5 flex-shrink-0 text-[#0F2A5C]" />
                <span className="font-medium text-xl text-[#0F2A5C]">
                  {location?.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
        {/* button  */}
            <div className="flex items-center justify-center mt-8 md:mt-10 pt-2">
             <a href="tel:01494 911001"> <button className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-normal text-[#0F2A5C]">
                <span className="font-semibold border border-black/20  py-2 px-10  rounded-[10px]">
                  Call Us : <strong>01494 911001</strong>
                </span>
              </button></a>
            </div>
      </div>
    </section>
  );
}
