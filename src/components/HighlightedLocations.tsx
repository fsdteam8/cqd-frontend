import { MapPinned } from "lucide-react";

export default function HighlightedLocations() {
  const locations = [
    "Oxfordshire",
    "Aylesbury",
    "Watford",
    "Slough",
    "Milton Keynes",
    "Maidenhead",
    "Marlow",
    "Luton",
    "High Wycombe",
    "Hemel Hempstead",
    "London",
    "Northampton",
    "Bicester",
    "Bracknell",
    "Oxford",
    "Berkshire",
    "Banbury",
    "Beaconsfield",
    "Reading",
    "Buckinghamshire",
  ];

  return (
    <section id="location" className="w-full  px-4 md:px-6 lg:px-8 pb-[50px] md:pb-[80px] lg:pb-[120px]">
      <div className="container mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-2">
          Highlighted Locations
        </h2>
        <p className="text-lg md:text-xl my-8">
          Expert Cleaning Services in these and Surrounding Areas!
        </p>

        <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {locations.map((location, index) => (
            <div
              key={index}
              className="flex items-center w-full gap-2 lg:w-[300px] bg-gray-100 rounded-none rounded-tl-3xl rounded-br-3xl p-3 md:p-4 transition-all hover:bg-gray-200"
            >
              <MapPinned className="h-5 w-5 flex-shrink-0 text-[#0F2A5C]" />
              <span className="font-medium text-xl text-[#0F2A5C]">{location}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
