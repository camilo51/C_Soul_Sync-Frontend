"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { AuthContextType, ErrorType, LoginUserType, RegisterUserType, SuccessType, UserType } from "@/types";
import { RegisterUser } from "@/services/authService";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const [user, setUser] = useState<UserType | null>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('user');
            return saved ? JSON.parse(saved) : null;
        }
        return null;
    });

    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        }
    }, [user]);

    const register = async ({ name, email, password, confirmPassword }: RegisterUserType) => {
        const response: SuccessType | ErrorType = await RegisterUser({ name, email, password, confirmPassword });
        if(!response.success){
            toast.error(response.message);
            return;
        }
        toast.success(response.message);
        setUser(response.data.user as UserType);
        router.push("/");
    }
    const login = async ({ email, password }: LoginUserType) => {
        console.log("Login function to be implemented");
    }

    const logout = () => {
        setUser(null);
        router.push("/login");
    }

    return <AuthContext.Provider value={{ user, register, login, logout }}>{children}</AuthContext.Provider>;
}

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("AuthContext not found");
    return context;
}