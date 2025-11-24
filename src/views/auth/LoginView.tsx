"use client";

import Form from "@/components/Auth/Form";
import Link from "next/link";

export default function LoginView() {
    return (
        <Form title="Ingresar">
            <div className="mb-2">
                <label htmlFor="email" className="text-sm italic">
                    Correo Electrónico
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full focus:outline-1 focus:outline-yellow-200 border border-gray-200 rounded p-2"
                />
            </div>
            <div className="mb-2">
                <label htmlFor="password" className="text-sm italic">
                    Contraseña
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full focus:outline-1 focus:outline-yellow-200 border border-gray-200 rounded p-2"
                />
            </div>
            <div className="mb-5">
                <button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-400 hover:outline-1 outline-transparent hover:outline-yellow-500 text-black text-lg font-bold py-2 px-4 rounded mt-4 uppercase hover:cursor-pointer transition-all duration-300"
                >
                    Iniciar Sesión
                </button>
            </div>
            <div className="text-center">
                <Link href={"/auth/forgot-password"} className="text-blue-500 text-sm inline-block mb-1">
                    Recuperar contraseña
                </Link>
                <p className="text-sm">
                    ¿No tienes cuenta?{" "}
                    <Link href={"/auth/register"} className="text-blue-500">
                        Ir a registrarse
                    </Link>
                </p>
            </div>
        </Form>
    );
}
