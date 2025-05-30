import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AppProvider from "@/provider/AppProvider";
import AuthProvider from "@/provider/AuthProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // add the weights you need
  variable: "--font-poppins", // optional if you want to use it as a CSS variable
  display: "swap",
});

export const metadata: Metadata = {
  title: "CQD Cleaning Services: Excellence Since 2012",
  description: "CQD Cleaning Services has proudly provided top-tier cleaning since 2012, delivering spotless results with a commitment to excellence.",
  icons: {
    icon: "/images/flogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <AuthProvider>
          <AppProvider>{children}</AppProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
