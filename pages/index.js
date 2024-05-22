import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import manufacturingTools from './manufacturing-tools';

const Home = () => {
  const router = useRouter();

  const mediaTools = [
    {
      image: '/images/media-tool-1.jpg',
      name: 'Media Tool 1',
      description: 'Description for Media Tool 1.'
    },
    {
      image: '/images/media-tool-2.jpg',
      name: 'Media Tool 2',
      description: 'Description for Media Tool 2.'
    },
    // Additional media tools will be added here
  ];

  const agricultureTools = [
    {
      image: '/images/agriculture-tool-1.jpg',
      name: 'Agriculture Tool 1',
      description: 'Description for Agriculture Tool 1.'
    },
    {
      image: '/images/agriculture-tool-2.jpg',
      name: 'Agriculture Tool 2',
      description: 'Description for Agriculture Tool 2.'
    },
    // Additional agriculture tools will be added here
  ];

  const healthTools = [
    {
      image: '/images/health-tool-1.jpg',
      name: 'Health Tool 1',
      description: 'Description for Health Tool 1.'
    },
    {
      image: '/images/health-tool-2.jpg',
      name: 'Health Tool 2',
      description: 'Description for Health Tool 2.'
    },
    // Additional health tools will be added here
  ];

  const publicPolicyEconomicsTools = [
    {
      image: '/images/public-policy-tool-1.jpg',
      name: 'Public Policy Tool 1',
      description: 'Description for Public Policy Tool 1.'
    },
    {
      image: '/images/public-policy-tool-2.jpg',
      name: 'Public Policy Tool 2',
      description: 'Description for Public Policy Tool 2.'
    },
    // Additional public policy tools will be added here
  ];

  const dataAnalyticsTools = [
    {
      image: '/images/data-analytics-tool-1.jpg',
      name: 'Data Analytics Tool 1',
      description: 'Description for Data Analytics Tool 1.'
    },
    {
      image: '/images/data-analytics-tool-2.jpg',
      name: 'Data Analytics Tool 2',
      description: 'Description for Data Analytics Tool 2.'
    },
    // Additional data analytics tools will be added here
  ];

  const otherTools = [
    {
      image: '/images/other-tool-1.jpg',
      name: 'Other Tool 1',
      description: 'Description for Other Tool 1.'
    },
    {
      image: '/images/other-tool-2.jpg',
      name: 'Other Tool 2',
      description: 'Description for Other Tool 2.'
    },
    // Additional tools for other sectors will be added here
  ];

  const [searchQuery, setSearchQuery] = React.useState('');
  const filteredTools = searchQuery
    ? tools.filter((tool) =>
        tool.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : tools;

  return (
    <>
      <Head>
        <title>SuperTools by Susan Ngatia - Discover the Best AI Tools</title>
        <meta name="description" content="Explore a curated list of the best AI tools available, handpicked to enhance your productivity and creativity." />
      </Head>
      <div>
        <header>
          <nav aria-label="Main">
            <ul>
              <li><a href="/" className={router.pathname === "/" ? "active" : ""}>Home</a></li>
              <li><a href="/gpts" className={router.pathname === "/gpts" ? "active" : ""}>GPTs</a></li>
              <li><a href="/top-picks" className={router.pathname === "/top-picks" ? "active" : ""}>Top Picks</a></li>
              <li><a href="/submit" className={router.pathname === "/submit" ? "active" : ""}>Submit</a></li>
              {/* Sponsor and Subscribe links removed to resolve 404 errors */}
              <li className="dropdown">
                <a href="#" className="dropbtn">Portfolio</a>
                <div className="dropdown-content">
                  <a href="#">Project 1</a>
                  <a href="#">Project 2</a>
                  <a href="#">Project 3</a>
                  {/* Additional dummy portfolio links will be added here */}
                </div>
              </li>
              {/* Search icon will be added here */}
              <li className="search-container">
                <form onSubmit={(e) => {
                  e.preventDefault();
                  router.push(`/?search=${encodeURIComponent(searchQuery)}`);
                }}>
                  <input
                    type="text"
                    placeholder="Search tools..."
                    aria-label="Search tools"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                  />
                  <button type="submit" className="search-button" aria-label="Submit search">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7l-99.9-99.9c28.4-34.5 45.5-78.7 45.5-127.8 0-111.7-90.9-202.6-202.6-202.6S45.4 103.3 45.4 215S136.3 417.6 248 417.6c49.1 0 93.3-17.1 127.8-45.5l99.9 99.9c4.7 4.7 12.3 4.7 17 0l12.3-12.3c4.6-4.7 4.6-12.3 0-17zM248 369.6c-85.1 0-154.6-69.5-154.6-154.6S162.9 60.4 248 60.4s154.6 69.5 154.6 154.6-69.5 154.6-154.6 154.6z"></path></svg>
                  </button>
                  {searchQuery && (
                    <button type="button" className="reset-button" aria-label="Reset search" onClick={() => setSearchQuery('')}>
                      Reset
                    </button>
                  )}
                </form>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section className="top-picks-container">
            <h1>⭐ Top Picks</h1>
            {/* Tool cards will be dynamically generated from a list of tools */}
            {filteredTools.map((tool, index) => (
              <div key={index} className="top-pick-card">
                <Image src={tool.image} alt={`Image representing ${tool.name}`} width={500} height={300} />
                <h2>{tool.name}</h2>
                <p>{tool.description}</p>
              </div>
            ))}
          </section>
          <section className="media-tools-container">
            <h2>Media Tools</h2>
            <div className="tools-grid">
              {mediaTools.map((tool, index) => (
                <div key={index} className="tool-card">
                  <Image src={tool.image} alt={tool.name} width={250} height={150} />
                  <h3>{tool.name}</h3>
                  <p>{tool.description}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="manufacturing-tools-container">
            <h2>Manufacturing Tools</h2>
            <div className="tools-grid">
              {manufacturingTools.map((tool, index) => (
                <div key={index} className="tool-card">
                  <Image src="/images/placeholder-tool-image.jpg" alt={tool.name} width={250} height={150} />
                  <h3>{tool.name}</h3>
                  <p>{tool.description}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
        <footer>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-conditions">Terms & Conditions</a>
          <p>© 2024 susanngatia.africa. All rights reserved.</p>
          <a href="https://twitter.com/susanngatia" className="social-icon">
            <img src="/icons/twitter.svg" alt="Twitter" width="24" height="24" />
          </a>
          <a href="https://www.linkedin.com/in/susanngatia" className="social-icon">
            <img src="/icons/linkedin.svg" alt="LinkedIn" width="24" height="24" />
          </a>
        </footer>
      </div>
    </>
  );
};

export default Home;

// CSS code removed from this file. It will be placed in the appropriate styles.css file.
