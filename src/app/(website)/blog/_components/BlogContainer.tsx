"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BlogApiResponse } from "./BlogDataType";
import BlogCart from "./BlogCart";
import Image from "next/image";

const BlogContainer = () => {
  const { data, isLoading, isError } = useQuery<BlogApiResponse>({
    queryKey: ["blog-data"],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog-data-front`).then(
        (res) => res.json()
      ),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading blogs.</p>;

  return (
    <div className="w-full flex items-center gap-[30px] md:gap-[45px] lg:gap-[66px]">
      <button>
        <Image
          src="/images/left-arrow.svg"
          alt="left-arrow"
          width={50}
          height={50}
        />
      </button>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[30px] md:gap-[45px] lg:gap-[66px]">
        {data?.data?.slice(0,4).map((blog, index) => (
          <BlogCart key={index} blog={blog} />
        ))}
      </div>
      <button>
        <Image
          src="/images/right-arrow.svg"
          alt="left-arrow"
          width={50}
          height={50}
        />
      </button>
    </div>
  );
};

export default BlogContainer;
