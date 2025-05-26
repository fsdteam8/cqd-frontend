export type Blog = {
  id: number;
  title: string;
  slug: string;
  image: string;
  details: string;
  tags?: string[]; // properly parsed
  keyword: string;
  meta_description: string;
  meta_title: string;
  publish: boolean; // converted from number (1/0)
  created_at: string;
  updated_at: string;
};





export type RawBlog = Omit<Blog, 'tags' | 'publish'> & {
  tags?: string; // comma-separated string
  publish: number; // 1 or 0
};

export type BlogApiResponse = {
  success: boolean;
  data: RawBlog[];
};

export async function getBlogPosts(): Promise<Blog[]> {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog-data-front`
  );

  if (!result.ok) {
    throw new Error("Failed to fetch blog posts");
  }

  const response: BlogApiResponse = await result.json();

  const normalizedData: Blog[] = response.data.map((blog) => ({
    ...blog,
    tags: blog.tags
      ? blog.tags.split(',').map((tag) => tag.trim())
      : [],
    publish: Boolean(blog.publish),
  }));

  return normalizedData;
}
