"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function TrustedPartners() {
  // Full array of all 12 partners
  const allPartners = [
    { name: "Partner 1", logo: "/images/otp1.png" },
    { name: "Partner 2", logo: "/images/otp2.png" },
    { name: "Partner 3", logo: "/images/otp3.png" },
    { name: "Partner 4", logo: "/images/otp4.png" },
    { name: "Partner 5", logo: "/images/otp5.png" },
    { name: "Partner 6", logo: "/images/otp6.png" },
    { name: "Partner 7", logo: "/images/otp7.png" },
    { name: "Partner 8", logo: "/images/otp8.png" },
    { name: "Partner 9", logo: "/images/otp9.png" },
    { name: "Partner 10", logo: "/images/otp10.png" },
    { name: "Partner 11", logo: "/images/otp11.png" },
    { name: "Partner 12", logo: "/images/otp1.png" },
  ]

  // State to track the current 6 visible partners
  const [visiblePartners, setVisiblePartners] = useState(allPartners.slice(0, 6))
  // State to track which positions to change (true for odd, false for even)
  const [changeOddPositions, setChangeOddPositions] = useState(true)
  // State to track which partners are currently transitioning
  const [transitioning, setTransitioning] = useState([false, false, false, false, false, false])

  // Function to get the next partner in the rotation
  interface Partner {
    name: string;
    logo: string;
  }

  const getNextPartner = (currentIndex: number): Partner => {
    const nextIndex = (currentIndex + 6) % allPartners.length;
    return allPartners[nextIndex];
  };

  // Function to handle the staggered rotation
  const rotatePartners = () => {
    // Create a copy of the current visible partners
    const newVisiblePartners = [...visiblePartners]
    const newTransitioning = [false, false, false, false, false, false]

    // Determine which positions to change (0-indexed)
    const positionsToChange = changeOddPositions ? [0, 2, 4] : [1, 3, 5]

    // Update the transitioning state for the positions that will change
    positionsToChange.forEach((pos) => {
      newTransitioning[pos] = true
    })

    // Set the transitioning state first
    setTransitioning(newTransitioning)

    // After a short delay, update the actual partners
    setTimeout(() => {
      positionsToChange.forEach((pos) => {
        const currentPartnerIndex = allPartners.findIndex((p) => p.name === visiblePartners[pos].name)
        newVisiblePartners[pos] = getNextPartner(currentPartnerIndex)
      })

      setVisiblePartners(newVisiblePartners)

      // Reset the transitioning state after the transition completes
      setTimeout(() => {
        setTransitioning([false, false, false, false, false, false])
      }, 500) // Match this with the CSS transition duration
    }, 100)

    // Toggle which positions to change next time
    setChangeOddPositions(!changeOddPositions)
  }

  // Auto-rotate partners every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      rotatePartners()
    }, 3000)

    return () => clearInterval(interval)
  }, [changeOddPositions, visiblePartners])

  return (
    <section className="w-full py-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16">Our Trusted Partners</h2>

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
                <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
