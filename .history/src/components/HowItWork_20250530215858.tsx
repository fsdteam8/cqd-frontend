"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const HowItWork = () => {
  const [api, setApi] = useState<CarouselApi>();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      title: "Find Local Clients",
      subtitle: "Easily connect with nearby businesses to share subscriptions.",
      description:
        "Partner with local offices, retailers, and property managers. Offer reliable, efficient CQD cleaning services. Grow your network and share recurring service subscriptions with ease.",
      badges: [
        "Local Networking",
        "Business Connections",
        "Subscription Sharing",
      ],
    },
    {
      title: " Matching Radius",
      subtitle: "Split costs and maximize value with subscription sharing.",
      description:
        "CQD Cleaning Services ensures prompt, professional cleaning within your local radius. Our team is strategically dispatched for fast, efficient service—keeping your space spotless, wherever you are.",
      badges: ["Cost Splitting", "Value Maximization", "Shared Access"],
    },
    {
      title: "Instant Notifications",
      subtitle: "Hassle-free payment tracking and management.",
      description:
        "Stay updated in real time with CQD Cleaning Services. From appointment confirmations to service completion alerts, we keep you informed every step of the way—fast, reliable, and hassle-free.",
      badges: ["Payment Tracking", "Automated Billing", "Secure Transactions"],
    },
    {
      title: "Streamlined Coordination",
      subtitle: "Hassle-free payment tracking and management.",
      description:
        " Effortless scheduling with CQD Cleaning Services. Our streamlined system ensures your cleaning teams, timelines, and updates align smoothly—saving you time while delivering spotless, professional results every visit.",
      badges: ["Payment Tracking", "Automated Billing", "Secure Transactions"],
    },
    {
      title: "Automatic Detection",
      subtitle: "Hassle-free payment tracking and management.",
      description:
        " Automatic detection technology identifies potential clients seeking cleaning solutions and instantly connects them with our expert CQD Cleaning Services team, ensuring prompt, personalized service tailored to every customer’s unique needs.",
      badges: ["Payment Tracking", "Automated Billing", "Secure Transactions"],
    },
  ];

  useEffect(() => {
    if (!api) return;

    intervalRef.current = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [api]);

  return (
    <section className="w-full min-h-screen flex items-center justify-between px-4 mt-10" >
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-2">
            How It Works
          </h2>
          <p className="text-lg md:text-xl">The Interactive Platform</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-2">
          <div className="relative w-full lg:max-w-none lg:w-[536px] lg:h-[656px] overflow-hidden rounded-lg">
            <Image
              src="/images/hiw.png"
              alt="CQD Cleaning professional with cleaning equipment"
              width={536}
              height={656}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          <div className="">
            <Carousel
              opts={{ align: "start", loop: true }}
              orientation="vertical"
              className="w-full"
              setApi={setApi}
            >
              <CarouselContent className="h-[660px]">
                {slides.map((slide, index) => (
                  <CarouselItem key={index} className="pt-1 basis-full">
                    <Card className="border-none shadow-none h-full">
                      <CardContent className="p-6 h-full flex flex-col justify-center">
                        <div className="flex flex-col justify-between h-full">
                          <div className="">
                            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                              {slide.title}
                            </h3>
                            <p className="text-lg mb-[60px]">
                              {slide.subtitle}
                            </p>
                            <p className="text-gray-700">{slide.description}</p>
                          </div>

                          <div className="flex flex-wrap gap-2 pt-4 justify-end">
                            {slide.badges.map((badge, badgeIndex) => (
                              <Badge
                                key={badgeIndex}
                                variant="outline"
                                className="bg-[#0F2A5C] text-white px-4 py-2 rounded-full border-none"
                              >
                                {badge}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
