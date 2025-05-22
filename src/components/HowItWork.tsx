// import { Badge } from "lucide-react";
// import Image from "next/image";

// const HowItWork = () => {
//   return (
//     <section className="w-full min-h-screen flex items-center justify-between px-4 mt-14">
//       <div className="container mx-auto max-w-7xl">
//         <div className="mb-8">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
//             How It Works
//           </h2>
//           <p className="text-lg md:text-xl">The Interactive Platform</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden">
//             <Image
//               src="/images/hiw.png"
//               alt="Cleaning professionals at work"
//               fill
//               className="object-cover"
//             />
//           </div>

//           <div className="space-y-6">
//             <div>
//               <h3 className="text-2xl md:text-3xl font-bold mb-2">
//                 Find Local Clients
//               </h3>
//               <p className="text-lg">
//                 Easily connect with nearby businesses to share subscriptions.
//               </p>
//             </div>

//             <p className="text-gray-700">
//               Lorem ipsum dolor sit amet consectetur. Turpis dignissim tortor
//               tellus eget pulvinar risus tempor congue. Gravida tortor molestie
//               cursus in elementum. Ultricies non est tincidunt quisque leo id
//               suspendisse ut eget.
//             </p>

//             <div className="flex flex-wrap gap-2 pt-4">
//               <Badge className="bg-black text-white px-4 py-2 rounded-full">
//                 Local Networking
//               </Badge>
//               <Badge className="bg-black text-white px-4 py-2 rounded-full">
//                 Business Connections
//               </Badge>
//               <Badge className="bg-black text-white px-4 py-2 rounded-full">
//                 Subscription Sharing
//               </Badge>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWork;




"use client"

import React, { useEffect } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

const HowItWork = () => {
  const [api, setApi] = React.useState<CarouselApi>()

  const slides = [
    {
      title: "Find Local Clients",
      subtitle: "Easily connect with nearby businesses to share subscriptions.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Turpis dignissim tortor tellus eget pulvinar risus tempor congue. Gravida tortor molestie cursus in elementum. Ultricies non est tincidunt quisque leo id suspendisse ut eget.",
      badges: ["Local Networking", "Business Connections", "Subscription Sharing"],
    },
    {
      title: "Share Subscriptions",
      subtitle: "Split costs and maximize value with subscription sharing.",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua.",
      badges: ["Cost Splitting", "Value Maximization", "Shared Access"],
    },
    {
      title: "Manage Payments",
      subtitle: "Hassle-free payment tracking and management.",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      badges: ["Payment Tracking", "Automated Billing", "Secure Transactions"],
    },
  ]

  // Autoplay logic
  useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      api.scrollNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [api])

  return (
    <section className="w-full min-h-screen flex items-center justify-between px-4 mt-14">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">How It Works</h2>
          <p className="text-lg md:text-xl">The Interactive Platform</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden">
            <Image src="/images/hiw.png" alt="Cleaning professionals at work" fill className="object-cover" />
          </div>

          <div>
            <Carousel
              opts={{ align: "start", loop: true }}
              orientation="vertical"
              className="w-full"
              setApi={setApi}
            >
              <CarouselContent className="">
                {slides.map((slide, index) => (
                  <CarouselItem key={index} className="pt-1 basis-full">
                    <Card className="border-none shadow-none h-full">
                      <CardContent className="p-6 space-y-6 h-full flex flex-col">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold mb-2">{slide.title}</h3>
                          <p className="text-lg">{slide.subtitle}</p>
                        </div>
                        <p className="text-gray-700">{slide.description}</p>
                        <div className="flex flex-wrap gap-2 pt-4">
                          {slide.badges.map((badge, badgeIndex) => (
                            <Badge
                              key={badgeIndex}
                              variant="outline"
                              className="bg-black text-white px-4 py-2 rounded-full border-none"
                            >
                              {badge}
                            </Badge>
                          ))}
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
  )
}

export default HowItWork
