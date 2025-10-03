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
  title: "Sorai Tech | Software & AI Consulting Agency",
  description: "Sorai Tech builds future-ready software with AI-first thinking. We offer end-to-end development support with expertise in AI, Full-Stack Development, and Cloud Solutions.",
  keywords: "AI consulting, software development, tech consulting, AI integration, full stack development, cloud solutions",
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
