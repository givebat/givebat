import React from 'react';

import { Helmet } from 'react-helmet';

import FeaturedPageHeaderSection from './FeaturedPageHeaderSection';
import FeaturedPageContentSection from './FeaturedPageContentSection';

export default props => {
  const title = `${props.title} — Featured Brave Creator`;
  const description = `${props.subtitle} — ${
    props.title
  }, a featured Brave Creator on givebat.com`;
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta property="og:title" content={title} />
        <meta property="og:image" content={props.heroImage} />
        <meta property="og:description" content={description} />
      </Helmet>

      <FeaturedPageHeaderSection {...props} />
      <FeaturedPageContentSection {...props} />
    </>
  );
};
