import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div
        className={`antialiased flex justify-center items-center h-screen overflow-hidden`}
      >
        <img src="/background.svg" alt="background" className="absolute z-10 object-cover w-full h-full" />
        <div className="w-full sm:w-10/12 md:w-3/4 lg:w-1/2 z-20">
          <Link href={'/'} className="mb-2 flex items-center gap-2"><ArrowLeftIcon className="w-7 aspect-square" /> Volver al Inicio</Link>
          <div className="bg-gray-950/85 p-5 rounded-md shadow-md">
            {children}
          </div>
        </div>
      </div>
  );
}
