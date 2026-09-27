import type { Metadata } from "next";
import { Inter, Poppins, Schibsted_Grotesk, IBM_Plex_Mono } from "next/font/google";
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

const grotesk = Schibsted_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plex = IBM_Plex_Mono({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Soraaitech | AI Consulting and Automation for Growing Businesses",
  description: "Soraaitech helps businesses find where AI saves time and money, then sets it up: customer support AI, document automation, sales and operations automation, and team training.",
  keywords: "AI consulting, AI consultancy, AI automation for business, AI customer support, document automation, AI strategy, AI training for teams",
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
        className={`${inter.variable} ${poppins.variable} ${grotesk.variable} ${plex.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
