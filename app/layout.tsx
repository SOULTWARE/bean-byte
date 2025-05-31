import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from '@/components/ThemeProvider';
import "./globals.css";
import Layout from "@/components/Layout";
import BackgroundShapes from "@/components/BackgroundShapes";
import favicon from "@/app/favicon.svg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bean & Byte",
  description: "Where Coffee Meets Code - A Modern Tech-Friendly Coffee Shop",
  icons: {
    icon: [
      {
        url: favicon.src,
        type: "image/svg+xml",
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <BackgroundShapes />
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
