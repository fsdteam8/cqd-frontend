import ContactSection from '@/components/Contact'
import { HeroImage } from '@/components/HeroImage'
import HighlightedLocations from '@/components/HighlightedLocations'
import Review from '@/components/Review'
import WwoCarpet from '@/components/WwoCarpet'
import React from 'react'



export const metadata = {
  title: "CQD’s Deep Carpet Cleaning Restores Freshness Fast",
  description: " CQD Cleaning Services offers expert carpet cleaning using eco-safe methods to remove stains, allergens, and odors for a fresh, healthy home.",

};




const page = () => {
  return (
    <div className="w-full mx-auto">
      <HeroImage
       title="Professional Carpet Cleaning"
       description="Revitalize your carpets with our deep-cleaning services. Remove dirt, stains, and allergens for a fresher home!"
       backgroundImage="/images/cpbg.png"
       imageAlt="Professional Carpet Cleaning"
      
      />
      <WwoCarpet/>
       <HighlightedLocations />

            <Review />
            <ContactSection />
    </div>
  )
}

export default page
