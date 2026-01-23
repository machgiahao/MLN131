'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function BauCuHoaKyPage() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950">
      {/* LAYOUT 3: Split-Screen / Cards Grid - American Style */}

      {/* Hero Section - Full Width */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-red-900 to-blue-900"
      >
        {/* Stars pattern background */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `twinkle ${2 + Math.random() * 3}s infinite`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-7xl md:text-9xl font-black text-white mb-6"
          >
            BẦU CỬ<br />
            <span className="bg-gradient-to-r from-blue-400 via-white to-red-400 bg-clip-text text-transparent">
              HOA KỲ
            </span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Hệ thống bầu cử hai đảng và cơ chế đại cử tri
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="animate-bounce text-white text-4xl">↓</div>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content - Dark Mode with Cards */}
      <div className="bg-gray-950 py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Video Section - Cinematic */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="bg-gradient-to-r from-blue-900/50 to-red-900/50 rounded-3xl p-2">
              <div className="bg-gray-900 rounded-2xl p-8">
                {showVideo ? (
                  <div className="aspect-video rounded-xl overflow-hidden bg-black">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://drive.google.com/file/d/1C5WA4L-oJENP5hZKe9MKMWV0eQkRk4ta/preview"
                      frameBorder="0"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div
                    onClick={() => setShowVideo(true)}
                    className="aspect-video rounded-xl bg-gradient-to-br from-blue-600 via-purple-600 to-red-600 flex items-center justify-center cursor-pointer hover:scale-[1.01] transition-transform group"
                  >
                    <div className="text-center text-white">
                      <div className="text-8xl mb-4 group-hover:scale-110 transition-transform">▶</div>
                      <p className="text-3xl font-bold">Xem video</p>
                    </div>
                  </div>
                )}
                <button
                  onClick={() => setShowVideo(!showVideo)}
                  className="mt-6 w-full py-5 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-xl font-bold text-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all"
                >
                  {showVideo ? 'ẨN VIDEO' : 'XEM VIDEO'}
                </button>
              </div>
            </div>
          </motion.section>

          {/* Split Cards Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {/* Left Column - Democratic Party */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-8 border border-blue-700">
                <h2 className="text-5xl font-black text-blue-300 mb-6">ĐẢNG DÂN CHỦ</h2>
                <div className="space-y-4">
                  <div className="bg-blue-950/50 rounded-xl p-5 backdrop-blur">
                    <h3 className="text-xl font-bold text-blue-200 mb-2">Màu đại diện</h3>
                    <p className="text-gray-300">Xanh dương (Blue)</p>
                  </div>
                  <div className="bg-blue-950/50 rounded-xl p-5 backdrop-blur">
                    <h3 className="text-xl font-bold text-blue-200 mb-2">Biểu tượng</h3>
                    <p className="text-gray-300">Con lừa (Donkey)</p>
                  </div>
                  <div className="bg-blue-950/50 rounded-xl p-5 backdrop-blur">
                    <h3 className="text-xl font-bold text-blue-200 mb-2">Định hướng</h3>
                    <p className="text-gray-300">Tự do, cải cách xã hội</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Republican Party */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-3xl p-8 border border-red-700">
                <h2 className="text-5xl font-black text-red-300 mb-6">ĐẢNG CỘNG HÒA</h2>
                <div className="space-y-4">
                  <div className="bg-red-950/50 rounded-xl p-5 backdrop-blur">
                    <h3 className="text-xl font-bold text-red-200 mb-2">Màu đại diện</h3>
                    <p className="text-gray-300">Đỏ (Red)</p>
                  </div>
                  <div className="bg-red-950/50 rounded-xl p-5 backdrop-blur">
                    <h3 className="text-xl font-bold text-red-200 mb-2">Biểu tượng</h3>
                    <p className="text-gray-300">Con voi (Elephant)</p>
                  </div>
                  <div className="bg-red-950/50 rounded-xl p-5 backdrop-blur">
                    <h3 className="text-xl font-bold text-red-200 mb-2">Định hướng</h3>
                    <p className="text-gray-300">Bảo thủ, tự do kinh tế</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
