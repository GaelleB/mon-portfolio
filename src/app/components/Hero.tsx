'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ScrollingText from './ScrollingText';

export default function Hero() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start start', 'end start'],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);
    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '300%']);

    return (
        <motion.section
        ref={targetRef}
        style={{ backgroundPositionY: backgroundY }}
        className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[var(--color-ny-dark)] text-[var(--color-text-light)]"
        >
        {/* Prénom animé en haut à gauche */}
        <div className="absolute top-10 left-8 z-10 font-bold text-[6vw] uppercase tracking-tight flex">
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

        {/* Nom animé en bas à droite */}
        <div className="absolute bottom-10 right-8 z-10 font-bold text-[6vw] uppercase tracking-tight flex">
            {'Boucher'.split('').map((letter, i) => (
            <motion.span
                key={`b-${i}`}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                delay: 0.5 + i * 0.04,
                duration: 0.5,
                ease: [0.25, 1, 0.5, 1],
                }}
                className="inline-block"
            >
                {letter}
            </motion.span>
            ))}
        </div>

        {/* Texte principal centré */}
        <motion.div
            style={{ y: textY }}
            className="z-10 text-center px-4"
        >
            <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="text-4xl md:text-6xl font-semibold mb-4"
            >
            Je crée des sites qui racontent ton histoire.
            </motion.h1>

            <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="text-lg md:text-xl text-[var(--color-text-light)] max-w-xl mx-auto"
            >
            Un style clair, une narration sincère. Un site qui incarne ta voix.
            </motion.p>

            {/* CTA */}
            <motion.a
            href="#projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            whileHover={{ y: -3 }}
            className="mt-8 inline-block rounded-full border border-[var(--color-taxi)] px-6 py-3 text-sm font-semibold uppercase tracking-widest text-[var(--color-text-light)] hover:bg-[var(--color-taxi)] hover:text-[var(--color-text-dark)] transition"
            >
            Voir mes créations
            </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.6 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[var(--color-taxi)] text-2xl animate-bounce"
        >
            ↓
        </motion.div>

        {/* Texte défilant derrière */}
        <ScrollingText />
        </motion.section>
    );
}