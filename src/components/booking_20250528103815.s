export interface ApiBookingOrder {
  package_name: string
  company_name: string
  email: string
  location: string
  phone: string
  created_at: string
}

export interface ApiResponse {
  success: boolean
  orders: ApiBookingOrder[]
}

export interface BookingOrder {
  id: string
  package: string
  name: string
  email: string
  phone: string
  location: string
  date: string
}
