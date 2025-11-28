"use client";

import { useAuthContext } from "@/contexts/AuthContext";
import {
    ArrowLeftEndOnRectangleIcon,
    HeartIcon,
    HomeIcon,
    ListBulletIcon,
    RectangleStackIcon,
    UserIcon,
    UserPlusIcon,
} from "@heroicons/react/16/solid";
import Link from "next/link";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";

export default function Navigation() {
    const { user, loading, logout } = useAuthContext();

    if (loading) {
        return (
            <nav className="flex flex-col gap-2">
                <div className="flex gap-2 items-center p-2">
                    <Skeleton circle width={28} height={28} />
                    <Skeleton width={100} height={20} />
                </div>
                <div className="flex gap-2 items-center p-2">
                    <Skeleton circle width={28} height={28} />
                    <Skeleton width={80} height={20} />
                </div>
                <div className="flex gap-2 items-center p-2">
                    <Skeleton circle width={28} height={28} />
                    <Skeleton width={120} height={20} />
                </div>
                <div className="flex gap-2 items-center p-2">
                    <Skeleton circle width={28} height={28} />
                    <Skeleton width={110} height={20} />
                </div>
            </nav>
        );
    }

    return (
        <nav className="flex flex-col gap-3">
            <Link
                href="/"
                className="flex gap-2 items-center p-2 rounded font-bold hover:bg-gray-900"
            >
                <HomeIcon className="w-7 aspect-square" /> Inicio
            </Link>
            <Link
                href="/genders"
                className="flex gap-2 items-center p-2 rounded font-bold hover:bg-gray-900"
            >
                <RectangleStackIcon className="w-7 aspect-square" /> Generos
            </Link>

            {!user ? (
                <>
                    <Link
                        href="/register"
                        className="flex gap-2 items-center p-2 rounded font-bold hover:bg-gray-900"
                    >
                        <UserPlusIcon className="w-7 aspect-square relative left-1" />
                        Registrarse
                    </Link>
                    <Link
                        href="/login"
                        className="flex gap-2 items-center bg-yellow-500 p-2 text-black rounded font-bold hover:bg-yellow-400"
                    >
                        <UserIcon className="w-7 aspect-square" /> Iniciar
                        Sesión
                    </Link>
                </>
            ) : (
                <>
                    <Link
                        href="/profile"
                        className="flex gap-2 items-center p-2 rounded font-bold hover:bg-gray-900"
                    >
                        <UserIcon className="w-7 aspect-square" />
                        Perfil
                    </Link>
                    <Link
                        href="/playlists"
                        className="flex gap-2 items-center p-2 rounded font-bold hover:bg-gray-900"
                    >
                        <ListBulletIcon className="w-7 aspect-square" /> Mis
                        Playlists
                    </Link>
                    <Link
                        href="/favorites"
                        className="flex gap-2 items-center p-2 rounded font-bold hover:bg-gray-900"
                    >
                        <HeartIcon className="w-7 aspect-square" /> Mis
                        Favoritas
                    </Link>
                    <button
                        onClick={logout}
                        className="flex gap-2 items-center bg-yellow-500 p-2 text-black rounded font-bold hover:bg-yellow-400 cursor-pointer"
                    >
                        <ArrowLeftEndOnRectangleIcon className="w-7 aspect-square" />{" "}
                        Cerrar Sesión
                    </button>
                </>
            )}
        </nav>
    );
}
