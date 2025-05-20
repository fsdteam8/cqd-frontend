"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Search, ChevronLeft, ChevronRight, Plus, Edit, Trash, Filter, Calendar, Eye } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"

// Mock data
const blogsData = [
  {
    id: 1,
    image: "/home-cleaning.png",
    title: "Twelve Office Cleaning Tips",
    date: "15 May 2020",
    published: true,
    views: 1245,
  },
  {
    id: 2,
    image: "/home-cleaning.png",
    title: "Protecting the elderly residents in your care home",
    date: "15 May 2020",
    published: true,
    views: 876,
  },
  {
    id: 3,
    image: "/home-cleaning.png",
    title: "Pub Cleaning Checklist",
    date: "15 May 2020",
    published: true,
    views: 543,
  },
]

export default function BlogsPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)
  const [blogs, setBlogs] = useState(blogsData)
  const [isLoading, setIsLoading] = useState(true)
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 200)

    return () => clearTimeout(timer)
  }, [])

  // Filter blogs based on search query and filters
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = selectedStatus ? (selectedStatus === "published" ? blog.published : !blog.published) : true
    const matchesDate = selectedDate ? blog.date === selectedDate : true

    return matchesSearch && matchesStatus && matchesDate
  })

  // Pagination
  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredBlogs.slice(indexOfFirstItem, indexOfLastItem)

  const handleTogglePublish = (id: number) => {
    setBlogs(blogs.map((blog) => (blog.id === id ? { ...blog, published: !blog.published } : blog)))
  }

  const handleEdit = (id: number) => {
    router.push(`/admin/dashboard/blogs/edit/${id}`)
  }

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this blog?")) {
      setBlogs(blogs.filter((blog) => blog.id !== id))
    }
  }

  const handleView = (id: number) => {
    // In a real app, this would open the blog in a new tab or preview mode
    alert(`Viewing blog ${id}`)
  }

  return (
    <DashboardLayout title="Blogs">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-medium">Blogs</h1>
          <button
            onClick={() => router.push("/admin/dashboard/blogs/add")}
            className="btn btn-primary flex items-center gap-2"
          >
            <Plus className="h-5 w-5" />
            Add New Blog
          </button>
        </div>

        <div className="dashboard-card p-6 mb-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-[300px]">
              <div className="relative">
                <Search className="input-icon" />
                <Input
                  type="text"
                  placeholder="Search blogs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="form-input input-with-icon"
                />
              </div>
            </div>

            <button onClick={() => setShowFilters(!showFilters)} className="btn btn-secondary flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </button>
          </div>

          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-4 border-t animate-fade-in">
              <div>
                <label className="form-label">Status</label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="form-select"
                >
                  <option value="">All Status</option>
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                </select>
              </div>

              <div>
                <label className="form-label">Date</label>
                <select value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} className="form-select">
                  <option value="">All Dates</option>
                  <option value="15 May 2020">15 May 2020</option>
                  <option value="16 May 2020">16 May 2020</option>
                  <option value="17 May 2020">17 May 2020</option>
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
                <p className="mt-3 text-gray-500">Loading blogs...</p>
              </div>
            </div>
          ) : (
            <>
              <div className="responsive-container">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="table-header text-left">Image</th>
                      <th className="table-header text-left">Title</th>
                      <th className="table-header text-left">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          Date
                        </div>
                      </th>
                      <th className="table-header text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Eye className="h-4 w-4" />
                          Views
                        </div>
                      </th>
                      <th className="table-header text-center">Published</th>
                      <th className="table-header text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.length > 0 ? (
                      currentItems.map((blog) => (
                        <tr key={blog.id} className="hover:bg-gray-50 transition-colors">
                          <td className="table-cell">
                            <Image
                              width={48}
                              height={48}
                              src={blog.image || "/placeholder.svg"}
                              alt={blog.title}
                              className="w-12 h-12 object-cover rounded-md"
                            />
                          </td>
                          <td className="table-cell font-medium">{blog.title}</td>
                          <td className="table-cell text-gray-600">{blog.date}</td>
                          <td className="table-cell text-center text-gray-600">{blog.views.toLocaleString()}</td>
                          <td className="table-cell text-center">
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={blog.published}
                                onChange={() => handleTogglePublish(blog.id)}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                          </td>
                          <td className="table-cell">
                            <div className="flex justify-center gap-2">
                              <button
                                onClick={() => handleView(blog.id)}
                                className="btn-icon text-gray-500 hover:text-primary hover:bg-gray-100"
                                title="View"
                              >
                                <Eye className="h-4 w-4" />
                              </button>
                              <button
                                onClick={() => handleEdit(blog.id)}
                                className="btn-icon text-gray-500 hover:text-primary hover:bg-gray-100"
                                title="Edit"
                              >
                                <Edit className="h-4 w-4" />
                              </button>
                              <button
                                onClick={() => handleDelete(blog.id)}
                                className="btn-icon text-gray-500 hover:text-red-500 hover:bg-gray-100"
                                title="Delete"
                              >
                                <Trash className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="table-cell text-center py-8 text-gray-500">
                          No blogs found matching your criteria
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {filteredBlogs.length > 0 && (
                <div className="p-4 flex items-center justify-between border-t">
                  <div className="text-sm text-gray-500">
                    Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredBlogs.length)} of{" "}
                    {filteredBlogs.length} results
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
