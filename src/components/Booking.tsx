"use client"

import { useState, useEffect, useMemo } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Filter,
  Calendar,
  Package2,
  MapPin,
  Phone,
  Mail,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { useQuery } from "@tanstack/react-query"
import type { PackageOrder } from "@/types/package-order"
import { useSession } from "next-auth/react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { useDebounce } from "@/hooks/use-debounce"

export async function fetchPackageOrders({
  token,
  page = 1,
  perPage = 10,
  search = "",
  packageFilter = "",
  dateFilter = "",
  sortField = "",
  sortDirection = "asc",
}: {
  token: string
  page?: number
  perPage?: number
  search?: string
  packageFilter?: string
  dateFilter?: string
  sortField?: string
  sortDirection?: "asc" | "desc"
}): Promise<{
  success: boolean
  current_page: number
  per_page: number
  data: PackageOrder[]
  total_blogs: number
  total_pages: number
}> {
  try {
    const params = new URLSearchParams({
      page: page.toString(),
      per_page: perPage.toString(),
      ...(search && { search }),
      ...(packageFilter && { package: packageFilter }),
      ...(dateFilter && { date: dateFilter }),
      ...(sortField && { sort_field: sortField }),
      ...(sortDirection && { sort_direction: sortDirection }),
    })

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/package-order-shows?${params}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching package orders:", error)
    throw error
  }
}

