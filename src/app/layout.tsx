import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Fonts are bundled from @fontsource packages so builds never depend on fetching Google Fonts.
const inter = localFont({
  variable: "--font-inter",
  src: "../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  weight: "100 900",
  display: "swap",
});

const poppins = localFont({
  variable: "--font-poppins",
  src: [
    { path: "../../node_modules/@fontsource/poppins/files/poppins-latin-300-normal.woff2", weight: "300", style: "normal" },
    { path: "../../node_modules/@fontsource/poppins/files/poppins-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../../node_modules/@fontsource/poppins/files/poppins-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../../node_modules/@fontsource/poppins/files/poppins-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../../node_modules/@fontsource/poppins/files/poppins-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
});

const grotesk = localFont({
  variable: "--font-grotesk",
  src: "../../node_modules/@fontsource-variable/schibsted-grotesk/files/schibsted-grotesk-latin-wght-normal.woff2",
  weight: "400 900",
  display: "swap",
});

const plex = localFont({
  variable: "--font-plex",
  src: [
    { path: "../../node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../../node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-500-normal.woff2", weight: "500", style: "normal" },
  ],
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
