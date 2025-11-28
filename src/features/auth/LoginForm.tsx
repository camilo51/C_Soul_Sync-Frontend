"use client";

import { useState } from "react";
import Link from "next/link";
import Form from "@/components/Auth/Form";
import { LoginUserType } from "../../../../types";
import { useAuthContext } from "@/contexts/AuthContext";

export default function LoginForm() {

    const { login } = useAuthContext()

    const defaultUser: LoginUserType = {
        email: "",
        password: ""
    };
    const [user, setUser] = useState<LoginUserType>(defaultUser);

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        await login(user);
    }

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
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
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
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                />
            </div>
            <Link href={"/auth/forgot-password"} className="text-sm inline-block mb-1 underline">
                Recuperar contraseña
            </Link>
            <div className="mb-5">
                <button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-400 hover:outline-1 outline-transparent hover:outline-yellow-500 text-black text-lg font-bold py-2 px-4 rounded mt-4 uppercase hover:cursor-pointer transition-all duration-300"
                    onClick={handleSubmit}
                >
                    Iniciar Sesión
                </button>
            </div>
            <div className="text-center">
                <p className="text-sm">
                    ¿No tienes cuenta?{" "}
                    <Link href={"/register"} className="text-blue-500">
                        Ir a registrarse
                    </Link>
                </p>
            </div>
        </Form>
    );
}
