"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen)
  }

  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close services dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest(".services-dropdown") && isServicesOpen) {
        setIsServicesOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isServicesOpen])

  return (
    <header
      className={cn("sticky top-0 z-50 w-full bg-transparent transition-all duration-300", scrolled ? "py-0" : "py-6")}
    >
      <div
        className={cn(
          "transition-all duration-700 ease-in-out mx-auto px-4",
          scrolled ? "max-w-9xl container" : "max-w-6xl",
        )}
      >
        <div className="bg-white rounded-full shadow-lg px-6 py-4 transition-all duration-300">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              {/* <span className="text-2xl font-bold">CQD</span> */}
               <Image src="/images/logo.png" alt="CQD Logo" width={120} height={40} className="h-10 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-900 hover:text-gray-600 transition-colors">
                Home
              </Link>
           
              <Link href="#about" className="text-gray-900 hover:text-gray-600 transition-colors">
                About Us
              </Link>
              <div className="relative services-dropdown">
                <button
                  onClick={toggleServices}
                  className="flex items-center text-gray-900 hover:text-gray-600 transition-colors"
                >
                  Services
                  <ChevronDown
                    size={16}
                    className={cn("ml-1 transition-transform", isServicesOpen ? "rotate-180" : "")}
                  />
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg overflow-hidden z-50">
                    <div className="py-2">
                      <Link
                        href="/window-cleaning"
                        className="block px-4 py-3 text-gray-900 hover:bg-gray-100 transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        Window Cleaning
                      </Link>
                      <Link
                        href="/carpet-cleaning"
                        className="block px-4 py-3 text-gray-900 hover:bg-gray-100 transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        Carpet Cleaning
                      </Link>
                      <Link
                        href="/washroom-cleaning"
                        className="block px-4 py-3 text-gray-900 hover:bg-gray-100 transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        Washroom Cleaning
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <Link href="/#pricing" className="text-gray-900 hover:text-gray-600 transition-colors">
                Pricing
              </Link>
              <Link href="/#location" className="text-gray-900 hover:text-gray-600 transition-colors">
                Locations
              </Link>
              <Link href="/blog" className="text-gray-900 hover:text-gray-600 transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-900 hover:text-gray-600 transition-colors">
                Contact
              </Link>
            </nav>

            {/* CTA Button */}
            <Button className="hidden md:block bg-[#0F2A5C] !text-white hover:bg-[#0F2A5C/20] rounded-full">
              Request a Quote
            </Button>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-900" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden mt-2 bg-white rounded-xl shadow-md transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none overflow-hidden",
          )}
        >
          <nav className="flex flex-col space-y-4 p-4">
            <Link href="/" className="text-gray-900 hover:text-gray-600 py-2" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            
            <Link href="/#about" className="text-gray-900 hover:text-gray-600 py-2" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <div>
              <button
                onClick={toggleMobileServices}
                className="flex items-center justify-between w-full text-gray-900 hover:text-gray-600 py-2"
              >
                <span>Services</span>
                <ChevronDown
                  size={16}
                  className={cn("transition-transform", isMobileServicesOpen ? "rotate-180" : "")}
                />
              </button>
              <div
                className={cn(
                  "pl-4 transition-all duration-300 ease-in-out",
                  isMobileServicesOpen
                    ? "max-h-screen opacity-100 mt-2"
                    : "max-h-0 opacity-0 pointer-events-none overflow-hidden",
                )}
              >
                <Link
                  href="/window-cleaning"
                  className="block text-gray-900 hover:text-gray-600 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Window Cleaning
                </Link>
                <Link
                  href="/carpet-cleaning"
                  className="block text-gray-900 hover:text-gray-600 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Carpet Cleaning
                </Link>
                <Link
                  href="/washroom-cleaning"
                  className="block text-gray-900 hover:text-gray-600 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Washroom Cleaning
                </Link>
              </div>
            </div>
            <Link
              href="/#pricing"
              className="text-gray-900 hover:text-gray-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/#locations"
              className="text-gray-900 hover:text-gray-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Locations
            </Link>
            <Link href="/blog" className="text-gray-900 hover:text-gray-600 py-2" onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-gray-900 hover:text-gray-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="bg-[#0F2A5C] text-white hover:bg-[#0F2A5C/20] w-full mt-2 rounded-full">
              Request a Quote
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
