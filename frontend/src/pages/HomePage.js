import React from "react";
import styled from "styled-components";
import PetList from "components/PetList";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const HomePage = () => {
  return (
    <Wrapper>
      <PetList />
    </Wrapper>
  );
};

export default HomePage;
