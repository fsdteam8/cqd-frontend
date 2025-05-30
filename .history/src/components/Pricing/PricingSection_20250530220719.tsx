"use client";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";

const bronzeFeatures = [
  "One-off deep clean",
  "Cleaning all products and equipment",
  "Ensure efficient cleaning",
  "Professional and uniform teams",
  "Cover teams",
  "Daily & weekly cleaning solutions",
  "No contract and a fixed monthly subscription",
];

const silverFeatures = [
  "One-off deep clean",
  "Cleaning all products and equipment",
  "Ensure efficient cleaning",
  "Professional and uniform teams",
  "Cover teams",
  "Daily & weekly cleaning solutions",
  "No contract and a fixed monthly subscription",
  "*Machine hard floor cleaning*",
];

const goldFeatures = [
  "One-off deep clean",
  "Cleaning all products and equipment",
  "Ensure efficient cleaning",
  "Professional and uniform teams",
  "Cover teams",
  "Daily & weekly cleaning solutions",
  "No contract and a fixed monthly subscription",
  "*Machine hard floor cleaning*",
  "Toilet rolls and hand wash supply fulfilment",
];

export default function PricingSection() {
  const router = useRouter();

  const { data, isLoading } = useQuery({
    queryKey: ["bronze"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/packageinfo/bronze`,
        {
          method: "GET",
        }
      );

      if (!res.ok) throw new Error("Failed to fetch Bronze package info");
      return res.json();
    },
  });

  const { data: silver, isLoading: silverIsLoading } = useQuery({
    queryKey: ["silver"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/packageinfo/silver`,
        {
          method: "GET",
        }
      );

      if (!res.ok) throw new Error("Failed to fetch Bronze package info");
      return res.json();
    },
  });

  const { data: gold, isLoading: goldIsLoading } = useQuery({
    queryKey: ["gold"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/packageinfo/gold`,
        {
          method: "GET",
          // headers: {
          //   "Content-Type": "application/json",
          //   Authorization: token ? `Bearer ${token}` : "",
          // },
        }
      );

      if (!res.ok) throw new Error("Failed to fetch Bronze package info");
      return res.json();
    },
  });

  const handleSelectPlan = (planId: string) => {
    localStorage.setItem("selectedPlan", planId);
    router.push("/form/client-info");
  };

  return (
    <div id="pricing" className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4">
            Subscription Plan
          </h1>
          <p className="text-lg text-gray-600">
            Choose the Package that Fits Your Needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
          {/* Bronze Card */}
          {isLoading ? (
            <Card className="rounded-none rounded-tr-3xl rounded-bl-3xl">
              <CardHeader className="text-center pb-4">
                <Skeleton className="h-6 w-3/4 mx-auto mb-2" />
                <Skeleton className="h-10 w-1/2 mx-auto mb-2" />
                <Skeleton className="h-4 w-2/3 mx-auto" />
              </CardHeader>
              <CardContent className="space-y-3">
                <Skeleton className="h-12 w-full rounded-md" />
                <div className="space-y-2 pt-4">
                  {[...Array(7)].map((_, i) => (
                    <Skeleton key={i} className="h-4 w-full" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="relative rounded-none rounded-tr-3xl rounded-bl-3xl bg-[#d99058d0]  border-gray-200 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-left pb-4">
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {data?.data.title}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl md:text-5xl font-bold text-gray-900">
                    £ {data?.data.price}
                  </span>
                  <span className="text-sm ml-2 text-gray-500">(EX VAT)</span>
                </div>
                <p className="text-sm mt-2 text-gray-600">
                  Minimum {data?.data?.no_of_client} Clients (Cost Per Client
                  £550.00)
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  onClick={() => handleSelectPlan("bronze")}
                  variant="outline"
                  className="w-full py-5 text-xl border-[#0F2A5C] text-[#0F2A5C] border-2 hover:bg-gray-50"
                >
                  Continue
                </Button>
                <div className="space-y-3 pt-4">
                  {bronzeFeatures.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="rounded-full p-1 mt-0.5 bg-[#E8EDFB]">
                        <Check className="h-3 w-3 text-[#0F2A5C]" />
                      </div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Silver Card */}
          {silverIsLoading ? (
            <Card className="rounded-none rounded-tr-3xl rounded-bl-3xl">
              <CardHeader className="text-left pb-4">
                <Skeleton className="h-6 w-3/4 mx-auto mb-2" />
                <Skeleton className="h-10 w-1/2 mx-auto mb-2" />
                <Skeleton className="h-4 w-2/3 mx-auto" />
              </CardHeader>
              <CardContent className="space-y-3">
                <Skeleton className="h-12 w-full rounded-md" />
                <div className="space-y-2 pt-4">
                  {[...Array(7)].map((_, i) => (
                    <Skeleton key={i} className="h-4 w-full" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="relative rounded-none rounded-tr-3xl rounded-bl-3xl bg-[#D8D8D8] text-black border-blue-900 transform lg:scale-110  transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-left pb-4">
                <CardTitle className="text-xl font-semibold text-black">
                  {silver?.data?.title}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl md:text-5xl font-bold text-black">
                    £ {silver?.data?.price}
                  </span>
                  <span className="text-sm ml-2 !text-blaclk">(EX VAT)</span>
                </div>
                <p className="text-sm mt-2 !text-black">
                  Minimum {silver?.data?.no_of_client} Clients (Cost Per Client
                  £533.33)
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  onClick={() => handleSelectPlan("silver")}
                  variant="secondary"
                  className="w-full py-5 text-xl bg-[#02B71F] text-white hover:bg-[#26a13a]"
                >
                  Continue
                </Button>
                <div className="space-y-3 pt-4">
                  {silverFeatures.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="rounded-full p-1 mt-0.5 bg-black">
                        <Check className="h-3 w-3 text-black" />
                      </div>
                      <span className="text-sm text-black">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
          {/* Gold Card */}
          {goldIsLoading ? (
            <Card className="rounded-none rounded-tr-3xl rounded-bl-3xl">
              <CardHeader className="text-left pb-4">
                <Skeleton className="h-6 w-3/4 mx-auto mb-2" />
                <Skeleton className="h-10 w-1/2 mx-auto mb-2" />
                <Skeleton className="h-4 w-2/3 mx-auto" />
              </CardHeader>
              <CardContent className="space-y-3">
                <Skeleton className="h-12 w-full rounded-md" />
                <div className="space-y-2 pt-4">
                  {[...Array(7)].map((_, i) => (
                    <Skeleton key={i} className="h-4 w-full" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="relative rounded-none rounded-tr-3xl rounded-bl-3xl bg-white border-gray-200 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-left pb-4">
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {gold?.data?.title}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl md:text-5xl font-bold text-gray-900">
                    £{gold?.data?.price}
                  </span>
                  <span className="text-sm ml-2 text-gray-500">(EX VAT)</span>
                </div>
                <p className="text-sm mt-2 text-gray-600">
                  Minimum {gold?.data?.no_of_client} Clients (Cost Per Client
                  £525.00)
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  onClick={() => handleSelectPlan("gold")}
                  variant="outline"
                  className="w-full py-5 text-xl border-[#0F2A5C] text-[#0F2A5C] border-2 hover:bg-gray-50"
                >
                  Continue
                </Button>
                <div className="space-y-3 pt-4">
                  {goldFeatures.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="rounded-full p-1 mt-0.5 bg-[#E8EDFB]">
                        <Check className="h-3 w-3 text-[#0F2A5C]" />
                      </div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
