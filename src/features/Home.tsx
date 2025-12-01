"use client";

export default function Home() {
  return (
    <div className="p-6 space-y-10">

      {/* SEARCH BAR O BANNER (parte superior larga del mockup) */}
      <div className="w-full h-24 rounded-xl bg-gray-900/70 p-4">
        <h2 className="text-gray-300 text-lg">Search or something here</h2>
      </div>

      {/* TRACKS */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Tracks</h2>
        <a className="text-sm text-gray-400 hover:text-white cursor-pointer">
          View all
        </a>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="bg-gray-900/70 rounded-xl h-28 hover:bg-gray-800 transition cursor-pointer"
          />
        ))}
      </div>

      {/* ALBUMS */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Albums</h2>
        <a className="text-sm text-gray-400 hover:text-white cursor-pointer">
          View all
        </a>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="bg-gray-900/70 rounded-xl h-28 hover:bg-gray-800 transition cursor-pointer"
          />
        ))}
      </div>

    </div>
  );
}


