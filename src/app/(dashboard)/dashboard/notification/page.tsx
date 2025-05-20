"use client"

import { useState, useEffect } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Bell, ChevronLeft, ChevronRight, Trash, CheckCircle, Filter, Calendar } from "lucide-react"

// Mock data
const notificationsData = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: "New Application for Silver Packages",
  time: "Wednesday 9:20 PM",
  timeAgo: "18 hours ago",
  isRead: i < 5 ? false : true,
  date: i < 10 ? "15 May 2020" : i < 15 ? "16 May 2020" : "17 May 2020",
}))

export default function NotificationPage() {
  const [notifications, setNotifications] = useState(notificationsData)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(6)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedDate, setSelectedDate] = useState("")
  const [showUnreadOnly, setShowUnreadOnly] = useState(false)
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  // Filter notifications
  const filteredNotifications = notifications.filter((notification) => {
    const matchesDate = selectedDate ? notification.date === selectedDate : true
    const matchesUnread = showUnreadOnly ? !notification.isRead : true

    return matchesDate && matchesUnread
  })

  // Pagination
  const totalPages = Math.ceil(filteredNotifications.length / itemsPerPage)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredNotifications.slice(indexOfFirstItem, indexOfLastItem)

  const handleMarkAsRead = (id: number) => {
    setNotifications(
      notifications.map((notification) => (notification.id === id ? { ...notification, isRead: true } : notification)),
    )
  }

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map((notification) => ({ ...notification, isRead: true })))
  }

  const handleDeleteNotification = (id: number) => {
    setNotifications(notifications.filter((notification) => notification.id !== id))
  }

  const unreadCount = notifications.filter((n) => !n.isRead).length

  return (
    <DashboardLayout title="Notifications">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-medium flex items-center gap-2">
            <Bell className="h-6 w-6 text-primary" />
            Notifications
            {unreadCount > 0 && (
              <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 ml-2">{unreadCount} new</span>
            )}
          </h2>
          <div className="flex gap-2">
            <button onClick={() => setShowFilters(!showFilters)} className="btn btn-secondary flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </button>
            {unreadCount > 0 && (
              <button onClick={handleMarkAllAsRead} className="btn btn-primary flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Mark All as Read
              </button>
            )}
          </div>
        </div>

        {showFilters && (
          <div className="dashboard-card p-6 mb-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="form-label">Date</label>
                <select value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} className="form-select">
                  <option value="">All Dates</option>
                  <option value="15 May 2020">15 May 2020</option>
                  <option value="16 May 2020">16 May 2020</option>
                  <option value="17 May 2020">17 May 2020</option>
                </select>
              </div>

              <div className="flex items-end">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={showUnreadOnly}
                    onChange={() => setShowUnreadOnly(!showUnreadOnly)}
                    className="rounded text-primary focus:ring-primary"
                  />
                  <span>Show unread only</span>
                </label>
              </div>
            </div>
          </div>
        )}

        <div className="dashboard-card overflow-hidden">
          {isLoading ? (
            <div className="p-8 flex justify-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-3 text-gray-500">Loading notifications...</p>
              </div>
            </div>
          ) : currentItems.length > 0 ? (
            <>
              <div className="divide-y">
                {currentItems.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 md:p-6 flex items-start hover:bg-gray-50 transition-colors ${
                      !notification.isRead ? "bg-blue-50" : ""
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0 ${!notification.isRead ? "bg-primary" : "bg-gray-300"}`}
                    ></div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-lg ${!notification.isRead ? "font-medium" : ""} break-words`}>
                        {notification.title}
                      </h3>
                      <p className="text-gray-500 text-sm">{notification.time}</p>
                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded flex items-center">
                          <Calendar className="inline-block h-3 w-3 mr-1 flex-shrink-0" />
                          {notification.date}
                        </span>
                        {!notification.isRead && (
                          <button
                            onClick={() => handleMarkAsRead(notification.id)}
                            className="text-xs text-primary hover:underline"
                          >
                            Mark as read
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 ml-4 flex-shrink-0">
                      <div className="text-gray-500 text-sm">{notification.timeAgo}</div>
                      <button
                        onClick={() => handleDeleteNotification(notification.id)}
                        className="text-gray-400 hover:text-red-500"
                        title="Delete notification"
                      >
                        <Trash className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 flex items-center justify-between border-t">
                <div className="text-sm text-gray-500">
                  Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredNotifications.length)} of{" "}
                  {filteredNotifications.length} notifications
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
            </>
          ) : (
            <div className="p-8 text-center">
              <Bell className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-1">No notifications found</h3>
              <p className="text-gray-500">
                {showUnreadOnly
                  ? "You have no unread notifications"
                  : selectedDate
                    ? `No notifications for ${selectedDate}`
                    : "You don't have any notifications yet"}
              </p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}
