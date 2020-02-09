import React from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "styles/GlobalStyles";
import Routes from "./Routes";
import Footer from "components/Footer";
import Header from "components/Header";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <>
          <Header />
          <Wrapper>
            <Routes />
          </Wrapper>
          <Footer />
        </>
      </BrowserRouter>
    </>
  );
};

export default App;
