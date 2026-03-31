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
  title: "Sorai Tech | Build, Launch & Grow Products — Dev, AI, SEO & AEO",
  description: "Sorai Tech is a product + growth team that helps build, launch and scale products using development, AI, SEO and AEO (AI search optimization). From MVP to scale.",
  keywords: "product studio, MVP development, AI automation, SEO, AEO, answer engine optimization, full-stack development, startup growth, SaaS development",
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
