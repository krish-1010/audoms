import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

import { DM_Sans } from "next/font/google";
const dmsans = DM_Sans({
  subsets: ["latin"],
  // weight: [400, 700],
});

import Script from "next/script";

export const metadata = {
  title: "Dynamic Brochure",
  description: "Anna University's dynamic brochure",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        src="https://widget.cxgenie.ai/widget.js"
        data-aid="1a281559-dd6b-4197-9ade-231289a0b4c1"
        data-lang="en"
      />
      <body className={`${dmsans.className} antialiased`}>
        {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > */}
        <Analytics />

        {/* Responsive Message */}
        <div className="md:hidden flex items-center justify-center h-screen text-center p-4 bg-black shadow rounded-lg absolute top-0 left-0 right-0">
          <p className="text-2xl font-semibold">
            Please use a desktop to view this site.
          </p>
        </div>

        {/* Main content visible only on larger screens */}
        <div className="hidden md:block">{children}</div>
      </body>
    </html>
  );
}
