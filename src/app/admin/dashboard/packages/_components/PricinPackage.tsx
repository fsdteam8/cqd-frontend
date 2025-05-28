"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2 } from "lucide-react"

// Types
interface PackageData {
  title: string
  price: string
  numberOfClients: string
  vatType: string
}

// API Functions
const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL

const getPackageData = async (packageType: string): Promise<PackageData> => {
  const response = await fetch(`${API_BASE_URL}/api/packageinfo/${packageType}`)

  if (!response.ok) {
    throw new Error(`Failed to fetch ${packageType} package data`)
  }

  return response.json()
}

const updatePackageData = async (packageType: string, data: PackageData): Promise<void> => {
  const accessToken = localStorage.getItem("accessToken")

  if (!accessToken) {
    throw new Error("Access token not found")
  }

  const response = await fetch(`${API_BASE_URL}/api/packageinfo/${packageType}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error(`Failed to update ${packageType} package`)
  }
}

// Custom Hooks
const usePackageData = (packageType: string) => {
  return useQuery({
    queryKey: ["package", packageType],
    queryFn: () => getPackageData(packageType),
    enabled: !!packageType,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

const useUpdatePackage = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ packageType, data }: { packageType: string; data: PackageData }) =>
      updatePackageData(packageType, data),
    onSuccess: (_, { packageType }) => {
      // Invalidate and refetch package data
      queryClient.invalidateQueries({ queryKey: ["package", packageType] })
      toast.success(`${packageType.charAt(0).toUpperCase() + packageType.slice(1)} package updated successfully!`)
    },
    onError: (error: Error) => {
      toast.error(`Failed to update package: ${error.message}`)
    },
  })
}

// Main Component
export default function PricinPackage() {
  const [selectedPackage, setSelectedPackage] = useState("gold")
  const [formData, setFormData] = useState<PackageData>({
    title: "",
    price: "",
    numberOfClients: "",
    vatType: "",
  })

  // Fetch package data when package selection changes
  const { data: packageData, isLoading, error } = usePackageData(selectedPackage)

  // Update package mutation
  const updatePackageMutation = useUpdatePackage()

  // Update form data when API data is fetched
  useEffect(() => {
    if (packageData) {
      setFormData(packageData)
    }
  }, [packageData])

  const handlePackageChange = (value: string) => {
    setSelectedPackage(value)
  }

  const handleInputChange = (field: keyof PackageData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    updatePackageMutation.mutate({
      packageType: selectedPackage,
      data: formData,
    })
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white">
        <div className="text-red-600 text-center">Error loading package data: {error.message}</div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Packages</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="package-select" className="text-sm font-medium text-gray-700 mb-2 block">
            Select Packages
          </Label>
          <Select value={selectedPackage} onValueChange={handlePackageChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a package" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bronze">Bronze</SelectItem>
              <SelectItem value="silver">Silver</SelectItem>
              <SelectItem value="gold">Gold</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="h-6 w-6 animate-spin" />
            <span className="ml-2">Loading package data...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="title" className="text-sm font-medium text-gray-700 mb-2 block">
                Title
              </Label>
              <Input
                id="title"
                type="text"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                className="w-full"
                disabled={isLoading}
              />
            </div>

            <div>
              <Label htmlFor="price" className="text-sm font-medium text-gray-700 mb-2 block">
                Price
              </Label>
              <Input
                id="price"
                type="text"
                value={formData.price}
                onChange={(e) => handleInputChange("price", e.target.value)}
                className="w-full"
                disabled={isLoading}
              />
            </div>

            <div>
              <Label htmlFor="numberOfClients" className="text-sm font-medium text-gray-700 mb-2 block">
                Number Of Clients
              </Label>
              <Input
                id="numberOfClients"
                type="text"
                value={formData.numberOfClients}
                onChange={(e) => handleInputChange("numberOfClients", e.target.value)}
                className="w-full"
                disabled={isLoading}
              />
            </div>

            <div>
              <Label htmlFor="vatType" className="text-sm font-medium text-gray-700 mb-2 block">
                Vat Type
              </Label>
              <Input
                id="vatType"
                type="text"
                value={formData.vatType}
                onChange={(e) => handleInputChange("vatType", e.target.value)}
                className="w-full"
                disabled={isLoading}
              />
            </div>
          </div>
        )}

        <Button
          type="submit"
          className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-2 rounded-md font-medium"
          disabled={isLoading || updatePackageMutation.isPending}
        >
          {updatePackageMutation.isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Updating...
            </>
          ) : (
            "Update Package"
          )}
        </Button>
      </form>
    </div>
  )
}
