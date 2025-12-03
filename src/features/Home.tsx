"use client";

import VerifiedEmail from "@/components/VerifiedEmail";
import Section from "../components/Section";
import { useEffect, useState } from "react";
import { getAll } from "@/services/spotifyService";
import { ErrorType, SpotifySearchResponse, SuccessType } from "@/types";
import { toast } from "react-toastify";
import { useEmotionContext } from "@/contexts/EmotionContext";


export default function Home() {

  const [data, setData] = useState<SpotifySearchResponse>();
  const {emotion} = useEmotionContext();

  const sections = [
    { title: "Canciones", url: "/tracks", data: data?.tracks?.items},
    { title: "Álbumes", url: "/albums", data: data?.albums?.items },
    { title: "Listas de reproducción", url: "/playlists", data: data?.playlists?.items },
    { title: "Artistas", url: "/artists", data: data?.artists?.items },
  ];

  useEffect(() => {
    (async() => {
      const response: SuccessType | ErrorType = await getAll({mood: emotion.mood});
      if (!response.success) {
        toast.error(response.message);
        return;
      }
      setData(response.data);
    })()
  }, [emotion]);
  

  return (
    <div className="p-6 space-y-10">
      <VerifiedEmail />
      {sections.map((section, i) => (
        <Section
          key={i}
          title={section.title}
          url={section.url}
          data={section.data ?? []}
        />
      ))}
    </div>
  );
}
