import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { RecoilRoot } from "recoil";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guessing Game | 2024",
  description: "Developed by Ovezovv",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
