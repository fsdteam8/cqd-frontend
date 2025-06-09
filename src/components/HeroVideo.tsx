"use client";
import { useEffect, useRef } from "react";

const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // First try: unmuted autoplay
    video.muted = false;
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.warn(
          "Autoplay with sound failed. Trying muted fallback...",
          error
        );

        // Fallback: mute and play (to at least get playback)
        video.muted = true;
        video.play().catch((err) => {
          console.error("Even muted autoplay failed:", err);
        });
      });
    }
  }, []);

  return (
    <div className="py-2 -mt-[70px] sm:-mt-[100px] md:-mt-[120px] lg:-mt-[150px] xl:-mt-[150px]">
      <div className="mx-auto my-10 container rounded-[30px] sm:rounded-[40px] md:rounded-[50px] lg:rounded-[60px] overflow-hidden aspect-video relative">
        <video
          ref={videoRef}
          loop
          playsInline
          autoPlay
          muted={false} // Explicitly unmuted
          className="w-full h-full object-cover block mx-auto"
          controls
        >
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroVideo;
