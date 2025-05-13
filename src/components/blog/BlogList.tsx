"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { BlogPost } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface BlogListProps {
  initialPosts: BlogPost[];
}

export default function BlogList({ initialPosts }: BlogListProps) {
  const searchParams = useSearchParams();
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(initialPosts);
  const searchQuery = searchParams.get("q")?.toLowerCase();

  useEffect(() => {
    if (!searchQuery) {
      setFilteredPosts(initialPosts);
      return;
    }

    const filtered = initialPosts.filter((post) => {
      const titleMatch = post.title.toLowerCase().includes(searchQuery);
      const contentMatch = post.content.toLowerCase().includes(searchQuery);
      const excerptMatch = post.excerpt.toLowerCase().includes(searchQuery);
      const tagsMatch = post.tags?.some((tag) =>
        tag.toLowerCase().includes(searchQuery)
      );

      return titleMatch || contentMatch || excerptMatch || tagsMatch;
    });

    setFilteredPosts(filtered);
  }, [searchQuery, initialPosts]);

  if (filteredPosts.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-semibold mb-4">No articles found</h2>
        <p className="text-gray-600 mb-8">
          {searchQuery
            ? `No articles matching "${searchQuery}" were found. Try a different search term.`
            : "No articles are currently available."}
        </p>
        {searchQuery && (
          <Link href="/blog">
            <Button>View All Articles</Button>
          </Link>
        )}
      </div>
    );
  }

  return (
    <div>
      {searchQuery && (
        <div className="mb-8">
          <h2 className="text-xl font-medium mb-2">
            Search results for: <span className="font-bold">{searchQuery}</span>
          </h2>
          <p className="text-gray-600">
            Found {filteredPosts.length} article
            {filteredPosts.length !== 1 ? "s" : ""}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <Card key={post.id} className="flex flex-col h-full">
            <Link href={`/blog/${post.slug}`} className="overflow-hidden">
              <div className="relative h-[220px] w-full">
                <Image
                  src={post.coverImage || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </Link>
            <CardContent className="flex-grow pt-6">
              <div className="text-sm text-gray-500 mb-2">
                {formatDate(post.date)} • {post.readingTime} min read
              </div>
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                <h3 className="font-semibold text-xl mb-3 line-clamp-2">
                  {post.title}
                </h3>
              </Link>
              <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="pt-0">
              <Link href={`/blog/${post.slug}`} className="w-full">
                <Button
                  variant="secondary"
                  className="w-full bg-gray-900 text-white hover:bg-gray-800"
                >
                  Read Article
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
