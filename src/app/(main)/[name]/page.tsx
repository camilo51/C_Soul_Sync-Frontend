'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getData } from '@/services/mockData';
import Genre from '@/features/Genre';
import Bring from '@/features/Bring';

export default function Page() {
  const params = useParams();
  const name = params?.name as string;
  const [contentType, setContentType] = useState<string>('loading');
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (name) {
      getData(name).then((result) => {
        setContentType(result.type);
        setData(result.data);
      });
    }
  }, [name]);

  if (contentType === 'loading') {
    return (
      <div className="p-6 bg-black min-h-screen text-yellow-400 flex items-center justify-center">
        <h1 className="text-2xl animate-pulse">Cargando...</h1>
      </div>
    );
  }

  if (contentType === 'genre') {
    return <Genre data={data} />;
  }

  return <Bring />;
}