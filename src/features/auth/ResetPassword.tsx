'use client'

import Form from "@/components/Auth/Form";
import { ResetPassword as ResetPasswordService } from "@/services/authService";
import { ErrorType, SuccessType } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ResetPassword() {

    const params = useSearchParams();
    const token = params.get('token');
    const router = useRouter(); 

    const [data, setData] = useState({
        password: '',
        confirmPassword: ''
    })

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const response: SuccessType | ErrorType = await ResetPasswordService({token: token as string, password: data.password, confirmPassword: data.confirmPassword});
        if (!response.success) {
           toast.error(response.message);
           return; 
        }
        toast.success(response.message);
        router.push('/login');
    }

    return (
        <Form title="Cambiar Contraseña">
            <div className="mb-2">
                <label htmlFor="password" className="text-sm italic">
                    Nueva Contraseña
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full focus:outline-1 focus:outline-yellow-200 border border-gray-200 rounded p-2"
                    value={data.password}
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                />
            </div>
            <div className="mb-2">
                <label htmlFor="password" className="text-sm italic">
                    Confirmar Nueva Contraseña
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full focus:outline-1 focus:outline-yellow-200 border border-gray-200 rounded p-2"
                    value={data.confirmPassword}
                    onChange={(e) => setData({ ...data, confirmPassword: e.target.value })}
                />
            </div>
            <div className="mb-5">
                <button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-400 hover:outline-1 outline-transparent hover:outline-yellow-500 text-black text-lg font-bold py-2 px-4 rounded mt-4 uppercase hover:cursor-pointer transition-all duration-300"
                    onClick={handleSubmit}
                >
                    Confirmar
                </button>
            </div>
        </Form>
    )
}