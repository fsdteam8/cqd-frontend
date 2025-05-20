import ContactSection from '@/components/Contact'
import HighlightedLocations from '@/components/HighlightedLocations'
import Review from '@/components/Review'
import WwoWindow from '@/components/WwoWindow'
import React from 'react'

const page = () => {
  return (
    <div>
     <WwoWindow/>
     <Review/>
     <HighlightedLocations/>
     <ContactSection/>
     <HighlightedLocations/>
    </div>
  )
}

export default page
