import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AdminInitCheck from "@/components/auth/AdminInitCheck";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bold Ideas Innovation | AI Digital Marketing & Automation Agency",
  description: "AI Digital Marketing & Automation Agency based in Lagos, Nigeria.",
};

import AuthProvider from "@/components/providers/AuthProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased text-slate-800`}
      >
        <AuthProvider>
          {children}
          <AdminInitCheck />
        </AuthProvider>
      </body>
    </html>
  );
}
