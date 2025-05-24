"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

interface FormData {
  name: string
  email: string
  phone: string
  postCode: string
  address: string
}

export default function SuccessPage() {
  const router = useRouter()
  const [formData, setFormData] = useState<FormData | null>(null)
  const [selectedPlan, setSelectedPlan] = useState<string>("")

  useEffect(() => {
    // Load form data and selected plan
    const savedData = localStorage.getItem("formData")
    const plan = localStorage.getItem("selectedPlan")

    if (savedData) {
      setFormData(JSON.parse(savedData))
    }

    if (plan) {
      setSelectedPlan(plan)
    }
  }, [])

  const handleGoHome = () => {
    // Clear stored data
    localStorage.removeItem("formData")
    localStorage.removeItem("selectedPlan")
    router.push("/")
  }

  const getPlanDisplayName = (planId: string) => {
    const planNames = {
      bronze: "Bronze Package",
      silver: "Silver Package",
      gold: "Gold Package",
    }
    return planNames[planId as keyof typeof planNames] || planId
  }

  if (!formData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Image src="/logo.png" alt="CQD Logo" width={120} height={60} className="h-12 w-auto mx-auto mb-8" />
        </div>

        {/* Success Content */}
        <Card className="bg-white shadow-lg">
          <CardContent className="p-8 text-center">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
            </div>

            <h1 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h1>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Your subscription package has been Submitted successfully. You will be contacted as soon as we find a
              match for you. Thank you for choosing us!
            </p>

            <h2 className="text-xl font-bold text-gray-900 mb-6">Applied for CQD Cleaning Service</h2>

            <div className="space-y-4 text-left">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-medium text-gray-700">Package Name:</span>
                <Badge variant="secondary" className="bg-blue-900 text-white">
                  {getPlanDisplayName(selectedPlan)}
                </Badge>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-medium text-gray-700">Address:</span>
                <span className="text-gray-900">{formData.address}</span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-medium text-gray-700">Zip Code:</span>
                <span className="text-gray-900">{formData.postCode}</span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-medium text-gray-700">Name:</span>
                <span className="text-gray-900">{formData.name}</span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-medium text-gray-700">Email:</span>
                <span className="text-gray-900">{formData.email}</span>
              </div>

              <div className="flex justify-between items-center py-3">
                <span className="font-medium text-gray-700">Phone:</span>
                <span className="text-gray-900">{formData.phone}</span>
              </div>
            </div>

            {/* Go Home Button */}
            <Button onClick={handleGoHome} className="w-full mt-8 py-3 bg-blue-900 hover:bg-blue-800">
              ← Go to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
