import React from 'react';
import { useRouter } from 'next/router';
import FeaturedDetailPage from '../src/components/FeaturedDetailPage';
import fetch from 'isomorphic-unfetch';
import ErrorPage from './_error.js';

const FeaturedPage = props => {
  const router = useRouter();

  const currentUrl = router.query.featuredcreator;

  if (props.creators[currentUrl] === undefined) {
    return <ErrorPage statusCode={404} />;
  }

  const infoFromCms = props.creators && props.creators[currentUrl];

  const allProps = { ...{ current: currentUrl }, ...infoFromCms };

  return <FeaturedDetailPage {...allProps} />;
};

FeaturedPage.getInitialProps = async function() {
  const dev = process.env.NODE_ENV !== 'production';
  // console.log('dev', dev);

  const urlToFetch = dev
    ? 'http://localhost:3000/imitationBackend.json'
    : 'https://givebat.com/imitationBackend.json';

  const res = await fetch(urlToFetch);
  const data = await res.json();

  return {
    creators: data,
  };
};

export default FeaturedPage;
