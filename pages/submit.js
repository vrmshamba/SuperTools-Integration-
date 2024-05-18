import Head from 'next/head';
import Link from 'next/link';

export default function Submit() {
  return (
    <>
      <Head>
        <title>Submit a Tool - susanngatia.africa</title>
        <meta name="description" content="Submit your tool for consideration on susanngatia.africa's Top Picks." />
      </Head>
      <main>
        <h1>Submit Your Tool</h1>
        <p>Have an AI tool that you think should be featured on susanngatia.africa? Fill out the form below for consideration.</p>
        <form>
          <label htmlFor="toolName">Tool Name:</label>
          <input type="text" id="toolName" name="toolName" required />

          <label htmlFor="toolDescription">Tool Description:</label>
          <textarea id="toolDescription" name="toolDescription" required></textarea>

          <label htmlFor="toolLink">Tool Link:</label>
          <input type="url" id="toolLink" name="toolLink" required />

          <button type="submit">Submit for Review</button>
        </form>
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
        <a href="https://www.linkedin.com/in/susanngatia" className="social-icon">
          <img src="/icons/linkedin.svg" alt="LinkedIn" />
        </a>
      </footer>
    </>
  );
}
