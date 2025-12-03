'use client'

import { VerifyAccount } from "@/services/accountService";
import { ErrorType, SuccessType } from "@/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function VerifiedEmail() {

    const param = useSearchParams();
    const token = param?.get('token');
    const [data, setData] = useState<SuccessType | ErrorType>();
    console.log(token);
    
    useEffect(() => {
        (async () => {
            const response = await VerifyAccount(token as string);
            setData(response);
        })()
    }, [])

    return (
        <div>
            <p className={`${data?.success ? 'text-green-500' : 'text-red-500'} text-center font-bold text-2xl`}>{data?.message}</p>
        </div>
    );
}
