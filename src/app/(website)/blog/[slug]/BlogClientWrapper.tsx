// src/app/(website)/blog/[slug]/BlogClientWrapper.tsx

import dynamic from "next/dynamic";

const BlogDetails = dynamic(() => import("./BlogDetails"), { ssr: false });

export default function BlogClientWrapper({
  params,
}: {
  params: { slug: string };
}) {
  return <BlogDetails params={params} />;
}
