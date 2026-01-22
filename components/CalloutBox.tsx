'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface CalloutBoxProps {
  type?: 'info' | 'highlight' | 'insight';
  title?: string;
  children: React.ReactNode;
}

export default function CalloutBox({ type = 'info', title, children }: CalloutBoxProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const styles = {
    info: {
      bg: 'bg-blue-50/50',
      border: 'border-blue-200/50',
      icon: 'ℹ️',
      iconBg: 'bg-blue-100'
    },
    highlight: {
      bg: 'bg-gradient-to-br from-gold/10 to-soft-red/10',
      border: 'border-gold/30',
      icon: '⭐',
      iconBg: 'bg-gold/20'
    },
    insight: {
      bg: 'bg-gradient-to-br from-soft-red/10 to-gold/10',
      border: 'border-soft-red/30',
      icon: '💡',
      iconBg: 'bg-soft-red/20'
    }
  };

  const style = styles[type];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.6 }}
      className={`relative ${style.bg} backdrop-blur-sm rounded-2xl p-8 border-2 ${style.border} shadow-lg my-8`}
    >
      <div className="flex items-start space-x-4">
        <div className={`flex-shrink-0 w-12 h-12 ${style.iconBg} rounded-xl flex items-center justify-center text-2xl`}>
          {style.icon}
        </div>
        <div className="flex-1">
          {title && (
            <h4 className="text-xl  font-bold text-warm-gray mb-3">
              {title}
            </h4>
          )}
          <div className="text-warm-gray/90 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
