import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aditya Shenoy K | Full Stack Developer",
  description:
    "Full Stack Developer & UI/UX Enthusiast with expertise in React, TypeScript, Node.js, and AWS. View my portfolio to see my latest projects and experience.",
  icons: {
    icon: ["/images/logo.webp"],
  },
  keywords: [
    "Full Stack Developer",
    "UI/UX Developer",
    "React Developer",
    "TypeScript",
    "Next.js",
    "Node.js",
    "AWS",
  ],
  authors: [{ name: "Aditya Shenoy K" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aditya-shenoy-k.vercel.app",
    title: "Aditya Shenoy K | Full Stack Developer",
    description:
      "Full Stack Developer & UI/UX Enthusiast with expertise in React, TypeScript, Node.js, and AWS",
    siteName: "Aditya Shenoy K Portfolio",
    images: [
      {
        url: "/images/logo.webp",
        width: 800,
        height: 600,
        alt: "Aditya Shenoy K",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Shenoy K | Full Stack Developer",
    description:
      "Full Stack Developer & UI/UX Enthusiast with expertise in React, TypeScript, Node.js, and AWS",
    images: ["/images/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/images/logo.webp" as="image" />
        <link rel="preload" href="/images/aditya.png" as="image" />
        <link rel="preload" href="/images/nmamit.webp" as="image" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://aditya-shenoy-k.vercel.app" />
      </head>
      <body
        className={`${inter.className} overflow-y-scroll`}
        suppressHydrationWarning
      >
        <Providers
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </Providers>
      </body>
    </html>
  );
}
