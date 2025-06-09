
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  image: string;
  details: string;
  tags: string | string[] | null; // Depending on actual usage (some are JSON strings)
  keywords: string | string[] | null;
  meta_description: string;
  meta_title: string;
  publish: boolean;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
}

export type BlogApiResponse = {
  success: boolean;
  data: BlogPost[];
};
