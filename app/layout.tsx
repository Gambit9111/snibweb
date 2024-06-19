import type { Metadata } from "next";
import { Rammetto_One } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const rameto = Rammetto_One({weight: ["400"], subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Snib Meme Is Here",
  description: "Own Snib And Stay Wealthy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rameto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
