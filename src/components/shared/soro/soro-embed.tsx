"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import Script from "next/script";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

// Swiper
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";

import TableSkeletonWrapper from "@/components/shared/TableSkeletonWrapper/TableSkeletonWrapper";

interface ScrapedBlog {
  title: string;
  description: string;
  image: string;
  date: string;
  href: string;
}

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 25,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 45,
  },
  1440: {
    slidesPerView: 4,
    spaceBetween: 66,
  },
};

const SoroEmbedContent = () => {
  const searchParams = useSearchParams();
  const isArticleView = searchParams.has("post");
  const swiperRef = useRef<SwiperCore | null>(null);

  const [blogs, setBlogs] = useState<ScrapedBlog[]>([]);
  const [isSoroLoading, setIsSoroLoading] = useState(true);

  useEffect(() => {
    const container = document.getElementById("soro-blog");
    if (!container) return;

    const extractBlogs = () => {
      const cards = container.querySelectorAll(".soro-blog-card");
      if (cards.length > 0) {
        setIsSoroLoading(false);
        const parsed: ScrapedBlog[] = [];
        cards.forEach((card) => {
          const img = card.querySelector("img");
          const titleEl = card.querySelector("h2");
          const descEl = card.querySelector("p");
          const dateEl = card.querySelector("time");
          const href = card.getAttribute("href") || "";

          parsed.push({
            title: titleEl?.textContent || "",
            description: descEl?.textContent || "",
            image: img?.getAttribute("src") || "",
            date: dateEl?.textContent || "",
            href,
          });
        });

        setBlogs((prev) => {
          // Prevent infinite render loops by comparing values
          if (
            prev.length === parsed.length &&
            prev.every((b, i) => b.href === parsed[i].href && b.title === parsed[i].title)
          ) {
            return prev;
          }
          return parsed;
        });
      }
    };

    // Run once on load
    extractBlogs();

    // Set up MutationObserver to detect when Soro dynamically injects nodes
    const observer = new MutationObserver(extractBlogs);
    observer.observe(container, { childList: true, subtree: true });

    // Fallback timer: if after 8 seconds no cards load, stop loading skeleton
    const timeout = setTimeout(() => {
      setIsSoroLoading(false);
    }, 8000);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="w-full">
      {/* Soro Embed Container - Hidden off-screen in list mode, displayed in detail/article mode */}
      <div
        id="soro-blog"
        className={
          isArticleView
            ? "block w-full mt-10 container mx-auto px-4 md:px-0"
            : "absolute top-0 left-0 w-0 h-0 overflow-hidden opacity-0 pointer-events-none"
        }
      />

      {/* Script to load the Soro widget */}
      <Script
        src="https://app.trysoro.com/api/embed/bb8b1069-0718-4f79-9d57-82daff1468a9"
        strategy="afterInteractive"
      />

      {/* Custom Slider View when not viewing a single article */}
      {!isArticleView && (
        <div className="w-full mt-10">
          <div className="mb-[25px] md:mb-[40px] lg:mb-[60px]">
            <h2 className="text-center text-[35px] md:text-[48px] lg:text-[60px] font-medium leading-[120%] tracking-[0%] text-[#0F2A5C]">
              Soro Blogs & News
            </h2>
            <p className="text-center text-xl md:text-[22px] lg:text-2xl font-normal leading-[120%] tracking-[0%] text-[#0F2A5C] pt-[5px]">
              Latest insights and updates from Soro
            </p>
          </div>

          {isSoroLoading && blogs.length === 0 ? (
            <div className="container mx-auto">
              <TableSkeletonWrapper count={4} />
            </div>
          ) : blogs.length === 0 ? (
            <p className="text-center text-gray-500 py-10">No blogs found or failed to load.</p>
          ) : (
            <div className="w-full flex items-center gap-[6px] md:gap-[45px] lg:gap-[66px]">
              <button onClick={() => swiperRef.current?.slideNext()}>
                <Image
                  src="/images/left-arrow.svg"
                  alt="left-arrow"
                  width={50}
                  height={50}
                  className="w-8 md:w-[50px] h-10 md:h-[50px]"
                />
              </button>

              <Swiper
                modules={[Autoplay]}
                loop={true}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                autoplay={{
                  delay: 3000,
                  pauseOnMouseEnter: false,
                  disableOnInteraction: false,
                  stopOnLastSlide: false,
                }}
                speed={3000}
                allowTouchMove={true}
                breakpoints={breakpoints}
                spaceBetween={12}
                className="w-full h-full"
              >
                {blogs.map((blog, index) => (
                  <SwiperSlide key={index} className="!h-auto !md:h-full py-4">
                    <div className="!h-full hover:border hover:border-white hover:bg-white hover:shadow-lg hover:rounded-tr-[16px] hover:rounded-bl-[16px] transition-all duration-300 ease-in-out relative flex flex-col justify-between min-h-[380px] bg-slate-50/50 rounded-xl p-[1px]">
                      <div>
                        <div className="relative w-full h-[200px]">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={blog.image || ""}
                            alt={blog.title}
                            className="w-full h-full object-cover rounded-t-[16px] hover:rounded-tl-none hover:rounded-tr-[16px]"
                          />
                        </div>
                        <div className="px-[15px] pb-[17px]">
                          <h5 className="pt-[15px] text-lg md:text-xl font-medium leading-[120%] tracking-[0%] text-[#0F2A5C] line-clamp-2">
                            {blog.title}
                          </h5>
                          <p className="pt-[10px] text-sm text-[#0F2A5C]/75 line-clamp-3">
                            {blog.description}
                          </p>
                        </div>
                      </div>
                      <div className="px-[15px] pb-[15px] flex items-center justify-between mt-auto">
                        <p className="text-xs md:text-sm font-normal leading-[120%] tracking-[0%] text-[#0F2A5C]">
                          {blog.date}
                        </p>
                        <a href={blog.href}>
                          <button className="bg-[#0F2A5C] h-[26px] w-[83px] text-xs text-white font-normal tracking-[0%] leading-[120%] py-[6px] px-[11px] rounded-full">
                            Read Now
                          </button>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <button onClick={() => swiperRef.current?.slidePrev()}>
                <Image
                  src="/images/right-arrow.svg"
                  alt="right-arrow"
                  width={50}
                  height={50}
                  className="w-8 md:w-[50px] h-10 md:h-[50px]"
                />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export const SoroEmbed = () => (
  <Suspense fallback={<TableSkeletonWrapper count={4} />}>
    <SoroEmbedContent />
  </Suspense>
);