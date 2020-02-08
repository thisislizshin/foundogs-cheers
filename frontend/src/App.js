import React from "react";
import styled from "styled-components";
import { Router } from "react-router-dom";
import history from "./browserHistory";
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
      <Router history={history}>
        <>
          <Header />
          <Wrapper>
            <Routes />
          </Wrapper>
          <Footer />
        </>
      </Router>
    </>
  );
};

export default App;
