import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  const tools = [
    {
      image: '/images/ai-content-creator.jpg',
      name: 'AI Content Creator',
      description: 'Automate your content creation process with our AI-powered content creator, designed to generate high-quality articles, blog posts, and more.'
    },
    {
      image: '/images/ai-image-enhancer.jpg',
      name: 'AI Image Enhancer',
      description: 'Enhance and upscale your images with our state-of-the-art AI image enhancer, perfect for photographers and designers.'
    },
    {
      image: '/images/ai-data-analyzer.jpg',
      name: 'AI Data Analyzer',
      description: 'Leverage AI to analyze and interpret complex data sets with our intuitive AI data analyzer tool.'
    },
    // Additional tool objects with actual data will be added here
  ];

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
              <li><a href="https://susanngatia.africa/sponsor" className={router.pathname === "https://susanngatia.africa/sponsor" ? "active" : ""}>Sponsor</a></li>
            </ul>
            <a href="https://susanngatia.africa/subscribe">
              <div>Join for Free</div>
            </a>
            {/* Search icon will be added here */}
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7l-99.9-99.9c28.4-34.5 45.5-78.7 45.5-127.8 0-111.7-90.9-202.6-202.6-202.6S45.4 103.3 45.4 215S136.3 417.6 248 417.6c49.1 0 93.3-17.1 127.8-45.5l99.9 99.9c4.7 4.7 12.3 4.7 17 0l12.3-12.3c4.6-4.7 4.6-12.3 0-17zM248 369.6c-85.1 0-154.6-69.5-154.6-154.6S162.9 60.4 248 60.4s154.6 69.5 154.6 154.6-69.5 154.6-154.6 154.6z"></path></svg>
          </nav>
        </header>
        <main>
          <section className="top-picks-container">
            <h1>⭐ Top Picks</h1>
            {/* Tool cards will be dynamically generated from a list of tools */}
            {tools.map((tool, index) => (
              <div key={index} className="top-pick-card">
                <Image src={tool.image} alt={`Image representing ${tool.name}`} width={500} height={300} />
                <h2>{tool.name}</h2>
                <p>{tool.description}</p>
              </div>
            ))}
          </section>
        </main>
        <footer>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-conditions">Terms & Conditions</a>
          <p>© 2024 susanngatia.africa. All rights reserved.</p>
          <a href="https://twitter.com/susanngatia" className="social-icon">
            <img src="/icons/twitter.svg" alt="Twitter" />
          </a>
          <a href="https://www.linkedin.com/in/susanngatia" className="social-icon">
            <img src="/icons/linkedin.svg" alt="LinkedIn" />
          </a>
        </footer>
      </div>
    </>
  );
};

export default Home;
