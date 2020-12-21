import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: #00000080;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.2s linear;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
  &:hover {
    ${Overlay} {
      opacity: 1;
    }
  }
`;

const Item = styled.div`
  color: white;
  display: flex;
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

const ItemText = styled.span`
  margin-left: 5px;
`;

const PostCard = ({ id, file, likeCount, commentCount }) => (
  <Container url={file.url}>
    <Overlay>
      <Item>
        <FontAwesomeIcon icon={faHeart} />
        <ItemText>{likeCount}</ItemText>
      </Item>
      <Item>
        <FontAwesomeIcon icon={faComment} />
        <ItemText>{commentCount}</ItemText>
      </Item>
    </Overlay>
  </Container>
);

PostCard.propTypes = {
  id: PropTypes.string.isRequired,
  file: PropTypes.shape({
    url: PropTypes.string,
  }),
  likeCount: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
};

export default PostCard;
