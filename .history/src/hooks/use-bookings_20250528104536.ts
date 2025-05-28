import { useQuery } from "@tanstack/react-query"
import { fetchPackageOrders } from "@/lib/booking-api"
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
      // Check if we have an access token before making the request
      const accessToken = localStorage.getItem("accessToken")
      if (!accessToken) {
        throw new Error("No access token found. Please log in.")
      }

      const response = await fetchPackageOrders()
      return transformApiDataToBookings(response.orders)
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
    retry: (failureCount, error) => {
      // Don't retry on authentication errors
      if (error.message.includes("Unauthorized") || error.message.includes("No access token")) {
        return false
      }
      return failureCount < 2
    },
  })
}
