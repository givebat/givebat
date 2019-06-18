import React from 'react';

import BategoryContentCard from '../../../common/BategoryContentCard';


import {
    CollectionBodyParagraph,
    CollectionBodyParagraphBoldSpan,
    CollectionCardContainer
} from '../CollectionPageContentSection';

export default () => {
    return (
        <>
            <CollectionBodyParagraph>
                The Basic Attention Token is one of the most exciting and innovative crypto projects out there.
            </CollectionBodyParagraph>
            <CollectionBodyParagraph>
                Every since Satoshi Nakamoto released the Bitcoin whitepaper in 2008, the world of blockchain and cryptocurrencies has been developing rapidly.
            </CollectionBodyParagraph>

            <CollectionCardContainer>
                <BategoryContentCard
                    contentName="Uphold"
                    urlLink="https://uphold.com/"
                    subtitle="Buy and sell digital currencies easily"
                    imageLink={'/images/thumbnails/uphold.com.jpg'} />
            </CollectionCardContainer>

            <CollectionBodyParagraph>
                Placeholder paragraph.
            </CollectionBodyParagraph>
            <CollectionBodyParagraph>
                Placeholder paragraph.
            </CollectionBodyParagraph>

            <CollectionCardContainer>
                <BategoryContentCard
                    contentName="Uphold"
                    urlLink="https://uphold.com/"
                    subtitle="Buy and sell digital currencies easily"
                    imageLink={'/images/thumbnails/uphold.com.jpg'} />
            </CollectionCardContainer>

            <CollectionBodyParagraph>
                Placeholder paragraph.
            </CollectionBodyParagraph>
            <CollectionBodyParagraph>
                Placeholder paragraph.
            </CollectionBodyParagraph>

            <CollectionCardContainer>
                <BategoryContentCard
                    contentName="Uphold"
                    urlLink="https://uphold.com/"
                    subtitle="Buy and sell digital currencies easily"
                    imageLink={'/images/thumbnails/uphold.com.jpg'} />
            </CollectionCardContainer>

            <CollectionBodyParagraph>
                Placeholder paragraph.
            </CollectionBodyParagraph>
            <CollectionBodyParagraph>
                Placeholder paragraph.
            </CollectionBodyParagraph>
        </>
    )
}