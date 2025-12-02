export type EmotionsType = {
    mood: string;
    icon: string;
    name: string;
} 

export type EmotionsContextType = {
    emotion: EmotionsType;
    setEmotion: (emotion: EmotionsType) => void;
}