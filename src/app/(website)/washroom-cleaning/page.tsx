import ContactSection from '@/components/Contact'
import { HeroImage } from '@/components/HeroImage'
import HighlightedLocations from '@/components/HighlightedLocations'
import Review from '@/components/Review'
import WwoWashroom from '@/components/WwoWashroom'
import React from 'react'


export const metadata = {
  title: "Professional Washroom Cleaning Services by CQD Experts",
  description: "At CQD, we ensure hygienic washroom cleaning using safe, eco-friendly products and precise methods for consistently fresh, sanitized facilities.",

};




const page = () => {
  return (
    <div>
          <HeroImage
                   title="Professional Washroom Cleaning"
                   description="Maintain a hygienic, fresh washroom with our expert cleaning services and premium hygiene bins perfect for businesses!"
                   backgroundImage="/images/wcbg1.png"
                   imageAlt="Washroom Cleaning Services"
                  
                  />
      <WwoWashroom/>
      <Review/>
      <HighlightedLocations/>
    <ContactSection/>
    </div>
  )
}

export default page
