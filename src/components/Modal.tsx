'use client'

import { ModalType } from "@/types";

export default function Modal({title, description, onClose, onConfirm}: ModalType) {
  return (
    <div className=" w-full h-full bg-black/50 fixed inset-0 flex justify-center items-center">
        <div className="bg-gray-900 w-4/12 h-4/12 p-5 rounded flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold text-center uppercase">{title}</h2>
            <p className="mt-2 w-2/3 text-center">{description}</p>
            <div className="mt-5 flex gap-2">
                <button className="bg-gray-500 py-3 px-5 rounded cursor-pointer hover:bg-gray-400" onClick={onClose}>Cerrar</button>
                <button className="bg-red-500 py-3 px-5 rounded cursor-pointer hover:bg-red-400" onClick={onConfirm}>Confirmar</button>
            </div>
        </div>
    </div>
  );
}
