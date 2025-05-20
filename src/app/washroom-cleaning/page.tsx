import ContactSection from '@/components/Contact'
import HighlightedLocations from '@/components/HighlightedLocations'
import Review from '@/components/Review'
import WwoWashroom from '@/components/WwoWashroom'
import React from 'react'

const page = () => {
  return (
    <div>
      <WwoWashroom/>
      <Review/>
      <HighlightedLocations/>
    <ContactSection/>
    </div>
  )
}

export default page
