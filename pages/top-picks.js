import Head from 'next/head';
import Link from 'next/link';

export default function TopPicks() {
  // List of top picks tools
  const tools = [
    {
      name: 'Midjourney',
      description: 'Create AI-generated images from text.',
      link: '/content/midjourney'
    },
    {
      name: 'ChatGPT',
      description: 'Conversational search engine designed to provide information through a chatbot-style interface.',
      link: '/content/chatgpt'
    },
    {
      name: 'HeadshotPro',
      description: 'Generate professional headshots using AI.',
      link: '/content/headshotpro'
    },
    // Add more tools as needed
  ];

  return (
    <>
      <Head>
        <title>Top Picks - susanngatia.africa</title>
        <meta name="description" content="Top AI tools picked by susanngatia.africa" />
      </Head>
      <main>
        <h1>Top Picks</h1>
        <article className="top-picks-container">
          {tools.map((tool, index) => (
            <div key={index} className="top-pick-card">
              <Link href={tool.link}>
                <a>
                  <h2>{tool.name}</h2>
                  <p>{tool.description}</p>
                </a>
              </Link>
            </div>
          ))}
        </article>
        <em>Some products above have affiliate links, and we will earn a percentage from any qualifying sales.</em>
      </main>
      <footer>
        <Link href="/privacy-policy">
          <a>Privacy Policy</a>
        </Link>
        <Link href="/terms-conditions">
          <a>Terms & Conditions</a>
        </Link>
        <p>© 2024 susanngatia.africa. All rights reserved.</p>
        <a href="https://twitter.com/susanngatia" className="social-icon">
          <img src="/icons/twitter.svg" alt="Twitter" />
        </a>
        <a href="https://www.linkedin.com/in/susanngatia/" className="social-icon">
          <img src="/icons/linkedin.svg" alt="LinkedIn" />
        </a>
      </footer>
    </>
  );
}
