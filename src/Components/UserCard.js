import styled from "styled-components";
import PropTypes from "prop-types";
import Avatar from "./Avatar";
import FButton from "./FButton";
import { Link } from "react-router-dom";

const Container = styled.div`
  ${(props) => props.theme.whiteBox};
  width: 170px;
  height: 150px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  padding: 10px;
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

const EuserName = styled(Link)`
  font-weight: 700;
  color: ${(props) => props.theme.blackColor};
`;

const UserCard = ({ id, avatar, userName, isSelf, isFollowing }) => (
  <Container>
    <Avatar size={"sm"} avatarUrl={avatar} isPost={false} />
    <EuserName to={`/${userName}`}>{userName}</EuserName>
    {!isSelf && <FButton userId={id} isFollowing={isFollowing} />}
  </Container>
);

UserCard.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  userName: PropTypes.string.isRequired,
  isSelf: PropTypes.bool.isRequired,
  isFollowing: PropTypes.bool.isRequired,
};

export default UserCard;
