'use client';

import { motion } from 'framer-motion';

const titleWords = 'Je crée des sites qui murmurent ton histoire.'.split(' ');

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative h-screen overflow-hidden bg-[var(--color-ny-dark)] text-[var(--color-text-light)]"
            >
            {/* Halo radial */}
            <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse,var(--color-taxi)_0%,transparent_70%)] opacity-10" />

            {/* Gaëlle (gauche haut) */}
            <div className="absolute top-10 left-8 z-10 font-bold text-[6vw] leading-none tracking-tight uppercase font-sans flex">
                {'Gaëlle'.split('').map((letter, i) => (
                    <motion.span
                    key={`g-${i}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        delay: 0.1 + i * 0.04,
                        duration: 0.5,
                        ease: [0.25, 1, 0.5, 1],
                    }}
                    className="inline-block"
                    >
                    {letter}
                    </motion.span>
                ))}
            </div>

            {/* Boucher (bas droite animé lettre par lettre) */}
            <div className="absolute bottom-10 right-8 z-10 font-bold text-[6vw] leading-none tracking-tight uppercase font-sans flex">
                {'Boucher'.split('').map((letter, i) => (
                    <motion.span
                    key={`b-${i}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        delay: 0.4 + i * 0.04,
                        duration: 0.5,
                        ease: [0.25, 1, 0.5, 1],
                    }}
                    className="inline-block"
                    >
                    {letter}
                    </motion.span>
                ))}
            </div>

            {/* Mail + LinkedIn (droite haut) */}
            <div className="absolute top-8 right-8 flex gap-6 text-xs font-mono uppercase tracking-widest text-[var(--color-text-light)] z-10">
                <a
                href="mailto:ton@email.com"
                className="hover:text-[var(--color-taxi)] transition"
                >
                Mail
                </a>
                <a
                href="https://www.linkedin.com/in/tonprofil/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-taxi)] transition"
                >
                LinkedIn
                </a>
            </div>

            {/* PORTFOLIO vertical (gauche) */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 rotate-[-90deg] origin-left text-xs tracking-widest font-mono uppercase text-[var(--color-text-light)] z-10">
                Portfolio
            </div>

            {/* Tagline en bas gauche */}
            <div className="absolute bottom-10 left-8 text-sm font-mono uppercase tracking-widest text-[var(--color-text-light)] z-10">
                Sites qui racontent ton histoire
            </div>

            {/* Scroll down icon (optionnel) */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--color-taxi)] text-2xl animate-bounce z-10">
                ↓
            </div>

            {/* Titre animé (centré) */}
            <div className="flex h-full w-full flex-col items-center justify-center text-center px-6">
                <h1 className="flex flex-wrap justify-center gap-x-2 text-4xl md:text-6xl font-serif tracking-tight leading-tight z-10">
                {titleWords.map((word, i) => (
                    <motion.span
                    key={word + i}
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        delay: i * 0.06,
                        duration: 0.6,
                        ease: [0.25, 1, 0.5, 1],
                    }}
                    className="inline-block"
                    >
                    {word}
                    </motion.span>
                ))}
                </h1>

                {/* Sous-titre */}
                <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    delay: titleWords.length * 0.06 + 0.4,
                    duration: 0.8,
                    ease: [0.25, 1, 0.5, 1],
                }}
                className="mt-6 max-w-xl text-lg md:text-xl font-light text-[var(--color-text-light)] z-10"
                >
                Des outils puissants, une histoire simple.
                </motion.p>

                {/* CTA */}
                <motion.a
                href="#projects"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    delay: titleWords.length * 0.06 + 0.9,
                    duration: 0.6,
                    ease: [0.25, 1, 0.5, 1],
                }}
                whileHover={{ y: -2 }}
                className="mt-10 inline-block rounded-full border border-[var(--color-taxi)] px-8 py-3 text-sm font-semibold uppercase tracking-widest text-[var(--color-text-light)] transition hover:bg-[var(--color-taxi)] hover:text-[var(--color-text-dark)] z-10"
                >
                Voir mes créations
                </motion.a>
            </div>
        </section>
    );
}