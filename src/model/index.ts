import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
const client = new ApolloClient({
  uri: 'https://soundboxstore-inventory-ks.x67nf4.easypanel.host/api/graphql',
  cache: new InMemoryCache(),
});
export { ApolloProvider, gql }
export default client