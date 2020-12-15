// import { useState } from "react";
import PropTypes from "prop-types";
import PostPresenter from "./PostPresenter";

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
