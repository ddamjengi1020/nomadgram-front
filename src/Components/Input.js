import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.input`
  &:not(:first-child) {
    margin-top: 5px;
  }
  width: 250px;
  padding: 7px;
  border: ${(props) =>
    props.readOnly ? "1px solid #c7c7c7" : props.theme.boxBorder};
  border-radius: 2px;
  background-color: ${(props) =>
    props.readOnly ? props.theme.lightGreyColor : props.theme.bgColor};
  font-size: 14px;
  color: ${(props) => (props.readOnly ? "white" : "black")};
  &::placeholder {
    font-size: 13px;
  }
`;

const Input = ({
  placeholder,
  value,
  onChange,
  required = true,
  type = "text",
  readOnly = false,
}) => (
  <Container
    placeholder={placeholder}
    type={type}
    required={required}
    value={value}
    onChange={onChange}
    readOnly={readOnly}
  />
);

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  readOnly: PropTypes.bool,
};

export default Input;