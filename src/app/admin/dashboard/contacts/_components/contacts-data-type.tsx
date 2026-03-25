export interface ContactMessage {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  organization: string | null;
  city: string;
  help: string;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
}

export interface PaginationLink {
  url: string | null;
  label: string;
  active: boolean;
}

export interface ContactMessageResponseData {
  current_page: number;
  data: ContactMessage[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: PaginationLink[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export interface ContactMessageApiResponse {
  success: boolean;
  message: string;
  data: ContactMessageResponseData;
}