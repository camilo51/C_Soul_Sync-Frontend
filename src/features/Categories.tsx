"use client";
import { useParams, useSearchParams } from "next/navigation";
import Pagination from "@/components/Pagination";
import { oswald } from "@/lib/fonts";
import { useEffect, useState } from "react";
import { getCategories } from "@/services/spotifyService";
import { CategoriesResponseType, SpotifyCategory } from "@/types";
import Item from "@/components/Item";

const ITEMS_PER_PAGE = 10;

export default function Categories() {
    
    const [data, setData] = useState<CategoriesResponseType>();
    const searchParams = useSearchParams();
    const page = searchParams.get('page');
    const currentPage = Number(page) || 1;

    useEffect(() => {
        (async ()=> {
            const response = await getCategories();
            setData(response);
        })()
    }, [])

    
    const paginateItems = (items: any[]) => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        return items.slice(startIndex, endIndex);
    };
    const paginatedItems: SpotifyCategory[] = paginateItems(data?.data.categories.items ?? []);
    const total = data?.data.categories.items.length;

    return (
        <>
            <div className="h-64 mb-5 relative overflow-hidden rounded before:w-full before:h-full before:absolute before:top-0 before:left-0 before:z-20 before:bg-black/80 before:content-[''] flex justify-center items-center">
                <img src="/categories.jpg" alt="background de categorias" className="w-full h-full object-cover absolute z-10" />
                <h1 className={`${oswald.className} relative z-30 text-6xl uppercase font-bold text-yellow-500`}>Categorías</h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                {paginatedItems.map(item => (
                    <Item key={item.id} image={item.icons[0].url} name={item.name} />
                ))}
            </div>
            <Pagination from={currentPage} to={ITEMS_PER_PAGE} total={total as number} />
        </>
    );
}
