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

// Optional: Parsed version of Blog with arrays
// export interface BlogParsed extends Omit<Blog, "tags" | "keywords"> {
//   tags: string[];
//   keywords: string[] | null;
// }

// Full API Response for paginated blogs
export interface BlogApiResponse {
  success: boolean;
  current_page: number;
  per_page: number;
  data: Blog[];
  total_blogs: number;
  total_pages: number;
}

// Optional: Parsed version of paginated response
// export interface BlogApiParsedResponse {
//   success: boolean;
//   current_page: number;
//   per_page: number;
//   data: BlogParsed[];
//   total_blogs: number;
//   total_pages: number;
// }





// // Single link object in the pagination
// export interface PaginationLink {
//   url: string | null;
//   label: string;
//   active: boolean;
// }

// // Placeholder for a single blog item
// export interface Blog {
//   id: number;
//   title: string;
//   details: string;
//   image: string | null;
//   meta_title: string | null;
//   meta_description: string | null;
//   tags: string[]; // Or comma-separated string if your backend uses that
//   keywords: string[]; // Same note as above
//   created_at: string;
//   updated_at: string;
//   publish: boolean;
//   // Add any additional blog fields here
// }

// // Data object for paginated blogs
// export interface BlogPaginationData {
//   current_page: number;
//   data: Blog[]; // Array of blog posts
//   first_page_url: string;
//   from: number | null;
//   last_page: number;
//   last_page_url: string;
//   links: PaginationLink[];
//   next_page_url: string | null;
//   path: string;
//   per_page: number;
//   prev_page_url: string | null;
//   to: number | null;
//   total: number;
// }

// // Full API response
// export interface BlogApiPaginatedResponse {
//   success: boolean;
//   data: BlogPaginationData;
// }
