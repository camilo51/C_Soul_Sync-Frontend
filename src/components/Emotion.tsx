'use client'

import { emotions } from "@/constants/emotions";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

export default function Emotion() {

    const [selected, setSelected] = useState(emotions[0])
    const [open, setOpen] = useState(false)
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        const stored = localStorage.getItem('emotion');
        if (stored) {
            setSelected(JSON.parse(stored));
        }
        setMounted(true);
    }, []);
    useEffect(() => {
        if (mounted) {
            localStorage.setItem('emotion', JSON.stringify(selected));
        }
    }, [selected, mounted]);

    if (!mounted) {
        return (
            <div className="relative">
                <div className="p-5 bg-gray-900 rounded flex justify-between items-center">
                    <Skeleton width={100} height={20} />
                    <ChevronDownIcon className="w-7 aspect-square" />
                </div>
            </div>
        );
    }

    return (
        <div className="relative">
            <div
                onClick={() => setOpen(!open)}
                className="p-5 bg-gray-900 rounded flex justify-between items-center cursor-pointer hover:bg-gray-800 transition-all duration-200"
            >
                <span>
                    {selected.icon} {selected.name}
                </span>
                <ChevronDownIcon className="w-7 aspect-square" />
            </div>
            <div
                className={`mt-2 bg-gray-900 rounded flex flex-col gap-2  absolute top-full w-full  transition-all duration-200 overflow-hidden ${
                    open ? "max-h-60 p-1" : "max-h-0 p-0"
                }`}
            >
                {emotions.map((emotion, i) => (
                    <div
                        key={i}
                        onClick={() => {
                            setSelected(emotion);
                            setOpen(!open);
                        }}
                        className="cursor-pointer bg-gray-800 hover:bg-gray-700 transition-all duration-200 p-2 rounded flex justify-between items-center"
                    >
                        {emotion.icon} {emotion.name}
                    </div>
                ))}
            </div>
        </div>
    );
}
