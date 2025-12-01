'use client';
import { useParams } from "next/navigation";
import Pagination from "@/components/Pagination";

export default function Genre() {
  const params = useParams();
  const name = params?.name as string;

  const totalResults = 32;
  const itemsPerPage = 8;

  const genres = Array.from({ length: itemsPerPage }, (_, i) => ({
    id: i + 1,
    label: `Género ${i + 1}`,
  }));

  return (
    <div className="p-6 min-h-screen text-yellow-400">
      <div
        className="relative w-full h-[300px] flex items-center justify-center mb-10 rounded-lg overflow-hidden"
        style={{
          backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/800px-Flag_of_Peru.svg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <h1 className="relative text-6xl font-extrabold uppercase tracking-wide text-center text-yellow-400 z-10">
          Género: {name}
        </h1>
      </div>

      <p className="text-lg md:text-xl text-yellow-600 text-center mb-10">
        Explora las mejores opciones del género {name}.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {genres.map((genre) => (
          <div
            key={genre.id}
            className="rounded-lg bg-yellow-400 text-black p-6 text-center shadow-md hover:bg-yellow-300 transition min-h-[120px] flex items-center justify-center"
          >
            {genre.label}
          </div>
        ))}
      </div>

      <Pagination totalResults={totalResults} itemsPerPage={itemsPerPage} />
    </div>
  );
}
