"use client";

import Script from "next/script";

export const SoroEmbed = () => (
  <>
    <div id="soro-blog" />
    <Script
      src="https://app.trysoro.com/api/embed/bb8b1069-0718-4f79-9d57-82daff1468a9"
      strategy="afterInteractive"
    />
  </>
);