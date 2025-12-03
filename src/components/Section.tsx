"use client";

import { SectionType, SpotifyAlbum, SpotifyArtistFull, SpotifyPlaylist, SpotifyTrack } from '@/types';
import Link from 'next/link';
import Item from './Item';
import Skeleton from 'react-loading-skeleton';



export default function Section({ title, url,data}: SectionType) {
  console.log(data);
  
  if (!data || data.length === 0) {
    return (
      <div className="space-y-4">
        <Skeleton width={150} height={28} />
        <div className='grid grid-cols-2 md:grid-cols-5 gap-4 mb-6'>
          {[...Array(5)].map((_, i) => (
            <div key={i} className="p-1">
              <Skeleton className="w-full aspect-square rounded" />
              <div className="p-1 mt-2">
                <Skeleton width="80%" height={16} />
                <Skeleton width="60%" height={14} className="mt-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white uppercase">{title}</h2>
        <Link
          href={url}
          className="text-sm text-gray-400 hover:text-white cursor-pointer"
        >
          Ver todo
        </Link>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-5 gap-4 mb-6'>
        {url === '/tracks' ? data.map((item) => (
          <Item key={item.id} image={(item as SpotifyTrack).album.images[0].url} name={item.name} author={(item as SpotifyTrack).artists[0].name} />
        )) : data.filter((item: any) => item !== null).map((item, i) => (
          <Item key={i} image={(item as SpotifyArtistFull | SpotifyAlbum | SpotifyPlaylist)?.images[0]?.url} name={item?.name} />
        ))}
      </div>
    </div>
  );
}