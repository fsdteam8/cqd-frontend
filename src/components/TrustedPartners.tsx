"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"

interface Partner {
  name: string
  logo: string
}

// Moved outside the component to ensure stable reference
const allPartners: Partner[] = [
  { name: "Partner 1", logo: "/images/otp1.png" },
  { name: "Partner 2", logo: "/images/otp2.png" },
  { name: "Partner 3", logo: "/images/otp3.png" },
  { name: "Partner 4", logo: "/images/otp4.png" },
  { name: "Partner 5", logo: "/images/otp5.jpg" },
  { name: "Partner 6", logo: "/images/otp6.png" },
  { name: "Partner 7", logo: "/images/otp7.png" },
  { name: "Partner 8", logo: "/images/otp8.png" },
  { name: "Partner 9", logo: "/images/otp9.png" },
  { name: "Partner 10", logo: "/images/otp10.png" },
  { name: "Partner 11", logo: "/images/otp11.png" },
  { name: "Partner 12", logo: "/images/otp12.jpg" },
]

// Utility to get the next partner in the list
const getNextPartner = (currentIndex: number): Partner => {
  const nextIndex = (currentIndex + 6) % allPartners.length
  return allPartners[nextIndex]
}

export default function TrustedPartners() {
  const [visiblePartners, setVisiblePartners] = useState<Partner[]>(allPartners.slice(0, 6))
  const [changeOddPositions, setChangeOddPositions] = useState(true)
  const [transitioning, setTransitioning] = useState([false, false, false, false, false, false])

  const rotatePartners = useCallback(() => {
    const newVisiblePartners = [...visiblePartners]
    const newTransitioning = [false, false, false, false, false, false]
    const positionsToChange = changeOddPositions ? [0, 2, 4] : [1, 3, 5]

    positionsToChange.forEach((pos) => {
      newTransitioning[pos] = true
    })
    setTransitioning(newTransitioning)

    setTimeout(() => {
      positionsToChange.forEach((pos) => {
        const currentPartnerIndex = allPartners.findIndex(
          (p) => p.name === visiblePartners[pos].name
        )
        newVisiblePartners[pos] = getNextPartner(currentPartnerIndex)
      })

      setVisiblePartners(newVisiblePartners)

      setTimeout(() => {
        setTransitioning([false, false, false, false, false, false])
      }, 500) // match CSS transition
    }, 100)

    setChangeOddPositions((prev) => !prev)
  }, [visiblePartners, changeOddPositions])

  useEffect(() => {
    const interval = setInterval(() => {
      rotatePartners()
    }, 3000)

    return () => clearInterval(interval)
  }, [rotatePartners])

  return (
    <section className="w-full py-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-16">Our Trusted Partners</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-0">
          {visiblePartners.map((partner, index) => (
            <div
              key={`partner-${index}-${partner.name}`}
              className={`
                flex items-center justify-center p-6 
                ${index % 3 !== 2 ? "md:border-r md:border-dashed" : ""} 
                ${index < 3 ? "border-b border-dashed md:border-b" : ""}
              `}
            >
              <div
                className={`w-20 h-20 relative transition-opacity duration-700 ease-in-out ${
                  transitioning[index] ? "opacity-0" : "opacity-100"
                }`}
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
