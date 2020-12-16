import { gql } from "@apollo/client";

const TOKEN = "token";

export const typeDefs = gql`
  type Query {
    isLoggedIn: Boolean
  }
  type Mutation {
    logUserIn(token: String): Null
    logUserOut: Null
  }
`;

export const resolvers = {
  Query: {
    isLoggedIn: () => Boolean(localStorage.getItem(TOKEN)) || false,
  },
  Mutation: {
    logUserIn: (_, { token }, { cache, client }) => {
      localStorage.setItem(TOKEN, token);
      cache.modify({
        fields: {
          isLoggedIn: (prev) => {
            return !prev;
          },
        },
      });
      return null;
    },
    logUserOut: () => {
      localStorage.removeItem(TOKEN);
      window.location = "/";
      return null;
    },
  },
};
