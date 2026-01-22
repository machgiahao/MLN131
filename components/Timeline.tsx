'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface TimelineEvent {
  year?: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="relative">
      {/* Center line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-soft-red via-gold to-soft-red origin-top"
      />

      <div className="space-y-12">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
          >
            <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
              {event.year && (
                <div className="text-sm font-bold text-soft-red mb-2">
                  {event.year}
                </div>
              )}
              <h4 className="text-lg  font-bold text-warm-gray mb-2">
                {event.title}
              </h4>
              <p className="text-warm-gray/70 leading-relaxed text-sm">
                {event.description}
              </p>
            </div>

            {/* Center dot */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
              className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-soft-red to-gold rounded-full shadow-lg border-4 border-white"
            />

            <div className="w-5/12" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
