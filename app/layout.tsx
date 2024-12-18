import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavigationMenuDemo } from "@/components/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className=" flex justify-between sticky top-0 z-50 backdrop-blur-lg bg-white/20 py-3 shadow-md">
        <div className="flex ml-10 rounded-lg ">
          <NavigationMenuDemo />
        </div>
        <div className="flex justify-end mr-10 gap-3">
          <button className="border text-black px-6 py-2 rounded-lg text-sm">
            Sign Up
          </button>
          <button className="bg-black text-white px-6 py-2 rounded-lg text-sm">
            Login
          </button>
        </div>
      </div>
        {children}
      </body>
    </html>
  );
}

