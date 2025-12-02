
export const SendEmailVerify = async (email: string) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/email/send-email-verify`, {
            method: 'POST',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email})
        })
        return response.json()
    } catch (error) {
        throw error;
    }
}

export const VerifyAccount = async (token: string) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/email/verify-account`, {
            method: 'POST',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token})
        })
        return response.json()
    } catch (error) {
        throw error;
    }
}