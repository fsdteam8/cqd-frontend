"use client"

import { ChevronRight } from "lucide-react"
import { usePathname } from "next/navigation"

export function Header({ title }: { title: string }) {
  const pathname = usePathname()

  const user = {
    name: "John Doe",
    role: "Admin",
  }

  // Generate breadcrumbs
  const generateBreadcrumbs = () => {
    const paths = pathname.split("/").filter(Boolean)

    return paths.map((path, index) => {
      const isLast = index === paths.length - 1
      const formattedPath = path.charAt(0).toUpperCase() + path.slice(1)

      return (
        <div key={path} className="flex items-center">
          {index > 0 && <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />}
          <span className={isLast ? "font-medium" : "text-gray-500"}>{formattedPath}</span>
        </div>
      )
    })
  }

  return (
    <header className="border-b bg-white sticky top-0 z-10">
      <div className="flex justify-between items-center p-4 md:p-6">
        <div>
          <h1 className="text-xl md:text-2xl font-medium text-primary mb-1">{title}</h1>
          <div className="flex items-center text-sm overflow-x-auto pb-1 max-w-full">{generateBreadcrumbs()}</div>
        </div>
        <div className="flex items-center gap-3 ml-4 flex-shrink-0">
          <div className="text-right mr-2 hidden sm:block">
            <div className="font-medium">{user?.name || "Name"}</div>
            <div className="text-sm text-gray-500">{user?.role || "Admin"}</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white text-lg font-medium flex-shrink-0">
            {user?.name?.charAt(0) || "U"}
          </div>
        </div>
      </div>
    </header>
  )
}
