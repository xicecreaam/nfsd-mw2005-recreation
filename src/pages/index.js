import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Welcome to Need for SpeedDocs"
      description="This website is aiming to rehost speedrunning documentation for most Need for Speed games that has been shut down by Balathruin himself, creator of the original website. Currently looking for contributors to expand.d."
    >
      <main style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
        <header>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '700' }}>
            Welcome to Need for SpeedDocs
          </h1>
          <p style={{ marginTop: '0.5rem', fontSize: '1.1rem', color: '#ccc' }}>
            This website is aiming to rehost speedrunning documentation for most Need for Speed games that has been shut down by Balathruin himself, creator of the original website.
            Currently looking for contributors to expand.
          </p>
        </header>

        <section style={{ marginTop: '3rem' }}>
          <h2 style={{ borderLeft: '2px solid #555', paddingLeft: '10px' }}>
            Available games
          </h2>
          <ul style={{ listStyleType: 'none', padding: 0, marginTop: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link to="#" style={{ color: '#f55' }}>
                Need for Speed: Underground
              </Link>{' '}
              by <strong>LokyZen (FG)</strong>, <strong>Scorpion (DT & FWD DS)</strong> and{' '}
              <strong style={{ color: '#c33' }}>GTB (RWD DS)</strong>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link to="#" style={{ color: '#f55' }}>
                Need for Speed: Most Wanted (2005)
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link to="#" style={{ color: '#f55' }}>
                Need for Speed: Carbon
              </Link>{' '}
              by <strong>Artacer</strong> and <strong>Cousin</strong>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link to="#" style={{ color: '#f55' }}>
                Need for Speed: Shift
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link to="#" style={{ color: '#f55' }}>
                Shift 2: Unleashed
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </Layout>
  );
}
