'use client';

import { motion } from 'framer-motion';

interface SectionDividerProps {
  pattern?: 'lotus' | 'wave' | 'dots';
}

export default function SectionDivider({ pattern = 'lotus' }: SectionDividerProps) {
  return (
    <div className="relative py-16 overflow-hidden">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="relative"
      >
        {pattern === 'lotus' && (
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent w-1/3" />
            <div className="text-4xl">🪷</div>
            <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent w-1/3" />
          </div>
        )}
        
        {pattern === 'wave' && (
          <svg className="w-full h-4" viewBox="0 0 1200 4" preserveAspectRatio="none">
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              d="M0,2 Q150,0 300,2 T600,2 T900,2 T1200,2"
              fill="none"
              stroke="url(#wave-gradient)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E63946" stopOpacity="0" />
                <stop offset="50%" stopColor="#D4AF37" stopOpacity="1" />
                <stop offset="100%" stopColor="#E63946" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        )}

        {pattern === 'dots' && (
          <div className="flex items-center justify-center space-x-3">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-soft-red to-gold"
              />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
