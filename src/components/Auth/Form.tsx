'use client'

import { oswald } from "@/lib/fonts";

interface FormProps {
    title: string;
    children: React.ReactNode;
}

export default function Form({ title, children }: FormProps) {
    return (
        <form>
            <fieldset>
                <legend className={`${oswald.className} text-5xl font-bold uppercase text-center mb-5`}>{title}</legend>
                {children}
            </fieldset>
        </form>
    )
}