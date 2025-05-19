import Image from "next/image"
import { cn } from "@/lib/utils"

interface HeroSectionProps {
  title: string
  description: string
  backgroundImage: string
  className?: string
  imageAlt?: string
  height?: string
  overlayOpacity?: string
}

export function HeroImage({
  title,
  description,
  backgroundImage,
  className,
  imageAlt = "Background image",
  height = "h-[500px] lg:h-[817px]",
  overlayOpacity = "brightness-[0.85]",
}: HeroSectionProps) {
  return (
<div className="py-2 -mt-[170px] sm:-mt-[100px] md:-mt-[120px] lg:-mt-[150px] xl:-mt-[150px]">
<section className="container mx-auto px-4 py-12 lg:py-10 ">
      <div
        className={cn(
          "relative w-full overflow-hidden",
          height,
          className,
          "lg:max-w-[1628px] lg:mx-auto rounded-xl lg:rounded-[60px]",
        )}
      >
        {/* Background Image */}
        <div className="absolute inset-0 ">
          <Image
            src={backgroundImage || "/placeholder.svg"}
            alt={imageAlt}
            fill
            priority
            className={cn("object-cover h-[600px] ", overlayOpacity)}
          />
        </div>

        {/* Centered Text Overlay */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold !text-white mb-4">{title}</h1>
          <p className="text-lg md:text-xl !text-white max-w-3xl">{description}</p>
        </div>
      </div>
    </section>
</div>
  )
}
