import { MapPinned } from "lucide-react";

export default function SchoolHighlightedLocations() {
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
    <section
      id="location"
      className="w-full  px-4 md:px-6 lg:px-8 pb-[50px] md:pb-[80px] lg:pb-[120px]"
    >
      <div className="container mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-2">
          Highlighted Locations
        </h2>
        <p className="text-lg md:text-xl my-4">
          Expert Cleaning Services in these and Surrounding Areas!
        </p>

        <h4 className="text-[22px] sm:text-[26px] md:text-3xl font-medium mb-2">
          Serving schools within Oxfordshire, London & surrounding cities.
        </h4>

        <p className="text-base md:text-lg text-gray-700">
          CQD Cleaning is a professional cleaning company with extensive
          coverage across Oxfordshire and London, including access to the
          surrounding territories. Being one of the most reputable cleaning
          firms in the area around the schools near you, we comprehend the
          specific requirements of any learning institution in every community.
          We care about the safety and cleanliness of schools, which is why we
          offer flexible, high-quality cleaning services that can benefit the
          health of students and the well-being of the staff.
        </p>
        <p className="text-base md:text-lg text-gray-700">
          Our schools are proudly served in these regions:
        </p>

        <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {locations.map((location, index) => (
            <div
              key={index}
              className="flex items-center w-full gap-2 lg:w-[300px] bg-gray-100 rounded-none rounded-tl-3xl rounded-br-3xl p-3 md:p-4 transition-all hover:bg-gray-200"
            >
              <MapPinned className="h-5 w-5 flex-shrink-0 text-[#0F2A5C]" />
              <span className="font-medium text-xl text-[#0F2A5C]">
                {location}
              </span>
            </div>
          ))}
        </div>
        <p className="text-base md:text-lg text-gray-700 pt-7">
          If your school is in any of these locations, contact us today for a
          customized cleaning plan that fits your schedule and standards. Let
          CQD Cleaning be your local partner for professional, dependable{" "}
          <strong>school cleaning services.</strong>
        </p>
      </div>
    </section>
  );
}
