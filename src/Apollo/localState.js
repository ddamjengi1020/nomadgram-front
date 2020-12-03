import { gql } from "@apollo/client";

const TOKEN = "token";

export const typeDefs = gql`
  type Query {
    isLoggedIn: Boolean
  }
`;

export const resolvers = {
  Query: {
    isLoggedIn: () => Boolean(localStorage.getItem(TOKEN)) || false,
  },
  Mutation: {
    isLoggedIn: (_, { token }, { cache }) => {
      localStorage.setItem(TOKEN, token);
      cache.writeData({
        data: {
          isLoggedIn: true,
        },
      });
      return null;
    },
    isLoggedOut: () => {
      localStorage.removeItem(TOKEN);
      window.location.reload();
      return null;
    },
  },
};
