import styled from 'styled-components';
import React, { Fragment } from 'react';

import Header from '../../common/Header';

import Link  from 'next/link';

const Container = styled.div`
  min-height: 182px;
  width: 100%;
  z-index: 3;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const LogoWordMarkContainer = styled.div`
  max-width: 984px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  @media (max-width: 1030px) {
    max-width: none;
  }
`;

const LogoWordMark = styled.a`
  background-image: url('/images/page-elements/gb_word_homepage.png');
  background-size: cover;
  background-position: center;

  height: 59px;
  width: 217px;

  @media (max-width: 1030px) {
    margin-left: 20px;
  }
`;

export default () => {
  return (
    <Fragment>
      <Header show={'false'} />
      <Container>
        <ContentContainer>
          <LogoWordMarkContainer>
            <Link href="/" as="/">
              <LogoWordMark />
            </Link>
          </LogoWordMarkContainer>
        </ContentContainer>
      </Container>
    </Fragment>
  );
};
