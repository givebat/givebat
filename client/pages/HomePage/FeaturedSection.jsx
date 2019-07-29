import React from 'react';
import styled from 'styled-components';

import SectionLabel from '../../common/SectionLabel';
import CollectionLabel from '../../common/CollectionLabel';

import { NavLink } from 'react-router-dom';

const FeaturedContainer = styled.div`
  padding-top: 42px;
  padding-bottom: 68px;

  @media (max-width: 1030px) {
    padding: 20px;
  }
`;

export const FeaturedContentContainer = styled.div`
  max-width: 984px;

  margin-left: auto;
  margin-right: auto;

  display: grid;

  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 48px;

  @media (max-width: 1030px) {
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }
`;

export const FeaturedCardHoverEmoji = styled.p`
  font-size: 88px;
  margin: 0;

  transition: transform 300ms ease-out;

  bottom: -120px;
  right: 54px;
  text-align: right;
  padding: 0;
  position: absolute;
`;

export const FeaturedCardContainerWrapper = styled.div`
  padding: 4px;
  min-height: 400px;
  max-width: 472px;
  width: 100%;

  align-self: start;
  justify-self: center;

  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  border-radius: 52px;

  &:hover {
    background-color: #ff325a;

    box-shadow: 0 6px 12px 0 rgba(255, 50, 90, 0.2);
  }
`;

export const FeaturedCardContainer = styled(NavLink)`
  border-radius: 48px;
  background-color: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 12px 16px 0 rgba(0, 0, 0, 0.06);

  min-height: 400px;
  width: 100%;

  text-decoration: none;

  transition: border 150ms ease-in;

  position: relative;
  overflow: hidden;

  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;
  grid-gap: 0px;

  &:hover ${FeaturedCardHoverEmoji} {
    transform: translate(0, -75px);
  }

  @media (hover: none) {
    /* on devices that do not have a pointer, don't have hover effects */
    :hover {
      transition: none;
    }
  }
`;

export const FeaturedCardImage = styled.div`
  border-radius: 48px 48px 0 0;
  width: 100%;
  background-image: url(${props => props.imgSrcName});
  background-size: cover;
  background-position: center;
`;

export const FeaturedCardTextContainer = styled.div`
  padding: 26px 54px 60px 24px;
  overflow: hidden;
`;

export const FeaturedCardTextTitle = styled.h3`
  font-display: auto;
  font-family: 'Muli', Arial, Helvetica, sans-serif;
  font-weight: 800;
  font-style: normal;

  font-size: 28px;
  line-height: 35px;
  color: #9b9b9b;

  text-decoration: none;
  padding: 0;
  margin: 0;
`;

export const FeaturedCardTextBody = styled.h4`
  font-display: auto;
  font-family: 'Muli', Arial, Helvetica, sans-serif;
  font-weight: 800;
  font-style: normal;

  font-size: 28px;
  line-height: 35px;
  color: #000;
  /* min-height: 76px; */

  text-decoration: none;
  padding: 0;
  margin: 0;
`;

export const CollectionCardHoverEmoji = styled.p`
  font-size: 88px;
  margin: 0;
  transition: transform 300ms ease-out;
  bottom: -120px;
  right: 54px;
  text-align: right;
  padding: 0;
  position: absolute;
`;

export const CollectionCardContainerWrapper = styled.div`
  padding: 4px;

  max-width: 984px;
  width: 100%;

  min-height: 328px;
  height: 100%;

  grid-column: span 2;

  align-self: center;
  justify-self: center;

  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  border-radius: 52px;

  &:hover {
    background-color: #ff325a;
    box-shadow: 0 6px 12px 0 rgba(255, 50, 90, 0.2);
  }

  @media (max-width: 1030px) {
    max-width: 472px;
    grid-column: span 1;
    grid-row: span 2;
  }
`;

export const CollectionCardContainer = styled(NavLink)`
  text-decoration: none;
  min-height: 336px;
  height: 100%;

  border-radius: 48px;
  background-color: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 12px 16px 0 rgba(0, 0, 0, 0.06);

  align-self: center;
  justify-self: center;

  transition: border 150ms ease-in;

  overflow: hidden;
  position: relative;

  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 472px auto;

  &:hover ${CollectionCardHoverEmoji} {
    transform: translate(0, -75px);
  }

  @media (hover: none) {
    /* on devices that do not have a pointer, don't have hover effects */
    :hover {
      transition: none;
      border: none;
    }
  }

  @media (max-width: 1030px) {
    grid-template-rows: minmax(200px, auto) auto;
    grid-template-columns: 1fr;
  }
`;

