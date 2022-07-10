import { ApolloClient, InMemoryCache } from '@apollo/client';

export const clientConnection = new ApolloClient({
  uri: 'https://tf1-interview.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
});
