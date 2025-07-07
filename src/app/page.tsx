'use client';

import Head from 'next/head';
import Hero from './components/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rebirth Next.js</title>
        <meta
          name="description"
          content="Une réincarnation élégante de votre présence web."
        />
      </Head>

      {/* Hero principal */}
      <Hero />
    </>
  );
}