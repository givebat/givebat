import React from 'react';
import styled from 'styled-components';

import HeaderSection from './components/HomePage/HeaderSection';
import FeaturedSection from './components/HomePage/FeaturedSection';
import BategoriesSection from './components/HomePage/BategoriesSection';
import FeaturedSectionOverflow from './components/HomePage/FeaturedSectionOverflow';

const ContentSectionContainer = styled.div`
  width: 100%;
`;

const GradientContainerTop = styled.div`
  background-image: linear-gradient(
    to bottom,
    rgba(50, 106, 255, 0.14) 0%,
    rgba(255, 50, 207, 0)
  );

  position: absolute;
  top: 0;
  width: 100%;
  height: 472px;
  z-index: -1;
`;

const GradientContainerBottom = styled.div`
  background: linear-gradient(
    0deg,
    rgba(255, 50, 143, 0.14) 0.07%,
    rgba(50, 163, 255, 0) 100%
  );

  /* position: absolute; */
  bottom: 0;
  width: 100%;
  margin-top: -472px;
  height: 472px;
  z-index: -1;
`;

export default () => {
  const title = 'givebat.com';
  const description =
    'givebat.com is a place to find the greatest Brave Creators';
  const ogImage = 'https://www.givebat.com/og-image.jpg';

  return (
    <>
      {/*<Helmet>*/}
      {/*  <title>{title}</title>*/}
      {/*  <meta name="description" content={description} />*/}

      {/*  <meta property="og:title" content={title} />*/}
      {/*  <meta property="og:description" content={description} />*/}
      {/*  <meta property="og:image" content={ogImage} />*/}
      {/*  <meta property="og:site_name" content={title} />*/}

      {/*  <meta name="twitter:card" content="summary_large_image" />*/}
      {/*  <meta name="twitter:site" content="@givebat" />*/}
      {/*  <meta name="twitter:title" content={title} />*/}
      {/*  <meta name="twitter:description" content={description} />*/}
      {/*  <meta name="twitter:creator" content="@givebat" />*/}
      {/*  <meta name="twitter:image" content={ogImage} />*/}
      {/*</Helmet>*/}

      <GradientContainerTop />
      <HeaderSection />
      <ContentSectionContainer>
        <FeaturedSection />

        <BategoriesSection />

        <FeaturedSectionOverflow />
      </ContentSectionContainer>
      <GradientContainerBottom />
    </>
  );
};
