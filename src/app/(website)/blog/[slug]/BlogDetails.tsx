// src/app/(website)/blog/[slug]/BlogDetails.tsx

"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";
import Image from "next/image";
import moment from "moment";
import { BlogApiResponse } from "../_components/BlogDataType";
import BlogContainer from "../_components/BlogContainer";
import TableSkeletonWrapper from "@/components/shared/TableSkeletonWrapper/TableSkeletonWrapper";
import FrontendErrorContainer from "@/components/shared/FrontendErrorContainer/FrontendErrorContainer";
import FrontedNotFound from "@/components/shared/NotFound/NotFoundData";

const BlogDetails = ({ params }: { params: { slug: string } }) => {
  const { data, error, isLoading, isError } = useQuery<BlogApiResponse>({
    queryKey: ["blog-data"],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog-data-front`).then(
        (res) => res.json()
      ),
  });

  const blogDetails = data?.data.find((blog) => blog.slug === params.slug);

  if (isLoading)
    return (
      <div className="container mx-auto">
        <TableSkeletonWrapper count={8} />
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
  if (!blogDetails)
    return (
      <div>
        <FrontedNotFound message="Oops! No data available. Modify your filters or check your internet connection." />
      </div>
    );



  return (
    <div className="container mx-auto px-4 md:px-0">
      <div className="pt-[36px] pb-[40px] md:pb-[100px] lg:pb-[160px]">
        <div>
          <Image
            src={blogDetails.image || ""}
            alt="blog image"
            width={1236}
            height={573}
            className="w-full h-[573px] object-cover rounded-[8px]"
          />
        </div>
        <div className="flex items-center gap-4 mt-5 md:mt-6 lg:mt-8 pb-3 md:pb-4">
          <span className="w-[38px] h-[1.5px] bg-[#656565]" />
          <p>{moment(blogDetails.created_at).format("MMMM DD, YYYY")}</p>
          <span className="w-[38px] h-[1.5px] bg-[#656565]" />
        </div>
        <h1 className="text-xl md:text-[22px] lg:text-2xl text-[#0F2A5C] font-semibold leading-[120%] tracking-[0%]">
          {blogDetails.title}
        </h1>
        <p
          dangerouslySetInnerHTML={{ __html: blogDetails.details ?? "" }}
          className="text-base text-[#0F2A5C] leading-[150%] tracking-[0%] font-normal pt-3 md:pt-4"
        />

        <div className=" flex items-center gap-5 mt-10">
          <h4 className="text-2xl font-semibold text-[#0F2A5C] leading-normal ">
            Related Tags:
          </h4>
          <div className="flex items-center gap-3">{typeof blogDetails.tags === "string" && JSON.parse(blogDetails.tags)?.map((tag : string) => <button className="bg-[#0F2A5C] text-white font-medium text-base py-1 px-4 rounded-full" key={tag}>{tag}</button>)}</div>
        </div>
      </div>

      <BlogContainer />
    </div>
  );
};

export default BlogDetails;
