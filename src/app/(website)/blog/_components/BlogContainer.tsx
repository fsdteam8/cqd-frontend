"use client";

import { useQuery } from "@tanstack/react-query";
import React, { useRef } from "react";
import { BlogApiResponse } from "./BlogDataType";
import BlogCart from "./BlogCart";
import Image from "next/image";
import { useSession } from "next-auth/react";

// Swiper
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/virtual";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import { Skeleton } from "@/components/ui/skeleton";

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

const BlogContainer = () => {
  const session = useSession();
  const token = (session?.data?.user as { token: string })?.token;
  console.log("Session Token:", token);

  const swiperRef = useRef<SwiperCore | null>(null);

  const { data, isLoading, isError } = useQuery<BlogApiResponse>({
    queryKey: ["blog-data"],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog-data-front`).then(
        (res) => res.json()
      ),
  });

  if (isLoading)
    return (
      <div>
        {" "}
        <div className="hover:bg-white hover:shadow-lg hover:rounded-tr-[16px] hover:rounded-bl-[16px] transition-all duration-300 ease-in-out">
          <div>
            <Skeleton className="w-full h-[200px] rounded-t-[16px]" />
          </div>
          <div className="px-[15px] pb-[17px]">
            <Skeleton className="mt-[15px] h-6 w-3/4" />
            <div className="pt-[15px] w-full flex items-center justify-end">
              <Skeleton className="h-[26px] w-[83px] rounded-full" />
            </div>
          </div>
        </div>
      </div>
    );
  if (isError) return <p>Error loading blogs.</p>;

  return (
    <div className="w-full  flex items-center gap-[30px] md:gap-[45px] lg:gap-[66px]">
      <button onClick={() => swiperRef.current?.slidePrev()}>
        <Image
          src="/images/left-arrow.svg"
          alt="left-arrow"
          width={50}
          height={50}
          className="w-[50px] h-[50px]"
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
        className="w-full"
      >
        {data?.data?.map((blog, index) => (
          <SwiperSlide key={index} className="!h-auto !md:h-full">
            <BlogCart blog={blog} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button onClick={() => swiperRef.current?.slideNext()}>
        <Image
          src="/images/right-arrow.svg"
          alt="right-arrow"
          width={50}
          height={50}
          className="w-[50px] h-[50px]"
        />
      </button>
    </div>
  );
};

export default BlogContainer;
