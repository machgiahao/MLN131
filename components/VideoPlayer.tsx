'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoPlayerProps {
  videoUrl: string;
  thumbnail?: string;
  title?: string;
}

export default function VideoPlayer({ videoUrl, thumbnail, title = 'Xem video minh họa' }: VideoPlayerProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="my-8">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="group flex items-center space-x-3 px-6 py-4 bg-gradient-to-r from-soft-red to-gold/80 hover:from-soft-red/90 hover:to-gold text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
        </svg>
        <span className="font-semibold">{title}</span>
        <span className="text-sm opacity-80">(1-2 phút)</span>
        <svg 
          className={`w-5 h-5 ml-auto transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <div className="mt-6 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gold/20 shadow-lg">
              <video
                controls
                className="w-full rounded-xl shadow-md"
                poster={thumbnail}
                src={videoUrl}
              >
                Trình duyệt của bạn không hỗ trợ phát video.
              </video>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
