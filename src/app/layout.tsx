import "@/app/globals.css";
import { vendSans } from "@/lib/fonts";
import type { Metadata } from "next";
import { oswald } from "./(main)/layout";

export const metadata: Metadata = {
  title: {
    default: "C-Soul Sync",
    template: "%s | C-Soul Sync",
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
        className={`${vendSans.variable} ${oswald.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
