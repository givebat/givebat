import React from 'react';

import {
    FeaturedContentBodyParagraph,
    FeaturedContentBodyParagraphLinkText,
    FeaturedContentBodyImage,
} from '../FeaturedPageContentSection';

export default () => {
    return (
        <>
            <FeaturedContentBodyParagraph>
                Peter McKay has been a startup founder, product manager, and an
                award-winning reporter at the Wall Street Journal and The
                Washington Post. Now he’s now focusing on Web 3.0 technologies.
            </FeaturedContentBodyParagraph>

            <FeaturedContentBodyParagraph>
                One of the ways he’s doing that is by running Indizr: a website
                dedicated to exploring the many different facets of the shift
                toward Web 3.0.
            </FeaturedContentBodyParagraph>

            <FeaturedContentBodyImage
                imgSrc={'/images/featured/hero_indizr.jpg'}
            />

            <FeaturedContentBodyParagraph>
                Whatever your reason is for your being here on givebat.com and
                giving these words your attention (thanks!), there’s bound to be
                something interesting or useful for you on Indizr.
            </FeaturedContentBodyParagraph>

            <FeaturedContentBodyParagraph>
                There are some fantastic articles on Indizr. You can look at{' '}
                <FeaturedContentBodyParagraphLinkText
                    target="_blank"
                    href="https://blog.indizr.com/tag/bat/"
                >
                    all of them in order
                </FeaturedContentBodyParagraphLinkText>
                , or you can check out{' '}
                <FeaturedContentBodyParagraphLinkText
                    target="_blank"
                    href="https://blog.indizr.com/tag/brave/"
                >
                    just the articles about Brave
                </FeaturedContentBodyParagraphLinkText>{' '}
                or{' '}
                <FeaturedContentBodyParagraphLinkText
                    target="_blank"
                    href="https://blog.indizr.com/tag/bat/"
                >
                    all the posts about BAT
                </FeaturedContentBodyParagraphLinkText>
                .
            </FeaturedContentBodyParagraph>

            <FeaturedContentBodyParagraph>
                Here are a few of my favourites:
            </FeaturedContentBodyParagraph>

            <FeaturedContentBodyParagraph>
                <FeaturedContentBodyParagraphLinkText
                    target="_blank"
                    href="https://blog.indizr.com/why-we-should-want-the-ad-model-to-survive/"
                >
                    A clear and succinct explanation of the complicated
                    relationship between content creators and advertisers, and
                    why the web desperately needs something like BAT in order to
                    thrive.
                </FeaturedContentBodyParagraphLinkText>
            </FeaturedContentBodyParagraph>

            <FeaturedContentBodyParagraph>
                <FeaturedContentBodyParagraphLinkText
                    target="_blank"
                    href="https://blog.indizr.com/how-we-got-to-web-3-0-2/"
                >
                    A brief release history of the web: from Web 1.0 to Web 2.0,
                    and now to Web 3.0—what those terms mean, and some moments
                    that have been important milestones for the web.
                </FeaturedContentBodyParagraphLinkText>
            </FeaturedContentBodyParagraph>

            <FeaturedContentBodyParagraph>
                <FeaturedContentBodyParagraphLinkText
                    target="_blank"
                    href="https://blog.indizr.com/why-blockchain-really-matters/"
                >
                    An underrated question: why should anyone even care about
                    blockchains?
                </FeaturedContentBodyParagraphLinkText>
            </FeaturedContentBodyParagraph>

            <FeaturedContentBodyParagraph>
                <FeaturedContentBodyParagraphLinkText
                    target="_blank"
                    href="https://blog.indizr.com/heating-up-the-web-3-0-browser-wars-are/"
                >
                    A post explaining how Brave could be part of a movement
                    toward a Third Browser War.
                </FeaturedContentBodyParagraphLinkText>
            </FeaturedContentBodyParagraph>

            <FeaturedContentBodyParagraph>
                Indizr is full of informative and well written posts about this
                exciting third chapter of the web, a movement that Brave and BAT
                (and you!) are championing. Indizr is a site that’s definitely
                worth bookmarking and checking on regularly. I know I’ll be
                supporting it with regular BAT donations!
            </FeaturedContentBodyParagraph>
        </>
    );
};
