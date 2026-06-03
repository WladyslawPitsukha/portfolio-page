import type { Metadata } from "next";
import './globals.css';
import NavBar from "@/components/navBar";

export const metadata: Metadata = {
  title: "Merifri's Portfolio",
  description: "Personal page for demonstrating the portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-row">
        <NavBar />
        {children}
      </body>
    </html>
  );
}