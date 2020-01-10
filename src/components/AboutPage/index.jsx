import React from 'react';

import HeaderSection from './AboutPageHeaderSection';
import ContentSection from './AboutPageContentSection';
import Head from 'next/head'

export default () => {
  const title = 'givebat — about';
  const description =
    "givebat.com is a curated look at the best of the new web. We're shining a spotlight on the web's trailblazers.";
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>

      <HeaderSection />
      <ContentSection />
    </>
  );
};
