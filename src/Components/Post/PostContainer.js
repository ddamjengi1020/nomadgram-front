// import { useState } from "react";
import PropTypes from "prop-types";
import PostPresenter from "./PostPresenter";
import useTextArea from "Hooks/useTextArea";

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
}) => {
  const { value, setValue, submitRef, onChange, onKeyDown } = useTextArea("");
  const onCmtSubmit = (e) => {
    e.preventDefault();
    // Query
    setValue("");
  };
  return (
    <PostPresenter
      location={location}
      caption={caption}
      user={user}
      likes={likes}
      isLiked={isLiked}
      createAt={createAt}
      files={files}
      comments={comments}
      addComment={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      submitRef={submitRef}
      onCmtSubmit={onCmtSubmit}
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
  isLiked: PropTypes.bool,
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
};

export default PostContainer;
