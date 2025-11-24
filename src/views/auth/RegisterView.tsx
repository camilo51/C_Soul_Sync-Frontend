"use client";

import Form from "@/components/Auth/Form";
import Link from "next/link";
import { useState } from "react";

interface User {
    name: string;
    lastname: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export default function RegisterView() {
    const defaultUser: User = {
        name: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
    };
    const [user, setUser] = useState<User>(defaultUser);

    return (
        <Form title="Registrarse">
            <div className="grid grid-cols-2 gap-4 mb-2">
                <div>
                    <label htmlFor="name" className="text-sm italic">
                        Nombre
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full focus:outline-1 focus:outline-yellow-200 border border-gray-200 rounded p-2"
                        value={user.name}
                        onChange={(e) =>
                            setUser({ ...user, name: e.target.value })
                        }
                    />
                </div>
                <div>
                    <label htmlFor="lastname" className="text-sm italic">
                        Apellido
                    </label>
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        className="w-full focus:outline-1 focus:outline-yellow-200 border border-gray-200 rounded p-2"
                        value={user.lastname}
                        onChange={(e) =>
                            setUser({ ...user, lastname: e.target.value })
                        }
                    />
                </div>
            </div>
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
                    onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                    }
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
                    onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                    }
                />
            </div>
            <div className="mb-2">
                <label htmlFor="confirmPassword" className="text-sm italic">
                    Repetir Contraseña
                </label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="w-full focus:outline-1 focus:outline-yellow-200 border border-gray-200 rounded p-2"
                    value={user.confirmPassword}
                    onChange={(e) =>
                        setUser({ ...user, confirmPassword: e.target.value })
                    }
                />
            </div>
            <div className="mb-5">
                <button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-400 hover:outline-1 outline-transparent hover:outline-yellow-500 text-black text-lg font-bold py-2 px-4 rounded mt-4 uppercase hover:cursor-pointer transition-all duration-300"
                >
                    Crear Cuenta
                </button>
            </div>
            <div className="text-center">
                <p className="text-sm">
                    ¿Ya tienes una cuenta?{" "}
                    <Link href={"/auth/login"} className="text-blue-500">
                        Ir a iniciar sesión
                    </Link>
                </p>
            </div>
        </Form>
    );
}
