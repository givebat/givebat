import React from 'react';

// import archive_body_photo_1 from '../../../images/featured/body_internetarchive.jpg';

import {
    FeaturedContentBodyParagraph,
    FeaturedContentBodyParagraphLinkText,
    FeaturedContentBodyImage
} from '../FeaturedPageContentSection';

export default () => {
    return (
        <>
            <FeaturedContentBodyParagraph>
                In 1996, Brewster Kahle started backing up the internet in his attic.
            </FeaturedContentBodyParagraph>
            <FeaturedContentBodyParagraph>
                In 2001, he released the Wayback Machine, allowing anyone to sift through it all.
            </FeaturedContentBodyParagraph>
            <FeaturedContentBodyParagraph>
                Today, the Wayback Machine is home to over 300 billion web pages, and you can visit almost any web page to see what it looked like at various points in the past.
            </FeaturedContentBodyParagraph>
            <FeaturedContentBodyParagraph>
                My personal favourite site to look back on is slack.com: before the phenomenally successful workplace communication app was born, slack.com was home to someone’s cat pictures until 2013. <FeaturedContentBodyParagraphLinkText target="_blank" href="https://web.archive.org/web/20130426025715/http://slack.com/">Go check if you don’t believe me!</FeaturedContentBodyParagraphLinkText>
            </FeaturedContentBodyParagraph>
            <FeaturedContentBodyParagraph>
                But the Internet Archive goes beyond just web pages. It also stores over 40 million gigabytes worth of books, records, videos, images, and software. The Internet Archive has been running as a non-profit for over 22 years now.
            </FeaturedContentBodyParagraph>

            <FeaturedContentBodyImage imgSrc={'/images/featured/body_internetarchive.jpg'} />
            
            <FeaturedContentBodyParagraph>
                On the internet today, it often feels like everything is ephemeral and nothing lasts very long, so the Internet Archive is providing an important service to the world. The Internet Archive might be the last record of otherwise forgotten moments in this vast digital world.
            </FeaturedContentBodyParagraph>
            <FeaturedContentBodyParagraph>
                The Internet Archive lives at archive.org, which is a Brave Rewards-verified domain. Show them that you appreciate their service by sending them a tip in BAT!
            </FeaturedContentBodyParagraph>
            <FeaturedContentBodyParagraph>
                (It’s a non-profit organization, and it runs primarily on donations, so maybe even consider adding the Internet Archive to your monthly contribution list!)
            </FeaturedContentBodyParagraph>
        </>
    )
}