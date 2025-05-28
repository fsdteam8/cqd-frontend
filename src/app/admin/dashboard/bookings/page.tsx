// "use client"

<<<<<<< HEAD
import { useState, useMemo } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Search, ChevronLeft, ChevronRight, Filter, Calendar, Package2, MapPin, Phone, Mail } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useBookings } from "@/hooks/use-bookings"
import type { BookingOrder } from "@/types/booking"
import { useSession } from "next-auth/react"

export default function BookingsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPackage, setSelectedPackage] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)
  const [showFilters, setShowFilters] = useState(false)
  const [sortField, setSortField] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")
  const session = useSession()
  const token = (session.data?.user as {token:string})?.token || ""
console.log(token);
  const { data: bookingsData = [], isLoading, error } = useBookings()
=======
// import { useState, useEffect } from "react"
// import { DashboardLayout } from "@/components/dashboard-layout"
// import {
//   Search,
//   ChevronLeft,
//   ChevronRight,
//   Filter,
//   Calendar,
//   Package2,
//   MapPin,
//   Phone,
//   Mail,
// } from "lucide-react"
// import { Input } from "@/components/ui/input"

// // Mock data
// const bookingsData = [
//   {
//     id: 1,
//     package: "Gold",
//     name: "Flores, Juanita",
//     email: "michael.mitc@example.com",
//     phone: "(+33)6 55 53 38 10",
//     location: "Coppell, Virginia",
//     date: "15 May 2020",
//     status: "Confirmed",
//   },
//   {
//     id: 2,
//     package: "Silver",
//     name: "Henry, Arthur",
//     email: "sara.cruz@example.com",
//     phone: "(+33)7 35 55 45 43",
//     location: "Syracuse, Connecticut",
//     date: "15 May 2020",
//     status: "Pending",
//   },
//   {
//     id: 3,
//     package: "Bronze",
//     name: "Cooper, Kristin",
//     email: "tim.jennings@example.com",
//     phone: "(+33)7 65 55 72 67",
//     location: "Corona, Michigan",
//     date: "15 May 2020",
//     status: "Completed",
//   },
//   {
//     id: 4,
//     package: "Gold",
//     name: "Johnson, Michael",
//     email: "michael.johnson@example.com",
//     phone: "(+33)6 12 34 56 78",
//     location: "Austin, Texas",
//     date: "16 May 2020",
//     status: "Confirmed",
//   },
//   {
//     id: 5,
//     package: "Silver",
//     name: "Williams, Emma",
//     email: "emma.williams@example.com",
//     phone: "(+33)7 98 76 54 32",
//     location: "Portland, Oregon",
//     date: "16 May 2020",
//     status: "Pending",
//   },
//   {
//     id: 6,
//     package: "Bronze",
//     name: "Davis, Sarah",
//     email: "sarah.davis@example.com",
//     phone: "(+33)6 45 67 89 10",
//     location: "Denver, Colorado",
//     date: "17 May 2020",
//     status: "Completed",
//   },
// ]

// export default function BookingsPage() {
//   const [searchQuery, setSearchQuery] = useState("")
//   const [selectedPackage, setSelectedPackage] = useState("")
//   const [selectedDate, setSelectedDate] = useState("")
//   const [selectedStatus, setSelectedStatus] = useState("")
//   const [currentPage, setCurrentPage] = useState(1)
//   const [itemsPerPage] = useState(10)
//   const [isLoading, setIsLoading] = useState(true)
//   const [showFilters, setShowFilters] = useState(false)
//   const [sortField, setSortField] = useState<string | null>(null)
//   const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")

//   useEffect(() => {
//     // Simulate loading data
//     const timer = setTimeout(() => {
//       setIsLoading(false)
//     }, 200)

//     return () => clearTimeout(timer)
//   }, [])
>>>>>>> 581ab19d9f40943eacda28e4e1da1fa149b04436

//   const handleSort = (field: string) => {
//     if (sortField === field) {
//       setSortDirection(sortDirection === "asc" ? "desc" : "asc")
//     } else {
//       setSortField(field)
//       setSortDirection("asc")
//     }
//   }

<<<<<<< HEAD
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
=======
//   // Filter and sort bookings
//   const filteredAndSortedBookings = [...bookingsData]
//     .filter((booking) => {
//       const matchesSearch =
//         booking.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         booking.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         booking.location.toLowerCase().includes(searchQuery.toLowerCase())

//       const matchesPackage = selectedPackage ? booking.package === selectedPackage : true
//       const matchesDate = selectedDate ? booking.date === selectedDate : true
//       const matchesStatus = selectedStatus ? booking.status === selectedStatus : true

