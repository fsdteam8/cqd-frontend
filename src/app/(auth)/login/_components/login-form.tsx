"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import Link from "next/link";

import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// ✅ Zod Schema
const loginFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginFormSchema>;

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pending] = useTransition();

  const router = useRouter();
  const loading = isLoading || pending;

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  // ✅ Handle submit
  async function onSubmit(data: LoginFormValues) {
    try {
      setIsLoading(true);

      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (res?.error) {
        throw new Error(res.error);
      }

      toast.success("Login successful!");
      router.push("/admin/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      toast.error((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        {/* Email Field */}
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

        {/* Password Field */}
        <div className="mt-6">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      placeholder="Enter your password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      className="w-full h-[50px] border border-[#0E2A5C] rounded-[8px] text-base font-normal font-poppins leading-[120%] pl-10 tracking-[0%] text-[#0E2A5C] placeholder:text-[#999999] placeholder:bg-white outline-none"
                    />
                    <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3.5 text-gray-400"
                      tabIndex={-1}
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Remember Me / Forgot Password */}
        <div className="flex items-center justify-between mt-[18px] mb-8">
          <FormField
            control={form.control}
            name="rememberMe"
            render={({ field }) => (
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="rememberMe"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
                <label
                  htmlFor="rememberMe"
                  className="text-sm font-poppins font-normal leading-[120%] text-[#0E2A5C]"
                >
                  Remember me
                </label>
              </div>
            )}
          />

          <Link
            href="/forgot-password"
            className="text-sm font-normal font-poppins leading-[120%] text-[#0E2A5C]"
          >
            Forgot password?
          </Link>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full h-[52px] bg-[#0E2A5C] rounded-[8px] text-lg font-semibold font-poppins text-[#F4F4F4] transition-colors disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>
    </Form>
  );
}
