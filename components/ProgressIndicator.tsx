"use client";

import { motion } from "framer-motion";

interface ProgressIndicatorProps {
  total: number;
  current: number;
}

export default function ProgressIndicator({ total, current }: ProgressIndicatorProps) {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {Array.from({ length: total }).map((_, index) => (
        <motion.div
          key={index}
          className={`w-2 rounded-full transition-all duration-300 ${
            index === current 
              ? "h-12 bg-white" 
              : "h-2 bg-white/30 hover:bg-white/50"
          }`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        />
      ))}
    </div>
  );
}
