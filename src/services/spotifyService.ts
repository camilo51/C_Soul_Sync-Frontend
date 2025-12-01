import { AllTypes, StackTypes } from "@/types";

export const getAll = async ({search}: AllTypes) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/spotify/all?search=${search}`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        return await response.json()
    } catch (error) {
        throw error;
    }
}

export const getStack = async ({type, mood, search}: StackTypes) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/spotify/${type.replace(/s$/, '')}?mood=${mood}${search ? '&search='+search : ''}`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            next: {
                revalidate: 900
            }
        })
        return await response.json()
    } catch (error) {
        throw error;
    }
}