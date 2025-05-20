import type React from "react"
import type { Metadata } from "next"
import { AuthProvider } from "@/contexts/auth-context"
import './globals.css'

export const metadata: Metadata = {
  title: "CQD Admin Dashboard",
  description: "Admin dashboard for CQD",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
       <AuthProvider>{children}</AuthProvider>
    </main>
  )
}
