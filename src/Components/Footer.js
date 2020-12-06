import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  font-size: 12px;
`;
const Nav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const List = styled.li`
  margin: 0 6px;
`;
const Link = styled.a`
  color: ${(props) => props.theme.darkGreyColor};
  font-weight: 300;
`;
const Copy = styled.span`
  color: ${(props) => props.theme.darkGreyColor};
  margin-top: 15px;
`;

const NomadLink = styled.a`
  color: orange;
  font-weight: 700;
`;
export default () => (
  <Footer>
    <Nav>
      <List>
        <Link href="#">About</Link>
      </List>
      <List>
        <Link href="#">Blog</Link>
      </List>
      <List>
        <Link href="#">Jobs</Link>
      </List>
      <List>
        <Link href="#">Help</Link>
      </List>
      <List>
        <Link href="#">API</Link>
      </List>
      <List>
        <Link href="#">Privacy</Link>
      </List>
      <List>
        <Link href="#">Terms</Link>
      </List>
      <List>
        <Link href="#">Top Accounts</Link>
      </List>
      <List>
        <Link href="#">Hashtags</Link>
      </List>
      <List>
        <Link href="#">Locations</Link>
      </List>
    </Nav>
    <Copy>
      &copy; {new Date().getFullYear()} Nomadgram from{" "}
      <NomadLink href="https://nomadcoders.co/" target="_blank">
        Nomad Coder
      </NomadLink>
    </Copy>
  </Footer>
);
