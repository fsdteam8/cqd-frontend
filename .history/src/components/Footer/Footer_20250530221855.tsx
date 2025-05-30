"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Twitter, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2023);

  const { data } = useQuery({
    queryKey: ["email"],
    queryFn: async () => {
      const res = await fetch("https://coq.scaleupdevagency.com/api/email", {
        method: "GET",
      });

      return res.json();
    },
  });

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className=" w-full px-4 py-8 md:px-8 lg:px-12">
      <div className="w-full container   mx-auto bg-[#0F2A5C] !text-white p-8 rounded-3xl mb-8">
        {/* Top section with logo and navigation */}
        <div className="flex flex-col  md:flex-row justify-between  md:items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="inline-block">
              <Image
                src="/images/flogo.png"
                alt="CQD Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <Link
              href="/#review"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Reviews
            </Link>
            <Link
              href="/#pricing"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/#pricing"
              className="col-span-2 bg-white text-black text-center px-4 py-2 rounded-full hover:bg-gray-200 transition-colors md:ml-4"
            >
              Request a Quote
            </Link>
          </div>
        </div>

        {/* Address and contact info */}
        <div className="mb-8 r">
          <p className="text-sm mb-1 !text-white">
            1 Aston Court, Kingsmead Business Park, High Wycombe
          </p>
          <p className="text-sm mb-6 !text-white"> Buckinghamshire, HP11 1LA</p>
        </div>

        {/* Bottom section with policies and social */}
        <div className="flex  flex-col md:flex-row justify-between  md:items-center">
          <div>
            <a
              href="mailto:example.email@gmail.com"
              className="text-lg md:text-3xl font-bold hover:text-gray-300 transition-colors"
            >
              {'mark@cqdcleaningservices.com'}
            </a>

            <div className="mt-4">
              <Link
                href="/#pricing"
                className="inline-block text-xl font-medium hover:text-gray-300 transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xl mb-2 !text-white">Find Us On:</p>
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
        <div className="mt-8 text-center text-xs ">
          <p className="!text-white">
            {currentYear} - CQD Cleaning Services. All rights reserved. Website
            Design and SEO by Smoking Rocket{" "}
            {/* <Link href="/privacy-policy" className="underline hover:text-white"> */}
            <>View our Privacy Policy</>
            {/* </Link> */}
          </p>
        </div>

      </div>
    </footer>
  );
}
