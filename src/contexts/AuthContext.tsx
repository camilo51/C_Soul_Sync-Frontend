"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { AuthContextType, ErrorType, LoginUserType, RegisterUserType, SuccessType, UserType } from "../../../types";
import { RegisterUser, LoginUser, LogoutUser } from "@/services/authService";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const [user, setUser] = useState<UserType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const saved = localStorage.getItem('user');
        if (saved) {
            setUser(JSON.parse(saved));
        }
        setLoading(false);
    }, []);
    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        }
    }, [user]);


    const handleAuthResponse = (response: SuccessType | ErrorType) => {
        if (!response.success) {
            toast.error(response.message);
            return;
        }
        toast.success(response.message);
        setUser(response.data.user as UserType);
        router.push("/");
    }

    const register = async ({ name, email, password, confirmPassword }: RegisterUserType) => {
        const response: SuccessType | ErrorType = await RegisterUser({ name, email, password, confirmPassword });
        handleAuthResponse(response);
    }
    const login = async ({ email, password }: LoginUserType) => {
        const response: SuccessType | ErrorType = await LoginUser({ email, password });
        handleAuthResponse(response);
    }

    const logout = async () => {
        const response: SuccessType | ErrorType = await LogoutUser();

        if (!response.success) {
            toast.error(response.message);
            return;
        }

        router.push("/login");
        localStorage.removeItem('user');
        setUser(null);
    }

    return <AuthContext.Provider value={{ user, loading, register, login, logout }}>{children}</AuthContext.Provider>;
}

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("AuthContext not found");
    return context;
}