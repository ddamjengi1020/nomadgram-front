import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

const scale = keyframes`
  0% {
    height: 100%;
  }
  50% {
    height: 40%;
    background-color: #00000099;
  }
  100% {
    height: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: ${(props) => `${props.size}px`};
`;
const Bar = styled.div`
  width: 10px;
  height: 100%;
  background-color: orange;
  border: none;
  margin: 0 2px;
  &:nth-child(1) {
    animation: ${scale} 1s ease-in-out infinite;
  }
  &:nth-child(2) {
    animation: ${scale} 1s ease-in-out infinite 0.15s;
  }
  &:nth-child(3) {
    animation: ${scale} 1s ease-in-out infinite 0.3s;
  }
  &:nth-child(4) {
    animation: ${scale} 1s ease-in-out infinite 0.45s;
  }
`;

const Loader = ({ size }) => (
  <Container size={size}>
    <Bar />
    <Bar />
    <Bar />
    <Bar />
  </Container>
);

Loader.propTypes = {
  size: PropTypes.number.isRequired,
};

export default Loader;
