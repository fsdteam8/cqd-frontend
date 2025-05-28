"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "./ui/skeleton";

interface GoogleReview {
  author_name: string;
  author_url: string;
  language: string;
  original_language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
  translated: boolean;
}

export default function Review() {
  const [activeIndex, setActiveIndex] = useState(0);
  // const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/google-reviews`
      );
      if (!res.ok) throw new Error("Failed to fetch reviews");
      return res.json();
    },
  });

  // const reviews: GoogleReview[] = data?.result?.reviews || [];
  const reviews = useMemo<GoogleReview[]>(() => {
    return data?.result?.reviews || [];
  }, [data]);

  useEffect(() => {
    const checkIfMobile = () => {
      // setIsMobile(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const nextTestimonial = useCallback(() => {
    if (reviews.length) {
      setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }
  }, [reviews]);

  const prevTestimonial = () => {
    if (reviews.length) {
      setActiveIndex(
        (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
      );
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        nextTestimonial();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextTestimonial]);

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  const activeReview = reviews[activeIndex];

  if (isLoading)
    return (
      <div>
        <section className="w-full py-12 md:py-16 lg:py-20 px-4">
          <div className="container mx-auto max-w-9xl">
            <div className="text-start mb-8 md:mb-12">
              <Skeleton className="h-10 w-72 mb-4" />
              <Skeleton className="h-5 w-96" />
            </div>

            <Card className="overflow-hidden">
              <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
                  <Skeleton className="w-32 h-32 md:w-40 md:h-40 rounded-full" />
                </div>
                <div className="md:w-2/3 text-center md:text-left space-y-4">
                  <div className="flex justify-center md:justify-start space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Skeleton key={i} className="w-5 h-5 rounded" />
                    ))}
                  </div>
                  <Skeleton className="h-6 w-full md:w-3/4" />
                  <Skeleton className="h-6 w-1/2" />
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="w-2.5 h-2.5 rounded-full" />
              ))}
            </div>
          </div>
        </section>
      </div>
    );

  return (
    <section id="review" className="w-full py-12 md:py-16 lg:py-20 px-4">
      <div className="container mx-auto max-w-9xl">
        <div className="text-start mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base md:text-lg text-gray-700">
            Don&apos;t just take our word for it - hear from our satisfied
            customers about their experience with CQD Cleaning Services.
          </p>
        </div>

        <div className="relative">
          <Card
            className="overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
                  <Image
                    src={activeReview?.profile_photo_url || "/placeholder.svg"}
                    alt={activeReview?.author_name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start mb-4">
                  {[...Array(activeReview?.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-500 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-lg md:text-xl italic text-[#0F2A5C] mb-4">
                  &ldquo;{activeReview?.text}&rdquo;
                </blockquote>
                <div className="font-bold text-xl text-[#0F2A5C]">
                  {activeReview?.author_name}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Arrows */}
          <div className="flex justify-between absolute top-1/2 left-0 right-0 -mt-4 px-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`mx-1 w-2.5 h-2.5 rounded-full ${
                activeIndex === index ? "bg-[#0F2A5C]" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
