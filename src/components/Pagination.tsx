'use client';

import { PaginationType } from "@/types";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { useParams, useRouter } from "next/navigation";

export default function Pagination({ from = 1, to, total }: PaginationType) {

  const router = useRouter();
  const {page} = useParams();
  const totalPages = Math.ceil(total / to);
  const currentPage = from;

  const handlePageChange = (page: number) => {
    router.push(`?page=${page}`);
  }
  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
      <div className="flex justify-between items-center">
        <p className="text-sm">Mostrando de {from} a {to} de {total} resultados</p>

        <div className="flex gap-1">
          <button 
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="w-10 aspect-square border border-yellow-500 text-sm rounded cursor-pointer hover:bg-yellow-500 transition-all duration-150 flex justify-center items-center disabled:opacity-50 disabled:bg-transparent disabled:cursor-auto"
          >
            <ChevronLeftIcon className="w-7 aspect-square" />
          </button>
          {Array.from({length: totalPages}).map((_, i) => (
            <button key={i} onClick={() => handlePageChange(i+1)} className="w-10 aspect-square border border-yellow-500 text-sm rounded cursor-pointer hover:bg-yellow-500 transition-all duration-150">
              {i+1}
            </button>
          ))}
          <button 
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="w-10 aspect-square border border-yellow-500 text-sm rounded cursor-pointer hover:bg-yellow-500 transition-all duration-150 flex justify-center items-center disabled:opacity-50 disabled:bg-transparent disabled:cursor-auto"
          >
            <ChevronRightIcon className="w-7 aspect-square" />
          </button>
        </div>
      </div>
  )
}