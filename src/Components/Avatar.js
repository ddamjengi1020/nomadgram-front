import PropTypes from "prop-types";
import styled from "styled-components";

const returnUrl = (props) => props.avatarUrl || props.theme.defaultAvatar;

const Container = styled.div`
  ${(props) => {
    if (props.size === "sm") {
      return props.theme.avatarSm;
    } else if (props.size === "md") {
      return props.theme.avatarMd;
    } else if (props.size === "lg") {
      return props.theme.avatarLg;
    }
  }};
  border-radius: 50%;
  background-image: url(${(props) => returnUrl(props)});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: ${(props) => props.isPost && "13px"};
`;

const Avatar = ({ size = "sm", avatarUrl, isPost = false }) => {
  return <Container size={size} avatarUrl={avatarUrl} isPost={isPost} />;
};

Avatar.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]).isRequired,
  avatarUrl: PropTypes.string,
  isPost: PropTypes.bool,
};

export default Avatar;
