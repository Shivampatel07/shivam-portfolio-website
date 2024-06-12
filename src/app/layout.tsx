import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import * as THREE from 'three';
import { useEffect } from "react";
import RenderThreeJs from "@/components/RenderThreeJs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shivam Portfolio",
  description: "I am Shivam Patel a full stack developer. View my portfolio website which is built in next js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {/* <RenderThreeJs /> */}
        {children}
      </body>
    </html>
  );
}
