"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ChapterProps {
  number: string;
  title: string;
  description: string;
  videoUrl: string;
  isActive: boolean;
}

export default function Chapter({
  number,
  title,
  description,
  videoUrl
}: ChapterProps) {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.8, 1, 0.8]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0]
  );

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative snap-start"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <motion.div
          style={{ opacity }}
          className="space-y-6 lg:space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-8xl lg:text-9xl font-bold text-white/20 mb-4">
              {number}
            </h2>
            <h3 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              {title}
            </h3>
            <p className="text-lg lg:text-xl text-white/70 max-w-lg leading-relaxed">
              {description}
            </p>
          </motion.div>
        </motion.div>

        {/* Video */}
        <motion.div
          style={{ scale }}
          className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
        >
          <motion.iframe
            src={videoUrl}
            className="w-full h-full"
            allow="autoplay; fullscreen"
            allowFullScreen
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
}
