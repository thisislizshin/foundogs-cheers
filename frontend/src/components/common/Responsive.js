import React from "react";
import styled from "styled-components";

const ResponsiveBlock = styled.div`
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  width: ${props => props.theme.maxCardWidth};
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: ${props => props.theme.maxCardWidth};
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Responsive = ({ children, ...rest }) => {
  // style, className, onClick, onMouseMove 등의 props를 사용할 수 있도록
  // ...rest를 사용하여 ResponsiveBlock에게 전달
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
