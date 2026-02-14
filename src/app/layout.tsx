
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Syngene - Annual Report 2025",
  description: "Syngene Annual Report 2025 - Innovating Reach",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
