import { CardType } from "@/types";

export default function Card({title, description, button}: CardType) {
    return (
        <div className="w-full bg-gray-200 p-4 rounded space-y-1">
            <h2 className="text-md font-bold">{title}</h2>
            <p className="text-sm">{description}</p>
            <div className="flex justify-end">
                <button className="bg-amber-500 py-2 px-5 rounded text-black text-sm mt-2 cursor-pointer">{button}</button>
            </div>
        </div>  
    );
}
