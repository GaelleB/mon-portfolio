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

      {/* Section blanche → curseur devient noir */}
      <section className="bg-white p-32" data-cursor="dark">
        <p className="text-black text-2xl">Zone claire → curseur devient noir</p>
      </section>

      {/* Section rouge → curseur devient bleu */}
      <section className="bg-red-600 p-32" data-cursor="blue">
        <p className="text-white text-2xl">Zone rouge → curseur devient bleu</p>
      </section>
    </>
  );
}