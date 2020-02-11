import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { HeartFull, HeartEmpty } from "components/common/Icons";

const Container = styled.div`
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.07);
  background-color: white;
  border-radius: 8px;
  height: 200px;
  width: 100%;
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
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

const IconContainer = styled.div`
  align-self: center;
  margin-top: 20px;
  color: ${props => props.color};
  cursor: pointer;
`;

const TopIconsContainer = styled.div`
  display: flex;
`;

const TopIconContainer = styled.div`
  color: ${props => props.color};
  cursor: pointer;
  &:first-child {
    margin-right: 10px;
  }
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

const Card13 = ({
  topIcons,
  topIconsColor = "white",
  centerIcon,
  centerIconSize = 3,
  centerIconColor = "white",
  title,
  titleColor = "#1F2126",
  intro,
  introColor = "#9CA1AE",
  bgColor = "#DBE0E6",
  bgPhoto = "https://lh3.googleusercontent.com/proxy/B-ifZWisdfvNiqxi_LByhKFc73GRe6RDrK7tqLKG0hF-4SbAxpvLqhqYKAA58H04xiwURu933h9aYw78lNvKFnTzmphcVwwDA0T1MPORmvc"
}) => (
  <Container>
    <Top bgPhoto={bgPhoto} bgColor={bgColor}>
      <TopIconsContainer>
        <HeartEmpty />
      </TopIconsContainer>
    </Top>
    {(title || intro) && (
      <Bottom>
        <ContentContainer>
          {title && <Title color={titleColor}>{title}</Title>}
          {intro && <Intro color={introColor}>{intro}</Intro>}
        </ContentContainer>
      </Bottom>
    )}
  </Container>
);

Card13.propTypes = {
  topIcons: PropTypes.arrayOf(PropTypes.string),
  topIconsColor: PropTypes.string,
  centerIcon: PropTypes.string,
  centerIconSize: PropTypes.number,
  centerIconColor: PropTypes.string,
  title: PropTypes.string,
  titleColor: PropTypes.string,
  intro: PropTypes.string,
  introColor: PropTypes.string,
  cta: PropTypes.string,
  ctaFromBgColor: PropTypes.string,
  ctaToBgColor: PropTypes.string,
  ctaTextColor: PropTypes.string,
  bgPhoto: PropTypes.string,
  bgColor: PropTypes.string
};

export default Card13;
