import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ScrollToTop from './common/ScrollToTop';
import { createGlobalStyle } from 'styled-components';

import { Helmet } from 'react-helmet';

import HomePage from './pages/HomePage/';
import AboutPage from './pages/AboutPage/';
import FeaturedDetailPage from './pages/FeaturedDetailPage/';
import CollectionDetailPage from './pages/CollectionDetailPage/';
import NotFoundPage from './pages/NotFoundPage/';

import BraveDownloadBanner from './common/BraveDownloadBanner';

const GlobalStyle = createGlobalStyle`
  ::selection {
    background: #FF325A;
    color: #FFFFFF;
  }
`;

class App extends Component {
  render() {
    const title = 'givebat.com';
    const description =
      'givebat.com is a place to find the greatest Brave Creators';
    const ogImage = 'https://www.givebat.com/og-image.jpg';

    return (
      <BrowserRouter>
        <ScrollToTop>
          <div className="App">
            <GlobalStyle />
            <Helmet>
              <title>{title}</title>
              <meta name="description" content={description} />

              <meta property="og:title" content={title} />
              <meta property="og:description" content={description} />
              <meta property="og:image" content={ogImage} />
              <meta property="og:site_name" content={title} />

              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content="@givebat" />
              <meta name="twitter:title" content={title} />
              <meta name="twitter:description" content={description} />
              <meta name="twitter:creator" content="@givebat" />
              <meta name="twitter:image" content={ogImage} />
            </Helmet>
            <Switch>
              <Route exact path="/" component={HomePage} />

              <Route path="/about" component={AboutPage} />

              <Route
                path="/indizr"
                render={props => (
                  <FeaturedDetailPage
                    {...props}
                    title={'Indizr'}
                    subtitle={'Everything Web 3.0'}
                    link={'https://indizr.com'}
                    heroImage={'/images/featured/hero_indizr2.jpg'}
                    author={'Daniel James'}
                    date={'July 25th, 2019'}
                  />
                )}
              />

              <Route
                path="/changelog"
                render={props => (
                  <FeaturedDetailPage
                    {...props}
                    title={'Changelog'}
                    subtitle={'News and podcasts for developers'}
                    link={'https://changelog.com'}
                    heroImage={'/images/featured/body_changelog_2.png'}
                    author={'Daniel James'}
                    date={'July 25th, 2019'}
                  />
                )}
              />
              <Route
                path="/sky-folk"
                render={props => (
                  <FeaturedDetailPage
                    {...props}
                    title={'SKÝ FÓLK'}
                    subtitle={'Stunning landscape photography and films'}
                    link={'http://theskyfolk.com'}
                    heroImage={'/images/featured/hero_theskyfolk.jpg'}
                    author={'Daniel James'}
                    date={'March 6th, 2019'}
                  />
                )}
              />
              <Route
                path="/internet-archive"
                render={props => (
                  <FeaturedDetailPage
                    {...props}
                    title={'Internet Archive'}
                    subtitle={"The world's largest library"}
                    link={'https://archive.org'}
                    heroImage={'/images/featured/hero_internetarchive.gif'}
                    author={'Daniel James'}
                    date={'March 6th, 2019'}
                  />
                )}
              />

              <Route
                path="/crypto-companions"
                render={props => (
                  <CollectionDetailPage
                    {...props}
                    title={'Crypto Companions'}
                    heroImage={'/images/collections/hero_crypto_companions.jpg'}
                    author={'Daniel James'}
                    date={'July 25th, 2019'}
                  />
                )}
              />
              <Route
                path="/friends-of-brave"
                render={props => (
                  <CollectionDetailPage
                    {...props}
                    title={'Friends of Brave'}
                    heroImage={'/images/collections/hero_friends_of_brave.jpg'}
                    author={'Daniel James'}
                    date={'March 6th, 2019'}
                  />
                )}
              />

              <Route component={NotFoundPage} />
            </Switch>
            <BraveDownloadBanner />
          </div>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
