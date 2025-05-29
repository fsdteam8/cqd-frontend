import React from "react";
// import BlogContainer from "./_components/blog-container";
import { DashboardLayout } from "@/components/dashboard-layout";
import { Plus } from "lucide-react";
import Link from "next/link";
// import dynamic from "next/dynamic";
import dynamic from "next/dynamic";
const BlogContainer = dynamic(() => import("./_components/blog-container"), { ssr: false });


const Page = () => {
  return (
    <DashboardLayout title="Blogs">
      <div>
        <div className="w-full flex items-center justify-between">
          <h2 className="text-2xl font-medium leading-[120%] tracking-[0%] text-[#0E2A5C]">
            Blogs
          </h2>
          <Link href="/admin/dashboard/blogs/add">
            <button className="flex items-center gap-[15px] bg-[#0E2A5C] text-white font-semibold text-lg leading-[120%] tracking-[0%] py-[7px] px-[16px] rounded-[8px]">
              Add New Blogs <Plus className="w-[24px] h-[24px]" />
            </button>
          </Link>
        </div>
        <BlogContainer />
      </div>
    </DashboardLayout>
  );
};

export default Page;
