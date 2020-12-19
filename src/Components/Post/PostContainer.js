import { useState } from "react";
import { useMutation } from "@apollo/client";
import PropTypes from "prop-types";
import useTextArea from "Hooks/useTextArea";
import PostPresenter from "./PostPresenter";
import { ADD_COMMENT, TOGGLE_LIKE } from "./PostQueries";

const PostContainer = ({
  id,
  location,
  caption,
  user,
  likes,
  isLiked,
  createAt,
  files,
  comments,
  loggedUser,
}) => {
  const { value, setValue, submitRef, onChange, onKeyDown } = useTextArea("");
  const [isLikedS, setIsLikedS] = useState(isLiked);
  const [selfComments, setSelfComments] = useState([]);
  const [commentCount, setCommentCount] = useState(comments.length);

  const [toggleLikeMutation] = useMutation(TOGGLE_LIKE, {
    variables: { postId: id },
  });
  const [addCommentMutation] = useMutation(ADD_COMMENT);
  const onCmtSubmit = (e) => {
    e.preventDefault();
    addCommentMutation({
      variables: {
        postId: id,
        text: value,
      },
    });
    setSelfComments([
      ...selfComments,
      {
        id: Math.floor(Math.random() * 100),
        text: value,
        userName: loggedUser?.me.userName,
      },
    ]);
    setCommentCount(commentCount + 1);
    setValue("");
  };
  const onToggleLike = () => {
    toggleLikeMutation();
    setIsLikedS(!isLikedS);
  };
  return (
    <PostPresenter
      location={location}
      caption={caption}
      user={user}
      likes={likes}
      isLiked={isLikedS}
      createAt={createAt}
      files={files}
      comments={comments}
      commentCount={commentCount}
      addComment={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      submitRef={submitRef}
      onCmtSubmit={onCmtSubmit}
      onToggleLike={onToggleLike}
      loggedUser={loggedUser}
      selfComments={selfComments}
    />
  );
};

PostContainer.propTypes = {
  id: PropTypes.string.isRequired,
  location: PropTypes.string,
  caption: PropTypes.string.isRequired,
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  likes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      user: PropTypes.objectOf(PropTypes.string.isRequired),
    })
  ),
  isLiked: PropTypes.bool.isRequired,
  createAt: PropTypes.string.isRequired,
  files: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      user: PropTypes.objectOf(PropTypes.string.isRequired),
    })
  ),
  loggedUser: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      userName: PropTypes.string.isRequired,
    })
  ),
};

export default PostContainer;
