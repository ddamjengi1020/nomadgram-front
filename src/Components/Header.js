import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faCompass,
  faHeart,
  faUserCircle,
} from "@fortawesome/free-regular-svg-icons";
import useInput from "Hooks/useInput";
import Input from "./Input";

const Container = styled.header`
  width: 100%;
  padding: 10px 0;
  ${(props) => props.theme.whiteBox};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
`;

const HeaderColumn = styled.div`
  &:nth-child(1) {
    justify-self: flex-start;
  }
  &:nth-child(2) {
    justify-self: center;
  }
  &:nth-child(3) {
    justify-self: flex-end;
  }
`;

const LogoText = styled.span`
  font-family: "Satisfy", cursive;
  font-size: 20px;
  border-left: 1.5px solid black;
  margin-left: 15px;
  padding-left: 15px;
  color: black;
`;

const LogoItem = styled(Link)`
  display: flex;
  align-items: center;
`;

const HeaderItem = styled(Link)`
  &:not(:last-child) {
    margin-right: 25px;
  }
`;

export default () => {
  const search = useInput("");
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <Wrapper>
        <HeaderColumn>
          <LogoItem to={"/"}>
            <FontAwesomeIcon
              icon={faInstagram}
              color={"black"}
              style={{ fontSize: 25 }}
            />
            <LogoText>Nomadgram</LogoText>
          </LogoItem>
        </HeaderColumn>
        <HeaderColumn>
          <form onSubmit={onSubmit}>
            <Input placeholder={"Search"} {...search} search={true} />
          </form>
        </HeaderColumn>
        <HeaderColumn>
          <HeaderItem to={"/explore"}>
            <FontAwesomeIcon
              icon={faCompass}
              color={"black"}
              style={{ fontSize: 22 }}
            />
          </HeaderItem>
          <HeaderItem to={"/like"}>
            <FontAwesomeIcon
              icon={faHeart}
              color={"black"}
              style={{ fontSize: 22 }}
            />
          </HeaderItem>
          <HeaderItem to={"/user"}>
            <FontAwesomeIcon
              icon={faUserCircle}
              color={"black"}
              style={{ fontSize: 22 }}
            />
          </HeaderItem>
        </HeaderColumn>
      </Wrapper>
    </Container>
  );
};
