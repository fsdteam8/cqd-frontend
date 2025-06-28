"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function TabletNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close services dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".services-dropdown") && isServicesOpen) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isServicesOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-transparent transition-all duration-300",
        scrolled ? "py-0" : "py-4 lg:py-6"
      )}
    >
      <div
        className={cn(
          "transition-all duration-700 ease-in-out mx-auto px-4",
          scrolled ? "max-w-9xl container" : "max-w-6xl"
        )}
      >
        <div className="bg-white rounded-full shadow-lg px-4 lg:px-6 py-3 lg:py-4 transition-all duration-300">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/blue-logo.svg"
                alt="CQD Logo"
                width={120}
                height={40}
                className="h-8 lg:h-10 w-auto"
              />
            </Link>

            {/* Tablet Navigation - Shows on tablet and larger screens */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <Link
                href="/"
                className="text-gray-900 hover:text-gray-600 transition-colors text-sm xl:text-base"
              >
                Home
              </Link>
              <Link
                href="/#about"
                className="text-gray-900 hover:text-gray-600 transition-colors text-sm xl:text-base"
              >
                About Us
              </Link>
              <div className="relative services-dropdown">
                <button
                  onClick={toggleServices}
                  className="flex items-center text-gray-900 hover:text-gray-600 transition-colors text-sm xl:text-base"
                >
                  Services
                  <ChevronDown
                    size={14}
                    className={cn(
                      "ml-1 transition-transform xl:w-4 xl:h-4",
                      isServicesOpen ? "rotate-180" : ""
                    )}
                  />
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 xl:w-64 bg-white rounded-xl shadow-lg overflow-hidden z-50">
                    <div className="py-2">
                      <Link
                        href="/window-cleaning"
                        className="block px-4 py-2.5 xl:py-3 text-gray-900 hover:bg-gray-100 transition-colors text-sm xl:text-base"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        Window Cleaning
                      </Link>
                      <Link
                        href="/carpet-cleaning"
                        className="block px-4 py-2.5 xl:py-3 text-gray-900 hover:bg-gray-100 transition-colors text-sm xl:text-base"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        Carpet Cleaning
                      </Link>
                      <Link
                        href="/washroom-cleaning"
                        className="block px-4 py-2.5 xl:py-3 text-gray-900 hover:bg-gray-100 transition-colors text-sm xl:text-base"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        Washroom Cleaning
                      </Link>
                      <Link
                        href="/public-transport-cleaning"
                        className="block px-4 py-2.5 xl:py-3 text-gray-900 hover:bg-gray-100 transition-colors text-sm xl:text-base"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        Public Transport Cleaning
                      </Link>
                      <Link
                        href="/private-transport-cleaning"
                        className="block px-4 py-2.5 xl:py-3 text-gray-900 hover:bg-gray-100 transition-colors text-sm xl:text-base"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        Private Transport Cleaning
                      </Link>
                      <Link
                        href="/marine-boat-cleaning"
                        className="block px-4 py-2.5 xl:py-3 text-gray-900 hover:bg-gray-100 transition-colors text-sm xl:text-base"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        Marine & Boat Cleaning
                      </Link>
                      <Link
                        href="/commercial-fleet-logistic-vehicles"
                        className="block px-4 py-2.5 xl:py-3 text-gray-900 hover:bg-gray-100 transition-colors text-sm xl:text-base"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        Commercial Fleet & Logistic Vehicles
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <Link
                href="/#pricing"
                className="text-gray-900 hover:text-gray-600 transition-colors text-sm xl:text-base"
              >
                Pricing
              </Link>
              <Link
                href="/#location"
                className="text-gray-900 hover:text-gray-600 transition-colors text-sm xl:text-base"
              >
                Locations
              </Link>
              <Link
                href="/blog"
                className="text-gray-900 hover:text-gray-600 transition-colors text-sm xl:text-base"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-gray-900 hover:text-gray-600 transition-colors text-sm xl:text-base"
              >
                Contact
              </Link>
            </nav>

            {/* Tablet-specific compact navigation - Shows on medium tablets */}
            <nav className="hidden md:flex lg:hidden items-center space-x-3">
              <Link
                href="/"
                className="text-gray-900 hover:text-gray-600 transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-gray-900 hover:text-gray-600 transition-colors text-sm"
              >
                About
              </Link>
              <div className="relative services-dropdown">
                <button
                  onClick={toggleServices}
                  className="flex items-center text-gray-900 hover:text-gray-600 transition-colors text-sm"
                >
                  Services
                  <ChevronDown
                    size={12}
                    className={cn(
                      "ml-1 transition-transform",
                      isServicesOpen ? "rotate-180" : ""
                    )}
                  />
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg overflow-hidden z-50">
                    <div className="py-1">
                      <Link
                        href="/window-cleaning"
                        className="block px-3 py-2 text-gray-900 hover:bg-gray-100 transition-colors text-sm"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        Window Cleaning
                      </Link>
                      <Link
                        href="/carpet-cleaning"
                        className="block px-3 py-2 text-gray-900 hover:bg-gray-100 transition-colors text-sm"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        Carpet Cleaning
                      </Link>
                      <Link
                        href="/washroom-cleaning"
                        className="block px-3 py-2 text-gray-900 hover:bg-gray-100 transition-colors text-sm"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        Washroom Cleaning
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <Link
                href="/#pricing"
                className="text-gray-900 hover:text-gray-600 transition-colors text-sm"
              >
                Pricing
              </Link>
              <Link
                href="/#location"
                className="text-gray-900 hover:text-gray-600 transition-colors text-sm"
              >
                Locations
              </Link>
              <Link
                href="/blog"
                className="text-gray-900 hover:text-gray-600 transition-colors text-sm"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-gray-900 hover:text-gray-600 transition-colors text-sm"
              >
                Contact
              </Link>
            </nav>

            {/* CTA Button - Responsive sizing */}
            <Link href={"/#pricing"}>
              <Button className="hidden md:block bg-[#0F2A5C] !text-white hover:bg-[#0F2A5C]/80 rounded-full text-sm lg:text-base px-4 lg:px-6 py-2 ">
                {/* <span className="lg:hidden">Quote</span> */}
                <span className="">Request a Quote</span>
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-900"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Enhanced for tablet portrait mode */}
        <div
          className={cn(
            "md:hidden mt-2 bg-white rounded-xl shadow-md transition-all duration-300 ease-in-out",
            isMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 pointer-events-none overflow-hidden"
          )}
        >
          <nav className="flex flex-col space-y-2 p-4">
            <Link
              href="/"
              className="text-gray-900 hover:text-gray-600 py-2.5 text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/#about"
              className="text-gray-900 hover:text-gray-600 py-2.5 text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <div>
              <button
                onClick={toggleMobileServices}
                className="flex items-center justify-between w-full text-gray-900 hover:text-gray-600 py-2.5 text-base"
              >
                <span>Services</span>
                <ChevronDown
                  size={16}
                  className={cn(
                    "transition-transform",
                    isMobileServicesOpen ? "rotate-180" : ""
                  )}
                />
              </button>
              <div
                className={cn(
                  "pl-4 transition-all duration-300 ease-in-out",
                  isMobileServicesOpen
                    ? "max-h-screen opacity-100 mt-2"
                    : "max-h-0 opacity-0 pointer-events-none overflow-hidden"
                )}
              >
                <Link
                  href="/window-cleaning"
                  className="block text-gray-900 hover:text-gray-600 py-2 text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Window Cleaning
                </Link>
                <Link
                  href="/carpet-cleaning"
                  className="block text-gray-900 hover:text-gray-600 py-2 text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Carpet Cleaning
                </Link>
                <Link
                  href="/washroom-cleaning"
                  className="block text-gray-900 hover:text-gray-600 py-2 text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Washroom Cleaning
                </Link>

                <Link
                  href="/public-transport-cleaning"
                  className="block text-gray-900 hover:text-gray-600 py-2 text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Public Transport Cleaning
                </Link>
                <Link
                  href="/private-transport-cleaning"
                  className="block text-gray-900 hover:text-gray-600 py-2 text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Private Transport Cleaning
                </Link>
                <Link
                  href="/marine-boat-cleaning"
                  className="block text-gray-900 hover:text-gray-600 py-2 text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Marine & Boat Cleaning
                </Link>
                <Link
                  href="/commercial-fleet-logistic-vehicles"
                  className="block text-gray-900 hover:text-gray-600 py-2 text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Commercial Fleet & Logistic Vehicles
                </Link>
              </div>
            </div>
            <Link
              href="/#pricing"
              className="text-gray-900 hover:text-gray-600 py-2.5 text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/#locations"
              className="text-gray-900 hover:text-gray-600 py-2.5 text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Locations
            </Link>
            <Link
              href="/blog"
              className="text-gray-900 hover:text-gray-600 py-2.5 text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-gray-900 hover:text-gray-600 py-2.5 text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link href={"/#pricing"}>
              <Button className="bg-[#0F2A5C] text-white hover:bg-[#0F2A5C]/80 w-full mt-3 rounded-full text-base py-3">
                Request a Quote
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
