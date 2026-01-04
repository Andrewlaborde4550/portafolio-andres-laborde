import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andrés Laborde | Ingeniero de Sistemas en formación",
  description: "Portafolio profesional de Andrés Laborde. Especializado en desarrollo de software, soluciones escalables y arquitectura limpia.",
  keywords: ["Andrés Laborde", "Ingeniero de Sistemas", "Desarrollador Fullstack", "React", "Next.js", "Software Engineer"],
  authors: [{ name: "Andrés Laborde" }],
  openGraph: {
    title: "Andrés Laborde | Portfolio",
    description: "Ingeniero de Sistemas enfocado en construir soluciones tecnológicas eficientes.",
    url: "https://tu-portafolio.vercel.app", // Cambia esto cuando tengas tu link de Vercel
    siteName: "Andrés Laborde Portfolio",
    images: [
      {
        url: "/og-image.png", // Debes poner una imagen en la carpeta 'public' con este nombre
        width: 1200,
        height: 630,
        alt: "Andrés Laborde Portfolio Preview",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrés Laborde | Ingeniero de Sistemas",
    description: "Desarrollador de software especializado en Next.js y TypeScript.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
