import type { ApiResponse } from "@/types/booking"

export async function fetchPackageOrders(): Promise<ApiResponse> {
  const response = await fetch("{{url}}/api/package-order-shows")

  if (!response.ok) {
    throw new Error("Failed to fetch package orders")
  }

  return response.json()
}
