"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Twitter, MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2023)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className=" w-full px-4 py-8 md:px-8 lg:px-12">
      <div className="w-full container mx-auto bg-black text-white p-8 rounded-3xl mb-8">
        {/* Top section with logo and navigation */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="inline-block">
              <Image src="/images/flogo.png" alt="CQD Logo" width={120} height={40} className="h-10 w-auto" />
            </Link>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <Link href="/reviews" className="text-white hover:text-gray-300 transition-colors">
              Reviews
            </Link>
            <Link href="#pricing" className="text-white hover:text-gray-300 transition-colors">
              Pricing
            </Link>
            <Link href="/blog" className="text-white hover:text-gray-300 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-300 transition-colors">
              Contact
            </Link>
            <Link
              href="/quote"
              className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors md:ml-4"
            >
              Request a Quote
            </Link>
          </div>
        </div>

        {/* Address and contact info */}
        <div className="mb-8">
          <p className="text-sm mb-1">#### Dummy Avenue, Suite ###</p>
          <p className="text-sm mb-6">Location, CA #####, UK</p>

          <a
            href="mailto:example.email@gmail.com"
            className="text-2xl md:text-3xl font-bold hover:text-gray-300 transition-colors"
          >
            example.email@gmail.com
          </a>

          <div className="mt-4">
            <Link href="/booking" className="inline-block text-xl font-medium hover:text-gray-300 transition-colors">
              Book Now
            </Link>
          </div>
        </div>

        {/* Bottom section with policies and social */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-6 md:mb-0">
            <Link href="/cookie-policy" className="text-white hover:text-gray-300 transition-colors text-sm">
              Cookie Policy
            </Link>
            <Link href="/privacy-policy" className="text-white hover:text-gray-300 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white hover:text-gray-300 transition-colors text-sm">
              Terms & Conditions
            </Link>
          </div>

          <div>
            <p className="text-sm mb-2">Find Us On:</p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://whatsapp.com"
                aria-label="WhatsApp"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-xs text-gray-400">
          <p>
            {currentYear} - CQD Cleaning Services. All rights reserved. Website Design and SEO by Smoking Rocket{" "}
            <Link href="/privacy-policy" className="underline hover:text-white">
              View our Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
