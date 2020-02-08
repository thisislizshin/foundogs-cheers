import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${props => props.theme.bgColor};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled.div`
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 2px;
`;

const Logo = styled.div`
  display: block;
  padding-bottom: 2rem;
  text-align: center;
  font-weight: bold;
  letter-spacing: 2px;
`;

const AuthTemplate = ({ children }) => {
  return (
    <Wrapper>
      <WhiteBox>
        <Logo>
          <Link to="/">FOUNDOGS</Link>
        </Logo>
        {children}
      </WhiteBox>
    </Wrapper>
  );
};

export default AuthTemplate;
