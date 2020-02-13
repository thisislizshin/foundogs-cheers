import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { HeartFull, HeartEmpty } from "components/common/Icons";
import GroupAvatars from "components/GroupAvatars";

const Container = styled.div`
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.07);
  background-color: white;
  border-radius: 8px;
  height: 200px;
  width: ${props => props.theme.maxCardWidth};
  display: flex;
  & + & {
    margin-top: 1rem;
  }
`;

const Top = styled.div`
  width: 30%;
  padding: 15px;
  display: flex;
  align-items: flex-start;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url(${props => props.bgPhoto});
  background-color: ${props => props.bgColor};
  background-size: cover;
  background-position: center center;
  border-radius: 8px 0px 0px 8px;
  flex-direction: column;
`;

const Bottom = styled.div`
  padding: 10px;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TopIconsContainer = styled.div`
  display: flex;
`;

const Title = styled.span`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
  display: block;
  color: #1f2126;
`;

const Intro = styled.p`
  line-height: 1.2;
  color: #9ca1ae;
`;

const ContentContainer = styled.div`
  padding: 10px;
`;

const PetCardPresenter = ({
  breed,
  titleColor = "#1F2126",
  intro,
  introColor = "#9CA1AE",
  bgColor = "#DBE0E6",
  bgPhoto = "https://lh3.googleusercontent.com/proxy/B-ifZWisdfvNiqxi_LByhKFc73GRe6RDrK7tqLKG0hF-4SbAxpvLqhqYKAA58H04xiwURu933h9aYw78lNvKFnTzmphcVwwDA0T1MPORmvc"
}) => (
  <Container>
    <Top bgPhoto={bgPhoto} bgColor={bgColor}>
      <TopIconsContainer></TopIconsContainer>
    </Top>
    {(breed || intro) && (
      <Bottom>
        <ContentContainer>
          {breed && <Title color={titleColor}>{breed}</Title>}
          {intro && <Intro color={introColor}>{intro}</Intro>}
          <GroupAvatars />
        </ContentContainer>
      </Bottom>
    )}
  </Container>
);

PetCardPresenter.propTypes = {
  title: PropTypes.string,
  titleColor: PropTypes.string,
  intro: PropTypes.string,
  introColor: PropTypes.string,
  bgPhoto: PropTypes.string,
  bgColor: PropTypes.string
};

export default PetCardPresenter;
