import React from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "styles/GlobalStyles";
import Routes from "./Routes";
import Footer from "components/common/Footer";
import Header from "components/common/Header";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxCardWidth};
  width: 100%;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <>
          <Wrapper>
            <Header />
            <Routes />
          </Wrapper>
          <Footer />
        </>
      </BrowserRouter>
    </>
  );
};

export default App;
