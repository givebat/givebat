import React from 'react';
import styled from 'styled-components';

import CollectionLabel from '../../common/CollectionLabel';

import { NavLink } from 'react-router-dom';


const FeaturedContainer = styled.div`
    padding-top: 68px;
    padding-bottom: 68px;

    @media (max-width: 1030px) {
        padding: 20px;
    }
`;

const FeaturedContentContainer = styled.div`
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

const FeaturedCardHoverEmoji = styled.p`
    font-size: 88px;
    margin: 0;

    transition: transform 300ms ease-out;

    bottom: -120px;
    right: 54px;
    text-align: right;
    padding: 0;
    position: absolute;
`;

const FeaturedCardContainerWrapper = styled.div`
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
        background: linear-gradient(
            90deg,
            #ff7a2c 0%,
            #ff5f80 50.51%,
            #cd62ff 100%
        );
        box-shadow: 0 6px 12px 0 rgba(255, 50, 90, 0.2);
    }
`;

const FeaturedCardContainer = styled(NavLink)`
    border-radius: 48px;
    background-color: #ffffff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1),
        0 12px 16px 0 rgba(0, 0, 0, 0.06);

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

const FeaturedCardImage = styled.div`
    border-radius: 48px 48px 0 0;
    width: 100%;
    background-image: url(${props => props.imgSrcName});
    background-size: cover;
    background-position: center;
`;

const FeaturedCardTextContainer = styled.div`
    padding: 26px 54px 60px 24px;
    overflow: hidden;
`;

const FeaturedCardTextTitle = styled.h3`
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

const FeaturedCardTextBody = styled.h4`
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

const CollectionCardHoverEmoji = styled.p`
    font-size: 88px;
    margin: 0;
    transition: transform 300ms ease-out;
    bottom: -120px;
    right: 54px;
    text-align: right;
    padding: 0;
    position: absolute;
`;

const CollectionCardContainerWrapper = styled.div`
    padding: 4px;

    max-width: 984px;
    width: 100%;

    min-height: 336px;
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
        background: linear-gradient(
            90deg,
            #ff7a2c 0%,
            #ff5f80 50.51%,
            #cd62ff 100%
        );
        box-shadow: 0 6px 12px 0 rgba(255, 50, 90, 0.2);
    }

    @media (max-width: 1030px) {
        max-width: 472px;
        grid-column: span 1;
        grid-row: span 2;
    }
`;

const CollectionCardContainer = styled(NavLink)`
    text-decoration: none;
    min-height: 336px;
    height: 100%;

    border-radius: 48px;
    background-color: #ffffff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1),
        0 12px 16px 0 rgba(0, 0, 0, 0.06);

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

const CollectionCardImage = styled.div`
    border-radius: 48px 0 0 48px;
    width: 100%;

    background-image: url(${props => props.imgSrcName});
    background-size: cover;
    background-position: center;

    @media (max-width: 1030px) {
        border-radius: 48px 48px 0 0;
    }
`;

const CollectionCardTextContainer = styled.div`
    padding: 0;
    overflow: hidden;

    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;

    grid-gap: 0;

    height: 100%;
`;

const CollectionCardTitleContainer = styled.div`
    align-self: start;
    justify-self: start;

    padding: 34px 54px 14px 32px;
`;

const CollectionCardTextTitle = styled.h3`
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

const CollectionCardTextBody = styled.p`
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
            {/* <SectionLabel sectionName="FEATURED" featured /> */}

            <FeaturedContentContainer>
                <FeaturedCardContainerWrapper>
                    <FeaturedCardContainer to="/sky-folk">
                        <FeaturedCardImage imgSrcName="/images/featured/hero_theskyfolk.jpg" />
                        <FeaturedCardTextContainer>
                            <FeaturedCardTextTitle>
                                SKÝ FÓLK
                            </FeaturedCardTextTitle>
                            <FeaturedCardTextBody>
                                Stunning landscape photography and films
                            </FeaturedCardTextBody>
                        </FeaturedCardTextContainer>
                        <FeaturedCardHoverEmoji>
                            <span role="img" aria-labelledby="desert emoji">
                                🏜️
                            </span>
                        </FeaturedCardHoverEmoji>
                    </FeaturedCardContainer>
                </FeaturedCardContainerWrapper>

                <FeaturedCardContainerWrapper>
                    <FeaturedCardContainer to="/internet-archive">
                        <FeaturedCardImage imgSrcName="/images/featured/hero_internetarchive.gif" />
                        <FeaturedCardTextContainer>
                            <FeaturedCardTextTitle>
                                Internet Archive
                            </FeaturedCardTextTitle>
                            <FeaturedCardTextBody>
                                The world's largest library
                            </FeaturedCardTextBody>
                        </FeaturedCardTextContainer>
                        <FeaturedCardHoverEmoji>
                            <span
                                role="img"
                                aria-labelledby="classical building emoji"
                            >
                                🏛️
                            </span>
                        </FeaturedCardHoverEmoji>
                    </FeaturedCardContainer>
                </FeaturedCardContainerWrapper>

                <CollectionCardContainerWrapper>
                    <CollectionCardContainer to="/friends-of-brave">
                        <CollectionCardImage imgSrcName="/images/collections/tn_friends_of_brave.jpg" />

                        <CollectionCardTextContainer>
                            <CollectionCardTitleContainer>
                                <CollectionLabel labelName="COLLECTION" />
                                <CollectionCardTextTitle>
                                    Friends of Brave
                                </CollectionCardTextTitle>
                            </CollectionCardTitleContainer>

                            <CollectionCardTextBody>
                                The creators, enthusiasts, and companies who are
                                helping bring Brave's vision to life
                            </CollectionCardTextBody>
                        </CollectionCardTextContainer>
                        <CollectionCardHoverEmoji>
                            <span role="img" aria-labelledby="lion emoji">
                                🦁
                            </span>
                        </CollectionCardHoverEmoji>
                    </CollectionCardContainer>
                </CollectionCardContainerWrapper>
            </FeaturedContentContainer>
        </FeaturedContainer>
    );
};
