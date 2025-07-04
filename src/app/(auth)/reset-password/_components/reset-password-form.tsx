"use client";

import { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";

// Password validation schema
const passwordSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
      })
      .regex(/[0-9]/, { message: "Password must contain at least one number" }),
    password_confirmation: z.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    path: ["password_confirmation"],
  });

type PasswordFormValues = z.infer<typeof passwordSchema>;

export default function ResetPasswordForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const token = searchParams.get("token");
  const decodedEmail = decodeURIComponent(email || "");
  const decodedToken = decodeURIComponent(token || "");

  useEffect(() => {
    if (!decodedEmail || !decodedToken) {
      toast.error("Invalid or expired link. Please try again.");
      router.push(`/forgot-password`);
    }
  }, [decodedEmail, decodedToken, router]);

  // Initialize form with React Hook Form and Zod validation
  const form = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: "",
      password_confirmation: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ["reset-password"],
    mutationFn: (values: {
      password: string;
      password_confirmation: string;
      token: string;
      email: string;
    }) =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/password/reset`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(values),
      }).then((res) => res.json()),
    onSuccess: (data) => {
      if (!data?.status) {
        toast.error(data?.message || "Something went wrong");
        return;
      } else {
        toast.success(data?.message || "Email sent successfully!");
        router.push(`/login`);
      }
    },
  });

  // Form submission handler
  async function onSubmit(values: PasswordFormValues) {
    console.log(values);
    mutate({
      password: values.password,
      password_confirmation: values.password_confirmation,
      token: decodedToken,
      email: decodedEmail,
    });
  }

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center">
      {/* Form */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-4 p-4"
        >
          {/* New Password Field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="New Password"
                      startIcon={Lock}
                      className="w-full h-[50px] border border-black rounded-[8px] text-base font-normal font-poppins leading-[120%] pl-10  tracking-[0%] text-black placeholder:text-[#999999] outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
                      {...field}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </FormControl>
                <FormMessage className="text-xs mt-1" />
              </FormItem>
            )}
          />

          {/* Confirm Password Field */}
          <FormField
            control={form.control}
            name="password_confirmation"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      startIcon={Lock}
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                      className="w-full h-[50px] border border-black rounded-[8px] text-base font-normal font-poppins leading-[120%] pl-10  tracking-[0%] text-black placeholder:text-[#999999] outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
                      {...field}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-3 flex items-center"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </FormControl>
                <FormMessage className="text-xs mt-1" />
              </FormItem>
            )}
          />

          {/* Continue Button */}
          <button
            type="submit"
            className="w-full h-[52px] bg-[#0E2A5C] rounded-[8px] py-[15px] px-[161px] text-lg font-semibold font-poppins leading-[120%] tracking-[0%] text-[#F4F4F4]"
            disabled={isPending}
          >
            {isPending ? "Loading..." : "Continue"}
          </button>
        </form>
      </Form>
    </div>
  );
}
