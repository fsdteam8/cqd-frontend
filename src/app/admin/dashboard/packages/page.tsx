
import React from 'react'
// import PricinPackage from './_components/PricinPackage'
import { DashboardLayout } from '@/components/dashboard-layout'


import dynamic from 'next/dynamic'
const PricinPackage = dynamic(() => import('./_components/PricinPackage'), {
  ssr: false,
})



const page = () => {
  return (
    <div>
      <DashboardLayout title="Packages">

     
   
      <PricinPackage/>
      </DashboardLayout>
    </div>
  )
}

export default page