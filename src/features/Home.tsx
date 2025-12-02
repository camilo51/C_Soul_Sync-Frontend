"use client";

import { useAuthContext } from "@/contexts/AuthContext";
import { SendEmailVerify } from "@/services/accountService";
import { useState } from "react";
import { Audio } from "react-loader-spinner";
import { toast } from "react-toastify";

export default function Home() {

  const {user} = useAuthContext();
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
  }
  return (
    <div className="space-y-10">
      {user?.verified === false && (
        <div className="w-full bg-yellow-500 p-3 rounded flex justify-between items-center gap-5 flex-wrap">
          <p className="text-black">
            📧 Verifica tu correo electrónico para activar todas las funciones de tu cuenta.
          </p>
            <button onClick={verifyAccount} disabled={loading} className={`p-2 bg-gray-950 text-white rounded w-52 cursor-pointer hover:bg-gray-900 transition-colors disabled:bg-gray-600 disabled:cursor-auto flex gap-2 items-center justify-center`}>
              {loading && <Audio width={15} height={15} color="white"/>}
              Verificar
            </button>
        </div>
      )}
      <div className="w-full h-24 rounded-xl bg-gray-900/70 p-4">
        <h2 className="text-gray-300 text-lg">Search or something here</h2>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Tracks</h2>
        <a className="text-sm text-gray-400 hover:text-white cursor-pointer">
          View all
        </a>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="bg-gray-900/70 rounded-xl h-28 hover:bg-gray-800 transition cursor-pointer"
          />
        ))}
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Albums</h2>
        <a className="text-sm text-gray-400 hover:text-white cursor-pointer">
          View all
        </a>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="bg-gray-900/70 rounded-xl h-28 hover:bg-gray-800 transition cursor-pointer"
          />
        ))}
      </div>

    </div>
  );
}


