"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Testimonial {
  id: number
  name: string
  role: string
  quote: string
  rating: number
  image: string
}

export default function Review() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  // Check if we're on mobile for responsive adjustments
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  useEffect(() => {
    // Auto-scroll functionality
    const interval = setInterval(() => {
      if (!isPaused) {
        nextTestimonial()
      }
    }, 5000) // Change testimonial every 5 seconds

    return () => clearInterval(interval)
  }, [isPaused])

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Michael Thompson",
      role: "Real Estate Agent",
      quote:
        "I recommend CQD Cleaning to all my clients for move-in cleaning. They make properties shine and help my listings look their absolute best.",
      rating: 5,
      image: "/images/user.png",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Homeowner",
      quote:
        "CQD Cleaning Services transformed my home. Their attention to detail is remarkable and their staff is professional and courteous.",
      rating: 4,
      image: "/images/user.png",
    },
    {
      id: 3,
      name: "David Wilson",
      role: "Property Manager",
      quote:
        "We've been using CQD Cleaning for all our properties for over 3 years. Their reliability and quality of service is unmatched in the industry.",
      rating: 2,
      image: "/images/user.png",
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">What Our Clients Say</h2>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
            Don&apos;t just take our word for it - hear from our satisfied customers about their experience with CQD
            Cleaning Services.
          </p>
        </div>

        <div className="relative">
          {/* Desktop and Tablet View */}
          <div className="hidden md:block">
            <div className="grid grid-cols-1 gap-8">
              <Card
                className="overflow-hidden border rounded-xl shadow-sm"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/3 p-6 flex flex-col items-center">
                      <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
                        <Image
                          src={testimonials[activeIndex].image || "/placeholder.svg"}
                          alt={testimonials[activeIndex].name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex items-center justify-center mb-2">
                        {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6 md:p-8 bg-white">
                      <blockquote className="text-lg md:text-xl italic mb-4">
                        &ldquo;{testimonials[activeIndex].quote}&rdquo;
                      </blockquote>
                      <div className="font-bold text-xl">{testimonials[activeIndex].name}</div>
                      <div className="text-gray-600">{testimonials[activeIndex].role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Mobile View */}
          <div className="md:hidden">
            <Card
              className="overflow-hidden border rounded-xl shadow-lg"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                    <Image
                      src={testimonials[activeIndex].image || "/placeholder.svg"}
                      alt={testimonials[activeIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-center mb-4">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-base italic mb-4">
                    &ldquo;{testimonials[activeIndex].quote}&rdquo;
                  </blockquote>
                  <div className="font-bold text-lg">{testimonials[activeIndex].name}</div>
                  <div className="text-gray-600">{testimonials[activeIndex].role}</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between absolute top-1/2 left-0 right-0 -mt-4 px-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`mx-1 w-2.5 h-2.5 rounded-full ${activeIndex === index ? "bg-black" : "bg-gray-300"}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        <div className="mt-2 text-sm text-gray-500 text-center">
          {isPaused ? "Auto-scroll paused" : "Auto-scrolling enabled"} - Hover to pause
        </div>
      </div>
    </section>
  )
}
