import { MapPinned } from "lucide-react";
import Link from "next/link";

export default function ServicesHighlightedLocations({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  const locations = [
    { name: "Oxfordshire", href: "/" },
    { name: "Aylesbury", href: "/services/commercial-cleaning/aylesbury" },
    { name: "Watford", href: "/services/commercial-cleaning/watford" },
    { name: "Slough", href: "/services/commercial-cleaning/slough" },
    { name: "Milton Keynes", href: "/services/commercial-cleaning/milton-keynes" },
    { name: "Maidenhead", href: "/services/commercial-cleaning/maidenhead" },
    { name: "Marlow", href: "/services/commercial-cleaning/marlow" },
    { name: "Luton", href: "/services/commercial-cleaning/luton" },
    { name: "High Wycombe", href: "/services/commercial-cleaning/high-wycombe" },
    { name: "Hemel Hempstead", href: "/services/commercial-cleaning/hemel-hempstead" },
    { name: "London", href: "/" },
    { name: "Northampton", href: "/services/commercial-cleaning/northampton" },
    { name: "Bicester", href: "/services/commercial-cleaning/bicester" },
    { name: "Bracknell", href: "/" },
    { name: "Oxford", href: "/services/commercial-cleaning/oxford" },
    { name: "Berkshire", href: "/" },
    { name: "Banbury", href: "/" },
    { name: "Beaconsfield", href: "/" },
    { name: "Reading", href: "/" },
    { name: "Buckinghamshire", href: "/" },
  ];

  return (
    <section
      id="location"
      className="w-full px-4 md:px-6 lg:px-8 pb-[30px] md:pb-[60px] lg:pb-[80px] pt-5 md:pt-7 lg:pt-10"
    >
      <div className="container mx-auto w-full">
        <h2 className="text-2xl md:3xl lg:text-4xl font-bold leading-normal text-primary mb-5">
          {title}
        </h2>
        <p className="text-base md:text-lg font-normal leading-[120%] text-primary mb-8">
          {description}
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
      </div>
    </section>
  );
}
