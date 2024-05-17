import React from 'react';
import Link from 'next/link';

// Placeholder array for article data
const articles = [
  { title: 'Understanding AI and Machine Learning', href: '/articles/understanding-ai' },
  { title: 'The Future of Automation', href: '/articles/future-automation' },
  { title: 'Exploring the Blockchain', href: '/articles/exploring-blockchain' },
  // More articles will be added here
];

const Home = () => {
  return (
    <div>
      <h1>Featured Articles</h1>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <Link href={article.href}>
              <a>{article.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
