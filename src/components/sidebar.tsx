"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";
import {
  BookOpen,
  Bell,
  Settings,
  FileText,
  Package,
  LogOut,
} from "lucide-react";
import { useState } from "react";
import LogoutModal from "./shared/modals/LogoutModal";
import { toast } from "sonner";
import { signOut } from "next-auth/react";

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  const handLogout = () => {
    try {
      toast.success("Logout successful!");
      setTimeout(async () => {
        await signOut({
          callbackUrl: "/login",
        });
      }, 1000);
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout failed. Please try again.");
    }
  };

  return (
    <div className="w-[280px] bg-[#0E2A5C] text-white flex flex-col h-screen overflow-y-auto flex-shrink-0">
      <Logo />

      <nav className="space-y-5 px-3 py-4">
        <Link
          href="/admin/dashboard/bookings"
          className={`flex items-center gap-1 sidebar-link ${
            isActive("/dashboard/bookings") ? "active" : ""
          }`}
        >
          <BookOpen className="h-5 w-5" />
          <span className="ml-3">Bookings</span>
        </Link>

        <Link
          href="/admin/dashboard/notification"
          className={`flex items-center gap-1 sidebar-link ${
            isActive("/admin/dashboard/notification") ? "active" : ""
          }`}
        >
          <Bell className="h-5 w-5" />
          <span className="ml-3">Notification</span>
        </Link>
        <Link
          href="/admin/dashboard/settings"
          className={`flex items-center gap-1 sidebar-link ${
            isActive("/admin/dashboard/settings") ? "active" : ""
          }`}
        >
          <Settings className="h-5 w-5" />
          <span className="ml-3">Settings</span>
        </Link>
        <Link
          href="/admin/dashboard/blogs"
          className={`flex items-center gap-1 sidebar-link ${
            isActive("/admin/dashboard/blogs") ? "active" : ""
          }`}
        >
          <FileText className="h-5 w-5" />
          <span className="ml-3">Blogs</span>
        </Link>
        <Link
          href="/admin/dashboard/packages"
          className={`flex items-center gap-1 sidebar-link ${
            isActive("/admin/dashboard/packages") ? "active" : ""
          }`}
        >
          <Package className="h-5 w-5" />
          <span className="ml-3">Packages</span>
        </Link>
      </nav>

      <div className="p-4 mt-auto">
        <button
          onClick={() => setIsOpen(true)}
          className="w-full py-3 px-4 border border-white text-white rounded-md hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
        >
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>

      {/* logout modal  */}
      <div>
        {isOpen && (
          <LogoutModal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            onConfirm={handLogout}
          />
        )}
      </div>
    </div>
  );
}
