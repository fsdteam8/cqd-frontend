

// src/app/(website)/blog/[slug]/page.tsx

import { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogClientWrapper from "./BlogClientWrapper";
import { BlogApiResponse } from "../_components/BlogDataType";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog-data-front`,
      { cache: "no-store" }
    );
    const data: BlogApiResponse = await res.json();
    const blog = data?.data.find((b) => b.slug === params.slug);

    if (!blog) return notFound();

    return {
      title: blog.title,
      description:
        blog.meta_description ||
        blog.details?.slice(0, 150).replace(/<[^>]+>/g, ""),
      keywords: blog.keywords
        ? typeof blog.keywords === "string"
          ? blog.keywords.split(",").map((k) => k.trim())
          : blog.keywords
        : blog.title.split(" "),
      openGraph: {
        title: blog.title,
        description:
          blog.meta_description ||
          blog.details?.slice(0, 150).replace(/<[^>]+>/g, ""),
        images: [blog.image],
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: blog.title,
        description:
          blog.meta_description ||
          blog.details?.slice(0, 150).replace(/<[^>]+>/g, ""),
        images: [blog.image],
      },
    };
  } catch (error) {
    console.error("Error generating metadata", error);
    return {
      title: "Blog Not Found",
      description: "The blog you're looking for could not be found.",
    };
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  return <BlogClientWrapper params={params} />;
}
