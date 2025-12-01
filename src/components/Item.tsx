import { ItemType } from "@/types/item";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

export default function Item({image, name, author}: ItemType) {
    return (
        <div className="cursor-pointer hover:bg-gray-900 p-1 rounded transition-all duration-300 hover:scale-105">
            <img 
                className="w-full aspect-square object-cover rounded" 
                src={image} 
                alt={`${name} - ${author}`} 
            />
            <div className="p-1">
                <h3 className="text-sm truncate">{name}</h3>
                {author && <p className="text-sm text-gray-700 italic">{author}</p>}
            </div>
        </div>
    );
}