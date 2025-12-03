import { AllType, StackType } from "@/types";

export const getAll = async ({mood}: AllType) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/spotify/all?mood=${mood}`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        return await response.json();
    } catch (error) {
        throw error;
    }
}

export const getStack = async ({type, mood }: StackType) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/spotify/${type.replace(/s$/, '')}?mood=${mood}`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        return await response.json();
    } catch (error) {
        throw error;
    }
}

export const getCategories = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/spotify/categories`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        return await response.json();
    } catch (error) {
        throw error;
    }
}