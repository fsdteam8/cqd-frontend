"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, MapPin } from "lucide-react"

export default function ClientInfoPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    // Load existing form data if available
    const savedData = localStorage.getItem("formData")
    if (savedData) {
      const parsed = JSON.parse(savedData)
      setFormData({
        name: parsed.name || "",
        email: parsed.email || "",
        phone: parsed.phone || "",
      })
    }
  }, [])

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required"
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

      router.push("/form/location")
    }
  }

  const handleBack = () => {
    router.push("/")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  return (
    <div className="min-h-screen  py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Image src="/images/logo.png" alt="CQD Logo" width={120} height={60} className="h-12 w-auto mx-auto mb-8" />

          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              <div className="flex flex-col  items-center">
                <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <span className="ml-2 text-sm font-medium text-gray-500">Client Info</span>
              </div>

              <div className="w-[200px] h-1 bg-gray-300"></div>

              <div className="flex flex-col  items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gray-500" />
                </div>
                <span className="ml-2 text-sm font-medium text-gray-500">Location</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <Card className="bg-white shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Required Information</h2>

            <div className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-base font-medium text-gray-700">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className={`mt-2 ${errors.name ? "border-red-500" : ""}`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email" className="text-base font-medium text-gray-700">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`mt-2 ${errors.email ? "border-red-500" : ""}`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="phone" className="text-base font-medium text-gray-700">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className={`mt-2 ${errors.phone ? "border-red-500" : ""}`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
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
