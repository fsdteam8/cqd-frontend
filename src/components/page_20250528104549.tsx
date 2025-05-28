"use client"

import { useState, useMemo } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Search, ChevronLeft, ChevronRight, Filter, Calendar, Package2, MapPin, Phone, Mail } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useBookings } from "@/hooks/use-bookings"
import type { BookingOrder } from "@/types/booking"

export default function BookingsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPackage, setSelectedPackage] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)
  const [showFilters, setShowFilters] = useState(false)
  const [sortField, setSortField] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")

  const { data: bookingsData = [], isLoading, error } = useBookings()

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  // Get unique values for filters
  const uniquePackages = useMemo(() => {
    const packages = new Set(bookingsData.map((booking) => booking.package))
    return Array.from(packages).sort()
  }, [bookingsData])

  const uniqueDates = useMemo(() => {
    const dates = new Set(bookingsData.map((booking) => booking.date))
    return Array.from(dates).sort()
  }, [bookingsData])

  // Filter and sort bookings
  const filteredAndSortedBookings = useMemo(() => {
    return [...bookingsData]
      .filter((booking) => {
        const matchesSearch =
          booking.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          booking.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          booking.location.toLowerCase().includes(searchQuery.toLowerCase())

        const matchesPackage = selectedPackage ? booking.package === selectedPackage : true
        const matchesDate = selectedDate ? booking.date === selectedDate : true

        return matchesSearch && matchesPackage && matchesDate
      })
      .sort((a, b) => {
        if (!sortField) return 0

        const fieldA = a[sortField as keyof BookingOrder]
        const fieldB = b[sortField as keyof BookingOrder]

        if (typeof fieldA === "string" && typeof fieldB === "string") {
          return sortDirection === "asc" ? fieldA.localeCompare(fieldB) : fieldB.localeCompare(fieldA)
        }

        return 0
      })
  }, [bookingsData, searchQuery, selectedPackage, selectedDate, sortField, sortDirection])

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedBookings.length / itemsPerPage)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredAndSortedBookings.slice(indexOfFirstItem, indexOfLastItem)

  const getSortIcon = (field: string) => {
    if (sortField !== field) return null
    return sortDirection === "asc" ? "↑" : "↓"
  }

  const getPackageBadgeClass = (packageName: string) => {
    switch (packageName.toLowerCase()) {
      case "gold":
        return "bg-yellow-100 text-yellow-800"
      case "silver":
        return "bg-gray-100 text-gray-800"
      case "bronze":
        return "bg-amber-100 text-amber-800"
      default:
        return "bg-blue-100 text-blue-800"
    }
  }

  if (error) {
    const isAuthError = error.message.includes("Unauthorized") || error.message.includes("No access token")

    return (
      <DashboardLayout title="Bookings">
        <div className="p-6">
          <div className="dashboard-card p-8 text-center">
            <div className="text-red-600 mb-4">
              <Package2 className="h-12 w-12 mx-auto mb-2" />
              <h3 className="text-lg font-medium">
                {isAuthError ? "Authentication Required" : "Failed to load bookings"}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {isAuthError
                  ? "Please log in to view package orders"
                  : error instanceof Error
                    ? error.message
                    : "An error occurred while fetching data"}
              </p>
            </div>
            {isAuthError ? (
              <button onClick={() => (window.location.href = "/login")} className="btn btn-primary">
                Go to Login
              </button>
            ) : (
              <button onClick={() => window.location.reload()} className="btn btn-primary">
                Try Again
              </button>
            )}
          </div>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout title="Bookings">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-medium">Package Orders</h1>
          <div className="text-sm text-gray-500">Total: {bookingsData.length} orders</div>
        </div>

        <div className="dashboard-card p-6 mb-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-[300px]">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 input-icon" />
                <Input
                  type="text"
                  placeholder="Search by company name, email, or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="form-input pl-12"
                />
              </div>
            </div>

            <button onClick={() => setShowFilters(!showFilters)} className="btn btn-secondary flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
              {(selectedPackage || selectedDate) && (
                <span className="bg-primary text-white text-xs rounded-full px-2 py-0.5 ml-1">
                  {[selectedPackage, selectedDate].filter(Boolean).length}
                </span>
              )}
            </button>
          </div>

          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-4 border-t animate-fade-in">
              <div>
                <label className="form-label">Package</label>
                <select
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                  className="form-select"
                >
                  <option value="">All Packages</option>
                  {uniquePackages.map((pkg) => (
                    <option key={pkg} value={pkg}>
                      {pkg}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="form-label">Date</label>
                <select value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} className="form-select">
                  <option value="">All Dates</option>
                  {uniqueDates.map((date) => (
                    <option key={date} value={date}>
                      {date}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        <div className="dashboard-card overflow-hidden">
          {isLoading ? (
            <div className="p-8 flex justify-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-3 text-gray-500">Loading package orders...</p>
              </div>
            </div>
          ) : (
            <>
              <div className="responsive-container">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th
                        className="table-header text-left cursor-pointer hover:bg-primary/90"
                        onClick={() => handleSort("package")}
                      >
                        <div className="flex items-center gap-1">
                          <Package2 className="h-4 w-4" />
                          Package {getSortIcon("package")}
                        </div>
                      </th>
                      <th
                        className="table-header text-left cursor-pointer hover:bg-primary/90"
                        onClick={() => handleSort("name")}
                      >
                        <div className="flex items-center gap-1">Company {getSortIcon("name")}</div>
                      </th>
                      <th
                        className="table-header text-left cursor-pointer hover:bg-primary/90"
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
                        className="table-header text-left cursor-pointer hover:bg-primary/90"
                        onClick={() => handleSort("location")}
                      >
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          Location {getSortIcon("location")}
                        </div>
                      </th>
                      <th
                        className="table-header text-left cursor-pointer hover:bg-primary/90"
                        onClick={() => handleSort("date")}
                      >
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          Date {getSortIcon("date")}
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.length > 0 ? (
                      currentItems.map((booking) => (
                        <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                          <td className="table-cell font-medium">
                            <span
                              className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getPackageBadgeClass(booking.package)}`}
                            >
                              {booking.package}
                            </span>
                          </td>
                          <td className="table-cell font-medium">{booking.name}</td>
                          <td className="table-cell text-blue-600 hover:underline">
                            <a href={`mailto:${booking.email}`}>{booking.email}</a>
                          </td>
                          <td className="table-cell">{booking.phone}</td>
                          <td className="table-cell">{booking.location}</td>
                          <td className="table-cell">{booking.date}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="table-cell text-center py-8 text-gray-500">
                          {searchQuery || selectedPackage || selectedDate
                            ? "No orders found matching your criteria"
                            : "No package orders available"}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {filteredAndSortedBookings.length > 0 && (
                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between border-t gap-4">
                  <div className="text-sm text-gray-500">
                    Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredAndSortedBookings.length)} of{" "}
                    {filteredAndSortedBookings.length} results
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="pagination-button"
                      aria-label="Previous page"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`pagination-button ${currentPage === page ? "active" : ""}`}
                        aria-label={`Page ${page}`}
                        aria-current={currentPage === page ? "page" : undefined}
                      >
                        {page}
                      </button>
                    ))}

                    <button
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="pagination-button"
                      aria-label="Next page"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}
