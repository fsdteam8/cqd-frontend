import React from 'react'
import dynamic from 'next/dynamic'
const AddBlogPage = dynamic(() => import('./_components/add-blog-page'), {
  ssr: false,
})

const Page = () => {
  return (
    <div>
      <AddBlogPage />
    </div>
  )
}

export default Page