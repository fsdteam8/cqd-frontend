import { useQuery } from "@tanstack/react-query"
import { fetchPackageOrders } from "@/lib/api"
import type { ApiBookingOrder, BookingOrder } from "@/types/booking"

function transformApiDataToBookings(apiOrders: ApiBookingOrder[]): BookingOrder[] {
  return apiOrders.map((order, index) => ({
    id: `${order.company_name}-${order.created_at}-${index}`, // Create unique ID
    package: order.package_name.charAt(0).toUpperCase() + order.package_name.slice(1), // Capitalize
    name: order.company_name,
    email: order.email,
    phone: order.phone,
    location: order.location,
    date: order.created_at,
  }))
}

export function useBookings() {
  return useQuery({
    queryKey: ["package-orders"],
    queryFn: async () => {
      const response = await fetchPackageOrders()
      return transformApiDataToBookings(response.orders)
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
  })
}
