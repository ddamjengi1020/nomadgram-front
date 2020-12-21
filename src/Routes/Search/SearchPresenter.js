import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import UserCard from "Components/UserCard";
import TextWeight from "Components/TextWeight";
import PostCard from "Components/PostCard";

const Wrapper = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.section`
  width: 100%;
  margin-bottom: 50px;
`;

const PostSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 300px;
  grid-gap: 25px;
`;

const UserContainer = styled.div`
  display: flex;
  overflow-x: auto;
`;

const SearchPresenter = ({ loading, posts, users, term }) => {
  return !term ? (
    <Wrapper>Search for Something</Wrapper>
  ) : loading ? (
    <Wrapper>
      <Loader />
    </Wrapper>
  ) : (
    <Wrapper>
      <Section>
        {users?.length === 0 ? (
          <TextWeight weight={"thin"}>Not found User</TextWeight>
        ) : (
          <UserContainer>
            {users.map(
              (user) =>
                !user.isSelf && (
                  <UserCard
                    key={user.id}
                    id={user.id}
                    avatar={user.avatar}
                    userName={user.userName}
                    isFollowing={user.isFollowing}
                    isSelf={user.isSelf}
                  />
                )
            )}
          </UserContainer>
        )}
      </Section>
      <PostSection>
        {posts?.length === 0 ? (
          <TextWeight weight={"thin"}>Not found Post</TextWeight>
        ) : (
          posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              file={post.files[0]}
              likeCount={post.likeCount}
              commentCount={post.commentCount}
            />
          ))
        )}
      </PostSection>
    </Wrapper>
  );
};

SearchPresenter.propTypes = {
  loading: PropTypes.bool,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      files: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string,
        })
      ),
      likeCount: PropTypes.number,
      commentCount: PropTypes.number,
    })
  ),
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      userName: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      isFollowing: PropTypes.bool.isRequired,
      isSelf: PropTypes.bool.isRequired,
    })
  ),
  term: PropTypes.string,
};

export default SearchPresenter;
