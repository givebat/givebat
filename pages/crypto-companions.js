import React from 'react';
import CollectionDetailPage from '../src/components/CollectionDetailPage';

const Index = props => {
  const customs = {
    title: 'Crypto Companions',
    heroImage: '/images/collections/hero_crypto_companions.jpg',
    author: 'Daniel James',
    date: 'July 25th, 2019',
  };
  const allProps = { ...props, ...customs };

  return <CollectionDetailPage {...allProps} />;
};

export default Index;
