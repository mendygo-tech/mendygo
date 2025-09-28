import type { Metadata, Viewport } from "next";
import { Urbanist,Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { MyNavbar } from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const urbanist = Urbanist({ subsets: ["latin"], variable: "--font-urbanist", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://mendygo.com"),
  title: "Mendygo – AI That Adapts",
  description: "Lead generation for modern businesses powered by adaptive AI.",
  applicationName: "Mendygo",
  keywords: ["AI", "Mendygo", "automation", "lead generation", "smart monitoring", "B2B", "AI systems", "analytics"],
  authors: [{ name: "Mendygo", url: "https://mendygo.com" }],
  creator: "Mendygo",
  publisher: "Mendygo",

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
        url: "https://mendygo.com/logo.png",
        width: 512,
        height: 512,
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
    images: ["https://mendygo.com/logo.png"],
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Resource hints for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://vercel.live" />
        
        {/* Critical CSS optimization */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .navbar-text { font-display: block; }
            .hero-text { font-display: block; }
            img { font-display: block; }
          `
        }} />
        
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
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1508534101075098"
     crossOrigin="anonymous"></script>
      </head>
      <body className={`${urbanist.variable} ${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
          storageKey="theme"
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
