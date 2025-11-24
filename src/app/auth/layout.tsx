import { Vend_Sans, Oswald } from "next/font/google";
import "@/app/globals.css";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export const vendSans = Vend_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const oswald = Oswald({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${vendSans.className} antialiased bg-gray-100 flex justify-center items-center h-screen overflow-hidden`}
      >
        <img src="/background.svg" alt="background" className="absolute -z-10 object-cover w-full h-full" />
        <div className="w-full sm:w-10/12 md:w-3/4 lg:w-1/2">
          <Link href={'/'} className="mb-2 flex items-center gap-2"><ArrowLeftIcon className="w-7 aspect-square" /> Volver al Inicio</Link>
          <div className="bg-white p-5 rounded-md shadow-md">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
