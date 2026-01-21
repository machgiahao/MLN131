'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function BauCuHoaKyPage() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-8xl mb-6">🇺🇸</div>
          <h1 className="text-6xl md:text-7xl font-serif font-bold text-warm-gray mb-6">
            BẦU CỬ HOA KỲ
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-700 to-red-700 mx-auto mb-8" />
          <p className="text-2xl text-warm-gray/70 max-w-3xl mx-auto">
            Hệ thống bầu cử và dân chủ đại diện tại Hoa Kỳ
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-200/50">
              <h2 className="text-3xl font-serif font-bold text-warm-gray mb-4 flex items-center gap-3">
                <span className="text-4xl">🏛️</span>
                Hệ thống đại cử tri
              </h2>
              <p className="text-lg text-warm-gray/80 leading-relaxed mb-6">
                Hoa Kỳ sử dụng hệ thống Electoral College (Đại cử tri đoàn) để bầu Tổng thống. 
                Người dân bầu cho các đại cử tri, và các đại cử tri này bầu Tổng thống.
              </p>
              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-700">
                <div className="text-4xl font-bold text-blue-700 mb-2">538</div>
                <p className="text-blue-900 font-semibold">Tổng số đại cử tri</p>
                <p className="text-sm text-blue-700 mt-2">Cần 270 phiếu để thắng cử</p>
              </div>
            </section>

            <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-200/50">
              <h2 className="text-3xl font-serif font-bold text-warm-gray mb-4 flex items-center gap-3">
                <span className="text-4xl">📋</span>
                Quy trình bầu cử
              </h2>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Primaries', desc: 'Bầu chọn ứng viên trong đảng' },
                  { step: '2', title: 'Conventions', desc: 'Đại hội đảng chính thức đề cử' },
                  { step: '3', title: 'Campaign', desc: 'Vận động tranh cử toàn quốc' },
                  { step: '4', title: 'Election Day', desc: 'Ngày bầu cử chính thức' },
                  { step: '5', title: 'Electoral Vote', desc: 'Đại cử tri bỏ phiếu' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-700 to-red-700 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-warm-gray text-lg">{item.title}</h4>
                      <p className="text-warm-gray/70">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-200/50">
              <h2 className="text-3xl font-serif font-bold text-warm-gray mb-4 flex items-center gap-3">
                <span className="text-4xl">⚖️</span>
                Hai đảng chính
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl p-6 text-center">
                  <div className="text-4xl mb-2">🔵</div>
                  <div className="font-bold text-xl mb-2">Democratic</div>
                  <div className="text-sm opacity-90">Đảng Dân chủ</div>
                </div>
                <div className="bg-gradient-to-br from-red-600 to-red-800 text-white rounded-xl p-6 text-center">
                  <div className="text-4xl mb-2">🔴</div>
                  <div className="font-bold text-xl mb-2">Republican</div>
                  <div className="text-sm opacity-90">Đảng Cộng hòa</div>
                </div>
              </div>
            </section>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Video Section */}
            <div className="bg-gradient-to-br from-blue-500/10 to-red-500/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-300/50">
              <h3 className="text-2xl font-serif font-bold text-warm-gray mb-6 flex items-center gap-3">
                <span className="text-3xl">🎬</span>
                Video giới thiệu
              </h3>
              
              {showVideo ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="aspect-video rounded-xl overflow-hidden shadow-xl border-4 border-white/50 mb-4"
                >
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Bầu cử Hoa Kỳ"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </motion.div>
              ) : (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="aspect-video bg-gradient-to-br from-blue-700 to-red-700 rounded-xl flex items-center justify-center cursor-pointer mb-4 shadow-xl"
                  onClick={() => setShowVideo(true)}
                >
                  <div className="text-center">
                    <div className="text-6xl mb-4">▶️</div>
                    <p className="text-white font-semibold text-lg">Click để xem video</p>
                  </div>
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowVideo(!showVideo)}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-700 to-red-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                {showVideo ? 'Ẩn Video' : 'Xem Video'}
              </motion.button>
            </div>

            {/* Stats */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-200/50">
              <h3 className="text-2xl font-serif font-bold text-warm-gray mb-6 flex items-center gap-3">
                <span className="text-3xl">📊</span>
                Thông tin quan trọng
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'Số đại cử tri', value: '538 phiếu', icon: '🗳️' },
                  { label: 'Cần để thắng cử', value: '270 phiếu', icon: '🎯' },
                  { label: 'Nhiệm kỳ Tổng thống', value: '4 năm', icon: '📅' },
                  { label: 'Số bang', value: '50 bang', icon: '🗺️' },
                  { label: 'Độ tuổi bầu cử', value: 'Từ 18 tuổi', icon: '👤' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-blue-50 rounded-xl border border-blue-200"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{stat.icon}</span>
                      <span className="text-warm-gray/70">{stat.label}</span>
                    </div>
                    <span className="font-semibold text-warm-gray">{stat.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Đặc điểm */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-200/50">
              <h3 className="text-2xl font-serif font-bold text-warm-gray mb-4 flex items-center gap-3">
                <span className="text-3xl">⭐</span>
                Đặc điểm nổi bật
              </h3>
              <div className="space-y-3">
                {[
                  'Winner-takes-all (Người thắng nhận tất cả)',
                  'Swing states quyết định kết quả',
                  'Vận động tranh cử quy mô lớn',
                  'Chi phí tranh cử cao'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-warm-gray/80">
                    <span className="text-blue-600 text-xl">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-r from-blue-700 to-red-700 text-white rounded-2xl p-10 shadow-2xl text-center"
        >
          <h3 className="text-3xl font-serif font-bold mb-4">
            Tóm tắt chương
          </h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            Hệ thống bầu cử Hoa Kỳ đặc trưng bởi cơ chế đại cử tri đoàn (Electoral College), 
            với hai đảng chính trị chủ đạo. Quy trình bầu cử phức tạp, từ bầu sơ bộ đến 
            bầu cử chính thức, phản ánh hệ thống dân chủ đại diện lâu đời của Hoa Kỳ.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
