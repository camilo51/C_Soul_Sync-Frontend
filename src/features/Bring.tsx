"use client";

import Item from "@/components/Item";
import Pagination from "@/components/Pagination";
import { useEmotionContext } from "@/contexts/EmotionContext";
import { oswald } from "@/lib/fonts";
import { getStack } from "@/services/spotifyService";
import { SpotifyResponse } from "@/types";
import { EmotionsType } from "@/types/emotios";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ALLOWED_ROUTES = ["tracks", "artists", "albums", "playlists"];
const ITEMS_PER_PAGE = 10;

export default function View() {
    const { name } = useParams();
    const searchParams = useSearchParams();
    const page = searchParams.get('page');
    const router = useRouter();
    const currentPage = Number(page) || 1;
    const { emotion } = useEmotionContext();
    const [data, setData] = useState<SpotifyResponse>();
    const names = {
      tracks: "Canciones",
      artists: "Artistas",
      albums: "Álbumes",
      playlists: "Reproducción"
    }

    useEffect(() => {
        if (name && !ALLOWED_ROUTES.includes(name as string)) {
            router.push("/");
        }
    }, [name, router]);
    useEffect(() => {
        if (!name || !ALLOWED_ROUTES.includes(name as string)) return;
        (async () => {
            const result = await getStack({ type: name as string, mood: emotion.mood });
            setData(result);
        })();
    }, [emotion, name]);
    

    const paginateItems = (items: any[]) => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        return items.slice(startIndex, endIndex);
    };

    const getItems = () => {
        if (!data) return [];
        
        switch(name) {
            case 'tracks':
                return data.data.tracks?.items || [];
            case 'albums':
                return data.data.albums?.items || [];
            case 'playlists':
                return data.data.playlists?.items.filter((item: any) => item !== null) || [];
            case 'artists':
                return data.data.artists?.items || [];
            default:
                return [];
        }
    };

    const allItems = getItems();
    const paginatedItems = paginateItems(allItems);
    const total = allItems.length;

    return (
        <div>
            <h2 className={`${oswald.className} text-4xl font-bold mb-5 uppercase`}>Lista de {names[name as keyof typeof names]}</h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                {name === 'tracks' && paginatedItems.map((item) => (
                    <Item key={item.id} image={item?.album?.images[0]?.url} name={item.name} author={item.artists[0].name} />
                ))}
                {name === 'albums' && paginatedItems.map((item) => (
                    <Item key={item.id} image={item.images[0]?.url} name={item.name} />
                ))}
                {name === 'playlists' && paginatedItems.filter((item: any) => item !== null).map((item) => (
                    <Item key={item?.id} image={item?.images[0]?.url} name={item?.name} />
                ))}
                {name === 'artists' && paginatedItems.map((item) => (
                    <Item key={item.id} image={item.images[0]?.url} name={item.name} />
                ))}
            </div>
            <Pagination from={currentPage} to={ITEMS_PER_PAGE} total={total} />
        </div>
    );
}
