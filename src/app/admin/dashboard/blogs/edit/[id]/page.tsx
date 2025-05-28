import React from "react";
import EditBlogPage from "../_components/edit-blog-page";

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <EditBlogPage initialData={params.id} />
    </div>
  );
};

export default Page;
