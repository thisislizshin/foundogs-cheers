import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";

const Header = styled.header`
  width: 100%;
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
  height: 60px;
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
        <LeftColumn></LeftColumn>
        <MiddleColumn>
          <Title>
            <Link to="/">
              <FatText>FounDogs</FatText>
            </Link>
          </Title>
        </MiddleColumn>
        <RightColumn>
          <HeaderLink>
            <Link to="/wallet">
              <AccountBalanceWalletOutlinedIcon />
            </Link>
          </HeaderLink>
          <Divider></Divider>
          <HeaderLink>
            <Link to="/logout">
              <ExitToAppOutlinedIcon />
            </Link>
          </HeaderLink>
        </RightColumn>
      </HeaderWrapper>
    </Header>
  );
});