export const CollectionCardImage = styled.div`
  border-radius: 48px 0 0 48px;
  width: 100%;

  background-image: url(${props => props.imgSrcName});
  background-size: cover;
  background-position: center;

  @media (max-width: 1030px) {
    border-radius: 48px 48px 0 0;
  }
`;

export const CollectionCardTextContainer = styled.div`
  padding: 0;
  overflow: hidden;

  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr;

  grid-gap: 0;

  height: 100%;
`;

export const CollectionCardTitleContainer = styled.div`
  align-self: start;
  justify-self: start;

  padding: 34px 54px 14px 32px;
`;

export const CollectionCardTextTitle = styled.h3`
  font-display: auto;
  font-family: 'Muli', Arial, Helvetica, sans-serif;
  font-weight: 800;
  font-style: normal;

  font-size: 36px;
  line-height: 45px;
  color: #000;

  text-decoration: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    /* font-size: 26px; */
  }
`;

export const CollectionCardTextBody = styled.p`
  font-display: auto;
  font-family: 'Muli', Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-style: normal;

  font-size: 18px;
  line-height: 23px;

  color: #939393;

  text-decoration: none;
  margin: 0;

  align-self: end;

  padding: 14px 54px 77px 32px;

  @media (max-width: 1030px) {
    /* padding-top: 32px; */
  }
`;

export default () => {
  return (
    <FeaturedContainer>
      <SectionLabel sectionName="FEATURED" featured />

      <FeaturedContentContainer>
        <FeaturedCardContainerWrapper>
          <FeaturedCardContainer to="/changelog">
            <FeaturedCardImage imgSrcName="/images/featured/body_changelog_2.png" />
            <FeaturedCardTextContainer>
              <FeaturedCardTextTitle>Changelog</FeaturedCardTextTitle>
              <FeaturedCardTextBody>
                News and podcasts for developers
              </FeaturedCardTextBody>
            </FeaturedCardTextContainer>
            <FeaturedCardHoverEmoji>
              <span role="img" aria-labelledby="laptop emoji">
                💻
              </span>
            </FeaturedCardHoverEmoji>
          </FeaturedCardContainer>
        </FeaturedCardContainerWrapper>

        <FeaturedCardContainerWrapper>
          <FeaturedCardContainer to="/indizr">
            <FeaturedCardImage imgSrcName="/images/featured/hero_indizr2.jpg" />
            <FeaturedCardTextContainer>
              <FeaturedCardTextTitle>Indizr</FeaturedCardTextTitle>
              <FeaturedCardTextBody>Everything Web 3.0</FeaturedCardTextBody>
            </FeaturedCardTextContainer>
            <FeaturedCardHoverEmoji>
              <span role="img" aria-labelledby="web emoji">
                🕸
              </span>
            </FeaturedCardHoverEmoji>
          </FeaturedCardContainer>
        </FeaturedCardContainerWrapper>

        <CollectionCardContainerWrapper>
          <CollectionCardContainer to="/crypto-companions">
            <CollectionCardImage imgSrcName="/images/collections/hero_crypto_companions.jpg" />

            <CollectionCardTextContainer>
              <CollectionCardTitleContainer>
                <CollectionLabel labelName="COLLECTION" />
                <CollectionCardTextTitle>
                  Crypto Companions
                </CollectionCardTextTitle>
              </CollectionCardTitleContainer>

              <CollectionCardTextBody>
                The brave crypto companies and creators driving the world of
                crypto forward
              </CollectionCardTextBody>
            </CollectionCardTextContainer>
            <CollectionCardHoverEmoji>
              <span role="img" aria-labelledby="money with wings emoji">
                💸
              </span>
            </CollectionCardHoverEmoji>
          </CollectionCardContainer>
        </CollectionCardContainerWrapper>
      </FeaturedContentContainer>
    </FeaturedContainer>
  );
};
