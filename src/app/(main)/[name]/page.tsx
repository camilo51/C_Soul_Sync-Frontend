import { getData } from '@/services/mockData';
import Genre from '@/features/Genre';
import Bring from '@/features/Bring';

export default async function Page({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const result = await getData(name);

  // If it's a genre, show the Genre component
  // Otherwise, show Bring (for albums, tracks, etc.)
  if (result.type === 'genre') {
    return <Genre data={result.data as any} />;
  }

  return <Bring />;
}