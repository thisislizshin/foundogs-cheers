import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Avatar from "components/common/Avatar";
import PetCard from "components/PetCard";
import { pets } from "data/pets";
import OptionBar from "components/OptionBar/OptionBar";

const Wrapper = styled.div`
  width: 100%;
  max-width: ${props => props.theme.maxCardWidth};
  height: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default () => (
  <Wrapper>
    <OptionBar />
    {pets &&
      pets.map(pet => {
        return <PetCard pet={pet} />;
      })}
  </Wrapper>
);
