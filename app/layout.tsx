import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { GA_TRACKING_ID } from "@/lib/gtag";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://clicksalesmedia.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "ClickSalesMedia | B2B Performance Marketing Agency",
    template: "%s | ClickSalesMedia",
  },
  description:
    "Transform your B2B company into a market leader with data-driven performance marketing. Expert services in AI Automation, Lead Generation, Google Ads, SEO, and Growth Engineering. Serving UAE, Saudi Arabia, USA, Australia & Canada.",
  keywords: [
    "B2B marketing agency",
    "performance marketing",
    "lead generation",
    "AI automation",
    "Google Ads management",
    "LinkedIn Ads",
    "programmatic SEO",
    "growth engineering",
    "Dubai marketing agency",
    "Riyadh marketing agency",
    "B2B lead generation",
    "marketing automation",
    "CRM architecture",
    "paid media agency",
  ],
  authors: [{ name: "ClickSalesMedia", url: BASE_URL }],
  creator: "ClickSalesMedia",
  publisher: "ClickSalesMedia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "ClickSalesMedia",
    title: "ClickSalesMedia | B2B Performance Marketing Agency",
    description:
      "Transform your B2B company into a market leader with data-driven performance marketing strategies. Serving UAE, Saudi Arabia, USA, Australia & Canada.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ClickSalesMedia - B2B Performance Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ClickSalesMedia | B2B Performance Marketing Agency",
    description:
      "Transform your B2B company into a market leader with data-driven performance marketing.",
    images: ["/og-image.png"],
    creator: "@clicksalesmedia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  category: "Marketing Agency",
};

// JSON-LD structured data for organization
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ClickSalesMedia",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description:
    "B2B Performance Marketing Agency specializing in AI Automation, Lead Generation, Google Ads, SEO, and Growth Engineering.",
  foundingDate: "2020",
  sameAs: [
    "https://www.linkedin.com/company/clicksalesmedia",
    "https://twitter.com/clicksalesmedia",
    "https://www.facebook.com/clicksalesmedia",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+971-XX-XXX-XXXX",
      contactType: "sales",
      areaServed: ["AE", "SA", "US", "AU", "CA"],
      availableLanguage: ["English", "Arabic"],
    },
  ],
  areaServed: [
    {
      "@type": "Country",
      name: "United Arab Emirates",
    },
    {
      "@type": "Country",
      name: "Saudi Arabia",
    },
    {
      "@type": "Country",
      name: "United States",
    },
    {
      "@type": "Country",
      name: "Australia",
    },
    {
      "@type": "Country",
      name: "Canada",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "AE",
    addressLocality: "Dubai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#272727" />
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-[#272727] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
