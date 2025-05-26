import React from 'react';

const BlogDetails = ({params}: {params: {slug: string}}) => {
  return (
    <div>
      <h2>{params.slug}</h2>
    </div>
  );
};

export default BlogDetails;