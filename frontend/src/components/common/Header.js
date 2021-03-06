import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Header = styled.header`
  width: ${props => props.theme.maxCardWidth};
  border: 0;
  position: fixed;
  top: 0;
  background-color: ${props => props.theme.whiteColor};
  color: black;
  border-bottom: ${props => props.theme.boxBorder};
  border-radius: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 5px;
  z-index: 2;
  height: 4rem;
`;

const LogoImage = styled.img.attrs({
  src:
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbKOaeQ%2FbtqBS6LgGbU%2Fkdimkm8c9u6Mk63PaMzysK%2Fimg.png"
})`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftColumn = styled.span`
  display: flex;
  align-items: center;
  width: 33%;
  text-align: center;
  &:first-child {
    margin-right: auto;
    text-align: left;
  }
  &:last-child {
    margin-left: auto;
    text-align: right;
  }
`;

const MiddleColumn = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 33%;
  text-align: center;
`;

const RightColumn = styled.span`
  width: 33%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const HeaderLink = styled.div`
  a {
    font-weight: 700;
  }
  a:hover {
    color: ${props => props.theme.brownGrey};
  }
`;

const Divider = styled.span`
  padding: 10px;
`;

const Title = styled.span`
  a {
    font-size: 22px;
    font-weight: 300;
  }
  a:hover {
    color: ${props => props.theme.brownGrey};
  }
`;

const FatText = styled.span`
  font-weight: 900;
`;

export default withRouter(({ history }) => {
  return (
    <Header>
      <HeaderWrapper>
        <LeftColumn>
          <Title>
            <Link to="/">
              <LogoImage />
            </Link>
          </Title>
        </LeftColumn>
        <MiddleColumn></MiddleColumn>
        <RightColumn>
          <HeaderLink>
            <Link to="/write">글쓰기</Link>
          </HeaderLink>
          <Divider></Divider>
          <HeaderLink>
            <Link to="/username">마이페이지</Link>
          </HeaderLink>
          <Divider></Divider>
          <HeaderLink>
            <Link to="/login">로그인</Link>
          </HeaderLink>
        </RightColumn>
      </HeaderWrapper>
    </Header>
  );
});
