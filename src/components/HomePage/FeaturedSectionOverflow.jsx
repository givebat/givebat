import React from 'react'
import styled from 'styled-components'

import CollectionLabel from '../../common/CollectionLabel'

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
	CollectionCardTextBody
} from './FeaturedSection'
import Link from 'next/link'

const OverflowFeaturedContainer = styled.div`
  padding-top: 68px;
  padding-bottom: 68px;

  @media (max-width: 1030px) {
    padding: 20px;
  }
`

export default () => {
	return (
		<OverflowFeaturedContainer>
			<FeaturedContentContainer>
				<FeaturedCardContainerWrapper>
					<Link href={'/sky-folk'} as={'/sky-folk'}>
						<FeaturedCardContainer>
							<FeaturedCardImage imgSrcName="/images/featured/hero_theskyfolk.jpg"/>
							<FeaturedCardTextContainer>
								<FeaturedCardTextTitle>SKÝ FÓLK</FeaturedCardTextTitle>
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
					</Link>
				</FeaturedCardContainerWrapper>

				<FeaturedCardContainerWrapper>
					<Link href={'/internet-archive'} as={'/internet-archive'}>
						<FeaturedCardContainer>
							<FeaturedCardImage imgSrcName="/images/featured/hero_internetarchive.gif"/>
							<FeaturedCardTextContainer>
								<FeaturedCardTextTitle>Internet Archive</FeaturedCardTextTitle>
								<FeaturedCardTextBody>
									The world's largest library
								</FeaturedCardTextBody>
							</FeaturedCardTextContainer>
							<FeaturedCardHoverEmoji>
              <span role="img" aria-labelledby="classical building emoji">
                🏛
              </span>
							</FeaturedCardHoverEmoji>
						</FeaturedCardContainer>
					</Link>
				</FeaturedCardContainerWrapper>

				<CollectionCardContainerWrapper>
					<Link href={'/friends-of-brave'} as={'/friends-of-brave'}>
					<CollectionCardContainer>
						<CollectionCardImage imgSrcName="/images/collections/tn_friends_of_brave.jpg"/>

						<CollectionCardTextContainer>
							<CollectionCardTitleContainer>
								<CollectionLabel labelName="COLLECTION"/>
								<CollectionCardTextTitle>
									Friends of Brave
								</CollectionCardTextTitle>
							</CollectionCardTitleContainer>

							<CollectionCardTextBody>
								The creators, enthusiasts, and companies who are helping bring
								Brave's vision to life
							</CollectionCardTextBody>
						</CollectionCardTextContainer>
						<CollectionCardHoverEmoji>
              <span role="img" aria-labelledby="lion emoji">
                🦁
              </span>
						</CollectionCardHoverEmoji>
					</CollectionCardContainer>
					</Link>
				</CollectionCardContainerWrapper>
			</FeaturedContentContainer>
		</OverflowFeaturedContainer>
	)
};
