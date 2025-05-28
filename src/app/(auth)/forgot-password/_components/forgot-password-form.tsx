"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// ✅ Define Zod schema
const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email" }),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

export function ForgotPasswordForm() {

  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ["forgot-password"], 
    mutationFn: (email: string) =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/password/email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      ).then((res) => res.json()),

    onSuccess: (data) => {
      if (!data?.success) {
        toast.error(data?.message || "Something went wrong");
        return;
      }

      toast.success(data?.message || "Email sent successfully!");
    },

    onError: (error) => {
      toast.error("Something went wrong. Please try again.");
      console.error("Forgot password error:", error);
    },
  });

  const onSubmit = (data: ForgotPasswordFormValues) => {
    console.log(data)
    mutate(data.email);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        {/* Email Field */}
        <div className="mb-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      placeholder="Enter your email"
                      type="email"
                      className="w-full h-[50px] border border-[#0E2A5C] rounded-[8px] text-base font-normal font-poppins leading-[120%] pl-10 tracking-[0%] text-[#0E2A5C] placeholder:text-[#999999] placeholder:bg-white  outline-none"
                    />
                    <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full h-[52px] bg-[#0E2A5C] rounded-[8px] py-[15px] text-lg font-semibold font-poppins leading-[120%] tracking-[0%] text-[#F4F4F4] transition-colors disabled:opacity-50"
          disabled={isPending}
        >
          {isPending ? "Sending..." : "Send"}
        </button>
      </form>
    </Form>
  );
}
