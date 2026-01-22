'use client';

import { useState } from 'react';

interface VideoSectionProps {
  title: string;
  videoUrl?: string;
  duration?: string;
}

export default function VideoSection({ title, videoUrl, duration = '1-2 phút' }: VideoSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!videoUrl) return null;

  return (
    <div className="my-8 border border-warm-yellow rounded-lg overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 bg-academic-red hover:bg-academic-red/80 transition-colors flex items-center justify-between text-left"
      >
        <span className=" text-lg text-white">
          {title} ({duration})
        </span>
        <span className="text-warm-yellow text-2xl">
          {isExpanded ? '−' : '+'}
        </span>
      </button>

      {isExpanded && (
        <div className="p-6 bg-black/30">
          <video
            controls
            className="w-full max-w-4xl mx-auto rounded"
            src={videoUrl}
          >
            Trình duyệt của bạn không hỗ trợ phát video.
          </video>
        </div>
      )}
    </div>
  );
}
