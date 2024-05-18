import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

const Custom404 = () => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>404: Page not found - susanngatia.africa</title>
        <meta name="description" content="The page you are looking for might have been removed, had its name changed, or is temporarily unavailable." />
        <link rel="preload" href="./_next/static/css/6c14eea6ee3c2181.css" as="style" />
        <link rel="stylesheet" href="./_next/static/css/6c14eea6ee3c2181.css" data-n-g="" />
      </Head>
      <Script src="./_next/static/chunks/polyfills-c67a75d1b6f99dc8.js" strategy="beforeInteractive" />
      <Script src="./_next/static/chunks/webpack-da8dfe6cb71eeaca.js" strategy="beforeInteractive" />
      <Script src="./_next/static/chunks/framework-b759e809ec16812b.js" strategy="beforeInteractive" />
      <Script src="./_next/static/chunks/main-cce6ae5cc1a42d70.js" strategy="beforeInteractive" />
      <Script src="./_next/static/chunks/pages/_app-6d0139faf01d177c.js" strategy="beforeInteractive" />
      <Script src="./_next/static/chunks/pages/index-391312c0d2e2a2ca.js" strategy="beforeInteractive" />
      <Script src="./_next/static/K78g12PIHtg21l1HmpBQs/_buildManifest.js" strategy="beforeInteractive" />
      <Script src="./_next/static/K78g12PIHtg21l1HmpBQs/_ssgManifest.js" strategy="beforeInteractive" />
      {/* The content below can be customized as needed */}
      <main style={{ padding: '1rem' }}>
        <h1>Oops! Page Not Found</h1>
        <p>The page you're looking for doesn't seem to exist. Head back <a href="/">home</a> and try again, or use the search function to find what you need.</p>
      </main>
    </div>
  );
};

export default Custom404;
