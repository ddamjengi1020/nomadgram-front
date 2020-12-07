import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { typeDefs, resolvers } from "./localState";

const cache = new InMemoryCache();

export default new ApolloClient({
  cache,
  typeDefs,
  resolvers,
  link: new HttpLink({
    uri: "http://localhost:5000",
    onError: ({ networkError, graphQLErrors }) => {
      console.log("graphQLErrors", graphQLErrors);
      console.log("networkError", networkError);
    },
  }),
});
