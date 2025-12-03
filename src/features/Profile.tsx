'use client'

import { useAuthContext } from "@/contexts/AuthContext";
import { oswald } from "@/lib/fonts";
import Skeleton from "react-loading-skeleton";
import moment from "moment";
import "moment/locale/es";
import { useEffect, useState } from "react";
import { PencilIcon } from "@heroicons/react/16/solid";
import VerifiedEmail from "@/components/VerifiedEmail";
import { DeleteUser, ForgotPassword, UpdateUser } from "@/services/authService";
import { ErrorType, SuccessType } from "@/types";
import { toast } from "react-toastify";
import { Audio } from "react-loader-spinner";
import Modal from "@/components/Modal";
import { useRouter } from "next/navigation";

moment.locale("es");

export default function Profile() {
  
    const router = useRouter();
    const {user} = useAuthContext();
    const [name, setName] = useState("");
    const [editInformation, setEditInformation] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (user?.name) {
            setName(user.name);
        }
    }, [user]);

    const handleChangeInformation = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        if (user?.name) {
            const response: SuccessType | ErrorType = await UpdateUser(name);
            if (!response.success) {
                toast.error(response.message);
                return;
            }
            const infoUser = localStorage.getItem('user');
            if (infoUser) {
                const user = JSON.parse(infoUser);
                user.name = name;
                localStorage.setItem('user', JSON.stringify(user));
            }
            toast.success(response.message);
            setEditInformation(false);
        }
}

    const handleResetPassword = async () => {
        if (user?.email) {
            setLoading(true);
            const response: SuccessType | ErrorType = await ForgotPassword(user.email);
            if (!response.success) {
                toast.error(response.message);
                return;
            }
            toast.success(response.message);
            setLoading(false)
        }
    }

    const handleConfirm = async () => {
        const response = await DeleteUser();
        if (!response.success) {
            toast.error(response.message);
            return;
        }
        toast.success(response.message);
        localStorage.removeItem('user');
        setShowModal(false);
        router.push('/');
    };

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <div className="relative">
            {showModal && (
                <Modal title={'Eliminar cuenta'} description={'Esta acción es irreversible. ¿Estás seguro de que quieres eliminar tu cuenta?'} onClose={handleClose} onConfirm={handleConfirm} />
            )}
            <div className="flex flex-col justify-center items-center p-5 bg-gray-900 rounded mb-5">
                <h2 className={`${oswald.className} text-5xl font-bold mb-2 uppercase`}>{user?.name || <Skeleton width={500} />}</h2>
                <p className="text-gray-700 italic text-sm mb-2">{user?.email || <Skeleton width={200} />}</p>
                <p className="text-sm text-gray-700 italic">Perfil creado {moment(user?.createdAt).fromNow()}.</p>
            </div>
            <div className="w-2/3 mx-auto">
                <VerifiedEmail />
                 
                <div className="mt-5">
                    <div className="border-b border-gray-800 mb-5 pb-2 flex justify-between items-center">
                        <h3 className="text-2xl font-bold">Información del Perfil</h3>
                        <button onClick={() => setEditInformation(!editInformation)} className="p-1 border border-gray-800 rounded-md hover:bg-gray-800 cursor-pointer">
                            <PencilIcon className="w-7 aspect-square" />
                        </button>
                    </div>
                    <form>
                        <div className="grid grid-cols-2 gap-5">
                            <div className="flex flex-col mb-4">
                                <label htmlFor="name" className="text-sm italic text-gray-700">Nombre</label>
                                <input 
                                    type="text" 
                                    className="p-2 border border-gray-300 rounded outline-none disabled:bg-gray-700 disabled:text-gray-500 disabled:border-gray-500" 
                                    id="name" 
                                    placeholder="Escriba un nombre"   
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    disabled={!editInformation}
                                    required
                                />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label htmlFor="email" className="text-sm italic text-gray-700">Correo Electronico</label>
                                <input 
                                    type="email" 
                                    className="p-2 border border-gray-300 rounded outline-none disabled:bg-gray-700 disabled:text-gray-500 disabled:border-gray-500" 
                                    id="email" 
                                    placeholder="Escriba un email"   
                                    value={user?.email || ''}
                                    disabled
                                />
                            </div>
                        </div>
                        {editInformation && (
                            <div className="flex justify-end">
                                <button className="bg-yellow-500 p-2 w-44 text-black rounded uppercase font-bold cursor-pointer" onClick={(e) => handleChangeInformation(e)}>Guardar Cambios</button>
                            </div>
                        )}
                    </form>
                </div>
                <div className="mt-5">
                    <div className="border-b border-gray-800 mb-5 pb-2 flex justify-between items-center">
                        <h3 className="text-2xl font-bold">Seguridad</h3>
                    </div>
                    <div>
                        <p className="mb-2">¿Necesitas cambiar tu contraseña? Solo haz clic en el siguiente botón para hacerlo fácilmente.</p>
                        <button 
                            className="py-2 p-4 flex gap-2 bg-yellow-500 text-black rounded uppercase font-bold cursor-pointer disabled:cursor-auto disabled:bg-yellow-300" 
                            onClick={handleResetPassword}
                            disabled={loading}
                        >
                            {loading && <Audio width={15} height={15} color="black"/>}
                            Cambiar Contraseña
                        </button>
                        <div className="mt-2 bg-gray-900 p-2 rounded">
                            <p className="font-bold text-md mb-1">Consejos:</p>
                            <ul>
                                <li className="text-sm italic list-disc ml-4">Usa una contraseña única y difícil de adivinar.</li>
                                <li className="text-sm italic list-disc ml-4">No compartas tu clave con nadie.</li>
                                <li className="text-sm italic list-disc ml-4">Mantén tu correo verificado para recuperar tu cuenta fácilmente.</li>
                            </ul>
                        </div>
                    </div>
                </div>        
                <div className="mt-8">
                    <div className="border-b border-gray-800 mb-5 pb-2 flex justify-between items-center">
                        <h3 className="text-2xl font-bold">Configuración avanzada</h3>
                    </div>
                    <div>
                        <p className="mb-2">Esta acción eliminará tu cuenta y todos tus datos de manera permanente. No podrás recuperarla después.</p>
                        <button 
                            className="py-2 p-4 flex gap-2 bg-red-200 border border-red-400 text-red-800 hover:bg-red-300 rounded uppercase font-bold cursor-pointer transition-all duration-150" 
                            onClick={() => setShowModal(true)}
                        >
                            Eliminar Cuenta
                        </button>
                    </div>
                </div>        
            </div>
        </div>
    );
}
