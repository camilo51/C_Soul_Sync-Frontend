import Bring from '@/features/Bring'
import Genre from '@/features/Genre'

export default async function Page({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  return (
    <div>
      <Genre genre={name} />
      <Bring />
    </div>
  )
}