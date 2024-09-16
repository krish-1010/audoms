import localFont from "next/font/local";

import "./globals.css";

import { DM_Sans } from "next/font/google";
const dmsans = DM_Sans({
  subsets: ["latin"],
  // weight: [400, 700],
});

import Script from "next/script";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Script
        src="https://widget.cxgenie.ai/widget.js"
        data-aid="22954b1e-dbfd-4a00-862e-ab020c3976bc"
        data-lang="en"
      /> */}
      <body className={`${dmsans.className} antialiased`}>
        {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > */}

        {children}
      </body>
    </html>
  );
}
