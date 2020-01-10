import React from 'react';
import FeaturedDetailPage from '../../src/components/FeaturedDetailPage';

const Index = props => {
  const customs = {
    title: 'Changelog',
    subtitle: 'News and podcasts for developers',
    heroImage: '/images/featured/body_changelog_2.png',
    author: 'Daniel James',
    date: 'July 25th, 2019',
  };

  const allProps = {
    ...props,
    ...customs,
  };
  return <FeaturedDetailPage {...allProps} />;
};

export default Index;
