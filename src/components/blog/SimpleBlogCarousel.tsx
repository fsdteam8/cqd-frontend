// components/SimpleBlogCarousel.tsx

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { BlogPost } from "@/lib/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface BlogCarouselProps {
  posts: BlogPost[];
}

export default function SimpleBlogCarousel({ posts }: BlogCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(posts.length - 1, prev + 1));
  };

  return (
    <div className="relative px-10">
      <div
        className="grid grid-flow-col auto-cols-max gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 0.3s ease",
        }}
      >
        {posts.map((post) => (
          <Card
            key={post.id}
            className="w-[300px] sm:w-[350px] flex flex-col snap-start"
          >
            <Link href={`/blog/${post.slug}`} className="overflow-hidden">
              <div className="relative h-[180px] w-full">
                <Image
                  src={post.coverImage || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
            <CardContent className="flex-grow pt-4">
              <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                {post.title}
              </h3>
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
        ))}
      </div>

      <button
        onClick={handlePrevious}
        disabled={currentIndex === 0}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 border border-gray-200 disabled:opacity-50"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={handleNext}
        disabled={currentIndex >= posts.length - 1}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 border border-gray-200 disabled:opacity-50"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}
