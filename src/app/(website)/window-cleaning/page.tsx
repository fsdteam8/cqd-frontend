import ContactSection from '@/components/Contact'
import { HeroImage } from '@/components/HeroImage'
import HighlightedLocations from '@/components/HighlightedLocations'
import Review from '@/components/Review'
import WwoWindow from '@/components/WwoWindow'
import React from 'react'

const page = () => {
  return (
    <div>
       <HeroImage
             title="Professional Window Cleaning"
             description="Transform your home or business with our expert window cleaning services. Enjoy sparkling, streak-free windows every time!"
             backgroundImage="/images/wcbg.png"
             imageAlt="Professional Carpet Cleaning"
            
            />
     <WwoWindow/>
     <Review/>
     <HighlightedLocations/>
     <ContactSection/>
     <HighlightedLocations/>
    </div>
  )
}

export default page
