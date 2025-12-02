import "@/app/globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { vendSans, oswald } from "@/lib/fonts";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import 'react-loading-skeleton/dist/skeleton.css'
import { EmotionProvider } from "@/contexts/EmotionContext";

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
        className={`${vendSans.className} ${oswald.variable} bg-gray-950 text-white`}
      >
        <ToastContainer /> 
        <AuthProvider>
          <EmotionProvider>
            {children}
          </EmotionProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
