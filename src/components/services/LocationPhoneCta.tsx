type LocationPhoneCtaProps = {
  className?: string;
};

const LocationPhoneCta = ({ className = "" }: LocationPhoneCtaProps) => {
  return (
    <div
      className={`flex items-center justify-center mt-8 md:mt-10 pt-2 ${className}`.trim()}
    >
      <a href="tel:01494 911001">
        <button className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-normal text-[#0F2A5C]">
          <span className="font-semibold border border-black/20 py-2 px-10 rounded-[10px]">
            Call Us : <strong>01494 911001</strong>
          </span>
        </button>
      </a>
    </div>
  );
};

export default LocationPhoneCta;
