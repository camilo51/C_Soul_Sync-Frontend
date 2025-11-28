'use client';
import { useParams } from "next/navigation";
import React from "react";

interface TracksProps {
  totalResults: number;
  itemsPerPage?: number;
}

const TracksView: React.FC<TracksProps> = ({ totalResults, itemsPerPage = 8 }) => {
  const params = useParams();
  const name = params?.name as string;

  const currentPage = 1;
  const totalPages = Math.ceil(totalResults / itemsPerPage);

  const tracks = Array.from({ length: itemsPerPage }, (_, i) => ({
    id: i + 1,
    title: `Track ${i + 1}`,
  }));

  return (
    <div className="p-6 bg-black min-h-screen text-yellow-400">
      <h1 className="text-3xl font-bold mb-6">Lista de {name}</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {tracks.map((track) => (
          <div
            key={track.id}
            className="rounded-lg bg-yellow-400 text-black p-6 text-center shadow-md hover:bg-yellow-300 transition min-h-[120px] flex items-center justify-center"
          >
            {track.title}
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mb-4 text-sm">
        <span>
          Mostrando de {1} a {itemsPerPage} de {totalResults} resultados
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
                  ? 'bg-yellow-400 text-black'
                  : 'hover:bg-yellow-400 hover:text-black'
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button className="px-2 py-1 border border-yellow-400 rounded hover:bg-yellow-400 hover:text-black transition">
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
};

export default TracksView;
