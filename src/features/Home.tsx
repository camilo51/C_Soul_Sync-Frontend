"use client";

import Section from "../components/Section";
import { useSearch } from "../contexts/SearchContext";

export default function Home() {
  const { searchResults } = useSearch();

  const sections = [
    { title: "Canciones", url: "/tracks", key: "tracks" },
    { title: "Álbumes", url: "/albums", key: "albums" },
    { title: "Listas de reproducción", url: "/playlists", key: "playlists" },
    { title: "Artistas", url: "/artists", key: "artists" },
  ];

  return (
    <div className="p-6 space-y-10">
      {sections.map((section) => (
        <Section
          key={section.key}
          title={section.title}
          url={section.url}
          data={searchResults}
        />
      ))}
    </div>
  );
}
