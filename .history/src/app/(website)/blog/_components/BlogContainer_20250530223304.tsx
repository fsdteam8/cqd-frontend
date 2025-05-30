"use client";

import { useQuery } from "@tanstack/react-query";
import React, { useRef } from "react";
import { BlogApiResponse, BlogPost } from "./BlogDataType";
import BlogCart from "./BlogCart";
import Image from "next/image";

// Swiper
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/virtual";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import TableSkeletonWrapper from "@/components/shared/TableSkeletonWrapper/TableSkeletonWrapper";
import FrontendErrorContainer from "@/components/shared/FrontendErrorContainer/FrontendErrorContainer";
import FrontedNotFound from "@/components/shared/NotFound/NotFoundData";

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
  const swiperRef = useRef<SwiperCore | null>(null);

  const { data: blogs, error, isLoading, isError } = useQuery<BlogApiResponse>({
    queryKey: ["blog-data"],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog-data-front`).then(
        (res) => res.json()
      ),
  });



  // console.log(data?.data);
  const publishedBlogs = blogs?.data?.filter(
    (blog: BlogPost) => blog.publish === true
  );
  // console.log(blog?.data);

  if (isLoading)
    return (
      <div className="container mx-auto">
        <TableSkeletonWrapper count={4} />
      </div>
    );
  if (isError)
    return (
      <div className=" container mx-auto">
        <FrontendErrorContainer
          message={error?.message || "something went wrong"}
        />
      </div>
    );
  if (!publishedBlogs)
    return (
      <div>
        <FrontedNotFound message="Oops! No data available. Modify your filters or check your internet connection." />
      </div>
    );

  return (
    <div className="container mx-auto">
      <div className="mb-[35px] md:mb-[60px] lg:mb-[120px]">
        <h2 className="text-center text-[35px] md:text-[48px] lg:text-[60px] font-medium leadig-[120%] tracking-[0%] text-[#0F2A5C]">
          Blog Post
        </h2>
        <p className="text-center text-xl md:text-[22px] lg:text-2xl font-normal leading-[120%] tracking-[0%] text-[#0F2A5C] pt-[15px]">
          Blog and News
        </p>
      </div>
      <div className="w-full flex items-center gap-[30px] md:gap-[45px] lg:gap-[66px]">
        <button onClick={() => swiperRef.current?.slideNext()}>
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
          className="w-full h-full"
        >
          {blogs?.data?.map((blog, index) => (
            <SwiperSlide key={index} className="!h-auto !md:h-full ">
              <BlogCart blog={blog} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button onClick={() => swiperRef.current?.slidePrev()}>
          <Image
            src="/images/right-arrow.svg"
            alt="right-arrow"
            width={50}
            height={50}
            className="w-[50px] h-[50px]"
          />
        </button>
      </div>
    </div>
  );
};

export default BlogContainer;
