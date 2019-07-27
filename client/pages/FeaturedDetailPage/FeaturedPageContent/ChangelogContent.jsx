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
        Even more impressive than snagging the{' '}
        <FeaturedContentBodyParagraphLinkText
          target="_blank"
          href="https://twitter.com/changelog"
        >
          @changelog
        </FeaturedContentBodyParagraphLinkText>{' '}
        handle on Twitter and the{' '}
        <FeaturedContentBodyParagraphLinkText
          target="_blank"
          href="https://changelog.com"
        >
          changelog.com
        </FeaturedContentBodyParagraphLinkText>{' '}
        domain is the fantastic collection of content that the Changelog
        team has built.
      </FeaturedContentBodyParagraph>

      <FeaturedContentBodyImage
        imgSrc={'/images/featured/hero_changelog.jpg'}
      />

      <FeaturedContentBodyParagraph>
        If you’re a developer, Changelog has the most important and
        relevant development news you need to stay up to date on the
        latest industry trends and information.
      </FeaturedContentBodyParagraph>
      <FeaturedContentBodyParagraph>
        There are{' '}
        <FeaturedContentBodyParagraphLinkText
          target="_blank"
          href="https://changelog.com/podcasts"
        >
          Changelog podcasts
        </FeaturedContentBodyParagraphLinkText>{' '}
        about everything from{' '}
        <FeaturedContentBodyParagraphLinkText
          target="_blank"
          href="https://changelog.com/practicalai"
        >
          AI
        </FeaturedContentBodyParagraphLinkText>
        , to{' '}
        <FeaturedContentBodyParagraphLinkText
          target="_blank"
          href="https://changelog.com/jsparty"
        >
          JavaScript
        </FeaturedContentBodyParagraphLinkText>
        , to{' '}
        <FeaturedContentBodyParagraphLinkText
          target="_blank"
          href="https://changelog.com/podcast"
        >
          wide-ranging conversations with industry leaders and experts
        </FeaturedContentBodyParagraphLinkText>
        , to{' '}
        <FeaturedContentBodyParagraphLinkText
          target="_blank"
          href="https://changelog.com/founderstalk"
        >
          the difficulties of running companies and making things.
        </FeaturedContentBodyParagraphLinkText>{' '}
      </FeaturedContentBodyParagraph>

      <FeaturedContentBodyParagraph>
        (Many episodes also have an elegantly displayed transcription
        underneath them, if you'd prefer reading over listening.)
      </FeaturedContentBodyParagraph>

      <FeaturedContentBodyParagraph>
        Changelog is also fostering a global community around their
        content. You can join{' '}
        <FeaturedContentBodyParagraphLinkText
          target="_blank"
          href="https://changelog.com/community"
        >
          the Changelog Developer Community in a very friendly Slack
          chat
        </FeaturedContentBodyParagraphLinkText>{' '}
        and get access to exclusive discounts and special offers from
        their partners, as well as a backstage pass to everything the
        Changelog team does.
      </FeaturedContentBodyParagraph>

      <FeaturedContentBodyParagraph>
        And even if you’re not a developer, there are still lots of
        things on the site you might find valuable. For example,{' '}
        <FeaturedContentBodyParagraphLinkText
          target="_blank"
          href=" https://changelog.com/podcast/323"
        >
          an awesome interview with Brian Bondy, the CTO and
          co-founder of Brave.
        </FeaturedContentBodyParagraphLinkText>{' '}
        Listen to the story of{' '}
        <FeaturedContentBodyParagraphLinkText
          target="_blank"
          href=" https://changelog.com/podcast/323#t=5:33"
        >
          how Brian’s journey with Brave started with a Twitter DM
        </FeaturedContentBodyParagraphLinkText>
        . (And if you’d prefer to read it, there’s even a beautifully
        laid out transcript at the bottom of that page!)
      </FeaturedContentBodyParagraph>

      <FeaturedContentBodyParagraph>
        Here's a page where you can see{' '}
        <FeaturedContentBodyParagraphLinkText
          target="_blank"
          href="https://changelog.com/topic/brave"
        >
          everything on Changelog about Brave and BAT
        </FeaturedContentBodyParagraphLinkText>
        .
      </FeaturedContentBodyParagraph>

      <FeaturedContentBodyParagraph>
        Once the BAT SDK is built, released, and flourishing in the
        wild, you’ll probably be able to support Changelog’s podcast
        episodes with an amount of BAT proportional to how much time you
        spend listening, but until then, you can send Changelog some BAT
        through their site to say thanks.
      </FeaturedContentBodyParagraph>
    </>
  );
};
