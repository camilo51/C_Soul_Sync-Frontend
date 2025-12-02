"use client";

import { useState } from 'react';
import { getAll } from '@/services/spotifyService';
import { getImageUrl } from '@/lib/utils';

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any>({});

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      const res = await getAll({ search: query });
      if (res.success) {
        setResults(res.data);
      }
    } catch (error) {
      console.error('Search error:', error);
    }
  };

  return (
    <div className="w-full rounded-xl bg-gray-900/70 p-4">
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for tracks, artists, albums..."
          className="flex-1 bg-gray-800 text-white rounded px-3 py-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {Object.keys(results).length > 0 && (
        <div className="mt-4 space-y-4">
          {['tracks', 'artists', 'albums', 'playlists'].map((type) => {
            const items = results[type]?.items || [];
            if (items.length === 0) return null;
            return (
              <div key={type}>
                <h3 className="text-white text-lg capitalize mb-2">{type}</h3>
                <div className="flex space-x-4 overflow-x-auto pb-2">
                  {items.slice(0, 10).map((item: any) => (
                    <div
                      key={item.id}
                      className="bg-gray-800 rounded-xl h-32 w-32 flex-shrink-0 flex flex-col"
                    >
                      <img
                        src={getImageUrl(item)}
                        alt={item.name}
                        className="w-full h-20 object-cover rounded-t-xl"
                      />
                      <p className="text-white text-xs p-2 truncate">{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}