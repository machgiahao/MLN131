'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface PhilosophicalQuoteProps {
  quote: string;
  author?: string;
  context?: string;
}

export default function PhilosophicalQuote({ quote, author, context }: PhilosophicalQuoteProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8 }}
      className="relative my-16"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-soft-red/10 to-gold/10 blur-2xl" />
      <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-12 border-2 border-gold/30 shadow-2xl">
        <div className="absolute -top-6 left-12 text-6xl text-gold/40">❝</div>
        <blockquote className="text-2xl md:text-3xl  italic text-center text-warm-gray leading-relaxed px-8">
          {quote}
        </blockquote>
        <div className="absolute -bottom-6 right-12 text-6xl text-gold/40 rotate-180">❝</div>

        {author && (
          <div className="text-center mt-8 pt-6 border-t border-gold/20">
            <p className="text-lg font-medium text-soft-red">— {author}</p>
            {context && (
              <p className="text-sm text-warm-gray/60 mt-1">{context}</p>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
