import React from 'react';

import {
    FeaturedContentBodyParagraph,
    FeaturedContentBodyParagraphLinkText,
    FeaturedContentBodyImage
} from '../FeaturedPageContentSection';

export default () => {
    return (
        <>
            <FeaturedContentBodyParagraph>
                PLACEHOLDER <FeaturedContentBodyParagraphLinkText target="_blank" href="https://givebat.com/">LINK</FeaturedContentBodyParagraphLinkText>
            </FeaturedContentBodyParagraph>

            <FeaturedContentBodyParagraph>
                PLACEHOLDER paragraph sentence words.
            </FeaturedContentBodyParagraph>

            <FeaturedContentBodyParagraph>
                PLACEHOLDER paragraph sentence words.
            </FeaturedContentBodyParagraph>

            <FeaturedContentBodyImage imgSrc={'/images/featured/body_internetarchive.jpg'} />

            <FeaturedContentBodyParagraph>
                PLACEHOLDER paragraph sentence words.
            </FeaturedContentBodyParagraph>

            <FeaturedContentBodyParagraph>
                PLACEHOLDER paragraph sentence words.
            </FeaturedContentBodyParagraph>
        </>
    )
}