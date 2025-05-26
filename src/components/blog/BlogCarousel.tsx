/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {  Blog } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface BlogCarouselProps {
  posts: Blog[];
}




export default function BlogCarousel({ posts }: BlogCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visiblePosts, setVisiblePosts] = useState(4);
  const carouselRef = useRef<HTMLDivElement>(null);

  console.log(posts)



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

  const maxIndex = Math.max(0, posts.length - visiblePosts);

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
    <div className="relative container mx-auto">
      <div
        ref={carouselRef}
        className="flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {posts?.map((post) => (
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
                <div className="relative h-[200px] w-full">
                  <Image
                    src={post?.image || "/placeholder.svg"}
                    alt={post?.title}
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </Link>
              <CardContent className="flex-grow pt-4">
                <Link href={`/blog/${post?.slug}`} className="hover:underline">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                </Link>
                {/* <p className="text-sm text-gray-500 line-clamp-3">
                  {post.excerpt}
                </p> */}
              </CardContent>
              <CardFooter className="pt-0">
                <Link href={`/blog/${post.slug}`} className="w-full">
                  <Button
                    variant="secondary"
                    className="w-full bg-[#0F2A5C] text-white hover:bg-[#0F2A5C]/90"
                  >
                    Read Now
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>

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
    </div>
  );
}

