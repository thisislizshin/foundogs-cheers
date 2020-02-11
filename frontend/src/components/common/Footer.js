import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  width: "100%";
  height: "104px";
  margin-bottom: 200px;
`;

const FooterInner = styled.div`
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  height: 100%;
  padding: 0 20px;
  margin: 0 auto;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${props => props.theme.blackColor};
`;

const Copyright = styled.div`
  float: right;
  line-height: 104px;
  font-weight: normal;
`;

const Footer = () => (
  <Container>
    <FooterInner>
      <Copyright>&copy; 2020 Founders 3rd Cheers</Copyright>
    </FooterInner>
  </Container>
);

export default Footer;
