import React from 'react';
import App from 'next/app';
import Head from 'next/head';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Muli:400,600,800,900"
            rel="stylesheet"
          />
          <style jsx global>{`
            body {
              margin: 0;
              padding: 0;
            }
            a {
              cursor: pointer;
            }
          `}</style>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
