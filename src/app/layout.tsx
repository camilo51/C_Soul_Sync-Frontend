import "@/app/globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { vendSans, oswald } from "@/lib/fonts";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";

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
        <ToastContainer /> 
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
