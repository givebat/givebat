import React from 'react';

import { Helmet } from 'react-helmet';

import CollectionPageHeaderSection from './CollectionPageHeaderSection';
import CollectionPageContentSection from './CollectionPageContentSection';

export default props => {
  const title = `${props.title} — Brave Creator Collection`;
  const description = `${
    props.title
  }, a collection of Brave Creators, curated by givebat.com`;
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={props.heroImage} />
        <meta property="og:description" content={description} />
      </Helmet>

      <CollectionPageHeaderSection {...props} />
      <CollectionPageContentSection {...props} />
    </>
  );
};
