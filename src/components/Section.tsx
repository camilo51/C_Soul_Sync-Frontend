"use client";

import { SectionType } from '@/types';
import Link from 'next/link';
import Item from './Item';



export default function Section({ title, url,data}: SectionType) {

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <Link
          href={url}
          className="text-sm text-gray-400 hover:text-white cursor-pointer"
        >
          Ver todo
        </Link>
      </div>
      <div>
        {url === '/tracks' && data.tracks?.items.map((item) => (
          <Item key={item.id} image={item.album.images[0].url} name={item.name} author={item.artists[0].name} />
        ))}
        {url === '/albums' && data.albums?.items.map((item) => (
          <Item key={item.id} image={item.images[0].url} name={item.name}/>
        ))}
        {url === '/playlists' && data.playlists?.items.filter((item) => item != null).map((item) => (
          <Item key={item.id} image={item.images[0].url} name={item.name}/>
        ))}
        {url === '/artists' && data.artists?.items.map((item) => (
          <Item key={item.id} image={item.images[0].url} name={item.name}/>
        ))}
      </div>
    
    
    </div>
  );
}