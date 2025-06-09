import React from "react";
import { BlogPost } from "./BlogDataType";
import Image from "next/image";
import Link from "next/link";

const BlogCart = ({ blog }: { blog: BlogPost }) => {
  return (
    <div className="!h-full hover:border hover:border-white hover:bg-white hover:shadow-lg hover:rounded-tr-[16px] hover:rounded-bl-[16px] transition-all duration-300 ease-in-out relative">
      <div>
        <Image
          src={blog?.image || ""}
          alt="blog image"
          width={260}
          height={200}
          className="w-full h-[200px] object-cover rounded-t-[16px] hover:rounded-tl-none hover:rounded-tr-[16px]"
        />
      </div>
      <div className="px-[15px] pb-[17px]">
        <h5 className="pt-[15px] text-lg md:text-xl font-medium leading-[120%] tracking-[0%] text-[consectetur]">
          {blog?.title}
        </h5>
        <div className="pt-[15px] w-full flex items-center justify-between">
          <p className="text-xs md:text-sm font-normal leading-[120%] tracking-[0%] text-[#0F2A5C]">
            {new Date(blog?.created_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          
        </div>
        <div className="absolute bottom-[15px] right-[15px]">
            <Link href={`/blog/${blog?.slug}`}>
              <button className="bg-[#0F2A5C] h-[26px] w-[83px] text-xs text-white font-normal tracking-[0%] leading-[120%] py-[6px] px-[11px] rounded-full ">
                Read Now
              </button>
            </Link>
          </div>
      </div>
    </div>
  );
};

export default BlogCart;
