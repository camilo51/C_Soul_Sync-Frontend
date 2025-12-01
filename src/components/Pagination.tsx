'use client';

import { PaginationType } from "@/types";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";


export default function Pagination({ from = 1, to, total }: PaginationType) {

  const totalPages = Math.ceil(total / to);

  return (
      <div className="flex justify-between items-center">
        <p className="text-sm">Mostrando de {from + 1} a {to} de {total} resultados</p>

        <div className="flex gap-1">
          <button className="w-10 aspect-square border border-yellow-500 text-sm rounded cursor-pointer hover:bg-yellow-500 transition-all duration-150 flex justify-center items-center">
            <ChevronLeftIcon className="w-7 aspect-square" />
          </button>
          {Array.from({length: totalPages}).map((_, i) => (
            <button key={i} className="w-10 aspect-square border border-yellow-500 text-sm rounded cursor-pointer hover:bg-yellow-500 transition-all duration-150">
              {i+1}
            </button>
          ))}
          <button className="w-10 aspect-square border border-yellow-500 text-sm rounded cursor-pointer hover:bg-yellow-500 transition-all duration-150 flex justify-center items-center">
            <ChevronRightIcon className="w-7 aspect-square" />
          </button>
        </div>
      </div>
  )
}