import React from 'react'
// import LocationPage from './_component/Location'


import dynamic from 'next/dynamic'
const LocationPage = dynamic(() => import('./_component/Location'), {
  ssr: false,
})

const page = () => {
  return (
    <div>
      <LocationPage/>
    </div>
  )
}

export default page
