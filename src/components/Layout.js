import React from 'react';
import Head from 'next/head';

const Layout = props => (
    <div className="Layout" >
        <Head>
        <meta>YO</meta>
        </Head>
        {props.children}
    </div>
);
  
export default Layout;
