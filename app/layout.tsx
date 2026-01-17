import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Video Narrative Experience",
  description: "An interactive documentary website with scroll-based storytelling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
