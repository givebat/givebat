import React from 'react';

import CollectionPageHeaderSection from './CollectionPageHeaderSection';
import CollectionPageContentSection from './CollectionPageContentSection';
import Head from 'next/head'

export default props => {
  const title = `${props.title} — Brave Creator Collection`;
  const description = `${
    props.title
  }, a collection of Brave Creators, curated by givebat.com`;
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

      <CollectionPageHeaderSection {...props} />
      <CollectionPageContentSection {...props} />
    </>
  );
};
