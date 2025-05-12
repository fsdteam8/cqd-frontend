"use client";

import type React from "react";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    city: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Request A Call Back
          </h2>
          <p className="mt-2 text-xl text-muted-foreground">Contact</p>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row items-start justify-center">
          {/* Left side - Image */}
          <div className="relative hidden lg:block  mx-auto lg:mx-0 w-full max-w-[400px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[592px]">
            <Image
              src="/images/callimg.png"
              alt="Contact support"
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
              className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4"
            >
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  placeholder="First Name"
                  className="w-full"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  placeholder="Last Name"
                  className="w-full"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Phone"
                  className="w-full"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="organization">Organization</Label>
                <Input
                  id="organization"
                  placeholder="Organization"
                  className="w-full"
                  value={formData.organization}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  placeholder="City"
                  className="w-full"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="w-full min-h-[150px]"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <div className="md:col-span-2 mt-4">
                <Button
                  type="submit"
                  className="w-full bg-black text-white hover:bg-black/90"
                >
                  Send message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
