import React from 'react';

// import body_skyfolk from '../../../images/featured/body_skyfolk.png';

import {
  FeaturedContentBodyParagraph,
  FeaturedContentBodyImage,
  FeaturedContentBodyParagraphLinkText,
} from '../FeaturedPageContentSection';

export default () => {
  return (
    <>
      <FeaturedContentBodyParagraph>
        “Ský fólk" is Icelandic for “cloud people.”
      </FeaturedContentBodyParagraph>
      <FeaturedContentBodyParagraph>
        SKÝ FÓLK is a group of passionate adventurers, wanderers, photographers,
        and filmmakers who travel the world to capture and share the natural
        beauty of the world’s most impressive landscapes.
      </FeaturedContentBodyParagraph>
      <FeaturedContentBodyParagraph>
        On the SKÝ FÓLK website, you’ll find photographs of the most beautiful
        places on the planet, and captivating videos of the process and
        adventures behind the photographs. There’s also photography tutorials,
        details about exciting experimental VR projects, and much more.
      </FeaturedContentBodyParagraph>
      <FeaturedContentBodyParagraph>
        Will Christiansen is the owner and director of SKÝ FÓLK. Will is
        passionate about the future for content creators that Brave is working
        toward, and you might have seen him hanging around the{' '}
        <FeaturedContentBodyParagraphLinkText
          target="_blank"
          href="https://reddit.com/r/BATproject"
        >
          r/BATproject
        </FeaturedContentBodyParagraphLinkText>{' '}
        subreddit.
      </FeaturedContentBodyParagraph>
      <FeaturedContentBodyParagraph>
        In fact, if you’re a Brave user, you’ve probably also seen some of
        Will’s work featured in Brave’s new tab page!
      </FeaturedContentBodyParagraph>

      <FeaturedContentBodyImage imgSrc={'/images/featured/body_skyfolk.png'} />

      <FeaturedContentBodyParagraph>
        SKÝ FÓLK is blazing the trail toward the exciting future for creators on
        the web.
      </FeaturedContentBodyParagraph>
      <FeaturedContentBodyParagraph>
        Check out their awesome work, follow{' '}
        <FeaturedContentBodyParagraphLinkText
          target="_blank"
          href="https://instagram.com/sky_folk"
        >
          @sky_folk on Instagram
        </FeaturedContentBodyParagraphLinkText>
        , subscribe to{' '}
        <FeaturedContentBodyParagraphLinkText
          target="_blank"
          href="https://youtube.com/willchristiansen"
        >
          Will’s YouTube channel
        </FeaturedContentBodyParagraphLinkText>
        , and go support them by sending some BAT their way!
      </FeaturedContentBodyParagraph>
    </>
  );
};
