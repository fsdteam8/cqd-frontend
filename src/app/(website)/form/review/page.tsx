"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

interface FormData {
  company_name: string;
  email: string;
  phone: string;
  postal_code: string;
  address: string;
}

type PackageOrderPayload = FormData & {
  submittedAt: string;
};

export default function ReviewPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<string>("");

  const getPlanDisplayName = (planId: string) => {
    const planNames = {
      bronze: "Bronze Package",
      silver: "Silver Package",
      gold: "Gold Package",
    };
    return planNames[planId as keyof typeof planNames] || planId;
  };

  const sendOrderEmail = async (data: PackageOrderPayload) => {
    await emailjs.send(
      "service_no4rym1",
      "template_8vyoeh9",
      {
        first_name: data.company_name,
        last_name: getPlanDisplayName(selectedPlan),
        email: data.email,
        phone: data.phone,
        organization: "Package Order",
        city: data.postal_code,
        help: `Package: ${getPlanDisplayName(selectedPlan)}
Address: ${data.address}
Postal code: ${data.postal_code}
Submitted at: ${new Date(data.submittedAt).toLocaleString()}`,
      },
      {
        publicKey: "PpVXeg9o5K3anLxTb",
      },
    );
  };

  useEffect(() => {
    // Load form data and selected plan
    const savedData = localStorage.getItem("formData");
    const plan = localStorage.getItem("selectedPlan");

    if (savedData) {
      setFormData(JSON.parse(savedData));
    }

    if (plan) {
      setSelectedPlan(plan);
    }
  }, []);

  const mutation = useMutation({
    mutationFn: async (data: PackageOrderPayload) => {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/package-order/${selectedPlan}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        },
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData?.message || `HTTP error! status: ${response.status}`,
        );
      }

      const result = await response.json();

      try {
        await sendOrderEmail(data);
      } catch (error) {
        console.error("EmailJS error:", error);
      }

      return result;
    },
    onSuccess: (data) => {
      toast.success(data.message || "Package order updated successfully!");
      router.push("/form/success");
    },
    onError: (error: unknown) => {
      if (error instanceof Error) {
        toast.error(`Failed to update: ${error.message}`);
      } else {
        toast.error("Something went wrong");
      }
    },
  });

  const handleSubmit = () => {
    if (formData) {
      const finalData = {
        ...formData,
        submittedAt: new Date().toISOString(),
      };

      mutation.mutate(finalData);
    }
  };

  const handleBack = () => {
    router.push("/form/location");
  };

  if (!formData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen  py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Image
            src="/images/logo.png"
            alt="CQD Logo"
            width={120}
            height={60}
            className="h-12 w-auto mx-auto mb-8"
          />
        </div>

        {/* Review Content */}
        <Card className="bg-white shadow-lg">
          <CardContent className="p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Applied for CQD Cleaning Service
            </h1>

            <div className="space-y-6">
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
                <span className="text-gray-900">{formData.postal_code}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-medium text-gray-700">Name:</span>
                <span className="text-gray-900">{formData.company_name}</span>
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

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                variant="outline"
                onClick={handleBack}
                className="flex-1 py-3"
              >
                ← Back
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={mutation.isPending}
                className="flex-1 py-3 bg-blue-900 hover:bg-blue-800"
              >
                {mutation.isPending ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
