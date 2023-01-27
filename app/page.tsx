'use client';

import GET_CHARACTERS from '@/graphql/queries/getCharacters';
import { useQuery } from '@apollo/client';

export default function Home() {
  const { data, loading, error } = useQuery(GET_CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data);

  return (
    <main className="w-full min-h-screen grid place-content-center">
      <h1 className="text-4xl">hii everyone!!</h1>
      {data?.characters?.data.map((character) => (
        <div key={character.id}>
          <h1>{character.attributes?.name}</h1>
        </div>
      ))}
    </main>
  );
}
