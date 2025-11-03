import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Tienda - E-commerce Moderno",
  description: "Aplicación de E-commerce premium construida con Next.js 15, con Server Components y Server Actions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable} data-scroll-behavior="smooth">
      <body className="font-sans antialiased bg-zinc-50 text-zinc-900" suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
