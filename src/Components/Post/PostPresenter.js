import styled from "styled-components";
import Avatar from "Components/Avatar";
import TextWeight from "Components/TextWeight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faComment,
  faHeart as emptyHeart,
  faBookmark,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";

const IconStyle = { fontSize: 23, marginRight: 15 };

const Container = styled.div`
  ${(props) => props.theme.whiteBox};
  max-width: 615px;
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 60px;
  }
`;
const AuthorSection = styled.div`
  padding: 10px 14px;
  display: flex;
  justify-content: space-between;
  border-bottom: ${(props) => props.theme.boxBorder};
`;
const SectionColumn = styled.div`
  display: flex;
  align-items: center;
`;
const ImageSection = styled.div`
  width: 100%;
`;
const ImageItem = styled.img`
  width: 100%;
  height: auto;
`;
const NavSection = styled(AuthorSection)`
  border-bottom: none;
`;
const LikeSection = styled.div`
  padding: 0 14px;
  display: flex;
  justify-content: flex-start;
`;
const CaptionSection = styled.div`
  display: flex;
  align-items: baseline;
  padding: 10px 14px;
`;
const CaptionText = styled.span`
  line-height: 1.4;
`;
const CommentSection = styled.div`
  max-width: 615px;
  width: 100%;
  padding: 0 14px;
  box-sizing: border-box;
`;
const CommentViewAll = styled.div`
  color: ${(props) => props.theme.darkGreyColor};
  margin-bottom: 7px;
`;
const CommentPreview = styled.div`
  width: inherit;
  display: flex;
  flex-direction: column;
  white-space: normal;
`;
const PreviewItem = styled.div`
  overflow-wrap: break-word;
  display: inline;
  justify-content: flex-start;
  align-items: baseline;
  line-height: 1.3;
  &:not(:last-child) {
    margin-bottom: 7px;
  }
`;

const CreateAt = styled.div`
  color: ${(props) => props.theme.darkGreyColor};
  font-size: 12px;
  padding: 10px 14px;
`;

const AddComment = styled.input`
  width: 100%;
  padding: 20px 17px;
  border: none;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top: ${(props) => props.theme.boxBorder};
`;

const PostPresenter = ({
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
    <Container>
      <AuthorSection>
        <SectionColumn>
          <Avatar size={"sm"} avatarUrl={user?.avatar} isPost={true} />
          <TextWeight weight={"border"} size={14}>
            {user?.userName}
          </TextWeight>
        </SectionColumn>
        <SectionColumn>
          <FontAwesomeIcon icon={faEllipsisH} />
        </SectionColumn>
      </AuthorSection>
      <ImageSection>
        {files.map((file) => (
          <ImageItem key={file.id} src={file.url} />
        ))}
      </ImageSection>
      <NavSection>
        <SectionColumn>
          <FontAwesomeIcon
            icon={isLiked ? faHeart : emptyHeart}
            style={
              isLiked
                ? { color: "red", fontSize: 23, marginRight: 15 }
                : IconStyle
            }
          />
          <FontAwesomeIcon style={IconStyle} icon={faComment} />
          <FontAwesomeIcon style={IconStyle} icon={faPaperPlane} />
        </SectionColumn>
        <SectionColumn>
          <FontAwesomeIcon style={{ fontSize: 23 }} icon={faBookmark} />
        </SectionColumn>
      </NavSection>
      <LikeSection>
        {likes.length !== 0 ? (
          <>
            <TextWeight>Liked by</TextWeight>{" "}
            {likes?.map(
              (like, idx) =>
                idx === 0 && (
                  <TextWeight key={like.id} weight={"border"}>
                    {like.user.userName}
                  </TextWeight>
                )
            )}{" "}
            <TextWeight>and</TextWeight>{" "}
            <TextWeight weight={"border"}>other</TextWeight>
          </>
        ) : null}
      </LikeSection>
      <CaptionSection>
        <TextWeight weight={"border"}>{user?.userName} </TextWeight>
        <CaptionText>{caption}</CaptionText>
      </CaptionSection>
      <CommentSection>
        <CommentViewAll>
          {comments?.length > 1 && `View all ${comments.length} comments`}
        </CommentViewAll>
        <CommentPreview>
          {comments?.map((comment, idx) =>
            idx < 2 ? (
              <PreviewItem key={comment.id}>
                <TextWeight weight={"border"}>
                  {comment.user.userName}
                </TextWeight>
                {comment.text}
              </PreviewItem>
            ) : null
          )}
        </CommentPreview>
      </CommentSection>
      <CreateAt>{`${new Date().getDay(Date.now() - createAt)}`}</CreateAt>
      <form>
        <AddComment placeholder="add comment" />
      </form>
    </Container>
  );
};

export default PostPresenter;
