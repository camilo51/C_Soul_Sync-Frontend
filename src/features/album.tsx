'use client';
import { useParams } from "next/navigation";

export default function Album() {
  const params = useParams();
  const albumId = params?.id as string;

  const album = {
    title: "Nightmare",
    artist: "Avenged Sevenfold",
    year: "2010",
    coverUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Avenged_Sevenfold_-_Nightmare.png/250px-Avenged_Sevenfold_-_Nightmare.png",
    description: "While your nightmare comes to life",
  };

  const tracks = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Canción ${i + 1}`,
    duration: "3:45",
  }));

  return (
    <div className="p-6 min-h-screen text-yellow-400">
      <div
        className="relative w-full h-[350px] flex items-center justify-center mb-10 rounded-lg overflow-hidden"
        style={{
          backgroundImage: `url('${album.coverUrl}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 backdrop-blur-md bg-black/60" />
        <img
          src={album.coverUrl}
          alt={album.title}
          className="relative w-48 h-48 rounded-lg shadow-lg z-10 object-cover"
        />
      </div>

      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold uppercase tracking-wide text-yellow-400">
          {album.title}
        </h1>
        <p className="text-xl text-yellow-600">{album.artist} · {album.year}</p>
        <p className="text-md text-yellow-500 mt-2">{album.description}</p>
      </div>

      <div className="space-y-4 mb-6">
        {tracks.map((track) => (
          <div
            key={track.id}
            className="flex justify-between items-center bg-yellow-400 text-black p-4 rounded-lg shadow-md hover:bg-yellow-300 transition"
          >
            <span className="font-semibold">{track.title}</span>
            <span className="text-sm">{track.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
