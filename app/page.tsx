'use client';

import Card from '@/components/Card';
import GET_CHARACTERS from '@/graphql/queries/getCharacters';
import { useQuery } from '@apollo/client';

export default function Home() {
  const { data, loading, error } = useQuery(GET_CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <main className="max-w-7xl m-auto p-4">
      <h1 className="text-4xl">Genshin Character List</h1>
      <div className="flex flex-col gap-4 mt-4">
        {data?.characters?.data.map((character) => (
          <Card key={character.id} data={character} />
        ))}
      </div>
    </main>
  );
}
