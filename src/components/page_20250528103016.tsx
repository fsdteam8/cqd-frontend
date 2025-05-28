"use client"

import { useState, useEffect } from "react"
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
  Building,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { format } from "date-fns"

// Define the booking data type based on API response
interface BookingData {
  id: number
  company_name: string
  email: string
  phone: string
  postal_code: string
  address: string
  location: string
  package_name: string
  created_at: string
  updated_at: string
}

export default function BookingsPage() {
  const [bookings, setBookings] = useState<BookingData[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPackage, setSelectedPackage] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)
  const [isLoading, setIsLoading] = useState(true)
  const [showFilters, setShowFilters] = useState(false)
  const [sortField, setSortField] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")
  const [error, setError] = useState<string | null>(null)
  const [totalBookings, setTotalBookings] = useState(0)
  const [availableDates, setAvailableDates] = useState<string[]>([])
  const [availablePackages, setAvailablePackages] = useState<string[]>([])

  // Fetch bookings from API
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setIsLoading(true)
        const response = await fetch("/api/package-order-shows")

        if (!response.ok) {
          throw new Error(`API request failed with status: ${response.status}`)
        }

        const result = await response.json()

        // Check if result has a data property that's an array
        const bookingsData = Array.isArray(result.data) ? result.data : [result.data]
        setBookings(bookingsData)

        // Extract unique dates and packages for filters
        const dates = [
          ...new Set(bookingsData.map((booking: BookingData) => format(new Date(booking.created_at), "dd MMM yyyy"))),
        ].sort()
        setAvailableDates(dates)

        const packages = [
          ...new Set(
            bookingsData.map(
              (booking: BookingData) => booking.package_name.charAt(0).toUpperCase() + booking.package_name.slice(1),
            ),
          ),
        ].sort()
        setAvailablePackages(packages)

        setTotalBookings(bookingsData.length)
        setError(null)
      } catch (err) {
        console.error("Error fetching bookings:", err)
        setError("Failed to load bookings. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchBookings()
  }, [])

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  // Format date for display
  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), "dd MMM yyyy")
    } catch (error) {
      return "Invalid Date"
    }
  }

  // Format package name to capitalize first letter
  const formatPackage = (packageName: string) => {
    return packageName.charAt(0).toUpperCase() + packageName.slice(1)
  }

  // Filter and sort bookings
  const filteredAndSortedBookings = [...bookings]
    .filter((booking) => {
      const matchesSearch =
        booking.company_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        booking.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        booking.location.toLowerCase().includes(searchQuery.toLowerCase())

      const formattedPackageName = formatPackage(booking.package_name)
      const formattedDate = formatDate(booking.created_at)

      const matchesPackage = selectedPackage ? formattedPackageName === selectedPackage : true
      const matchesDate = selectedDate ? formattedDate === selectedDate : true

      return matchesSearch && matchesPackage && matchesDate
    })
    .sort((a, b) => {
      if (!sortField) return 0

      let fieldA: any
      let fieldB: any

      switch (sortField) {
        case "package":
          fieldA = formatPackage(a.package_name)
          fieldB = formatPackage(b.package_name)
          break
        case "company":
          fieldA = a.company_name
          fieldB = b.company_name
          break
        case "email":
          fieldA = a.email
          fieldB = b.email
          break
        case "location":
          fieldA = a.location
          fieldB = b.location
          break
        case "date":
          fieldA = new Date(a.created_at).getTime()
          fieldB = new Date(b.created_at).getTime()
          return sortDirection === "asc" ? fieldA - fieldB : fieldB - fieldA
        default:
          fieldA = a[sortField as keyof BookingData]
          fieldB = b[sortField as keyof BookingData]
      }

      if (typeof fieldA === "string" && typeof fieldB === "string") {
        return sortDirection === "asc" ? fieldA.localeCompare(fieldB) : fieldB.localeCompare(fieldA)
      }

      return 0
    })

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedBookings.length / itemsPerPage)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredAndSortedBookings.slice(indexOfFirstItem, indexOfLastItem)

  const getSortIcon = (field: string) => {
    if (sortField !== field) return null
    return sortDirection === "asc" ? "↑" : "↓"
  }

  const getPackageClass = (packageName: string) => {
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

  return (
    <DashboardLayout title="Bookings">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-medium">Bookings</h1>
        </div>

        <div className="dashboard-card p-6 mb-6">
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
              </div>
            </div>

            <button onClick={() => setShowFilters(!showFilters)} className="btn btn-secondary flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </button>
          </div>

          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 pt-4 border-t animate-fade-in">
              <div>
                <label className="form-label">Package</label>
                <select
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                  className="form-select"
                >
                  <option value="">All Packages</option>
                  {availablePackages.map((packageName, index) => (
                    <option key={index} value={packageName}>
                      {packageName}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="form-label">Date</label>
                <select value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} className="form-select">
                  <option value="">All Dates</option>
                  {availableDates.map((date, index) => (
                    <option key={index} value={date}>
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
                <p className="mt-3 text-gray-500">Loading bookings...</p>
              </div>
            </div>
          ) : error ? (
            <div className="p-8 text-center text-red-500">
              <p>{error}</p>
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
                        onClick={() => handleSort("company")}
                      >
                        <div className="flex items-center gap-1">
                          <Building className="h-4 w-4" />
                          Company {getSortIcon("company")}
                        </div>
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
                              className={`inline-block px-3 py-1 rounded-full text-xs font-medium
                              ${getPackageClass(booking.package_name)}`}
                            >
                              {formatPackage(booking.package_name)}
                            </span>
                          </td>
                          <td className="table-cell">{booking.company_name}</td>
                          <td className="table-cell text-blue-600 hover:underline">
                            <a href={`mailto:${booking.email}`}>{booking.email}</a>
                          </td>
                          <td className="table-cell">{booking.phone}</td>
                          <td className="table-cell">{booking.location}</td>
                          <td className="table-cell">{formatDate(booking.created_at)}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="table-cell text-center py-8 text-gray-500">
                          No bookings found matching your criteria
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
