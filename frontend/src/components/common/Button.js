import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${props => props.theme.dardGreyColor};
  &:hover {
    background: ${props => props.theme.lightGreyColor};
  }

  ${props =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}

  ${props =>
    props.blue &&
    css`
      background: ${props => props.theme.blueColor};
      &:hover {
        background: ${props => props.theme.lightblueColor};
      }
    `}
`;

const Button = props => <StyledButton {...props} />;

export default Button;
