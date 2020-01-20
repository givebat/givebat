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
  const res = await fetch('http://localhost:3000/imitationBackend.json');
  const data = await res.json();

  return {
    creators: data,
  };
};

export default FeaturedPage;