//       return matchesSearch && matchesPackage && matchesDate && matchesStatus
//     })
//     .sort((a, b) => {
//       if (!sortField) return 0

//       const fieldA = a[sortField as keyof typeof a]
//       const fieldB = b[sortField as keyof typeof b]

//       if (typeof fieldA === "string" && typeof fieldB === "string") {
//         return sortDirection === "asc" ? fieldA.localeCompare(fieldB) : fieldB.localeCompare(fieldA)
//       }

//       return 0
//     })
>>>>>>> 581ab19d9f40943eacda28e4e1da1fa149b04436

//   // Pagination
//   const totalPages = Math.ceil(filteredAndSortedBookings.length / itemsPerPage)
//   const indexOfLastItem = currentPage * itemsPerPage
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage
//   const currentItems = filteredAndSortedBookings.slice(indexOfFirstItem, indexOfLastItem)

//   const getSortIcon = (field: string) => {
//     if (sortField !== field) return null
//     return sortDirection === "asc" ? "↑" : "↓"
//   }

<<<<<<< HEAD
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
    const isAuthError = error instanceof Error && error.message.includes("Authentication failed")

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
                  ? "Your session has expired. Please log in again."
                  : error instanceof Error
                    ? error.message
                    : "An error occurred while fetching data"}
              </p>
            </div>
            <button
              onClick={() => (isAuthError ? (window.location.href = "/login") : window.location.reload())}
              className="btn btn-primary"
            >
              {isAuthError ? "Go to Login" : "Try Again"}
            </button>
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
=======
//   const getStatusBadgeClass = (status: string) => {
//     switch (status) {
//       case "Confirmed":
//         return "badge badge-success"
//       case "Pending":
//         return "badge badge-warning"
//       case "Completed":
//         return "badge badge-info"
//       default:
//         return "badge"
//     }
//   }

//   return (
//     <DashboardLayout title="Bookings">
//       <div className="p-6">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-medium">Bookings</h1>
//           {/* <div className="flex gap-2">
//             <button className="btn btn-secondary flex items-center gap-2">
//               <Printer className="h-4 w-4" />
//               Print
//             </button>
//             <button className="btn btn-secondary flex items-center gap-2">
//               <Download className="h-4 w-4" />
//               Export
//             </button>
//           </div> */}
//         </div>

//         <div className="dashboard-card p-6 mb-6">
//           <div className="flex flex-wrap items-center gap-4">
//             <div className="flex-1 min-w-[300px]">
//               <div className="relative">
//                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 input-icon" />
//                 <Input
//                   type="text"
//                   placeholder="Search bookings..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="form-input pl-12"
//                 />
//               </div>
//             </div>

//             <button onClick={() => setShowFilters(!showFilters)} className="btn btn-secondary flex items-center gap-2">
//               <Filter className="h-4 w-4" />
//               Filters
//             </button>
//           </div>

//           {showFilters && (
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 pt-4 border-t animate-fade-in">
//               <div>
//                 <label className="form-label">Package</label>
//                 <select
//                   value={selectedPackage}
//                   onChange={(e) => setSelectedPackage(e.target.value)}
//                   className="form-select"
//                 >
//                   <option value="">All Packages</option>
//                   <option value="Gold">Gold</option>
//                   <option value="Silver">Silver</option>
//                   <option value="Bronze">Bronze</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="form-label">Date</label>
//                 <select value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} className="form-select">
//                   <option value="">All Dates</option>
//                   <option value="15 May 2020">15 May 2020</option>
//                   <option value="16 May 2020">16 May 2020</option>
//                   <option value="17 May 2020">17 May 2020</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="form-label">Status</label>
//                 <select
//                   value={selectedStatus}
//                   onChange={(e) => setSelectedStatus(e.target.value)}
//                   className="form-select"
//                 >
//                   <option value="">All Status</option>
//                   <option value="Confirmed">Confirmed</option>
//                   <option value="Pending">Pending</option>
//                   <option value="Completed">Completed</option>
//                 </select>
//               </div>
//             </div>
//           )}
//         </div>

