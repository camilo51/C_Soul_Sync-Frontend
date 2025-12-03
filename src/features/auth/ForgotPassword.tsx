'use client' 

import Form from "@/components/Auth/Form";
import { ForgotPassword as ForgotPasswordService } from "@/services/authService";
import { ErrorType, SuccessType } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ForgotPassword() {

    const [email, setEmail] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const response: SuccessType | ErrorType = await ForgotPasswordService(email);

        if (!response.success) {
            toast.error(response.message);
            return;
        }
        toast.success(response.message);
        router.push('/login')
    }

    return (
        <Form title="Recuperar mi contraseña">
            <div className="mb-2">
                <label htmlFor="email" className="text-sm italic">
                    Correo Electrónico
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full focus:outline-1 focus:outline-yellow-200 border border-gray-200 rounded p-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-400 hover:outline-1 outline-transparent hover:outline-yellow-500 text-black text-lg font-bold py-2 px-4 rounded mt-4 uppercase hover:cursor-pointer transition-all duration-300"
                    onClick={handleSubmit}
                >
                    Enviar Email
                </button>
            </div>
        </Form>
    )
}