"use client";

import { useAuthContext } from "@/contexts/AuthContext";
import { SendEmailVerify } from "@/services/accountService";
import { useState } from "react";
import { Audio } from "react-loader-spinner";
import { toast } from "react-toastify";

export default function VerifiedEmail() {
    const { user } = useAuthContext();
    const [loading, setLoading] = useState(false);

    const verifyAccount = async () => {
        setLoading(true);
        const response = await SendEmailVerify(user?.email as string);
        if (!response.success) {
            toast.error(response.message);
            return;
        }
        toast.success(response.message);
        setLoading(false);
    };
    return (
        user?.verified === false && (
        <div className="w-full bg-yellow-500 p-3 rounded flex justify-between items-center gap-5 flex-wrap">
          <p className="text-black">
            📧 Verifica tu correo electrónico para activar todas las funciones de tu cuenta.
          </p>
            <button onClick={verifyAccount} disabled={loading} className={`p-2 bg-gray-950 text-white rounded w-52 cursor-pointer hover:bg-gray-900 transition-colors disabled:bg-gray-600 disabled:cursor-auto flex gap-2 items-center justify-center`}>
              {loading && <Audio width={15} height={15} color="white"/>}
              Verificar
            </button>
        </div>
      ));
}
