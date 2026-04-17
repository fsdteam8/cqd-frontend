import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AppProvider from "@/provider/AppProvider";
import AuthProvider from "@/provider/AuthProvider";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CQD Cleaning Services: Excellence Since 2012",
  description:
    "CQD Cleaning Services has proudly provided top-tier cleaning since 2012, delivering spotless results with a commitment to excellence.",
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
      
      <head>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-94J6Z4R19R"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-94J6Z4R19R');
          `}
        </Script>
      </head>
      <body className={`${poppins.className} antialiased`}>
        <AuthProvider>
          <AppProvider>{children}</AppProvider>
        </AuthProvider>

        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID!} />
      </body>
    </html>
  );
}