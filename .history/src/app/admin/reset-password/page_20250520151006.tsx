"use client"

import type React from "react"

import { useState } from "react"
import { Eye, EyeOff, Mail, Lock } from "lucide-react"
import Image from "next/image"

export default function ResetPasswordPage() {
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsLoading(false)
    setStep(2)
  }

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsLoading(false)
    // Redirect to login page
    window.location.href = "/login"
  }

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gray-200">
        <Image
        w
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aleesa56_FO520E9548305_Work_on_progress_.png-M7x4dTHp8fVIPWu8cH9yk0QRlW0xIi.jpeg"
          alt="Cleaning Service"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center p-12">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-8">
            <div className="text-4xl font-bold">CQD</div>
          </div>

          <h1 className="text-3xl font-bold text-center mb-2">Reset password</h1>

          {step === 1 ? (
            <>
              <p className="text-center text-gray-500 mb-8">Enter your email to receive the OTP</p>

              <form onSubmit={handleSendOTP}>
                <div className="mb-6">
                  <div className="relative">
                    <Mail className="input-icon" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full input-with-icon pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary text-white py-3 rounded font-medium hover:bg-primary/90 transition-colors"
                >
                  {isLoading ? "Sending..." : "Send"}
                </button>
              </form>
            </>
          ) : (
            <>
              <p className="text-center text-gray-500 mb-8">Enter your email to receive the OTP</p>

              <form onSubmit={handleResetPassword}>
                <div className="mb-4">
                  <div className="relative">
                    <Lock className="input-icon" />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="New Password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                      className="w-full input-with-icon pr-10 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="relative">
                    <Lock className="input-icon" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="w-full input-with-icon pr-10 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-3"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary text-white py-3 rounded font-medium hover:bg-primary/90 transition-colors"
                >
                  {isLoading ? "Processing..." : "Continue"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
