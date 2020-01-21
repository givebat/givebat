import React from 'react';
import Head from 'next/head'

import FeaturedPageHeaderSection from './FeaturedPageHeaderSection';
import FeaturedPageContentSection from './FeaturedPageContentSection';

export default props => {
  const title = `${props.title} — Featured Brave Creator`;
  const description = `${props.subtitle} — ${
    props.title
  }, a featured Brave Creator on givebat.com`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta property="og:title" content={title} />
        <meta
          property="og:image"
          content={`https://givebat.com${props.heroImage}`}
        />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="givebat.com" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@givebat" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:creator" content="@givebat" />
        <meta
          name="twitter:image"
          content={`https://givebat.com${props.heroImage}`}
        />
      </Head>

      <FeaturedPageHeaderSection {...props} />
      <FeaturedPageContentSection {...props} />
    </>
  );
};
