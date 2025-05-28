"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BlogApiResponse } from "../_components/BlogDataType";
import Image from "next/image";
import moment from "moment";
import BlogContainer from "../_components/BlogContainer";

const BlogDetails = ({ params }: { params: { slug: string } }) => {
  const { data, isLoading, isError } = useQuery<BlogApiResponse>({
    queryKey: ["blog-data"],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog-data-front`).then(
        (res) => res.json()
      ),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading blogs.</p>;

  const blogDetails = data?.data.find((blog) => blog.slug === params.slug);
  console.log("Blog Details", blogDetails);
  return (
    <div className="container mx-auto">
      <div className="pt-[36px]">
        <div>
          <Image
            src={blogDetails?.image || ""}
            alt="blog image"
            width={1236}
            height={573}
            className="w-full h-[573px] object-cover rounded-[8px]"
          />
        </div>
        <div className="flex items-center gap-4 mt-5 md:mt-6 lg:mt-8 pb-3 md:pb-4">
          <span className="w-[38px] h-[1.5px] bg-[#656565] " />
          <p>{moment(blogDetails?.created_at).format("MMMM DD, YYYY")}</p>
          <span className="w-[38px] h-[1.5px] bg-[#656565] " />
        </div>
        <h3 className="text-xl md:text-[22px] lg:text-2xl text-[#0F2A5C] font-semibold leading-[120%] tracking-[0%]">
          {blogDetails?.title}
        </h3>
        <p
          dangerouslySetInnerHTML={{ __html: blogDetails?.details ?? "" }}
          className="text-base text-[#0F2A5C] leading-[150%] tracking-[0%] font-normal pt-3 md:pt-4"
        />
      </div>

      {/* blog cart  */}
      <BlogContainer />
    </div>
  );
};

export default BlogDetails;
