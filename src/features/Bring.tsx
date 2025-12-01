"use client";

import Item from "@/components/Item";
import { oswald } from "@/lib/fonts";
import { getAll, getStack } from "@/services/spotifyService";
import { SpotifyResponse } from "@/types";
import { EmotionsType } from "@/types/emotios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ALLOWED_ROUTES = ["tracks", "artists", "albums", "playlists"];

export default function View() {
    const { name } = useParams();
    const router = useRouter();
    
    useEffect(() => {
      if (name && !ALLOWED_ROUTES.includes(name as string)) {
        router.push("/");
      }
    }, [name, router]);
    if (!name || !ALLOWED_ROUTES.includes(name as string)) {
        return null;
    }
    
    const [data, setData] = useState<SpotifyResponse>();
    const names = {
      tracks: "Canciones",
      artists: "Artistas",
      albums: "Álbumes",
      playlists: "Reproducción"
    }
    
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

            {/* <div className="flex justify-between items-center mb-4 text-sm">
                <span>
                    Mostrando de {1} a {itemsPerPage} de {totalResults}{" "}
                    resultados
                </span>
                <div className="flex gap-2">
                    <button className="px-2 py-1 border border-yellow-400 rounded hover:bg-yellow-400 hover:text-black transition">
                        Anterior
                    </button>
                    {[...Array(totalPages)].map((_, i) => (
                        <button 
                            key={i}
                            className={`px-2 py-1 border border-yellow-400 rounded transition ${
                                i + 1 === currentPage
                                    ? "bg-yellow-400 text-black"
                                    : "hover:bg-yellow-400 hover:text-black"
                            }`}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button className="px-2 py-1 border border-yellow-400 rounded hover:bg-yellow-400 hover:text-black transition">
                        Próximo
                    </button>
                </div>
            </div> */}
        </div>
    );
}
