import Loader from "Components/Loader";
import Post from "Components/Post";
import styled from "styled-components";

const { gql, useQuery } = require("@apollo/client");

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
  console.log(data);
  return (
    <Wrapper>
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
