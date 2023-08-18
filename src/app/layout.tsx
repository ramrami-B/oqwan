import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

declare global {
  interface Window {
    Kakao: any;
  }
}

export const metadata: Metadata = {
  title: "오큐완",
  description: "오늘 큐티 완료, 오늘의 큐티를 기록하세요.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
