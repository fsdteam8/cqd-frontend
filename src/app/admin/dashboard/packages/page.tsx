"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Package2, Save, Plus, Trash, AlertTriangle, CheckCircle, X, Loader2 } from "lucide-react"

// Mock data
const packagesData = [
  {
    id: "gold",
    name: "Gold",
    title: "Gold Package",
    price: "123",
    numberOfClients: "5",
    vatType: "EX VAT",
    description: "Premium cleaning service with additional benefits",
    features: ["Deep cleaning", "Window cleaning", "Carpet cleaning", "Priority support"],
  },
  {
    id: "silver",
    name: "Silver",
    title: "Silver Package",
    price: "99",
    numberOfClients: "3",
    vatType: "EX VAT",
    description: "Standard cleaning service for regular maintenance",
    features: ["Regular cleaning", "Bathroom cleaning", "Kitchen cleaning"],
  },
  {
    id: "bronze",
    name: "Bronze",
    title: "Bronze Package",
    price: "79",
    numberOfClients: "2",
    vatType: "EX VAT",
    description: "Basic cleaning service for essential needs",
    features: ["Basic cleaning", "Dusting", "Vacuuming"],
  },
]

export default function PackagesPage() {
  const [selectedPackage, setSelectedPackage] = useState("")
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [numberOfClients, setNumberOfClients] = useState("")
  const [vatType, setVatType] = useState("")
  const [description, setDescription] = useState("")
  const [features, setFeatures] = useState<string[]>([])
  const [featureInput, setFeatureInput] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [isCreating, setIsCreating] = useState(false)
  const [notification, setNotification] = useState<{ type: "success" | "error"; message: string } | null>(null)

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 200)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (selectedPackage) {
      const packageData = packagesData.find((p) => p.id === selectedPackage)
      if (packageData) {
        setTitle(packageData.title)
        setPrice(packageData.price)
        setNumberOfClients(packageData.numberOfClients)
        setVatType(packageData.vatType)
        setDescription(packageData.description || "")
        setFeatures(packageData.features || [])
      }
    } else {
      setTitle("")
      setPrice("")
      setNumberOfClients("")
      setVatType("")
      setDescription("")
      setFeatures([])
    }
  }, [selectedPackage])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log({
        id: selectedPackage,
        title,
        price,
        numberOfClients,
        vatType,
        description,
        features,
      })

      setNotification({
        type: "success",
        message: "Package updated successfully",
      })

      // Auto-dismiss notification
      setTimeout(() => setNotification(null), 3000)
    } catch  {
      setNotification({
        type: "error",
        message: "Failed to update package",
      })
    } finally {
      setIsSaving(false)
    }
  }

  const handleCreatePackage = async () => {
    setIsCreating(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Reset form for new package
      setSelectedPackage("")
      setTitle("New Package")
      setPrice("99")
      setNumberOfClients("3")
      setVatType("EX VAT")
      setDescription("Description of the new package")
      setFeatures(["Feature 1", "Feature 2", "Feature 3"])

      setNotification({
        type: "success",
        message: "New package created",
      })

      // Auto-dismiss notification
      setTimeout(() => setNotification(null), 3000)
    } catch {
      setNotification({
        type: "error",
        message: "Failed to create new package",
      })
    } finally {
      setIsCreating(false)
    }
  }

  const handleAddFeature = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && featureInput.trim()) {
      e.preventDefault()
      if (!features.includes(featureInput.trim())) {
        setFeatures([...features, featureInput.trim()])
      }
      setFeatureInput("")
    }
  }

  const handleRemoveFeature = (featureToRemove: string) => {
    setFeatures(features.filter((feature) => feature !== featureToRemove))
  }

  if (isLoading) {
    return (
      <DashboardLayout title="Packages">
        <div className="h-full flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-3 text-gray-500">Loading packages...</p>
          </div>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout title="Packages">
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

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-medium flex items-center gap-2">
            <Package2 className="h-6 w-6 text-primary" />
            Manage Packages
          </h2>
          <button
            onClick={handleCreatePackage}
            disabled={isCreating}
            className="btn btn-primary flex items-center gap-2"
          >
            {isCreating ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Creating...
              </>
            ) : (
              <>
                <Plus className="h-4 w-4" />
                New Package
              </>
            )}
          </button>
        </div>

        <div className="dashboard-card p-6 animate-fade-in">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div className="form-group">
                <label className="form-label">Select Package</label>
                <select
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                  className="form-select"
                >
                  <option value="">Select a package</option>
                  {packagesData.map((pkg) => (
                    <option key={pkg.id} value={pkg.id}>
                      {pkg.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="form-group">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="form-input"
                    placeholder="Package title"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Price</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="text"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="form-input pl-12"
                      placeholder="99.99"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="form-label">Number Of Clients</label>
                  <input
                    type="number"
                    value={numberOfClients}
                    onChange={(e) => setNumberOfClients(e.target.value)}
                    className="form-input"
                    placeholder="Maximum number of clients"
                    min="1"
                  />
                </div>

                <div>
                  <label className="form-label">VAT Type</label>
                  <select value={vatType} onChange={(e) => setVatType(e.target.value)} className="form-select">
                    <option value="EX VAT">EX VAT</option>
                    <option value="INC VAT">INC VAT</option>
                    <option value="NO VAT">NO VAT</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="form-label">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="form-input min-h-[100px]"
                  placeholder="Describe the package..."
                ></textarea>
              </div>

              <div>
                <label className="form-label">Features</label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {features.map((feature) => (
                    <div
                      key={feature}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm flex items-center"
                    >
                      {feature}
                      <button
                        type="button"
                        onClick={() => handleRemoveFeature(feature)}
                        className="ml-2 text-gray-500 hover:text-gray-700"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Add a feature and press Enter"
                    value={featureInput}
                    onChange={(e) => setFeatureInput(e.target.value)}
                    onKeyDown={handleAddFeature}
                    className="form-input pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (featureInput.trim()) {
                        if (!features.includes(featureInput.trim())) {
                          setFeatures([...features, featureInput.trim()])
                        }
                        setFeatureInput("")
                      }
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">Press Enter to add a feature</p>
              </div>

              <div className="flex justify-end gap-3">
                {selectedPackage && (
                  <button type="button" className="btn btn-danger flex items-center gap-2">
                    <Trash className="h-4 w-4" />
                    Delete Package
                  </button>
                )}
                <button
                  type="submit"
                  disabled={isSaving || (!selectedPackage && !title)}
                  className="btn btn-primary flex items-center gap-2"
                >
                  {isSaving ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4" />
                      {selectedPackage ? "Update Package" : "Save New Package"}
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  )
}
