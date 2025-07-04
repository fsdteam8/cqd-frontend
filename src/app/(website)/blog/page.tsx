import React from "react";
import AllBlog from "./_components/AllBlog";

import dynamic from 'next/dynamic'
const BlogContainer = dynamic(() => import('./_components/BlogContainer'), {
  ssr: false,
})

const BlogPage = () => {
  return (
    <div className="container mx-auto">
      {/* <div className="pb-[35px] md:pb-[48px] lg:pb-[60px]">

    <div className="container mx-auto ">
      <div className="pb-[35px] md:pb-[48px] lg:pb-[60px]">

        <h2 className="text-center text-[35px] md:text-[48px] lg:text-[60px] font-medium leadig-[120%] tracking-[0%] text-[#0F2A5C]">
          Blog Post
        </h2>
        <p className="text-center text-xl md:text-[22px] lg:text-2xl font-normal leading-[120%] tracking-[0%] text-[#0F2A5C] pt-[15px]">
          Blog and News
        </p>
      </div> */}
      <div className="pt-8 md:pt-10 lg:mt-12">
        <AllBlog />
      </div>
      <BlogContainer />
    </div>
  );
};

export default BlogPage;
