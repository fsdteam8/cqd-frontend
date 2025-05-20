"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useAuth } from "@/contexts/auth-context"
import { Eye, EyeOff, Mail, Lock, AlertTriangle } from "lucide-react"
import Image from "next/image"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const { login } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      await login(email, password)
    } catch  {
      setError("Invalid email or password")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gray-200">
        <Image
          height={500}
          width={500}
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aleesa56_FO520E9548305_Work_on_progress_.png-GD8nzLsmymgWgVq6Dgb4rvohvZOAFU.jpeg"
          alt="Cleaning Service"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center p-12 bg-white">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-8">
            <div className="text-4xl font-bold text-primary">CQD</div>
          </div>

          <h1 className="text-3xl font-bold text-center mb-2">Welcome back</h1>
          <p className="text-center text-gray-500 mb-8">Please enter your credentials to continue</p>

          {error && (
            <div className="bg-red-50 text-red-700 p-4 rounded-md mb-6 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <div className="relative">
                <Mail className="input-icon" />
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-input input-with-icon"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="password" className="form-label mb-0">
                  Password
                </label>
                <Link href="/reset-password" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="input-icon" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="form-input input-with-icon pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>

            <button type="submit" disabled={isLoading} className="btn btn-primary w-full py-3">
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Signing in...</span>
                </div>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <p className="text-center mt-8 text-sm text-gray-600">
            New to our platform?{" "}
            <Link href="/signup" className="text-primary font-medium hover:underline">
              Sign Up Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
