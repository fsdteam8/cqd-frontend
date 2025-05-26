export type BlogPost = {
  id: number;
  title: string;
  slug: string;
  image: string | null;
  details: string;
  tags: string; // e.g., "[tag1,tag2]" – stored as a string, not parsed as array
  keyword: string; // e.g., "[keyword1, keyword2]"
  meta_description: string;
  meta_title: string;
  publish: boolean;
  created_at: string; // ISO datetime string
  updated_at: string; // ISO datetime string
};

export type BlogApiResponse = {
  success: boolean;
  data: BlogPost[];
};
