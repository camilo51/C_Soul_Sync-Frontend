'use client';
import { useParams } from "next/navigation";

export default function Bring() {
  const params = useParams();
  const name = params?.name as string;

  const totalResults = 32;
  const itemsPerPage = 8;
  const currentPage = 1;
  const totalPages = Math.ceil(totalResults / itemsPerPage);

  const tracks = Array.from({ length: itemsPerPage }, (_, i) => ({
    id: i + 1,
    title: `Track ${i + 1}`,
  }));

  // Capitalize first letter of name for display
  const displayName = name ? name.charAt(0).toUpperCase() + name.slice(1) : '';

  return (
    <div className="p-6 bg-black min-h-screen text-yellow-400">
      <h1 className="text-6xl font-extrabold mb-2 uppercase tracking-wide">{displayName}</h1>
      <h2 className="text-2xl mb-8">Lista de canciones</h2>

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
        <span>Mostrando de {1} a {itemsPerPage} de {totalResults} resultados</span>
        <div className="flex gap-2">
          <button className="px-2 py-1 border border-yellow-400 rounded hover:bg-yellow-400 hover:text-black transition">
            Anterior
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`px-2 py-1 border border-yellow-400 rounded transition ${i + 1 === currentPage
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
}
