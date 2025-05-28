// Main Blog Interface
export interface Blog {
  id: number;
  title: string;
  slug: string;
  image: string | null;
  details: string;
  tags: string; // e.g. "[laravel,php,web development,flutter]"
  keywords: string | null; // e.g. "[php, framework]" or null
  meta_description: string;
  meta_title: string;
  publish: boolean;
  created_at: string; // ISO 8601 date string
  updated_at: string; // ISO 8601 date string
}

// Full API Response for paginated blogs
export interface BlogApiResponse {
  success: boolean;
  current_page: number;
  per_page: number;
  data: Blog[];
  total_blogs: number;
  total_pages: number;
}
