import { gql } from "@apollo/client";

export const SEARCH = gql`
  query searchPost($term: String!) {
    searchPost(term: $term) {
      id
      files {
        url
      }
      likeCount
      commentCount
    }
    searchUser(term: $term) {
      id
      userName
      avatar
      isFollowing
      isSelf
    }
  }
`;
