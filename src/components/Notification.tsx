"use client"
import { useState } from "react"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { AlertTriangle, Loader2, Check, ChevronLeft, ChevronRight } from "lucide-react"
import { useSession } from "next-auth/react"

interface NotificationData {
  id: number
  package_name: string
  email: string
  status: number
  created_at: string
}

interface ApiResponse {
  success: boolean
  data: NotificationData[]
}

interface TransformedNotification {
  id: number
  title: string
  timestamp: string
  timeAgo: string
  isUnread: boolean
  email: string
}

interface MarkAsReadRequest {
  status: boolean
  id: string
}

interface MarkAsReadResponse {
  success: boolean
  message?: string
}

const Notification = () => {

    const session = useSession();
    const token = (session?.data?.user as { token: string })?.token;
    console.log(token)


  const queryClient = useQueryClient()

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  // Fetch notifications using TanStack Query
  const {
    data: apiResponse,
    isLoading,
    error,
    refetch,
  } = useQuery<ApiResponse>({
    queryKey: ["notifications"],
    queryFn: async (): Promise<ApiResponse> => {
      const response = await fetch("https://coq.scaleupdevagency.com/api/notification", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return response.json()
    },
    staleTime: 30 * 1000, // 30 seconds
    refetchInterval: 60 * 1000, // Refetch every minute
  })

  console.log("API Response:", apiResponse?.data)

  // Mark as read mutation
  const markAsReadMutation = useMutation({
    mutationFn: async (data: MarkAsReadRequest): Promise<MarkAsReadResponse> => {
      const response = await fetch("https://coq.scaleupdevagency.com/api/notification", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return response.json()
    },
    onMutate: async (variables) => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey: ["notifications"] })

      // Snapshot the previous value
      const previousNotifications = queryClient.getQueryData<ApiResponse>(["notifications"])

      // Optimistically update to the new value
      queryClient.setQueryData<ApiResponse>(["notifications"], (oldData) => {
        if (!oldData) return oldData

        return {
          ...oldData,
          data: oldData.data.map((notification) =>
            notification.id.toString() === variables.id
              ? { ...notification, status: 1 } // Mark as read
              : notification,
          ),
        }
      })

      // Return a context object with the snapshotted value
      return { previousNotifications }
    },
    onError: (err, variables, context) => {
      // If the mutation fails, use the context returned from onMutate to roll back
      if (context?.previousNotifications) {
        queryClient.setQueryData(["notifications"], context.previousNotifications)
      }
      console.error("Failed to mark notification as read:", err)
    },
    onSettled: () => {
      // Always refetch after error or success to ensure data consistency
      queryClient.invalidateQueries({ queryKey: ["notifications"] })
    },
  })

  // Transform API data to match UI structure
  const transformNotifications = (data: NotificationData[]): TransformedNotification[] => {
    return data.map((item) => {
      const createdAt = new Date(item.created_at)
      const now = new Date()
      const diffInHours = Math.floor((now.getTime() - createdAt.getTime()) / (1000 * 60 * 60))

      // Format timestamp
      const timestamp = createdAt.toLocaleDateString("en-US", {
        weekday: "long",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })

      // Calculate time ago
      let timeAgo = ""
      if (diffInHours < 1) {
        const diffInMinutes = Math.floor((now.getTime() - createdAt.getTime()) / (1000 * 60))
        timeAgo = diffInMinutes <= 1 ? "Just now" : `${diffInMinutes} minutes ago`
      } else if (diffInHours < 24) {
        timeAgo = `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`
      } else {
        const diffInDays = Math.floor(diffInHours / 24)
        timeAgo = `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`
      }

      return {
        id: item.id,
        title: `New Application for ${item.package_name.charAt(0).toUpperCase() + item.package_name.slice(1)} Package`,
        timestamp,
        timeAgo,
        isUnread: item.status === 0,
        email: item.email, // Fixed: Include email in the returned object
      }
    })
  }

  // Handle notification click
  const handleNotificationClick = (notification: TransformedNotification) => {
    // Only mark as read if it's currently unread
    if (notification.isUnread && !markAsReadMutation.isPending) {
      markAsReadMutation.mutate({
        status: true,
        id: notification.id.toString(),
      })
    }
  }

  // Transform the data
  const allNotifications = apiResponse?.success ? transformNotifications(apiResponse.data) : []

  // Calculate pagination
  const totalPages = Math.ceil(allNotifications.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentNotifications = allNotifications.slice(startIndex, endIndex)

  // Pagination handlers
  const goToPage = (page: number) => {
    setCurrentPage(page)
  }

  const goToPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const goToNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = []
    const maxVisiblePages = 5

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      const startPage = Math.max(1, currentPage - 2)
      const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i)
      }
    }

    return pages
  }

  // Loading state
  if (isLoading) {
    return (
      <div>
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-100">
            <h1 className="text-xl font-semibold text-gray-900">Notification</h1>
          </div>
          <div className="p-6 flex items-center justify-center">
            <div className="flex items-center space-x-2">
              <Loader2 className="h-5 w-5 animate-spin text-gray-400" />
              <span className="text-gray-500">Loading notifications...</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div>
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-100">
            <h1 className="text-xl font-semibold text-gray-900">Notification</h1>
          </div>
          <div className="p-6 flex items-center justify-center">
            <div className="flex flex-col items-center space-y-3">
              <AlertTriangle className="h-8 w-8 text-red-500" />
              <div className="text-center">
                <p className="text-gray-900 font-medium">Failed to load notifications</p>
                <p className="text-gray-500 text-sm mt-1">
                  {error instanceof Error ? error.message : "Something went wrong"}
                </p>
                <button
                  onClick={() => refetch()}
                  className="mt-3 px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Empty state
  if (allNotifications.length === 0) {
    return (
      <div>
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-100">
            <h1 className="text-xl font-semibold text-gray-900">Notification</h1>
          </div>
          <div className="p-6 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-500">No notifications yet</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-900">Notification</h1>
            <span className="text-sm text-gray-500">
              {allNotifications.length} total notification{allNotifications.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          {currentNotifications.map((notification) => (
            <div
              key={notification.id}
              onClick={() => handleNotificationClick(notification)}
              className={`p-6 transition-colors ${
                notification.isUnread
                  ? "bg-blue-50 hover:bg-blue-100 cursor-pointer border-l-4 border-blue-500"
                  : "bg-white hover:bg-gray-50 border-l-4 border-transparent"
              } ${
                markAsReadMutation.isPending && markAsReadMutation.variables?.id === notification.id.toString()
                  ? "opacity-60"
                  : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  {/* Status indicator */}
                  <div className="flex-shrink-0 mt-1">
                    {notification.isUnread ? (
                      <div className="w-5 h-5 bg-blue-600 rounded-full"></div>
                    ) : (
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                    )}
                  </div>

                  {/* Notification content */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className={`text-base font-medium mb-1 ${
                        notification.isUnread ? "text-gray-900 font-semibold" : "text-gray-600 font-normal"
                      }`}
                    >
                      {notification.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">From: {notification.email}</p>
                    <p className="text-sm text-gray-500">{notification.timestamp}</p>
                  </div>
                </div>

                {/* Time ago */}
                <div className="flex-shrink-0 ml-4">
                  <span className="text-sm text-gray-500">{notification.timeAgo}</span>
                </div>
              </div>

              {/* Loading indicator for individual notification */}
              {markAsReadMutation.isPending && markAsReadMutation.variables?.id === notification.id.toString() && (
                <div className="flex items-center justify-center mt-2">
                  <Loader2 className="h-4 w-4 animate-spin text-gray-400" />
                  <span className="ml-2 text-xs text-gray-500">Marking as read...</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="px-6 py-4 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing {startIndex + 1} to {Math.min(endIndex, allNotifications.length)} of {allNotifications.length}{" "}
                notifications
              </div>

              <div className="flex items-center space-x-2">
                {/* Previous button */}
                <button
                  onClick={goToPrevious}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-md ${
                    currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>

                {/* Page numbers */}
                {getPageNumbers().map((page) => (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`px-3 py-1 rounded-md text-sm ${
                      currentPage === page ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                {/* Next button */}
                <button
                  onClick={goToNext}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-md ${
                    currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Notification

