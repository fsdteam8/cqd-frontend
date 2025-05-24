import ContactSection from '@/components/Contact'
import { HeroImage } from '@/components/HeroImage'
import HighlightedLocations from '@/components/HighlightedLocations'
import Review from '@/components/Review'
import WwoWashroom from '@/components/WwoWashroom'
import React from 'react'

const page = () => {
  return (
    <div>
          <HeroImage
                   title="Professional Washroom Cleaning"
                   description="Maintain a hygienic, fresh washroom with our expert cleaning services and premium hygiene bins perfect for businesses!"
                   backgroundImage="/images/wcbg1.png"
                   imageAlt="Professional Carpet Cleaning"
                  
                  />
      <WwoWashroom/>
      <Review/>
      <HighlightedLocations/>
    <ContactSection/>
    </div>
  )
}

export default page
