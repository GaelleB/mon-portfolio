'use client';

import { motion } from 'framer-motion';

const titleWords = 'Je crée des sites qui murmurent ton histoire.'.split(' ');

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-[var(--color-ny-dark)] text-[var(--color-text-light)] px-4"
            >
            {/* Halo lumineux */}
            <div className="pointer-events-none absolute inset-0 opacity-10 [background:radial-gradient(circle,var(--color-taxi)_0%,transparent_80%)]" />

            {/* Titre mot à mot */}
            <h1 className="relative z-10 flex flex-wrap justify-center gap-x-2 text-center font-serif text-4xl md:text-6xl leading-tight">
                {titleWords.map((word, i) => (
                <motion.span
                    key={`${word}-${i}`}
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.07, duration: 0.6, ease: 'easeOut' }}
                    className="inline-block"
                >
                    {word}
                </motion.span>
                ))}
            </h1>

            {/* Sous-titre */}
            <motion.p
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: titleWords.length * 0.07 + 0.4, duration: 0.8 }}
                className="relative z-10 mt-6 max-w-xl text-center text-lg md:text-xl text-[var(--color-text-light)]"
            >
                Des outils puissants, une histoire simple.
            </motion.p>

            {/* CTA */}
            <motion.a
                href="#projects"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: titleWords.length * 0.07 + 0.9 }}
                className="relative z-10 mt-10 inline-block rounded-full border px-8 py-3 text-sm font-semibold uppercase tracking-widest text-[var(--color-text-light)] border-[var(--color-taxi)] transition hover:bg-[var(--color-taxi)] hover:text-[var(--color-text-dark)]"
            >
                Voir mes créations
            </motion.a>
        </section>
    );
}