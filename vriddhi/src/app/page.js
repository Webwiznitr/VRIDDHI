"use client";
import React, { useState } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./Components/Navbar/Navbar";
import connectMongoDB from "../../libs/mongodb";
import Footer from "./Components/Footer/page";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vriddhi 2023",
  description: "Vriddhi 2023",
};

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="../favicon.ico" />
      </Head>

      {loading ? <></> : <Navbar />}

      <body className={inter.className}>{children}</body>

      {loading ? <></> : <Footer />}
    </html>
  );
}
