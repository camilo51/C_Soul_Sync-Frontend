import Pagination from '@/components/Pagination'

interface GenreProps {
  data: {
    name: string;
  };
}

export default function Genre({ data }: GenreProps) {
  const totalResults = 64;
  return (
    <div className="p-6 bg-black min-h-screen text-yellow-400">
      <h1 className='text-6xl font-extrabold mb-8 uppercase tracking-wide'>Género: {data.name}</h1>
      <Pagination totalResults={totalResults} itemsPerPage={8} />
    </div>
  );
}
