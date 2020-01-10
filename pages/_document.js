import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Muli:400,600,800,900"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <style jsx global>{`
            body {
              margin: 0;
              body: 0;
            }
            a {
              cursor: pointer;
            }
          `}</style>
        </body>
      </Html>
    );
  }
}
export default MyDocument;
