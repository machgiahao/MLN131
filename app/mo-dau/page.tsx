'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function MoDauPage() {
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
          <div className="text-8xl mb-6">📚</div>
          <h1 className="text-6xl md:text-7xl font-serif font-bold text-warm-gray mb-6">
            MỞ ĐẦU
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8" />
          <p className="text-2xl text-warm-gray/70 max-w-3xl mx-auto">
            Giới thiệu về khái niệm quyền làm chủ của nhân dân
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-200/50">
              <h2 className="text-3xl font-serif font-bold text-warm-gray mb-4 flex items-center gap-3">
                <span className="text-4xl">🏛️</span>
                Khái niệm cơ bản
              </h2>
              <p className="text-lg text-warm-gray/80 leading-relaxed mb-4">
                Quyền làm chủ của nhân dân là nền tảng của chế độ dân chủ, thể hiện qua việc 
                nhân dân có quyền quyết định mọi vấn đề quan trọng của đất nước. Đây là nguyên 
                tắc cơ bản được ghi nhận trong Hiến pháp.
              </p>
              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                <p className="font-serif italic text-blue-900">
                  "Tất cả quyền lực nhà nước thuộc về nhân dân"
                </p>
                <p className="text-sm text-blue-700 mt-2">— Hiến pháp 2013 —</p>
              </div>
            </section>

            <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-200/50">
              <h2 className="text-3xl font-serif font-bold text-warm-gray mb-4 flex items-center gap-3">
                <span className="text-4xl">📖</span>
                Ý nghĩa và vai trò
              </h2>
              <ul className="space-y-3">
                {[
                  'Đảm bảo quyền tự do, dân chủ của công dân',
                  'Tạo nền tảng cho sự phát triển bền vững',
                  'Thúc đẩy sự tham gia của nhân dân vào quản lý nhà nước',
                  'Xây dựng xã hội công bằng, văn minh'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3 text-lg text-warm-gray/80"
                  >
                    <span className="text-blue-500 text-xl mt-1">✓</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </section>

            <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-200/50">
              <h2 className="text-3xl font-serif font-bold text-warm-gray mb-4 flex items-center gap-3">
                <span className="text-4xl">⚖️</span>
                Các hình thức thực hiện
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'Bầu cử', icon: '🗳️' },
                  { title: 'Trưng cầu', icon: '📊' },
                  { title: 'Giám sát', icon: '👁️' },
                  { title: 'Tham gia', icon: '🤝' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-6 text-center border border-blue-200"
                  >
                    <div className="text-4xl mb-2">{item.icon}</div>
                    <div className="font-semibold text-warm-gray">{item.title}</div>
                  </motion.div>
                ))}
              </div>
            </section>
          </motion.div>

          {/* Right Column - Video & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Video Section */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-300/50">
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
                    title="Mở đầu - Quyền làm chủ của nhân dân"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </motion.div>
              ) : (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="aspect-video bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center cursor-pointer mb-4 shadow-xl"
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
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                {showVideo ? 'Ẩn Video' : 'Xem Video'}
              </motion.button>
            </div>

            {/* Stats */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-200/50">
              <h3 className="text-2xl font-serif font-bold text-warm-gray mb-6 flex items-center gap-3">
                <span className="text-3xl">📊</span>
                Thông tin chính
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'Nền tảng pháp lý', value: 'Hiến pháp 2013', icon: '📜' },
                  { label: 'Nguyên tắc', value: 'Dân chủ, pháp quyền', icon: '⚖️' },
                  { label: 'Chủ thể', value: 'Toàn thể nhân dân', icon: '👥' },
                  { label: 'Phạm vi', value: 'Toàn quốc', icon: '🌏' }
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

            {/* Key Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-gold/30"
            >
              <div className="text-5xl mb-4 text-center">💡</div>
              <p className="text-xl font-serif italic text-warm-gray text-center leading-relaxed">
                "Dân là gốc của nước, gốc vững thì nước bền"
              </p>
              <p className="text-sm text-warm-gray/60 text-center mt-3">
                Tục ngữ Việt Nam
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl p-10 shadow-2xl text-center"
        >
          <h3 className="text-3xl font-serif font-bold mb-4">
            Tóm tắt chương
          </h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            Quyền làm chủ của nhân dân là nền tảng của nền dân chủ xã hội chủ nghĩa, 
            được thể hiện qua nhiều hình thức khác nhau, trong đó bầu cử là một trong 
            những cách thức quan trọng nhất để nhân dân thực hiện quyền lực của mình.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
