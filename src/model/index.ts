import { ApolloClient, ApolloProvider, InMemoryCache, gql } from '@apollo/client';
const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL,
  cache: new InMemoryCache(),
});
export { ApolloProvider, gql };
export default client