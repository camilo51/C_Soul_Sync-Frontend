import { RegisterUserType } from "@/types";


export const RegisterUser = async (data : RegisterUserType) => {
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