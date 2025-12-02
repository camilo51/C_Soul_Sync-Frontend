'use client'

import { emotions } from "@/constants/emotions";
import { useEmotionContext } from "@/contexts/EmotionContext";
import { EmotionsType } from "@/types/emotios";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

export default function Emotion() {
    const {emotion, setEmotion} = useEmotionContext()
    const [open, setOpen] = useState(false)

    const handleEmotion = (newEmotion: EmotionsType) => {
        setEmotion(newEmotion)
        setOpen(!open);
    }

    return (
        <div className="relative">
            <div
                onClick={() => setOpen(!open)}
                className="p-5 bg-gray-900 rounded flex justify-between items-center cursor-pointer hover:bg-gray-800 transition-all duration-200"
            >
                <span>
                    {emotion.icon} {emotion.name}
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
                        onClick={() => handleEmotion(emotion)}
                        className="cursor-pointer bg-gray-800 hover:bg-gray-700 transition-all duration-200 p-2 rounded flex justify-between items-center"
                    >
                        {emotion.icon} {emotion.name}
                    </div>
                ))}
            </div>
        </div>
    );
}
