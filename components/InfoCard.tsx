'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface InfoCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

export default function InfoCard({ icon, title, description, delay = 0 }: InfoCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-soft-red/5 to-gold/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
      <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gold/20 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-2xl  font-bold text-warm-gray mb-3">
          {title}
        </h3>
        <p className="text-warm-gray/80 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
