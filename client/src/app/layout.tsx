import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { MyNavbar } from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://mendygo.com"),
  title: "Mendygo – AI That Adapts",
  description: "Lead generation for modern businesses powered by adaptive AI.",
  applicationName: "Mendygo",
  keywords: ["AI", "Mendygo", "automation", "lead generation", "smart monitoring", "B2B", "AI systems", "analytics"],
  authors: [{ name: "Mendygo", url: "https://mendygo.com" }],
  creator: "Mendygo",
  publisher: "Mendygo",
  viewport: "width=device-width, initial-scale=1.0",
  alternates: {
    canonical: "https://mendygo.com",
  },
  openGraph: {
    title: "Mendygo – AI That Adapts",
    description: "Lead generation and smart monitoring for modern businesses powered by adaptive AI.",
    url: "https://mendygo.com",
    siteName: "Mendygo",
    images: [
      {
        url: "https://mendygo.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mendygo – AI That Adapts",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mendygo – AI That Adapts",
    description: "Lead generation and smart monitoring for modern businesses powered by adaptive AI.",
    images: ["https://mendygo.com/og-image.jpg"],
    site: "@MendygoSocial",
    creator: "@MendygoSocial",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YLHBGST7H3"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YLHBGST7H3', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${figtree.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <MyNavbar />
          {children}
          <Footer />
          <Analytics /> {/* Vercel Analytics */}
        </ThemeProvider>
      </body>
    </html>
  );
}