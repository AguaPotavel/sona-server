import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import { NextAuthProvider } from "./_shared/hooks/providers/provider";

export const metadata: Metadata = {
  title: "Sona",
  description: "Seu app de voice",
  icons: [
    { rel: "icon", url: "/favicon.ico" }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
