import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portafolio de proyectos Brayan Del Angel",
  description: "Desarrollador de aplicaciones web"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
      <link rel="icon" href="/laptopCode.png" type="image/x-icon" sizes="16x16"></link>
      </head>
      <body>{children}</body>
    </html>
  );
}
