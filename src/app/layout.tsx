import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
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
      <body className={`${roboto.className} min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
