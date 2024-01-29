import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BlogProvider from "@/providers/BlogProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Woo Blog",
  description: "A nice blog :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BlogProvider>{children}</BlogProvider>
      </body>
    </html>
  );
}
