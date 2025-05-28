import type { ApiResponse } from "@/types/booking"

export async function fetchPackageOrders(): Promise<ApiResponse> {
  // Get access token from localStorage
  const accessToken = localStorage.getItem("accessToken")

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    "au"
  }

  // Add authorization header if token exists
  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`
  }

  const response = await fetch("https://coq.scaleupdevagency.com/api/package-order-shows", {
    method: "GET",
    headers,
  })

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error("Unauthorized: Please log in again")
    }
    throw new Error(`Failed to fetch package orders: ${response.status}`)
  }

  return response.json()
}
