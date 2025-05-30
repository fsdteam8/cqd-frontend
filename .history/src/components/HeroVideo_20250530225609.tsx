import React from 'react';

const HeroVideo = () => {
  return (
    <div className="  py-2 -mt-[70px] sm:-mt-[100px] md:-mt-[120px] lg:-mt-[150px] xl:-mt-[150px]">
      <div className="mx-auto  my-10 container rounded-[30px] sm:rounded-[40px] md:rounded-[50px] lg:rounded-[60px] overflow-hidden aspect-video">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover block  mx-auto"
        >
          <source src="/hero.mp4" type="video/mp4"  />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroVideo;
