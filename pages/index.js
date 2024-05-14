import React from 'react';

const Home = () => {
  return (
    <div>
      <header>
        <nav aria-label="Main">
          <ul>
            <li><a href="/">All</a></li>
            <li><a href="/gpts">GPTs</a></li>
            <li><a href="/top-picks">Top Picks</a></li>
            <li><a href="/submit">Submit</a></li>
            <li><a href="https://therundownai.typeform.com/to/kraZ1TSO">Sponsor</a></li>
          </ul>
          <a href="https://www.therundown.ai/subscribe?utm_source=supertools-header">
            <div>Join for Free</div>
          </a>
          {/* Search icon will be added here */}
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
        <p>© 2024 The Rundown AI, Inc. All rights reserved.</p>
        <a href="https://twitter.com/TheRundownAI">
          {/* Twitter icon will be added here */}
        </a>
        <a href="https://www.linkedin.com/company/the-rundown-ai/">
          {/* LinkedIn icon will be added here */}
        </a>
      </footer>
    </div>
  );
};

export default Home;
