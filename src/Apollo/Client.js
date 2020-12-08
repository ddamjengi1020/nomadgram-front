import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { typeDefs, resolvers } from "./localState";

export default new ApolloClient({
  cache: new InMemoryCache(),
  typeDefs,
  resolvers,
  connectToDevTools: true,
  link: new HttpLink({
    uri: "http://localhost:5000",
    onError: ({ networkError, graphQLErrors }) => {
      console.log("graphQLErrors", graphQLErrors);
      console.log("networkError", networkError);
    },
  }),
});