//         <div className="dashboard-card overflow-hidden">
//           {isLoading ? (
//             <div className="p-8 flex justify-center">
//               <div className="flex flex-col items-center">
//                 <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
//                 <p className="mt-3 text-gray-500">Loading bookings...</p>
//               </div>
//             </div>
//           ) : (
//             <>
//               <div className="responsive-container">
//                 <table className="w-full">
//                   <thead>
//                     <tr>
//                       <th
//                         className="table-header text-left cursor-pointer hover:bg-primary/90"
//                         onClick={() => handleSort("package")}
//                       >
//                         <div className="flex items-center gap-1">
//                           <Package2 className="h-4 w-4" />
//                           Package {getSortIcon("package")}
//                         </div>
//                       </th>
//                       <th
//                         className="table-header text-left cursor-pointer hover:bg-primary/90"
//                         onClick={() => handleSort("name")}
//                       >
//                         <div className="flex items-center gap-1">Name {getSortIcon("name")}</div>
//                       </th>
//                       <th
//                         className="table-header text-left cursor-pointer hover:bg-primary/90"
//                         onClick={() => handleSort("email")}
//                       >
//                         <div className="flex items-center gap-1">
//                           <Mail className="h-4 w-4" />
//                           Email {getSortIcon("email")}
//                         </div>
//                       </th>
//                       <th className="table-header text-left">
//                         <div className="flex items-center gap-1">
//                           <Phone className="h-4 w-4" />
//                           Phone
//                         </div>
//                       </th>
//                       <th
//                         className="table-header text-left cursor-pointer hover:bg-primary/90"
//                         onClick={() => handleSort("location")}
//                       >
//                         <div className="flex items-center gap-1">
//                           <MapPin className="h-4 w-4" />
//                           Location {getSortIcon("location")}
//                         </div>
//                       </th>
//                       <th
//                         className="table-header text-left cursor-pointer hover:bg-primary/90"
//                         onClick={() => handleSort("date")}
//                       >
//                         <div className="flex items-center gap-1">
//                           <Calendar className="h-4 w-4" />
//                           Date {getSortIcon("date")}
//                         </div>
//                       </th>
//                       <th
//                         className="table-header text-left cursor-pointer hover:bg-primary/90"
//                         onClick={() => handleSort("status")}
//                       >
//                         <div className="flex items-center gap-1">Status {getSortIcon("status")}</div>
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {currentItems.length > 0 ? (
//                       currentItems.map((booking) => (
//                         <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
//                           <td className="table-cell font-medium">
//                             <span
//                               className={`inline-block px-3 py-1 rounded-full text-xs font-medium
//                               ${
//                                 booking.package === "Gold"
//                                   ? "bg-yellow-100 text-yellow-800"
//                                   : booking.package === "Silver"
//                                     ? "bg-gray-100 text-gray-800"
//                                     : "bg-amber-100 text-amber-800"
//                               }`}
//                             >
//                               {booking.package}
//                             </span>
//                           </td>
//                           <td className="table-cell">{booking.name}</td>
//                           <td className="table-cell text-blue-600 hover:underline">
//                             <a href={`mailto:${booking.email}`}>{booking.email}</a>
//                           </td>
//                           <td className="table-cell">{booking.phone}</td>
//                           <td className="table-cell">{booking.location}</td>
//                           <td className="table-cell">{booking.date}</td>
//                           <td className="table-cell">
//                             <span className={getStatusBadgeClass(booking.status)}>{booking.status}</span>
//                           </td>
//                         </tr>
//                       ))
//                     ) : (
//                       <tr>
//                         <td colSpan={7} className="table-cell text-center py-8 text-gray-500">
//                           No bookings found matching your criteria
//                         </td>
//                       </tr>
//                     )}
//                   </tbody>
//                 </table>
//               </div>

//               {filteredAndSortedBookings.length > 0 && (
//                 <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between border-t gap-4">
//                   <div className="text-sm text-gray-500">
//                     Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredAndSortedBookings.length)} of{" "}
//                     {filteredAndSortedBookings.length} results
//                   </div>

//                   <div className="flex items-center gap-2">
//                     <button
//                       onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//                       disabled={currentPage === 1}
//                       className="pagination-button"
//                       aria-label="Previous page"
//                     >
//                       <ChevronLeft className="h-4 w-4" />
//                     </button>

//                     {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//                       <button
//                         key={page}
//                         onClick={() => setCurrentPage(page)}
//                         className={`pagination-button ${currentPage === page ? "active" : ""}`}
//                         aria-label={`Page ${page}`}
//                         aria-current={currentPage === page ? "page" : undefined}
//                       >
//                         {page}
//                       </button>
//                     ))}

//                     <button
//                       onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//                       disabled={currentPage === totalPages}
//                       className="pagination-button"
//                       aria-label="Next page"
//                     >
//                       <ChevronRight className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </>
//           )}
//         </div>
//       </div>
//     </DashboardLayout>
//   )
// }




import Booking from '@/components/Booking'
import React from 'react'

const page = () => {
  return (
    <div>
      <Booking />
    </div>
>>>>>>> 581ab19d9f40943eacda28e4e1da1fa149b04436
  )
}

export default page