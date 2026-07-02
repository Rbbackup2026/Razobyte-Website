import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import PreloaderGate from "@/components/layout/PreloaderGate";
import BackToTop from "@/components/layout/BackToTop";
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
