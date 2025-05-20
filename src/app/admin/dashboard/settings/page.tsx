"use client"

import { useState, useEffect } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Save, Mail, Lock, AlertTriangle, CheckCircle, X } from "lucide-react"

export default function SettingsPage() {
  const [supportEmail, setSupportEmail] = useState("support@gmail.com")
  const [adminPassword, setAdminPassword] = useState("123456789")
  // const [maintenanceMode, setMaintenanceMode] = useState(false)

  const [originalSupportEmail, setOriginalSupportEmail] = useState("support@gmail.com")
  const [originalAdminPassword, setOriginalAdminPassword] = useState("123456789")
  // const [originalMaintenanceMode, setOriginalMaintenanceMode] = useState(false)

  const [showGeneralSaveButton, setShowGeneralSaveButton] = useState(false)
  const [showSecuritySaveButton, setShowSecuritySaveButton] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [notification, setNotification] = useState<{ type: "success" | "error"; message: string } | null>(null)


  // console.log(originalMaintenanceMode);

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
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 800))
      setOriginalSupportEmail(supportEmail)
      setShowGeneralSaveButton(false)
      setNotification({
        type: "success",
        message: "General settings updated successfully",
      })

      // Auto-dismiss notification
      setTimeout(() => setNotification(null), 3000)
    } catch {
      setNotification({
        type: "error",
        message: "Failed to update general settings",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSaveSecurity = async () => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 800))
      setOriginalAdminPassword(adminPassword)
      setShowSecuritySaveButton(false)
      setNotification({
        type: "success",
        message: "Security settings updated successfully",
      })

      // Auto-dismiss notification
      setTimeout(() => setNotification(null), 3000)
    } catch  {
      setNotification({
        type: "error",
        message: "Failed to update security settings",
      })
    } finally {
      setIsLoading(false)
    }
  }

  // const handleToggleMaintenance = async () => {
  //   setIsLoading(true)
  //   try {
  //     // Simulate API call
  //     await new Promise((resolve) => setTimeout(resolve, 800))
  //     setMaintenanceMode(!maintenanceMode)
  //     setOriginalMaintenanceMode(!maintenanceMode)
  //     setNotification({
  //       type: "success",
  //       message: `Maintenance mode ${!maintenanceMode ? "enabled" : "disabled"} successfully`,
  //     })

  //     // Auto-dismiss notification
  //     setTimeout(() => setNotification(null), 3000)
  //   } catch {
  //     setNotification({
  //       type: "error",
  //       message: "Failed to toggle maintenance mode",
  //     })
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }

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
      <div className="p-6 max-w-4xl mx-auto">
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

        <div className="space-y-6 animate-fade-in">
          <div className="dashboard-card overflow-hidden">
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
                    disabled={isLoading}
                    className="btn btn-primary flex items-center gap-2"
                  >
                    {isLoading ? (
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
                  <input
                    type="password"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    className="form-input"
                  />
                  <p className="text-xs text-gray-500 mt-1">Use a strong password with at least 8 characters</p>
                </div>
              </div>

              {showSecuritySaveButton && (
                <div className="flex justify-end mt-6">
                  <button
                    onClick={handleSaveSecurity}
                    disabled={isLoading}
                    className="btn btn-primary flex items-center gap-2"
                  >
                    {isLoading ? (
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
{/* 
          <div className="dashboard-card overflow-hidden">
            <div className="flex items-center p-6 border-b bg-gray-50">
              <Tool className="h-5 w-5 mr-2 text-primary" />
              <h2 className="text-xl font-medium">Maintenance</h2>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-700">Maintenance Mode</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    When enabled, the site will display a maintenance page to visitors
                  </p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={handleToggleMaintenance}
                    disabled={isLoading}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                      maintenanceMode ? "bg-primary" : "bg-gray-200"
                    }`}
                  >
                    <span
                      className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                        maintenanceMode ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </DashboardLayout>
  )
}
