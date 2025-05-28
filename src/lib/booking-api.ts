import type { ApiResponse } from "@/types/booking"
import { apiClient } from "./api-client"

export async function fetchPackageOrders(): Promise<ApiResponse> {
  return apiClient.get<ApiResponse>("/api/package-order-shows")
}
