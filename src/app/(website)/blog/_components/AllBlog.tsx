"use client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BlogApiResponse, BlogPost } from "./BlogDataType";
import TableSkeletonWrapper from "@/components/shared/TableSkeletonWrapper/TableSkeletonWrapper";
import FrontendErrorContainer from "@/components/shared/FrontendErrorContainer/FrontendErrorContainer";
import FrontedNotFound from "@/components/shared/NotFound/NotFoundData";

const AllBlog = () => {
  const { data, error, isLoading, isError } = useQuery<BlogApiResponse>({
    queryKey: ["blog-data"],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog-data-front`).then(
        (res) => res.json()
      ),
  });
  const publishedBlogs = data?.data?.filter(
    (blog: BlogPost) => blog.publish === true
  );

 if (isLoading)
    return (
      <div className="container mx-auto pb-10">
        <TableSkeletonWrapper count={4} />
      </div>
    );
  if (isError)
    return (
      <div className=" container mx-auto">
        <FrontendErrorContainer message={error?.message || "something went wrong"} />
      </div>
    );
  if (!publishedBlogs)
    return (
      <div>
        <FrontedNotFound message="Oops! No data available. Modify your filters or check your internet connection." />
      </div>
    );

  return (
    <div className="pb-[40px] md:pb-[60px] lg:pb-[100px]">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {publishedBlogs?.slice(0, 10).map((blog) => {
          return (
            <div
              key={blog?.id}
              className=" hover:bg-white hover:shadow-lg hover:rounded-tr-[16px] hover:rounded-bl-[16px] transition-all duration-300 ease-in-out"
            >
              <div>
                <Image
                  src={blog?.image || ""}
                  alt="blog image"
                  width={260}
                  height={200}
                  className="w-full h-[200px] object-cover rounded-t-[16px] hover:rounded-tl-none hover:rounded-tr-[16px]"
                />
              </div>
              <div className="px-[15px] pb-[17px]">
                <h5 className="pt-[15px] text-lg md:text-xl font-medium leading-[120%] tracking-[0%] text-[consectetur]">
                  {blog?.title}
                </h5>
                <div className="pt-[15px] w-full flex items-center justify-end">
                  <Link href={`/blog/${blog?.slug}`}>
                    <button className="bg-[#0F2A5C] h-[26px] w-[83px] text-xs text-white font-normal tracking-[0%] leading-[120%] py-[6px] px-[11px] rounded-full ">
                      Read Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllBlog;
