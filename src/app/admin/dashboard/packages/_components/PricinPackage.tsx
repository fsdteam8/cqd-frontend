"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Loader2 } from "lucide-react"
import { useSession } from "next-auth/react"

// Types
interface PackageData {
  title: string
  price: string
  no_of_client: string
  vat_type: string
}

interface APIResponse {
  data: PackageData
}

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL

// API Functions
const getPackageData = async (packageType: string): Promise<APIResponse> => {
  const response = await fetch(`${API_BASE_URL}/api/packageinfo/${packageType}`)
  if (!response.ok) {
    throw new Error(`Failed to fetch ${packageType} package data`)
  }
  return response.json()
}

const updatePackageData = async (
  packageType: string,
  data: PackageData,
  token: string
): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/api/packageinfo/${packageType}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error(`Failed to update ${packageType} package`)
  }
}

// Hooks
const usePackageData = (packageType: string) => {
  return useQuery({
    queryKey: ["package", packageType],
    queryFn: () => getPackageData(packageType),
    enabled: !!packageType,
    staleTime: 5 * 60 * 1000,
  })
}

const useUpdatePackage = (token: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ packageType, data }: { packageType: string; data: PackageData }) =>
      updatePackageData(packageType, data, token),
    onSuccess: (_, { packageType }) => {
      queryClient.invalidateQueries({ queryKey: ["package", packageType] })
      toast.success(
        `${packageType.charAt(0).toUpperCase() + packageType.slice(1)} package updated successfully!`
      )
    },
    onError: (error: Error) => {
      toast.error(`Failed to update package: ${error.message}`)
    },
  })
}

// Component
export default function PricingPackage() {
  const [selectedPackage, setSelectedPackage] = useState("gold")
  const { data: session } = useSession()
  const token = (session?.user as { token?: string })?.token || ""

  const { data: packageData, isLoading, error } = usePackageData(selectedPackage)
  const updatePackageMutation = useUpdatePackage(token)

  const [formData, setFormData] = useState<PackageData>({
    title: "",
    price: "",
    no_of_client: "",
    vat_type: "",
  })

  useEffect(() => {
    if (packageData?.data) {
      setFormData({
        title: packageData.data.title || "",
        price: packageData.data.price || "",
        no_of_client: packageData.data.no_of_client || "",
        vat_type: packageData.data.vat_type || "",
      })
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
    if (!token) {
      toast.error("User token not found. Please log in again.")
      return
    }

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
    <div className=" mx-auto p-6 bg-white shadow-[0_4px_10px_0_#0000001A] rounded-md border-[#E5E7EB] mt-10">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Packages</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="package-select" className="text-sm font-medium text-gray-700 mb-2 block">
            Select Package
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
            {["title", "price", "no_of_client", "vat_type"].map((field) => (
              <div key={field}>
                <Label htmlFor={field} className="text-sm font-medium text-gray-700 mb-2 block">
                  {field.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                </Label>
                <Input
                  id={field}
                  type="text"
                  value={formData[field as keyof PackageData]}
                  onChange={(e) => handleInputChange(field as keyof PackageData, e.target.value)}
                  className="w-full"
                />
              </div>
            ))}
          </div>
        )}

        <Button
          type="submit"
          className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-2 rounded-md font-medium"
          disabled={updatePackageMutation.isPending}
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
