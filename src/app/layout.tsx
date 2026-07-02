import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import PreloaderGate from "@/components/layout/PreloaderGate";
import BackToTop from "@/components/layout/BackToTop";
import {
  COMPANY_APPLE_ICON_URL,
  COMPANY_FAVICON_PNG_URL,
  COMPANY_FAVICON_URL,
} from "@/lib/company";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-poppins",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Razobyte | IT Consulting & Software Development Company",
  description:
    "Razobyte — Developing Digital Solutions. Expert IT consulting, web & mobile development, digital marketing, and e-commerce solutions.",
  keywords: [
    "Razobyte",
    "IT consulting",
    "software development",
    "web development",
    "digital marketing",
  ],
  icons: {
    icon: [
      { url: COMPANY_FAVICON_URL, sizes: "32x32", type: "image/x-icon" },
      { url: COMPANY_FAVICON_PNG_URL, sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: COMPANY_APPLE_ICON_URL, sizes: "180x180", type: "image/png" },
    ],
    shortcut: [COMPANY_FAVICON_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${roboto.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href={COMPANY_FAVICON_URL} sizes="32x32" />
        <link
          rel="icon"
          href={COMPANY_FAVICON_PNG_URL}
          type="image/png"
          sizes="512x512"
        />
        <link
          rel="apple-touch-icon"
          href={COMPANY_APPLE_ICON_URL}
          sizes="180x180"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              body:has(.site-pending){overflow:hidden!important}
              .site-pending{visibility:hidden!important;pointer-events:none}
              .preloader-root{position:fixed;inset:0;z-index:10000;display:flex;align-items:center;justify-content:center;background:#ffffff}
            `,
          }}
        />
      </head>
      <body className={`${roboto.className} min-h-screen antialiased`}>
        <PreloaderGate>
          {children}
          <BackToTop />
        </PreloaderGate>
      </body>
    </html>
  );
}
