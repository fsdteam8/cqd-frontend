
'use client';
import React, { useRef, useState } from 'react';

const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="py-2 -mt-[70px] sm:-mt-[100px] md:-mt-[120px] lg:-mt-[150px] xl:-mt-[150px]">
      <div className="mx-auto my-10 container rounded-[30px] sm:rounded-[40px] md:rounded-[50px] lg:rounded-[60px] overflow-hidden aspect-video relative">
        {!playing && (
          <button
            onClick={handlePlay}
            className="absolute z-10 inset-0 flex items-center justify-center bg-black/50 text-white text-xl font-bold"
          >
            ▶ Play with Sound
          </button>
        )}
        <video
          ref={videoRef}
          loop
          playsInline
          autoPlay
          muted={!playing}
          className="w-full h-full object-cover block mx-auto"
          controls={playing}
        >
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroVideo;
