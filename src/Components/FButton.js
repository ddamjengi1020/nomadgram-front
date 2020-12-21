import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import styled from "styled-components";

const Container = styled.button`
  background-color: ${(props) =>
    props.isFollowing ? "white" : props.theme.blueColor};
  color: ${(props) => (props.isFollowing ? props.theme.darkGrey : "white")};
  border: ${(props) => (props.isFollowing ? props.theme.boxBorder : "none")};
  border-radius: 5px;
  &:focus {
    outline: none;
  }
  cursor: pointer;
`;

const Text = styled.div`
  padding: 10px 15px;
`;

const TOGGLE_FOLLOW = gql`
  mutation toggleFollow($id: String!) {
    toggleFollow(id: $id)
  }
`;

const FButton = ({ userId, isFollowing }) => {
  const [isFollowingS, setIsFollowing] = useState(isFollowing);
  const [toggleFollowMutation] = useMutation(TOGGLE_FOLLOW);
  const onClick = () => {
    toggleFollowMutation({ variables: { id: userId } });
    setIsFollowing(!isFollowingS);
  };
  return (
    <Container isFollowing={isFollowingS} onClick={onClick}>
      <Text>{isFollowingS ? "Following" : "Follow"}</Text>
    </Container>
  );
};

export default FButton;
