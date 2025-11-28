import Pagination from '@/components/Pagination'

interface GenreProps {
    genre: string;
}

export default function Genre({ genre }: GenreProps) {
    const totalResults = 64;
  return (
    <div className="p-6 bg-black min-h-screen text-yellow-400">
        <h1 className='text-6xl font-extrabold mb-8 uppercase tracking-wide'>Género: {genre}</h1>
        <Pagination totalResults={totalResults} itemsPerPage={8}/>
    </div>
  );
}
