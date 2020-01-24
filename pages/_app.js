import React, { useState } from 'react';
import styled from 'styled-components';
import App from 'next/app';
import Head from 'next/head';
import '../styles.css';

import Router from 'next/router';

import * as gtag from '../lib/gtag';

import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    // primary: '#0070f3',
  },
};

Router.events.on('routeChangeComplete', url => gtag.pageview(url));

const DownloadBraveBannerWrapper = styled.div`
  height: 64px;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 0;
  z-index: 10;

  @media (max-width: 1030px) {
    /* display: none; */
    height: auto;
  }
`;

const DownloadBraveBannerContentWrapper = styled.div`
  max-width: 984px;
  margin-left: auto;
  margin-right: auto;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const DownloadBraveBannerContentContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(2, minmax(min-content, max-content)) auto;
  grid-gap: 0;

  @media (max-width: 1030px) {
    grid-template-rows: auto auto;
    grid-template-columns: auto minmax(min-content, max-content);
  }
`;

const DownloadBraveLogo = styled.div`
  background-image: url('/images/page-elements/brave_lion.svg');
  background-size: contain;
  background-repeat: no-repeat;

  height: 40px;
  width: 34px;

  align-self: center;
  justify-self: start;

  margin-right: 13.5px;

  @media (max-width: 1030px) {
    align-self: center;
    justify-self: end;

    grid-column: 1;
    grid-row: 1;

    margin: 0 0 0 20px;
  }

  @media (max-width: 738px) {
    display: none;
  }
`;

const DownloadBraveBannerInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  max-width: 536px;

  @media (max-width: 1030px) {
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
    margin: 20px;

    align-self: center;
    justify-self: center;
  }

  @media (max-width: 738px) {
    grid-column: 1 / span 3;
  }
`;

const DownloadBraveBannerHeader = styled.p`
  font-display: auto;
  font-family: 'Muli', Arial, Helvetica, sans-serif;
  font-weight: 900;
  font-style: normal;

  font-size: 16px;
  line-height: 20px;
  color: #fb542b;

  margin: 0 0 3px 0;
  padding: 0;
`;

const DownloadBraveBannerBody = styled.p`
  font-display: auto;
  font-family: 'Muli', Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-style: normal;

  font-size: 12px;
  line-height: 15px;
  color: #7e7e7e;

  margin: 0;
  margin: 0;
`;

const DownloadBraveBannerButtonContainer = styled.div`
  align-self: center;
  justify-self: end;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 1030px) {
    align-self: center;
    justify-self: center;

    grid-column: 1 / span 3;

    margin: 0 20px 20px 20px;
  }
`;

const DownloadBraveOkayButton = styled.a`
  text-decoration: none;

  height: 40px;
  width: 128px;
  border-radius: 10px;
  background-color: black;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const DownloadBraveOkayText = styled.p`
  font-display: auto;
  font-family: 'Muli', Arial, Helvetica, sans-serif;
  font-weight: 800;
  font-style: normal;

  font-size: 16px;
  line-height: 20px;
  color: #ffffff;

  margin: 0;
  padding: 0;
`;

const DownloadBraveNoThanksText = styled.p`
  font-display: auto;
  font-family: 'Muli', Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-style: normal;

  font-size: 16px;
  line-height: 20px;
  color: #939393;

  cursor: pointer;

  margin: 0 0 0 32px;
  padding: 0;
`;

// the functions below will determine if a user is in Brave or not
// borrowed from here: https://gist.github.com/drbh/250a77a438624bc2619f0518dd5b38fe

// helper to find Brave in User Agent string
function isBraveAgent(userAgentResponse) {
  let isBraveIndex = ~userAgentResponse.indexOf('Brave');
  if (isBraveIndex < 0) {
    return true;
  }
  return false;
}

function httpRequest(address, reqType, asyncProc) {
  var req = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject('Microsoft.XMLHTTP');
  if (asyncProc) {
    req.onreadystatechange = function() {
      if (this.readyState == 4) {
        asyncProc(this);
      }
    };
  } else {
    // req.timeout = 850;
  }
  req.open(reqType, address, !!asyncProc);
  req.send();
  return req;
}

// Check reflected User Agent from whitelisted website (duckduckgo.com)
function checkIsBrave() {
  var isBraveBrower = false;
  var req = httpRequest(
    'https://api.duckduckgo.com/?q=whats+my+user+agent&format=json&pretty=1',
    'GET'
  );
  var duckDuckResponse = JSON.parse(req.responseText);
  var userAgentResponse = duckDuckResponse['Answer'];
  var foundBraveInUserAgent = isBraveAgent(userAgentResponse);
  if (foundBraveInUserAgent) {
    isBraveBrower = true;
  }
  return isBraveBrower;
}

function DownloadBanner() {
  let isBrave = false;

  try {
    isBrave = checkIsBrave();
  } catch (err) {
    // console.log(err);
  }

  const [userHasClickedNoThankYou, setNoThankYou] = useState(false);

  return !userHasClickedNoThankYou && !isBrave ? (
    <DownloadBraveBannerWrapper>
      <DownloadBraveBannerContentWrapper>
        <DownloadBraveBannerContentContainer>
          <DownloadBraveLogo />
          <DownloadBraveBannerInfoContainer>
            <DownloadBraveBannerHeader>
              Brave: Experience the future of the web
            </DownloadBraveBannerHeader>
            <DownloadBraveBannerBody>
              Up to 8x faster than Chrome • Blocks ads and trackers • Supports
              Chrome Extensions
            </DownloadBraveBannerBody>
          </DownloadBraveBannerInfoContainer>
          <DownloadBraveBannerButtonContainer>
            <DownloadBraveOkayButton
              onClick={() => setNoThankYou(true)}
              target="_blank"
              href="https://brave.com/giv892"
            >
              <DownloadBraveOkayText>Okay</DownloadBraveOkayText>
            </DownloadBraveOkayButton>
            <DownloadBraveNoThanksText
              onClick={() => {
                setNoThankYou(true);
              }}
            >
              Not now
            </DownloadBraveNoThanksText>
          </DownloadBraveBannerButtonContainer>
        </DownloadBraveBannerContentContainer>
      </DownloadBraveBannerContentWrapper>
    </DownloadBraveBannerWrapper>
  ) : null;
}

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Muli:400,600,800,900"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
        <DownloadBanner />
      </ThemeProvider>
    );
  }
}

export default MyApp;
