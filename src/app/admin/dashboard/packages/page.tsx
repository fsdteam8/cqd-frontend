import ManagePackages from '@/components/ManagePackages'
import React from 'react'
import PricinPackage from './_components/PricinPackage'
import { DashboardLayout } from '@/components/dashboard-layout'

const page = () => {
  return (
    <div>
      <DashboardLayout title="Packages">

     
      {/* <ManagePackages />
      <h1>package</h1> */}
      <PricinPackage/>
      </DashboardLayout>
    </div>
  )
}

export default page