// import BlogList from "@/components/blog-list";
// import BlogSearch from "@/components/blog-search";
import BlogList from "@/components/blog/BlogList";
import BlogSearch from "@/components/blog/BlogSearch";
import { Skeleton } from "@/components/ui/skeleton";
import { getBlogPosts } from "@/lib/data";
import { Suspense } from "react";

export const metadata = {
  title: "Blog | Our Articles and News",
  description:
    "Browse our collection of articles, tips, and news about cleaning services and home maintenance.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover tips, insights, and the latest news about cleaning services
            and home maintenance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Suspense fallback={<Skeleton className="h-12 w-full" />}>
            <BlogSearch />
          </Suspense>
        </div>

        <Suspense fallback={<div>Loading blog posts...</div>}>
          <BlogList initialPosts={posts} />
        </Suspense>
      </div>
    </main>
  );
}

