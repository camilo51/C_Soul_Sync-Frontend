import { LoginUserType, RegisterUserType } from "@/types";


export const RegisterUser = async (data: RegisterUserType) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`, {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        return await response.json();
    } catch (error) {
        throw error;
    }
}

export const LoginUser = async (data: LoginUserType) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        return await response.json();
    } catch (error) {
        throw error;
    }
}

export const LogoutUser = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/logout`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        })
        return await response.json();
    } catch (error) {
        throw error;
    }
}

export const UpdateUser = async (name: string) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/update`, {
            method: "PUT",
            credentials: "include",
            body: JSON.stringify({ name }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        return await response.json();
    } catch (error) {
        throw error;
    }
}

export const DeleteUser = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/delete`, {
            method: "DELETE",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        })
        return await response.json();
    } catch (error) {
        throw error;
    }
}

export const ForgotPassword = async (email: string) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/forgot-password`, {
            method: "POST",
            credentials: "include",
            body: JSON.stringify({ email }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        return await response.json();
    } catch (error) {
        throw error;
    }
}