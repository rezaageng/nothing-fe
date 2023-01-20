import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-gray-900 text-white">
        <ApolloProvider client={client}>{children}</ApolloProvider>
      </body>
    </html>
  );
}
