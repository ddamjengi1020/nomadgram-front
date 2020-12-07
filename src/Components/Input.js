import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.input`
  &:not(:first-child) {
    margin-top: 5px;
  }
  width: 250px;
  padding: 7px;
  border: ${(props) => props.theme.boxBorder};
  border-radius: 2px;
  background-color: #fafafa;
  font-size: 14px;
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
}) => (
  <Container
    placeholder={placeholder}
    type={type}
    required={required}
    value={value}
    onChange={onChange}
  />
);

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default Input;
