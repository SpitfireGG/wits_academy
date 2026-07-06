import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter_Tight } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const body = Inter_Tight({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const SITE = "WITS Academy Secondary School";
const DESC =
  "WITS Academy Secondary School, Baudha, Kathmandu — established 1999. A values-driven school where curious minds grow into confident, capable citizens. Education for Civilization.";

export const metadata: Metadata = {
  title: {
    default: `${SITE} — Education for Civilization`,
    template: `%s | ${SITE}`,
  },
  description: DESC,
  keywords: [
    "WITS Academy",
    "Secondary School",
    "Baudha",
    "Kathmandu",
    "Nepal school",
    "admissions",
    "Education for Civilization",
  ],
  openGraph: {
    title: `${SITE} — Education for Civilization`,
    description: DESC,
    type: "website",
    locale: "en_US",
  },
  icons: { icon: "/schoollogo.jpg" },
};

export const viewport: Viewport = {
  themeColor: "#16191a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper text-ink">{children}</body>
    </html>
  );
}
