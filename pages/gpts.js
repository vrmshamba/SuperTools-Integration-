import React from 'react';

const GPTs = () => {
  return (
    <div>
      <header>
        <nav aria-label="Main">
          <ul>
            <li><a href="/">All</a></li>
            <li><a href="/gpts">GPTs</a></li>
            <li><a href="/top-picks">Top Picks</a></li>
            <li><a href="/submit">Submit</a></li>
            <li><a href="https://susanngatia.africa/sponsor">Sponsor</a></li>
          </ul>
          <a href="https://www.susanngatia.africa/subscribe?utm_source=supertools-header">
            <div>Join for Free</div>
          </a>
          {/* Search icon will be added here */}
        </nav>
      </header>
      <main>
        <article>
          <h1>GPTs - Generative Pre-trained Transformers</h1>
          <p>Unleash the power of GPTs with SuperTools! Dive into our handpicked collection of tools for creative writing, design, image creation, trip planning, and more. Explore now and find the perfect GPT for your needs!</p>
          <section>
            <h2>Categories</h2>
            <div className="category-tag">Most Popular</div>
            <div className="category-tag">Image Generation</div>
            <div className="category-tag">Productivity</div>
            <div className="category-tag">Developer</div>
            <div className="category-tag">Health</div>
            <div className="category-tag">Food</div>
            <div className="category-tag">Learning</div>
            <div className="category-tag">Fun</div>
            <div className="category-tag">Writing</div>
            <div className="category-tag">Design</div>
            <div className="category-tag">Finance</div>
            <div className="category-tag">Advice</div>
            <div className="category-tag">Travel</div>
            <div className="category-tag">Career</div>
            <div className="category-tag">Social Media</div>
          </section>
          <section>
            <h2>Featured GPT Tools</h2>
            <div>
              <a href="/content/diet-helper-gpt">
                <div>Diet Helper GPT</div>
                <p>Your personalized meal assistant</p>
              </a>
              <a href="/content/midjourney-gpt">
                <div>Midjourney GPT</div>
                <p>Midjourney: Craft Engaging Image Prompts</p>
              </a>
              <a href="/content/book-summarizer">
                <div>Book Summarizer</div>
                <p>Book summarization made easy</p>
              </a>
              <a href="/content/pictory-gpt-for-videos">
                <div>Pictory GPT for Videos</div>
                <p>Turn your ideas into videos in seconds</p>
              </a>
              {/* Additional GPT tool entries will be added here */}
              <a href="/content/fitness-planner-gpt">
                <div>Fitness Planner GPT</div>
                <p>Custom workout plans at your fingertips</p>
              </a>
              <a href="/content/travel-planner-gpt">
                <div>Travel Planner GPT</div>
                <p>Plan your next adventure with ease</p>
              </a>
              <a href="/content/recipe-creator-gpt">
                <div>Recipe Creator GPT</div>
                <p>Discover new recipes with AI</p>
              </a>
              <a href="/content/homework-helper-gpt">
                <div>Homework Helper GPT</div>
                <p>Get help with your studies</p>
              </a>
              {/* Ensure to add more entries as needed */}
            </div>
          </section>
        </article>
      </main>
      <footer>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-conditions">Terms & Conditions</a>
        <p>Owned by susanngatia.africa</p>
        <a href="https://twitter.com/susanngatia">
          {/* Twitter icon will be added here */}
        </a>
        <a href="https://www.linkedin.com/in/susanngatia/">
          {/* LinkedIn icon will be added here */}
        </a>
      </footer>
    </div>
  );
};

export default GPTs;
