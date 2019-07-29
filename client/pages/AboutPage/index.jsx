import React from 'react';
import { Helmet } from 'react-helmet';

import HeaderSection from './AboutPageHeaderSection';
import ContentSection from './AboutPageContentSection';

export default () => {
  const title = 'givebat — about';
  const description =
    "givebat.com is a curated look at the best of the new web. We're shining a spotlight on the web's trailblazers.";
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Helmet>

      <HeaderSection />
      <ContentSection />
    </>
  );
};
