import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme.blueColor};
  color: white;
  margin-top: 12px;
  outline: none;
  border: none;
  height: 30px;
  border-radius: 2px;
  cursor: pointer;
`;

const Button = ({ text }) => <Container type={"submit"}>{text}</Container>;

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
