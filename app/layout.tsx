import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./font.css";
import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";
import Sidebar from "@/components/layouts/Sidebar";

export const metadata: Metadata = {
  title: "Industrial Iot",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-ful">
        <div className="w-full bg-blac flex-col flex items-center justify-start">
          <Navbar />
          <section className="relative w-full bg-blac flex-col flex items-center justify-start">
            <Sidebar />
            {children}
            <Footer />
          </section>
        </div>
      </body>
    </html>
  );
}
