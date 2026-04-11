export interface BlogDetailsApiResponse {
  success: boolean;
  message: string;
  data: Blog;
}

export interface Blog {
  id: number;
  title: string;
  slug: string;
  image: string;
  details: string;
  tags: string[];        // Note: currently stringified JSON inside array
  keywords: string[];    // Same as above
  meta_description: string;
  meta_title: string;
  publish: boolean;
  created_at: string;    // ISO date string
  updated_at: string;    // ISO date string
}