import ContactSection from '@/components/Contact'
import { HeroImage } from '@/components/HeroImage'
import HighlightedLocations from '@/components/HighlightedLocations'
import Review from '@/components/Review'
import WwoWindow from '@/components/WwoWindow'
import React from 'react'

const page = () => {
  return (
    <div className="w-full mx-auto">
      <HeroImage
       title="Professional Carpet Cleaning"
       description="Revitalize your carpets with our deep-cleaning services. Remove dirt, stains, and allergens for a fresher home!"
       backgroundImage="/images/cpbg.png"
       imageAlt="Professional Carpet Cleaning"
      
      />
      <WwoWindow/>
       <HighlightedLocations />

            <Review />
            <ContactSection />
    </div>
  )
}

export default page
