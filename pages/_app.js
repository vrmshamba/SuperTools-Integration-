import '../styles/styles.css';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>susanngatia.africa</title>
        <meta name="description" content="Discover a range of top AI tools and resources at susanngatia.africa, your destination for enhancing productivity and creativity." />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
