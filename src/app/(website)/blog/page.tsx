import React from "react";
import AllBlog from "./_components/AllBlog";

import dynamic from "next/dynamic";
import { SoroEmbed } from "@/components/shared/soro/soro-embed";
const BlogContainer = dynamic(() => import("./_components/BlogContainer"), {
  ssr: false,
});

interface BlogPageProps {
  searchParams: { post?: string };
}

const BlogPage = ({ searchParams }: BlogPageProps) => {
  const isArticleView = !!searchParams.post;

  return (
    <div className="container mx-auto">
      {!isArticleView && (
        <>
          <div className="pt-8 md:pt-10 lg:mt-12">
            <AllBlog />
          </div>
          <BlogContainer />
        </>
      )}

      <div className={isArticleView ? "mt-4" : "mt-10"}>
        <SoroEmbed />
      </div>
    </div>
  );
};

export default BlogPage;
