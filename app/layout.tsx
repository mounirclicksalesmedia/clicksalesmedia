import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ClickSalesMedia | B2B Performance Marketing Agency",
  description: "Transform your B2B company into a market leader with data-driven performance marketing strategies. Paid Media, SEO, CRO, ABM & Marketing Automation.",
  keywords: "B2B marketing, performance marketing, paid media, SEO, demand generation, account-based marketing, marketing automation",
  openGraph: {
    title: "ClickSalesMedia | B2B Performance Marketing Agency",
    description: "Transform your B2B company into a market leader with data-driven performance marketing strategies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased bg-[#272727] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
