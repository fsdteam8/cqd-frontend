

import type { ReactNode } from "react"
import { Sidebar } from "./sidebar"
import { Header } from "./header"

export function DashboardLayout({
  children,
  title,
}: {
  children: ReactNode
  title: string
}) {

  return (
    <div className="flex max-h-screen overflow-hidden bg-white">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title={title} />
        <main className="flex-1 overflow-auto p-[30px]">
          <div className="max-w-[1600px] mx-auto">{children}</div>
        </main>
      </div>
    </div>
  )
}
