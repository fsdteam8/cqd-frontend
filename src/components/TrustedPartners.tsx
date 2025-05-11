import Image from "next/image";

export default function TrustedPartners() {
  // In a real implementation, you would use actual partner logos
  const partners = [
    { name: "Partner 1", logo: "/images/otp1.png" },
    { name: "Partner 2", logo: "/images/otp2.png" },
    { name: "Partner 3", logo: "/images/otp3.png" },
    { name: "Partner 4", logo: "/images/otp4.png" },
    { name: "Partner 5", logo: "/images/otp5.png" },
    { name: "Partner 6", logo: "/images/otp6.png" },
  ];

  return (
    <section className="w-full py-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 ">
          Our Trusted Partner
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-0">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`
                flex items-center justify-center p-6 
                ${index % 3 !== 2 ? "md:border-r md:border-dashed" : ""} 
                ${
                  index < partners.length - 3
                    ? "border-b border-dashed md:border-b"
                    : ""
                }
              `}
            >
              <div className="w-20 h-20 relative">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