export default function BookingsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPackage, setSelectedPackage] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  // const [itemsPerPage, setItemsPerPage] = useState(10)
  const [showFilters, setShowFilters] = useState(false)
  const [sortField, setSortField] = useState<keyof PackageOrder | "">("")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")

  const session = useSession()
  const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2NvcS5zY2FsZXVwZGV2YWdlbmN5LmNvbS9hcGkvbG9naW4iLCJpYXQiOjE3NDg0MzE3NzksImV4cCI6MTc0ODQzNTM3OSwibmJmIjoxNzQ4NDMxNzc5LCJqdGkiOiI4RFU4bzJaS0tGNUpWeklNIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.wIYjliSsnutT5Dc9h8LBkPXBl_LYTXP9vG0GFU5UPRk'

  // Debounce search query to avoid too many API calls
  const debouncedSearchQuery = useDebounce(searchQuery, 500)

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [debouncedSearchQuery, selectedPackage, selectedDate, sortField, sortDirection])

  // Fetch package orders using TanStack Query with all parameters
  const { data, isLoading, error, isFetching } = useQuery({
    queryKey: [
      "packageOrders",
      currentPage,
      // itemsPerPage,
      debouncedSearchQuery,
      selectedPackage,
      selectedDate,
      sortField,
      sortDirection,
    ],
    queryFn: async () =>
      fetchPackageOrders({
        token,
        page: currentPage,
        // perPage: itemsPerPage,
        search: debouncedSearchQuery,
        packageFilter: selectedPackage,
        dateFilter: selectedDate,
        sortField: sortField as string,
        sortDirection,
      }),
    enabled: !!token,
    // keepPreviousData: true, // Keep previous data while fetching new data
  })

  const packageOrders = data?.data || []
  const totalPages = data?.total_pages || 0
  const totalItems = data?.total_blogs || 0
  const currentPageFromAPI = data?.current_page || 1

  const handleSort = (field: keyof PackageOrder) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  // const handleItemsPerPageChange = (value: string) => {
  //   setItemsPerPage(Number(value))
  //   setCurrentPage(1) // Reset to first page when changing items per page
  // }

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedPackage("")
    setSelectedDate("")
    setSortField("")
    setSortDirection("asc")
    setCurrentPage(1)
  }

  // Generate pagination numbers with smart ellipsis
  const paginationNumbers = useMemo(() => {
    const delta = 2 // Number of pages to show on each side of current page
    const range = []
    const rangeWithDots = []

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i)
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...")
    } else {
      rangeWithDots.push(1)
    }

    rangeWithDots.push(...range)

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages)
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages)
    }

    return rangeWithDots.filter((item, index, arr) => arr.indexOf(item) === index)
  }, [currentPage, totalPages])

  const getSortIcon = (field: keyof PackageOrder) => {
    if (sortField !== field) return null
    return sortDirection === "asc" ? "↑" : "↓"
  }

  if (error) {
    return (
      <DashboardLayout title="Bookings">
        <div className="p-6">
          <div className="dashboard-card p-8 text-center">
            <h2 className="text-xl font-medium text-red-600 mb-2">Error loading bookings</h2>
            <p className="text-gray-500">Please try again later or contact support.</p>
            <Button onClick={() => window.location.reload()} className="mt-4">
              Retry
            </Button>
          </div>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <TooltipProvider>
      <DashboardLayout title="Bookings">
        <div className="p-6">
          <div className="flex justify-between  mb-6 gap-10">``
            <h1 className="text-2xl font-medium">Bookings</h1>
            {/* <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Items per page:</span>
              <Select value={itemsPerPage.toString()} onValueChange={handleItemsPerPageChange}>
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="25">25</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                  <SelectItem value="100">100</SelectItem>
                </SelectContent>
              </Select>
            </div> */}
          <div className="dashboard-card p-4 mb-6 flex-2 w-full">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex-1 min-w-[300px]">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 input-icon" />
                  <Input
                    type="text"
                    placeholder="Search bookings..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="form-input pl-12"
                  />
                  {isFetching && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                </div>
              </div>

              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <Filter className="h-4 w-4" />
                Filters
                {(selectedPackage || selectedDate) && (
                  <span className="ml-1 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                    {(selectedPackage ? 1 : 0) + (selectedDate ? 1 : 0)}
                  </span>
                )}
              </Button>

              {(searchQuery || selectedPackage || selectedDate || sortField) && (
                <Button variant="ghost" onClick={clearFilters} className="text-gray-500">
                  Clear All
                </Button>
              )}
            </div>

            {showFilters && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-4 border-t animate-fade-in">
                <div>
                  <label className="form-label">Package</label>
                  <Select value={selectedPackage} onValueChange={setSelectedPackage}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Packages" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Packages</SelectItem>
                      <SelectItem value="gold">Gold</SelectItem>
                      <SelectItem value="silver">Silver</SelectItem>
                      <SelectItem value="bronze">Bronze</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="form-label">Date Range</label>
                  <Input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>
            )}
          </div>
          
          </div>

          

          <div className="dashboard-card overflow-hidden">
            {isLoading && !data ? (
              <div className="p-8 flex justify-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                  <p className="mt-3 text-gray-500">Loading bookings...</p>
                </div>
              </div>
            ) : (
              <>
                <div className="responsive-container">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th
                          className="table-header text-left cursor-pointer hover:bg-primary/90 transition-colors"
                          onClick={() => handleSort("package_name")}
                        >
                          <div className="flex items-center gap-1">
                            <Package2 className="h-4 w-4" />
                            Package {getSortIcon("package_name")}
                          </div>
                        </th>
                        <th
                          className="table-header text-left cursor-pointer hover:bg-primary/90 transition-colors"
                          onClick={() => handleSort("company_name")}
                        >
                          <div className="flex items-center gap-1">Company {getSortIcon("company_name")}</div>
                        </th>
                        <th
                          className="table-header text-left cursor-pointer hover:bg-primary/90 transition-colors"
                          onClick={() => handleSort("email")}
                        >
                          <div className="flex items-center gap-1">
                            <Mail className="h-4 w-4" />
                            Email {getSortIcon("email")}
                          </div>
                        </th>
                        <th className="table-header text-left">
                          <div className="flex items-center gap-1">
                            <Phone className="h-4 w-4" />
                            Phone
                          </div>
                        </th>
                        <th
                          className="table-header text-left cursor-pointer hover:bg-primary/90 transition-colors"
                          onClick={() => handleSort("location")}
                        >
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            Location {getSortIcon("location")}
                          </div>
                        </th>
                        <th
                          className="table-header text-left cursor-pointer hover:bg-primary/90 transition-colors"
                          onClick={() => handleSort("created_at")}
                        >
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            Date {getSortIcon("created_at")}
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {packageOrders.length > 0 ? (
                        packageOrders.map((order, index) => (
                          <tr key={`${order.created_at || index}`} className="hover:bg-gray-50 transition-colors">
                            <td className="table-cell font-medium">
                              <span
                                className={`inline-block px-3 py-1 rounded-full text-xs font-medium
                                ${
                                  order.package_name.toLowerCase() === "gold"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : order.package_name.toLowerCase() === "silver"
                                      ? "bg-gray-100 text-gray-800"
                                      : "bg-amber-100 text-amber-800"
                                }`}
                              >
                                {order.package_name.charAt(0).toUpperCase() + order.package_name.slice(1)}
                              </span>
                            </td>
                            <td className="table-cell">{order.company_name}</td>
                            <td className="table-cell text-blue-600 hover:underline">
                              <a href={`mailto:${order.email}`}>{order.email}</a>
                            </td>
                            <td className="table-cell">{order.phone}</td>
                            <td className="table-cell">
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <span className="block max-w-[200px] truncate cursor-help">{order.location}</span>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="max-w-[300px]">{order.location}</p>
                                </TooltipContent>
                              </Tooltip>
                            </td>
                            <td className="table-cell">{order.created_at}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={6} className="table-cell text-center py-8 text-gray-500">
                            {isFetching ? "Searching..." : "No bookings found matching your criteria"}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                {totalItems > 0 && (
                  <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between border-t gap-4">
                    <div className="text-sm text-gray-500">
                      Showing {(currentPageFromAPI - 1) + 1} to{" "}
                      {Math.min(currentPageFromAPI , totalItems)} of {totalItems} results
                      {(debouncedSearchQuery || selectedPackage || selectedDate) && " (filtered)"}
                    </div>

                    <div className="flex items-center gap-1">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePageChange(1)}
                        disabled={currentPage === 1 || isFetching}
                        className="h-8 w-8 p-0"
                      >
                        <ChevronsLeft className="h-4 w-4" />
                      </Button>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1 || isFetching}
                        className="h-8 w-8 p-0"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>

                      {paginationNumbers.map((page, index) => (
                        <Button
                          key={index}
                          variant={page === currentPage ? "default" : "outline"}
                          size="sm"
                          onClick={() => typeof page === "number" && handlePageChange(page)}
                          disabled={page === "..." || isFetching}
                          className="h-8 min-w-8 px-2"
                        >
                          {page}
                        </Button>
                      ))}

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages || isFetching}
                        className="h-8 w-8 p-0"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePageChange(totalPages)}
                        disabled={currentPage === totalPages || isFetching}
                        className="h-8 w-8 p-0"
                      >
                        <ChevronsRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </DashboardLayout>
    </TooltipProvider>
  )
}
