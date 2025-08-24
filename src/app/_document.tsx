// _document.tsx
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head>
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1508534101075098"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </Head>

      {/* Theme detection script */}
      <Script
        id="theme-detection"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (() => {
              const t = localStorage.theme ??
                (matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light');
              if (t === 'dark') {
                document.documentElement.classList.add('dark');
              }
            })();
          `,
        }}
      />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}