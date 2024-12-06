import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fullstack Auth - Team LEOZINHO",
  description: "Fullstack Auth TEAM LEOZINHO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`antialiased h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
