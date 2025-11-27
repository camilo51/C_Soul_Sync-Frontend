'use client'
import { useAuthContext } from "@/contexts/AuthContext";
import Image from "next/image";

export default function Home() {
  

    const {user} = useAuthContext();
    console.log(user);
    
    return (
        <div className="">
        
        </div>
    );
}
