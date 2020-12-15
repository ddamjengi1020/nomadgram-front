import PropTypes from "prop-types";
import styled from "styled-components";

const Text = styled.span`
  font-weight: ${(props) => {
    switch (props.weight) {
      case "thin":
        return 400;
      case "border":
        return 600;
      default:
        break;
    }
  }};
  font-size: ${(props) => `${props.size}px`};
  margin-right: 5px;
`;

const TextWeight = ({ children, weight = "thin", size = 14 }) => {
  return (
    <Text weight={weight} size={size}>
      {children}
    </Text>
  );
};

TextWeight.propTypes = {
  children: PropTypes.node,
  weight: PropTypes.oneOf(["thin", "border"]),
  size: PropTypes.number,
};

export default TextWeight;
