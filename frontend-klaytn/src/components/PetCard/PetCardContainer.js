import React from "react";
import PropTypes from "prop-types";
import PetCardPresenter from "./PetCardPresenter";
import { pets } from "data/pets";

const PetCardContainer = props => {
  const { pet } = props;
  return (
    <PetCardPresenter
      breed={pet.breed}
      description={pet.description}
      centerIcon="fas fa-play-circle"
      topIcons={["far fa-heart", "fas fa-share"]}
      bgPhoto={pet.photo}
    />
  );
};

PetCardContainer.propTypes = {};

export default PetCardContainer;
