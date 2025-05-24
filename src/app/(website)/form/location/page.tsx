"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, MapPin, Navigation } from "lucide-react"

export default function LocationPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    postCode: "",
    address: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    // Load existing form data if available
    const savedData = localStorage.getItem("formData")
    if (savedData) {
      const parsed = JSON.parse(savedData)
      setFormData({
        postCode: parsed.postCode || "",
        address: parsed.address || "",
      })
    }
  }, [])

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.postCode.trim()) {
      newErrors.postCode = "Post Code is required"
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateForm()) {
      // Save form data to localStorage
      const existingData = localStorage.getItem("formData")
      const allData = existingData ? JSON.parse(existingData) : {}

      localStorage.setItem(
        "formData",
        JSON.stringify({
          ...allData,
          ...formData,
        }),
      )

      router.push("/form/review")
    }
  }

  const handleBack = () => {
    router.push("/form/client-info")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const handleFindLocation = () => {
    // Placeholder for location finding functionality
    alert("Find location functionality would be implemented here")
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Image src="/logo.png" alt="CQD Logo" width={120} height={60} className="h-12 w-auto mx-auto mb-8" />

          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <span className="ml-2 text-sm font-medium text-green-500">Client Info</span>
              </div>

              <div className="w-16 h-1 bg-blue-900"></div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <span className="ml-2 text-sm font-medium text-blue-900">Location</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <Card className="bg-white shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Required location</h2>

            <div className="space-y-6">
              <div>
                <Label htmlFor="postCode" className="text-base font-medium text-gray-700">
                  Post Code
                </Label>
                <Input
                  id="postCode"
                  type="text"
                  placeholder="Code"
                  value={formData.postCode}
                  onChange={(e) => handleInputChange("postCode", e.target.value)}
                  className={`mt-2 ${errors.postCode ? "border-red-500" : ""}`}
                />
                {errors.postCode && <p className="text-red-500 text-sm mt-1">{errors.postCode}</p>}
              </div>

              <div>
                <Label htmlFor="address" className="text-base font-medium text-gray-700">
                  Address
                </Label>
                <Input
                  id="address"
                  type="text"
                  placeholder="Address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  className={`mt-2 ${errors.address ? "border-red-500" : ""}`}
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
              </div>

              <Button variant="outline" onClick={handleFindLocation} className="w-full py-3 border-gray-300">
                <Navigation className="w-4 h-4 mr-2" />
                Find Your Location
              </Button>

              {/* Map Placeholder */}
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=256&width=400&query=map with location pins"
                  alt="Map"
                  width={400}
                  height={256}
                  className="rounded-lg opacity-75"
                />
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button variant="outline" onClick={handleBack} className="flex-1 py-3">
                ← Back
              </Button>
              <Button onClick={handleNext} className="flex-1 py-3 bg-blue-900 hover:bg-blue-800">
                Next →
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
