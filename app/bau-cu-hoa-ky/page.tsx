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
                      src="https://drive.google.com/file/d/10erMZ_5fmDWeZLPVHUtgsSBFkWD1nJtg/preview"
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
                      <p className="text-3xl font-bold">WATCH VIDEO</p>
                    </div>
                  </div>
                )}
                <button
                  onClick={() => setShowVideo(!showVideo)}
                  className="mt-6 w-full py-5 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-xl font-bold text-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all"
                >
                  {showVideo ? 'HIDE VIDEO' : 'PLAY VIDEO'}
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

          {/* Electoral College System */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-5xl font-black text-white text-center mb-12">
              HỆ THỐNG ĐẠI CỬ TRI
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { number: '538', label: 'Tổng đại cử tri', desc: 'Electoral votes' },
                { number: '270', label: 'Cần để thắng', desc: 'To win presidency' },
                { number: '50+DC', label: 'Bang tham gia', desc: 'States + DC' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all hover:scale-105"
                >
                  <div className="text-6xl font-black bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent mb-3">
                    {stat.number}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{stat.label}</h3>
                  <p className="text-gray-400 italic">{stat.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Process Cards */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black text-white text-center mb-12">
              QUY TRÌNH BẦU CỬ
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Primaries', desc: 'Bầu chọn ứng viên trong đảng' },
                { step: '02', title: 'Conventions', desc: 'Đại hội đảng chính thức' },
                { step: '03', title: 'Campaign', desc: 'Vận động tranh cử toàn quốc' },
                { step: '04', title: 'Election Day', desc: 'Ngày bầu cử chính thức' },
              ].map((process, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-all group"
                >
                  <div className="text-4xl font-black text-purple-500 mb-3 group-hover:scale-110 transition-transform">
                    {process.step}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{process.title}</h3>
                  <p className="text-gray-400">{process.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Bottom Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 rounded-3xl p-12 text-center"
          >
            <h3 className="text-4xl font-black text-white mb-4">TÓM TẮT CHƯƠNG</h3>
            <p className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto">
              Hệ thống bầu cử Hoa Kỳ đặc trưng bởi chế độ hai đảng và cơ chế đại cử tri -
              một mô hình dân chủ đại diện phức tạp với lịch sử hơn 200 năm.
            </p>
          </motion.div>

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
