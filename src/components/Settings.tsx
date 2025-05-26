"use client"

import { useState, useEffect } from "react"
import { useMutation } from "@tanstack/react-query"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Save, Mail, Lock, AlertTriangle, CheckCircle, X, Eye, EyeOff } from "lucide-react"

interface UpdateEmailRequest {
  email: string
}

interface UpdatePasswordRequest {
  password: string
}

interface ApiResponse {
  success: boolean
  message: string
}

export default function Settings() {
  const [supportEmail, setSupportEmail] = useState("support@gmail.com")
  const [adminPassword, setAdminPassword] = useState("123456789")
  const [showPassword, setShowPassword] = useState(false)

  const [originalSupportEmail, setOriginalSupportEmail] = useState("support@gmail.com")
  const [originalAdminPassword, setOriginalAdminPassword] = useState("123456789")

  const [showGeneralSaveButton, setShowGeneralSaveButton] = useState(false)
  const [showSecuritySaveButton, setShowSecuritySaveButton] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [notification, setNotification] = useState<{ type: "success" | "error"; message: string } | null>(null)

  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2NvcS5zY2FsZXVwZGV2YWdlbmN5LmNvbS9hcGkvbG9naW4iLCJpYXQiOjE3NDgyNTQ0NDgsImV4cCI6MTc0ODI1ODA0OCwibmJmIjoxNzQ4MjU0NDQ4LCJqdGkiOiJGRUlIWHV5M3lwM1JtdTdtIiwic3ViIjoiMTYiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.cwgnh3pk4B0ip7i0HQ7FoKDrtkSkvA5QTylrEMutY4A"

//   const queryClient = useQueryClient()

  // Email update mutation
  const updateEmailMutation = useMutation({
    mutationFn: async (data: UpdateEmailRequest): Promise<ApiResponse> => {
      const response = await fetch("https://coq.scaleupdevagency.com/api/newSettings/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return response.json()
    },
    onSuccess: (data) => {
      setOriginalSupportEmail(supportEmail)
      setShowGeneralSaveButton(false)
      setNotification({
        type: "success",
        message: data.message || "Email updated successfully",
      })
      setTimeout(() => setNotification(null), 3000)
    },
    onError: (error) => {
      setNotification({
        type: "error",
        message: error instanceof Error ? error.message : "Failed to update email",
      })
      setTimeout(() => setNotification(null), 3000)
    },
  })

  // Password update mutation
  const updatePasswordMutation = useMutation({
    mutationFn: async (data: UpdatePasswordRequest): Promise<ApiResponse> => {
      const response = await fetch("https://coq.scaleupdevagency.com/api/newSettings/password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return response.json()
    },
    onSuccess: (data) => {
      setOriginalAdminPassword(adminPassword)
      setShowSecuritySaveButton(false)
      setNotification({
        type: "success",
        message: data.message || "Password updated successfully",
      })
      setTimeout(() => setNotification(null), 3000)
    },
    onError: (error) => {
      setNotification({
        type: "error",
        message: error instanceof Error ? error.message : "Failed to update password",
      })
      setTimeout(() => setNotification(null), 3000)
    },
  })

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 200)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    setShowGeneralSaveButton(supportEmail !== originalSupportEmail)
  }, [supportEmail, originalSupportEmail])

  useEffect(() => {
    setShowSecuritySaveButton(adminPassword !== originalAdminPassword)
  }, [adminPassword, originalAdminPassword])

  const handleSaveGeneral = async () => {
    updateEmailMutation.mutate({ email: supportEmail })
  }

  const handleSaveSecurity = async () => {
    updatePasswordMutation.mutate({ password: adminPassword })
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  if (isLoading && !notification) {
    return (
      <DashboardLayout title="Settings">
        <div className="h-full flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-3 text-gray-500">Loading settings...</p>
          </div>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout title="Settings">
      <div className="py-6 container mx-auto">
        {notification && (
          <div
            className={`mb-6 p-4 rounded-md flex items-center justify-between ${
              notification.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
            }`}
          >
            <div className="flex items-center gap-2">
              {notification.type === "success" ? (
                <CheckCircle className="h-5 w-5" />
              ) : (
                <AlertTriangle className="h-5 w-5" />
              )}
              <span>{notification.message}</span>
            </div>
            <button onClick={() => setNotification(null)} className="text-gray-500 hover:text-gray-700">
              <X className="h-5 w-5" />
            </button>
          </div>
        )}

        <div className="space-y-10 animate-fade-in">
            <h1 className="text-2xl font-semibold text-[#0E2A5C]">Setting</h1>
          <div className="dashboard-card overflow-hidden ">
            <div className="flex items-center p-4 md:p-6 border-b bg-gray-50">
              <Mail className="h-5 w-5 mr-2 text-primary" />
              <h2 className="text-xl font-medium">General</h2>
            </div>

            <div className="p-4 md:p-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <label className="w-full md:w-48 text-gray-700 font-medium">Support Email:</label>
                <div className="flex-1 min-w-0">
                  <input
                    type="email"
                    value={supportEmail}
                    onChange={(e) => setSupportEmail(e.target.value)}
                    className="form-input"
                    placeholder="Enter support email address"
                  />
                  <p className="text-xs text-gray-500 mt-1">This email will be used for customer support inquiries</p>
                </div>
              </div>

              {showGeneralSaveButton && (
                <div className="flex justify-end mt-6">
                  <button
                    onClick={handleSaveGeneral}
                    disabled={updateEmailMutation.isPending}
                    className="btn btn-primary flex items-center gap-2"
                  >
                    {updateEmailMutation.isPending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="h-4 w-4" />
                        Save Changes
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="dashboard-card overflow-hidden">
            <div className="flex items-center p-6 border-b bg-gray-50">
              <Lock className="h-5 w-5 mr-2 text-primary" />
              <h2 className="text-xl font-medium">Security</h2>
            </div>

            <div className="p-6">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <label className="w-48 text-gray-700 font-medium">Admin Password:</label>
                <div className="flex-1 min-w-[300px]">
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={adminPassword}
                      onChange={(e) => setAdminPassword(e.target.value)}
                      className="form-input pr-10"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Use a strong password with at least 8 characters</p>
                </div>
              </div>

              {showSecuritySaveButton && (
                <div className="flex justify-end mt-6">
                  <button
                    onClick={handleSaveSecurity}
                    disabled={updatePasswordMutation.isPending}
                    className="btn btn-primary flex items-center gap-2"
                  >
                    {updatePasswordMutation.isPending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="h-4 w-4" />
                        Save Changes
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

