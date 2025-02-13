import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aditya Shenoy K",
  description: "Full Stack Developer & UI/UX Enthusiast",
  icons: {
    icon: ["/images/logo.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="preload" href="/images/nmamit.webp" as="image" />
      <link rel="preload" href="/images/hired.png" as="image" />
      <link rel="preload" href="/images/forecast-fusion.png" as="image" />
      <link rel="preload" href="/images/meme-scroll.png" as="image" />
      <link rel="preload" href="/images/my-store.png" as="image" />
      <link rel="preload" href="/images/splitz.png" as="image" />
      <link rel="preload" href="/images/youtube-clone.png" as="image" />
      <body
        className={`${inter.className} overflow-y-scroll`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
