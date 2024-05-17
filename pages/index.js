import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

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
              <li><a href="https://susanngatia.africa/sponsor">Sponsor</a></li>
            </ul>
            <a href="https://susanngatia.africa/subscribe">
              <div>Join for Free</div>
            </a>
            {/* Search icon will be added here */}
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7l-99.9-99.9c28.4-34.5 45.5-78.7 45.5-127.8 0-111.7-90.9-202.6-202.6-202.6S45.4 103.3 45.4 215S136.3 417.6 248 417.6c49.1 0 93.3-17.1 127.8-45.5l99.9 99.9c4.7 4.7 12.3 4.7 17 0l12.3-12.3c4.6-4.7 4.6-12.3 0-17zM248 369.6c-85.1 0-154.6-69.5-154.6-154.6S162.9 60.4 248 60.4s154.6 69.5 154.6 154.6-69.5 154.6-154.6 154.6z"></path></svg>
          </nav>
        </header>
        <main>
          <article>
            <h1>Discover the best AI tools with Supertools.</h1>
            <p>The most useful AI tools — organized and categorized in one spot.</p>
            <h3>Get the latest AI tools sent directly to your email (it’s free).</h3>
            <form>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" placeholder="Enter your email" type="email" />
              <button type="submit">Join Free</button>
            </form>
            <section>
              <h2>Categories</h2>
              <ul>
                <li>Trending</li>
                <li>Video</li>
                <li>Social Media</li>
                {/* Additional categories will be added here */}
              </ul>
            </section>
            <section>
              <h2>Recently Added Tools</h2>
              <div>
                {/* Individual tool entries will be added here */}
              </div>
            </section>
          </article>
        </main>
        <footer>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-conditions">Terms & Conditions</a>
          // Updated site ownership to susanngatia.africa
          <p>© 2024 susanngatia.africa. All rights reserved.</p>
          <a href="https://twitter.com/susanngatia">
            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" className="svg-inline--fa fa-twitter fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16">
              <path fill="currentColor" d="M459.4 151.7c0 4.943 .159 9.83 .464 14.675C459.864 250.9 402.2 303.8 328 319.8c-51.2 11.1-105.7 4.2-149.9-19.6 13.6 1.6 27.6 2.5 41.6 2.5 24.1 0 47.2-3.9 68.7-11.1-50.6-10.1-88.9-54.5-88.9-107.7v-1.4c14.9 8.3 32 13.3 50.2 13.9-29.6-19.8-49-53.6-49-91.9 0-20.3 5.4-39.3 14.9-55.7 54.4 66.8 135.7 110.6 227.4 115.2-1.9-8.1-2.9-16.5-2.9-25.1 0-60.7 49.1-110 110-110 31.7 0 60.3 13.4 80.3 34.9 25.1-4.9 48.7-14.1 70-26.8-8.3 25.9-25.9 47.6-48.8 61.3 22.3-2.7 43.6-8.6 63.4-17.4-14.8 22.1-33.4 41.6-54.9 57.1z" alt="Twitter"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/susanngatia">
            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" className="svg-inline--fa fa-linkedin-in fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="14" height="14">
              <path fill="currentColor" d="M100.3 480H7.4V180h92.9v300zm-46.1-344c-31 0-56-25-56-56s25-56 56-56 56 25 56 56-25 25-56 56zm372.6 344h-92.8V300c0-43-1.6-98.2-59.8-98.2-59.8 0-69 46.9-69 95v183H112V180h89.1v41h1.3c12.4-23.5 42.7-48 88-48 94.3 0 111.8 62.1 111.8 142.9V480z" alt="LinkedIn"></path>
            </svg>
          </a>
        </footer>
      </div>
    </>
  );
};

export default Home;
