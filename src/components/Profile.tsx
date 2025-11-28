'use client'

import { useAuthContext } from "@/contexts/AuthContext";
import Link from "next/link";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function Profile() {
    const {user} = useAuthContext();

    return (
        <Link href={'/profile'}  className="p-5 bg-gray-900 rounded text-center inline-block w-full">
            <p className="text-md font-bold">{user?.name || <Skeleton width={100} />}</p>
            <p className="text-sm italic text-gray-500">{user?.email || <Skeleton width={150} />}</p>
        </Link>
    );
}
