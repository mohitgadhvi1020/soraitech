import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Sorai Tech | Product Studio — Design, Development & Product Management",
  description: "Sorai Tech is a full-service product studio. We provide UI/UX design (Figma), frontend & backend development, Webflow, workflow automation, and dedicated product management. One team, zero gaps.",
  keywords: "product studio, UI/UX design, Figma, web development, React, Next.js, Webflow, backend engineering, product management, workflow automation",
  icons: {
    icon: "/sorai tech logo.png",
    shortcut: "/sorai tech logo.png",
    apple: "/sorai tech logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        className={`${inter.variable} ${poppins.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
