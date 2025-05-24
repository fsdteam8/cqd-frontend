import RelatedPosts from "@/components/blog/RelatedPosts";
import { Button } from "@/components/ui/button";
import { getBlogPost, getBlogPosts } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      images: [{ url: post.coverImage }],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPost(params.slug);
  const allPosts = await getBlogPosts();

  if (!post) {
    notFound();
  }

  // Filter out the current post for related posts
  const relatedPosts = allPosts.filter((p) => p.id !== post.id);

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/blog">
            <Button variant="ghost" className="pl-0 flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>

        <article className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center text-gray-500 mb-6">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span className="mx-2">•</span>
              <span>{post.readingTime} min read</span>
            </div>
          </div>

          <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            {post.content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="mt-8 pt-6 border-t">
              <h3 className="text-lg font-semibold mb-3">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Related Posts Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              More Articles
            </h2>
            <RelatedPosts posts={relatedPosts} currentPostId={post.id} />
          </div>
        </div>
      </div>
    </main>
  );
}

