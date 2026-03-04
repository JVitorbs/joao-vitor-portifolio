import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import PageLoader from "@/components/PageLoader";
import { portfolio } from "@/data/portfolio";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${portfolio.name} | Portfólio`,
  description: `${portfolio.role.en} — ${portfolio.tagline.en}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
