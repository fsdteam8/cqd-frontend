import ContactSection from '@/components/Contact'
import { HeroImage } from '@/components/HeroImage'
import HighlightedLocations from '@/components/HighlightedLocations'
import Review from '@/components/Review'
import WwoWindow from '@/components/WwoWindow'
import React from 'react'



export const metadata = {
  title: "Professional Window Cleaning by CQD Cleaning Services",
  description: "Let your windows shine with CQD’s expert window cleaning. Reliable, affordable, and eco-friendly service tailored to your schedule and needs.",

};



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
     {/* <HighlightedLocations/> */}
    </div>
  )
}

export default page
