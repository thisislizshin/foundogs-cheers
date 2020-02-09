import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "components/common/Button";

const Wrapper = styled.div``;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${props => props.theme.greyColor};
    text-decoration: underline;
    &:hover {
      color: ${props => props.theme.lightGreyColor};
    }
  }
`;

const textMap = {
  login: "로그인",
  signup: "회원가입"
};

const AuthForm = ({ type }) => {
  const text = textMap[type];

  return (
    <Wrapper>
      <Button fullWidth>{text}</Button>
      <Footer>
        {type === "login" ? (
          <Link to="/signup">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </Footer>
    </Wrapper>
  );
};

export default AuthForm;
