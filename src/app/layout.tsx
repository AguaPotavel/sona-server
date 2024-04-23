import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ['devanagari'], weight: "400"});

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
      <body className={poppins.className}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
