'use client'

import { EmotionsContextType, EmotionsType } from "@/types/emotios";
import { createContext, useContext, useEffect, useState } from "react";
import { emotions } from "@/constants/emotions";

const EmotionContext = createContext<EmotionsContextType | undefined>(undefined);

export const EmotionProvider = ({children}: {children: React.ReactNode}) => {
    console.log('🔄 EmotionProvider render');
    const [emotion, setEmotionState] = useState<EmotionsType>(emotions[0]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const stored = sessionStorage.getItem('emotion');
        if (stored) {
            try {
                setEmotionState(JSON.parse(stored));
            } catch (error) {
                console.error('Error parsing stored emotion:', error);
            }
        }
        setMounted(true);
    }, []);

    const setEmotion = (emotion: EmotionsType) => {
        setEmotionState(emotion);
        if (mounted) {
            sessionStorage.setItem('emotion', JSON.stringify(emotion));
        }
    }

    return <EmotionContext.Provider value={{emotion, setEmotion}}>{children}</EmotionContext.Provider>
}

export const useEmotionContext = () => {
    const context = useContext(EmotionContext);
    if (!context) throw new Error('useEmotion must be used within a EmotionProvider');
    return context;
}