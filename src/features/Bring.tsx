"use client";

import Item from "@/components/Item";
import Pagination from "@/components/Pagination";
import { oswald } from "@/lib/fonts";
import { getStack } from "@/services/spotifyService";
import { SpotifyResponse } from "@/types";
import { EmotionsType } from "@/types/emotios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// const ALLOWED_ROUTES = ["tracks", "artists", "albums", "playlists"];

export default function View() {
    const { name, page } = useParams();
    const router = useRouter();
    
    useEffect(() => {
        if (!page) {
            router.push("?page=1")
        }
    }, [page])

    
//     useEffect(() => {
//         if (name && !ALLOWED_ROUTES.includes(name as string)) {
//         router.push("/");
//     }
// }, [name, router]);
// if (!name || !ALLOWED_ROUTES.includes(name as string)) {
//     return null;
//     }
    
    const [data, setData] = useState<SpotifyResponse>();
    const names = {
      tracks: "Canciones",
      artists: "Artistas",
      albums: "Álbumes",
      playlists: "Reproducción"
    }
    const total = 50;
    const to = 10
    
    useEffect(() => {
        (async () => {
            const search: EmotionsType = localStorage.getItem("emotion") ? JSON.parse(localStorage.getItem("emotion") as string) : {};
            const result = await getStack({ type: name as string, mood: search.mood });
            setData(result);
        })();
    }, []);

    return (
        <div>
            <h2 className={`${oswald.className} text-4xl font-bold mb-5 uppercase`}>Lista de {names[name as keyof typeof names]}</h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                {name === 'tracks' && data?.data.tracks?.items.map((item) => (
                    <Item key={item.id} image={item.album.images[0].url} name={item.name} author={item.artists[0].name} />
                ))}
                {name === 'albums' && data?.data.albums?.items.map((item) => (
                    <Item key={item.id} image={item.images[0].url} name={item.name} />
                ))}
                {name === 'playlists' && data?.data.playlists?.items.filter((item: any) => item !== null).map((item) => (
                    <Item key={item?.id} image={item?.images[0]?.url} name={item?.name} />
                ))}
                {name === 'artists' && data?.data.artists?.items.map((item) => (
                    <Item key={item.id} image={item.images[0].url} name={item.name} />
                ))}
            </div>
            <Pagination from={Number(page)} to={to} total={total} />
        </div>
    );
}
