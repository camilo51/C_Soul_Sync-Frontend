'use client'

import Link from "next/link";

export default function Nav() {
    return (
        <nav className="flex gap-5 items-center">
            <Link href={'/register'} className="p-2 text-sm">Registrarse</Link>
            <Link href={'/login'} className="bg-yellow-500 p-2 w-40 text-center rounded text-black text-sm">Iniciar Sesión</Link>
        </nav>
    );
}
