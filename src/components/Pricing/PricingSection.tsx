"use client"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const pricingPlans = [
  {
    id: "bronze",
    name: "Bronze Packages",
    price: "£1100.00",
    subtitle: "Minimum 2 Clients (Cost Per Client £550.00)",
    features: [
      "One-off deep clean",
      "Cleaning all products and equipment",
      "Ensure efficient cleaning",
      "Professional and uniform teams",
      "Cover teams",
      "Daily & weekly cleaning solutions",
      "No contract and a fixed monthly subscription",
    ],
    highlighted: false,
  },
  {
    id: "silver",
    name: "Silver Packages",
    price: "£1600.00",
    subtitle: "Minimum 3 Clients (Cost Per Client £533.33)",
    features: [
      "One-off deep clean",
      "Cleaning all products and equipment",
      "Ensure efficient cleaning",
      "Professional and uniform teams",
      "Cover teams",
      "Daily & weekly cleaning solutions",
      "No contract and a fixed monthly subscription",
      "*Machine hard floor cleaning*",
    ],
    highlighted: true,
  },
  {
    id: "gold",
    name: "Gold Package",
    price: "£2100.00",
    subtitle: "Minimum 4 Clients (Cost Per Client £525.00)",
    features: [
      "One-off deep clean",
      "Cleaning all products and equipment",
      "Ensure efficient cleaning",
      "Professional and uniform teams",
      "Cover teams",
      "Daily & weekly cleaning solutions",
      "No contract and a fixed monthly subscription",
      "*Machine hard floor cleaning*",
      "Toilet rolls and hand wash supply fulfilment",
    ],
    highlighted: false,
  },
]

export default function PricingSection() {
  const router = useRouter()

  const handleSelectPlan = (planId: string) => {
    // Store selected plan in localStorage for the form
    localStorage.setItem("selectedPlan", planId)
    router.push("/form/client-info")
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-8">
            <Image src="/logo.png" alt="CQD Logo" width={120} height={60} className="h-12 w-auto" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Subscription Plan</h1>
          <p className="text-lg text-gray-600">Choose the Package that Fits Your Needs</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative ${
                plan.highlighted
                  ? "bg-blue-900 text-white border-blue-900 transform scale-105"
                  : "bg-white border-gray-200"
              } transition-all duration-300 hover:shadow-lg`}
            >
              <CardHeader className="text-center pb-4">
                <CardTitle className={`text-xl font-semibold ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <span
                    className={`text-4xl md:text-5xl font-bold ${plan.highlighted ? "text-white" : "text-gray-900"}`}
                  >
                    {plan.price}
                  </span>
                  <span className={`text-sm ml-2 ${plan.highlighted ? "text-blue-200" : "text-gray-500"}`}>
                    (EX VAT)
                  </span>
                </div>
                <p className={`text-sm mt-2 ${plan.highlighted ? "text-blue-200" : "text-gray-600"}`}>
                  {plan.subtitle}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                <Button
                  onClick={() => handleSelectPlan(plan.id)}
                  variant={plan.highlighted ? "secondary" : "outline"}
                  className={`w-full py-3 ${
                    plan.highlighted ? "bg-white text-blue-900 hover:bg-gray-100" : "border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  Continue
                </Button>

                <div className="space-y-3 pt-4">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className={`rounded-full p-1 mt-0.5 ${plan.highlighted ? "bg-white" : "bg-green-100"}`}>
                        <Check className={`h-3 w-3 ${plan.highlighted ? "text-blue-900" : "text-green-600"}`} />
                      </div>
                      <span className={`text-sm ${plan.highlighted ? "text-white" : "text-gray-700"}`}>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
