"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo } from "./logo"
import { useAuth } from "@/contexts/auth-context"
import { BookOpen, Bell, Settings, FileText, Package, LogOut } from "lucide-react"

export function Sidebar() {
  const pathname = usePathname()
  const { logout } = useAuth()

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  return (
    <div className="w-[280px] bg-primary flex flex-col h-screen overflow-y-auto flex-shrink-0">
      <Logo />

      <nav className="flex-1 px-3 py-4">
        <Link href="/dashboard/bookings" className={`sidebar-link ${isActive("/dashboard/bookings") ? "active" : ""}`}>
          <BookOpen className="h-5 w-5" />
          <span className="ml-3">Bookings</span>
        </Link>
        <Link
          href="/dashboard/notification"
          className={`sidebar-link ${isActive("/dashboard/notification") ? "active" : ""}`}
        >
          <Bell className="h-5 w-5" />
          <span className="ml-3">Notification</span>
        </Link>
        <Link href="/dashboard/settings" className={`sidebar-link ${isActive("/dashboard/settings") ? "active" : ""}`}>
          <Settings className="h-5 w-5" />
          <span className="ml-3">Settings</span>
        </Link>
        <Link href="/dashboard/blogs" className={`sidebar-link ${isActive("/dashboard/blogs") ? "active" : ""}`}>
          <FileText className="h-5 w-5" />
          <span className="ml-3">Blogs</span>
        </Link>
        <Link href="/dashboard/packages" className={`sidebar-link ${isActive("/dashboard/packages") ? "active" : ""}`}>
          <Package className="h-5 w-5" />
          <span className="ml-3">Packages</span>
        </Link>
      </nav>

      <div className="p-4 mt-auto">
        <button
          onClick={logout}
          className="w-full py-3 px-4 border border-white text-white rounded-md hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
        >
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  )
}
