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
        INTROPARAGRAPH
      </FeaturedContentBodyParagraph>

      <FeaturedContentBodyParagraph>
        ANOTHERPARAGRAPH
      </FeaturedContentBodyParagraph>

      <FeaturedContentBodyImage
        imgSrc={'/images/featured/REPLACETHISWITHIMAGEFILEPATH.jpg'}
      />

      <FeaturedContentBodyParagraph>
        PARAGRAPHPLACEHOLDER
      </FeaturedContentBodyParagraph>

      <FeaturedContentBodyParagraph>
        PRELINKTEXT{' '}
        <FeaturedContentBodyParagraphLinkText
          target="_blank"
          href="HTTPSEXTERNALLINK"
        >
          ORHERELINKTEXT
        </FeaturedContentBodyParagraphLinkText>
        COMMAORTHIS{' '}
        <FeaturedContentBodyParagraphLinkText
          target="_blank"
          href="HTTPSEXTERNALLINK"
        >
          ORTHISLINKTEXT
        </FeaturedContentBodyParagraphLinkText>{' '}
        OR{' '}
        <FeaturedContentBodyParagraphLinkText
          target="_blank"
          href="HTTPSEXTERNALLINK"
        >
          THISLINKTEXT
        </FeaturedContentBodyParagraphLinkText>
        .
      </FeaturedContentBodyParagraph>

      <FeaturedContentBodyParagraph>
        PARAGRAPHPLACEHOLDER
      </FeaturedContentBodyParagraph>

      <FeaturedContentBodyParagraph>
        <FeaturedContentBodyParagraphLinkText
          target="_blank"
          href="HTTPSEXTERNALLINK"
        >
          LINKDESCRIPTION
        </FeaturedContentBodyParagraphLinkText>
      </FeaturedContentBodyParagraph>

      <FeaturedContentBodyParagraph>
        <FeaturedContentBodyParagraphLinkText
          target="_blank"
          href="HTTPSEXTERNALLINK"
        >
          LINKDESCRIPTION
        </FeaturedContentBodyParagraphLinkText>
      </FeaturedContentBodyParagraph>

      <FeaturedContentBodyParagraph>
        <FeaturedContentBodyParagraphLinkText
          target="_blank"
          href="HTTPSEXTERNALLINK"
        >
          LINKDESCRIPTION
        </FeaturedContentBodyParagraphLinkText>
      </FeaturedContentBodyParagraph>

      <FeaturedContentBodyParagraph>
        <FeaturedContentBodyParagraphLinkText
          target="_blank"
          href="HTTPSEXTERNALLINK"
        >
          LINKDESCRIPTION
        </FeaturedContentBodyParagraphLinkText>
      </FeaturedContentBodyParagraph>

      <FeaturedContentBodyParagraph>
        PARAGRAPHPLACEHOLDER
      </FeaturedContentBodyParagraph>
    </>
  );
};
