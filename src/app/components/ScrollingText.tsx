'use client';

import { motion } from 'framer-motion';

const words = [
  'Histoires', 'Codes', 'Narration', 'Sites', 'Créations', 'Voix', 'Récits'
];

export default function ScrollingText() {
  const repeatedWords = [...words, ...words]; // doublé pour continuité fluide

  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden z-0 select-none">
      <motion.div
        className="whitespace-nowrap text-2xl md:text-2xl lg:text-4xl font-extrabold uppercase tracking-tight"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 30,
        }}
      >
        {repeatedWords.map((word, i) => (
          <span
            key={i}
            className={`mx-6 ${
              i % 2 === 0 ? 'text-[var(--color-taxi)]' : 'text-white'
            }`}
          >
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
}