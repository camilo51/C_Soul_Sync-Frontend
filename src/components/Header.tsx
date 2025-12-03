'use client'

import { oswald } from "@/lib/fonts";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useSearch } from "@/contexts/SearchContext";

export default function Header() {
  const { query, setQuery, search } = useSearch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    search();
  };

  return (
    <header className="p-5 flex justify-between items-center">
        <Link href="/">
            <h1 className={`${oswald.className} font-bold text-4xl uppercase`}>C-Soul Sync</h1>
        </Link>
        <form onSubmit={handleSubmit} className="flex items-center gap-2 rounded-sm border border-gray-300 bg-white">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="¿Que quieres escuchar hoy?"
              className="p-2 w-72 outline-none placeholder:text-gray-400 text-black"
            />
            <button type="submit" className="cursor-pointer p-2 border-l border-gray-300">
                <MagnifyingGlassIcon className="w-7 aspect-square text-black" />
            </button>
        </form>
    </header>
  );
}
