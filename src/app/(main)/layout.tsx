import type { Metadata } from "next";
import { Geist, Geist_Mono, Vend_Sans, Oswald } from "next/font/google";
import "@/app/globals.css";

export const vendSans = Vend_Sans({
  variable: "--font-vend-sans",
  subsets: ["latin"],
});

export const oswald = Oswald({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | C-Soul Sync",
    default: "C-Soul Sync",
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
        className={`${vendSans.variable} ${oswald.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
