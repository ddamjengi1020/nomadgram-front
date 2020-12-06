import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  max-width: 350px;
  width: 100%;
  ${(props) => props.theme.whiteBox};
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const VerifyAccount = styled.div`
  margin: 15px;
  font-size: 13px;
  font-weight: 300;
  color: ${(props) => props.theme.blackColor};
`;

const ChangeState = styled.span`
  font-weight: 600;
  cursor: pointer;
  color: ${(props) => props.theme.blueColor};
`;

export default () => {
  const [action, setAction] = useState("logIn");
  return (
    <Wrapper>
      {action === "logIn" ? (
        <Box>
          <VerifyAccount>
            Have an account?{" "}
            <ChangeState onClick={() => setAction("signUp")}>
              Log in
            </ChangeState>
          </VerifyAccount>
        </Box>
      ) : (
        <Box>
          <VerifyAccount>
            Don't have an account?{" "}
            <ChangeState onClick={() => setAction("logIn")}>
              Sign up
            </ChangeState>
          </VerifyAccount>
        </Box>
      )}
    </Wrapper>
  );
};
