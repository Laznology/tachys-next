import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { PwaRegister } from "@/components/pwa-register";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SITE_CONFIG } from "@/lib/seo";

import { TrpcProvider } from "../components/providers/trpc-provider";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  authors: [
    {
      name: SITE_CONFIG.author,
    },
  ],
  creator: SITE_CONFIG.author,
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    description: SITE_CONFIG.description,
    images: [
      {
        alt: SITE_CONFIG.name,
        height: 630,
        url: SITE_CONFIG.ogImage,
        width: 1200,
      },
    ],
    locale: "en_US",
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.name,
    type: "website",
    url: SITE_CONFIG.url,
  },
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    index: true,
  },
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  twitter: {
    card: "summary_large_image",
    creator: SITE_CONFIG.twitterHandle,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
    title: SITE_CONFIG.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    author: {
      "@type": "Person",
      name: SITE_CONFIG.author,
    },
    description: SITE_CONFIG.description,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJSONLD) }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          <TooltipProvider>
            <TrpcProvider>{children}</TrpcProvider>
            <PwaRegister />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
