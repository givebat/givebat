import React from 'react';
import styled from 'styled-components';

import CollectionLabel from '../../common/CollectionLabel';

import {
    FeaturedContentContainer,
    FeaturedCardHoverEmoji,
    FeaturedCardContainerWrapper,
    FeaturedCardContainer,
    FeaturedCardImage,
    FeaturedCardTextContainer,
    FeaturedCardTextTitle,
    FeaturedCardTextBody,
    CollectionCardHoverEmoji,
    CollectionCardContainerWrapper,
    CollectionCardContainer,
    CollectionCardImage,
    CollectionCardTextContainer,
    CollectionCardTitleContainer,
    CollectionCardTextTitle,
    CollectionCardTextBody,
} from './FeaturedSection';

const OverflowFeaturedContainer = styled.div`
    padding-top: 68px;
    padding-bottom: 68px;

    @media (max-width: 1030px) {
        padding: 20px;
    }
`;

export default () => {
    return (
        <OverflowFeaturedContainer>
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
                                🏛
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
        </OverflowFeaturedContainer>
    );
};
