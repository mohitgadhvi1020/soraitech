import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Sorai Tech | Software & AI Consulting Agency",
  description: "Sorai Tech builds future-ready software with AI-first thinking. We offer end-to-end development support with expertise in AI, Full-Stack Development, and Cloud Solutions.",
  keywords: "AI consulting, software development, tech consulting, AI integration, full stack development, cloud solutions",
  icons: {
    icon: [
      {
        url: "/sorai tech logo.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/sorai tech logo.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: {
      url: "/sorai tech logo.png",
      sizes: "180x180",
      type: "image/png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/sorai tech logo.png" type="image/png" />
        <link rel="shortcut icon" href="/sorai tech logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/sorai tech logo.png" />
      </head>
      <body 
        className={`${inter.variable} ${sora.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
