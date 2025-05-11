"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full px-4 py-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-full shadow-lg px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold">CQD</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-900 hover:text-gray-600 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-900 hover:text-gray-600 transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/pricing"
                className="text-gray-900 hover:text-gray-600 transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/locations"
                className="text-gray-900 hover:text-gray-600 transition-colors"
              >
                Locations
              </Link>
              <Link
                href="/blog"
                className="text-gray-900 hover:text-gray-600 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-gray-900 hover:text-gray-600 transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* CTA Button */}
            <Button className="hidden md:block bg-black text-white hover:bg-gray-800 rounded-full">
              Request a Quote
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-900"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden mt-2 bg-white rounded-xl shadow-md transition-all duration-300 ease-in-out",
            isMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 pointer-events-none overflow-hidden"
          )}
        >
          <nav className="flex flex-col space-y-4 p-4">
            <Link
              href="/"
              className="text-gray-900 hover:text-gray-600 py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-900 hover:text-gray-600 py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/pricing"
              className="text-gray-900 hover:text-gray-600 py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/locations"
              className="text-gray-900 hover:text-gray-600 py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Locations
            </Link>
            <Link
              href="/blog"
              className="text-gray-900 hover:text-gray-600 py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-gray-900 hover:text-gray-600 py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="bg-black text-white hover:bg-gray-800 w-full mt-2 rounded-full">
              Request a Quote
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
