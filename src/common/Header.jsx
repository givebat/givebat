import React from 'react';
import styled, { css } from 'styled-components';

// import logoImage from '../images/logo_text@2x.png';

import Link from 'next/link';

const TopbarContainer = styled.div`
  /* background-color: white; */
  z-index: 2;

  width: 100%;
  height: 64px;

  position: absolute;
  left: 0;
  right: 0;
  margin: auto;

  ${props =>
    props.notch &&
    css`
      background-color: rgba(255, 255, 255, 0.8);
      /* max-width: 1024px;
        margin-left: auto;
        margin-right: auto;

        border-radius: 0 0 20px 20px;
        background-color: #FFFFFF;
        box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1);

        @media(max-width: 1024px) {
            border-radius: 0;
        } */
    `}
`;

const TopbarContentContainer = styled.div`
  /* max-width: 984px; */
  width: 100%;
  height: 100%;

  /* margin-left: auto;
    margin-right: auto; */

  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
`;

const LogoWordContainer = styled.a`
  height: 20.1px;
  width: 73.03px;

  margin-left: 20px;

  align-self: center;
  justify-self: start;

  ${props =>
    props.show &&
    css`
      visibility: hidden;
    `}
`;

const LogoWordImg = styled.img.attrs({ src: '/images/logo_text@2x.png' })`
  height: 100%;
  width: 100%;
`;

const AboutLink = styled.a`
  margin-right: 28px;

  font-family: 'Muli', Arial, Helvetica, sans-serif;
  font-weight: 800;
  font-style: normal;

  font-size: 16px;
  text-decoration: none;
  color: #9b9b9b;

  align-self: center;
  justify-self: end;
`;

export default props => {
  return (
    <TopbarContainer notch={props.notch}>
      <TopbarContentContainer>
        <Link href='/' as='/'>
          <LogoWordContainer show={props.show}>
            <LogoWordImg />
          </LogoWordContainer>
        </Link>
        <Link href={'/about'} as={'/about'}>
          <AboutLink>About</AboutLink>
        </Link>
      </TopbarContentContainer>
    </TopbarContainer>
  );
};
