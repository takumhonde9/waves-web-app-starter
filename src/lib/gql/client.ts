import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: import.meta.env.VITE_APP_BASE_URL,
  cache: new InMemoryCache(),
});

export { client };
