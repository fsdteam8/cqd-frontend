"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { BlogPost } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface RelatedPostsProps {
  posts: BlogPost[];
  currentPostId?: string;
}

export default function RelatedPosts({
  posts,
  currentPostId,
}: RelatedPostsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visiblePosts, setVisiblePosts] = useState(4);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Filter out current post if provided
  const filteredPosts = currentPostId
    ? posts.filter((post) => post.id !== currentPostId)
    : posts;

  // Determine how many posts to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisiblePosts(1);
      } else if (window.innerWidth < 1024) {
        setVisiblePosts(2);
      } else if (window.innerWidth < 1280) {
        setVisiblePosts(3);
      } else {
        setVisiblePosts(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, filteredPosts.length - visiblePosts);

  const handlePrevious = () => {
    const newIndex = Math.max(0, currentIndex - visiblePosts);
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = Math.min(maxIndex, currentIndex + visiblePosts);
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.offsetWidth / visiblePosts;
      const scrollAmount = index * itemWidth;
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      <div
        ref={carouselRef}
        className="flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className={`flex-shrink-0 snap-start transition-all duration-300`}
            style={{
              width: `calc(${100 / visiblePosts}% - ${
                ((visiblePosts - 1) * 16) / visiblePosts
              }px)`,
            }}
          >
            <Card className="h-full flex flex-col">
              <Link href={`/blog/${post.slug}`} className="overflow-hidden">
                <div className="relative h-[180px] w-full">
                  <Image
                    src={post.coverImage || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </Link>
              <CardContent className="flex-grow pt-4">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <Link href={`/blog/${post.slug}`} className="w-full">
                  <Button
                    variant="secondary"
                    className="w-full bg-gray-900 text-white hover:bg-gray-800"
                  >
                    Read Now
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>

      {filteredPosts.length > visiblePosts && (
        <>
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md z-10",
              "flex items-center justify-center border border-gray-200",
              "disabled:opacity-50 disabled:cursor-not-allowed"
            )}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-md z-10",
              "flex items-center justify-center border border-gray-200",
              "disabled:opacity-50 disabled:cursor-not-allowed"
            )}
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}
    </div>
  );
}
