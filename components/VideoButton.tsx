'use client';

import { useState } from 'react';

interface VideoButtonProps {
  videoUrl: string;
  title?: string;
}

export default function VideoButton({ videoUrl, title = 'Xem video minh họa' }: VideoButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center space-x-2 px-6 py-3 bg-vn-bronze text-white rounded-lg hover:bg-vn-red transition-colors shadow-md"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
        </svg>
        <span className="font-medium">{title}</span>
      </button>

      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl bg-white rounded-lg shadow-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-vn-gray hover:text-vn-red text-3xl font-bold"
            >
              ×
            </button>
            <video
              controls
              autoPlay
              className="w-full rounded"
              src={videoUrl}
            >
              Trình duyệt của bạn không hỗ trợ phát video.
            </video>
          </div>
        </div>
      )}
    </>
  );
}
