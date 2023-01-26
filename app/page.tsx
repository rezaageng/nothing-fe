'use client';

import CHARACTERS_QUERY from '@/graphql/getCharacters';
import { useQuery } from '@apollo/client';

interface Character {
  id: string;
  attributes: {
    id: string;
    name: string;
    description: string;
    rarity: string;
  };
}

interface Data {
  characters: {
    data: Character[];
  };
}

export default function Home() {
  const { data, loading, error } = useQuery(CHARACTERS_QUERY);

  const result: Data = data;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data);

  return (
    <main className="w-full min-h-screen grid place-content-center">
      <h1 className="text-4xl">hii everyone!!</h1>
      {result.characters.data.map((character) => (
        <div key={character.id}>
          <h1>{character.attributes.name}</h1>
        </div>
      ))}
    </main>
  );
}
