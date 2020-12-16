import Loader from "Components/Loader";
import Post from "Components/Post";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { gql, useQuery } from "@apollo/client";

const SEE_FEED = gql`
  {
    seeFeed {
      id
      location
      caption
      user {
        id
        userName
        avatar
      }
      likes {
        id
        user {
          userName
        }
      }
      createAt
      files {
        id
        url
      }
      comments {
        id
        text
        user {
          id
          userName
        }
      }
    }
  }
`;

const Wrapper = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default () => {
  const { data, loading } = useQuery(SEE_FEED);
  return (
    <Wrapper>
      <Helmet>
        <title>Feed | Nomadgram</title>
      </Helmet>
      {loading ? (
        <Loader size={35} />
      ) : (
        data?.seeFeed &&
        data.seeFeed.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            location={post.location}
            caption={post.caption}
            user={post.user}
            likes={post.likes}
            isLiked={post.isLiked}
            createAt={post.createAt}
            files={post.files}
            comments={post.comments}
          />
        ))
      )}
    </Wrapper>
  );
};
