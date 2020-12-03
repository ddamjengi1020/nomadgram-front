import { ApolloClient, InMemoryCache } from "@apollo/client";
import { typeDefs, resolvers } from "./localState";

const cache = new InMemoryCache();

export default new ApolloClient({
  uri: "http://localhost:5000",
  cache,
  typeDefs,
  resolvers,
});
