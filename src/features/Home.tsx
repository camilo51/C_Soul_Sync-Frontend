"use client";

import Section from "../components/Section";
import { useSearch } from '../contexts/SearchContext';

export default function Home() {
  const section = [
    {title: 'Canciones', url: '/tracks'},
    {title: 'Álbumes', url: '/albums'},
    {title: 'Listas de reproducción', url: '/playlists'},
    {title: 'Artistas', url: '/artists'},
  ]

  return (
    <div className="p-6 space-y-10">
      {section.map((item, i) => (
        <Section key={i} title={item.title} url={item.url} />
      ))}
    </div>
  );
}


