import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "@/context/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Portfólio de Bruno Cabral - Desenvolvedor Fullstack",
  openGraph: {
    images: [
      {
        url: "https://media.licdn.com/dms/image/v2/D4D16AQGkz1V76eEzuA/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1698852550654?e=1740009600&v=beta&t=MuNe9y7culOznmyFJTBtyef8VA8BmtxvoreoRFHfRQU",
        width: 1200,
        height: 630,
        alt: "Uma prévia do portfólio de Bruno Cabral.",
      },
    ],
  }
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
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
