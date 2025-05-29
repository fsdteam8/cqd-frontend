"use client";

import type React from "react";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";

export default function ContactSection() {
  const initialFormData = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    organization: "",
    city: "",
    help: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  const { mutate, isPending } = useMutation({
    mutationKey: ["contact-message"],
    mutationFn: (formData: typeof initialFormData) =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contactMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((res) => res.json()),

    onSuccess: (data) => {
      if (!data?.success) {
        toast.error(data?.message || "Something went wrong");
        return;
      }

      toast.success(data?.message || "Message sent successfully!");
    },

    onError: (error) => {
      toast.error("Something went wrong. Please try again.");
      console.error("Contact message error:", error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(formData);
  };

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
            Request A Call Back
          </h2>
          <p className="mt-2 text-xl text-muted-foreground">Contact</p>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row items-start justify-center">
          {/* Left side - Image */}
          <div className="relative hidden lg:block  mx-auto lg:mx-0 w-full max-w-[400px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[592px]">
            <Image
              src="/images/callimg.png"
              alt="Commercial Carpet Vacuuming Services"
              fill
              className="object-cover rounded-lg"
              style={{
                maxWidth: "400px",
                maxHeight: "592px",
              }}
              priority
            />
          </div>

          {/* Right side - Form */}
          <div className="max-w-4xl w-full">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-[30px] p-4"
            >
              <div className="space-y-2">
                <Label
                  className="text-base font-medium text-[#0F2A5C] leading-[120%] tracking-[0%]"
                  htmlFor="first_name"
                >
                  First Name
                </Label>
                <Input
                  required
                  id="first_name"
                  placeholder="First Name"
                  className="w-full h-[46px] rounded-tl-[15px] rounded-br-[15px] text-lg font-medium text-[#0F2A5C] placeholder:text-black/80 leading-[120%] tracking-[0%]"
                  value={formData.first_name}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label
                  className="text-base font-medium text-[#0F2A5C] leading-[120%] tracking-[0%]"
                  htmlFor="last_name"
                >
                  Last Name
                </Label>
                <Input
                  id="last_name"
                  placeholder="Last Name"
                  className="w-full h-[46px] rounded-tl-[15px] rounded-br-[15px] text-lg font-medium text-[#0F2A5C] placeholder:text-black/80 leading-[120%] tracking-[0%]"
                  value={formData.last_name}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label
                  className="text-base font-medium text-[#0F2A5C] leading-[120%] tracking-[0%]"
                  htmlFor="email"
                >
                  Email
                </Label>
                <Input
                  required
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full h-[46px] rounded-tl-[15px] rounded-br-[15px] text-lg font-medium text-[#0F2A5C] placeholder:text-black/80 leading-[120%] tracking-[0%]"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label
                  className="text-base font-medium text-[#0F2A5C] leading-[120%] tracking-[0%]"
                  htmlFor="phone"
                >
                  Phone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Phone"
                  className="w-full h-[46px] rounded-tl-[15px] rounded-br-[15px] text-lg font-medium text-[#0F2A5C] placeholder:text-black/80 leading-[120%] tracking-[0%]"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label
                  className="text-base font-medium text-[#0F2A5C] leading-[120%] tracking-[0%]"
                  htmlFor="organization"
                >
                  Organization
                </Label>
                <Input
                  id="organization"
                  placeholder="Organization"
                  className="w-full h-[46px] rounded-tl-[15px] rounded-br-[15px] text-lg font-medium text-[#0F2A5C] placeholder:text-black/80 leading-[120%] tracking-[0%]"
                  value={formData.organization}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label
                  className="text-base font-medium text-[#0F2A5C] leading-[120%] tracking-[0%]"
                  htmlFor="city"
                >
                  City
                </Label>
                <Input
                  required
                  id="city"
                  placeholder="City"
                  className="w-full h-[46px] rounded-tl-[15px] rounded-br-[15px] text-lg font-medium text-[#0F2A5C] placeholder:text-black/80 leading-[120%] tracking-[0%]"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label
                  className="text-base font-medium text-[#0F2A5C] leading-[120%] tracking-[0%]"
                  htmlFor="help"
                >
                  Message
                </Label>
                <Textarea
                  required
                  id="help"
                  placeholder="Your message"
                  className="w-full h-[150px] rounded-tl-[15px] rounded-br-[15px] text-lg font-medium text-[#0F2A5C] placeholder:text-black/80 leading-[120%] tracking-[0%]"
                  value={formData.help}
                  onChange={handleChange}
                />
              </div>

              <div className="md:col-span-2">
                {isPending ? (
                  <Button
                    size={"lg"}
                    type="submit"
                    className="w-full bg-[#0F2A5C] text-white font-medium hover:bg-[#0F2A5C]/90"
                  >
                    Sending message
                  </Button>
                ) : (
                  <Button
                    size={"lg"}
                    type="submit"
                    className="w-full bg-[#0F2A5C] text-white font-medium hover:bg-[#0F2A5C]/90"
                  >
                    Send message
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
