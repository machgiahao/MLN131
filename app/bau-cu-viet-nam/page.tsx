'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function BauCuVietNamPage() {
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
          <div className="text-8xl mb-6">🇻🇳</div>
          <h1 className="text-6xl md:text-7xl font-serif font-bold text-warm-gray mb-6">
            BẦU CỬ VIỆT NAM
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-red-600 to-yellow-500 mx-auto mb-8" />
          <p className="text-2xl text-warm-gray/70 max-w-3xl mx-auto">
            Hệ thống bầu cử và dân chủ đại diện tại Việt Nam
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
            <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-red-200/50">
              <h2 className="text-3xl font-serif font-bold text-warm-gray mb-4 flex items-center gap-3">
                <span className="text-4xl">🗳️</span>
                Hệ thống bầu cử
              </h2>
              <p className="text-lg text-warm-gray/80 leading-relaxed mb-6">
                Việt Nam thực hiện chế độ bầu cử đại biểu Quốc hội và đại biểu Hội đồng nhân dân 
                các cấp theo nguyên tắc phổ thông, bình đẳng, trực tiếp và bỏ phiếu kín.
              </p>
              <div className="space-y-3">
                {[
                  'Bầu cử Quốc hội 5 năm một lần',
                  'Bầu cử HĐND các cấp định kỳ',
                  'Quyền bầu cử từ 18 tuổi',
                  'Quyền ứng cử từ 21 tuổi'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-warm-gray/80">
                    <span className="text-red-500 text-xl">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-red-200/50">
              <h2 className="text-3xl font-serif font-bold text-warm-gray mb-4 flex items-center gap-3">
                <span className="text-4xl">📋</span>
                Quy trình bầu cử
              </h2>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Chuẩn bị', desc: 'Lập danh sách cử tri, khu vực bỏ phiếu' },
                  { step: '2', title: 'Ứng cử', desc: 'Đề cử, tiếp xúc cử tri, vận động bầu cử' },
                  { step: '3', title: 'Bỏ phiếu', desc: 'Ngày bầu cử, bỏ phiếu kín' },
                  { step: '4', title: 'Kiểm phiếu', desc: 'Công khai, minh bạch, dân chủ' },
                  { step: '5', title: 'Công bố', desc: 'Công bố kết quả, xác nhận tư cách' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-yellow-500 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
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

            <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-red-200/50">
              <h2 className="text-3xl font-serif font-bold text-warm-gray mb-4 flex items-center gap-3">
                <span className="text-4xl">🏛️</span>
                Đặc điểm nổi bật
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '👥', label: 'Đa dạng ứng viên' },
                  { icon: '🌟', label: 'Tự ứng cử' },
                  { icon: '📢', label: 'Vận động công khai' },
                  { icon: '✅', label: 'Giám sát chặt chẽ' }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-xl p-6 text-center border border-red-200"
                  >
                    <div className="text-4xl mb-2">{item.icon}</div>
                    <div className="font-semibold text-warm-gray">{item.label}</div>
                  </div>
                ))}
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
            <div className="bg-gradient-to-br from-red-500/10 to-yellow-500/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-red-300/50">
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
                    title="Bầu cử Việt Nam"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </motion.div>
              ) : (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="aspect-video bg-gradient-to-br from-red-600 to-yellow-600 rounded-xl flex items-center justify-center cursor-pointer mb-4 shadow-xl"
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
                className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                {showVideo ? 'Ẩn Video' : 'Xem Video'}
              </motion.button>
            </div>

            {/* Stats */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-red-200/50">
              <h3 className="text-2xl font-serif font-bold text-warm-gray mb-6 flex items-center gap-3">
                <span className="text-3xl">📊</span>
                Thông tin quan trọng
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'Số đại biểu Quốc hội', value: '~500 người', icon: '🏛️' },
                  { label: 'Chu kỳ bầu cử', value: '5 năm', icon: '📅' },
                  { label: 'Độ tuổi bầu cử', value: 'Từ 18 tuổi', icon: '👤' },
                  { label: 'Độ tuổi ứng cử', value: 'Từ 21 tuổi', icon: '🎯' },
                  { label: 'Tỷ lệ tham gia', value: '~99%', icon: '📈' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-red-50 rounded-xl border border-red-200"
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

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-red-500/20 to-yellow-500/20 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-red-300/50"
            >
              <div className="text-5xl mb-4 text-center">🇻🇳</div>
              <p className="text-xl font-serif italic text-warm-gray text-center leading-relaxed">
                "Nhân dân Việt Nam là chủ thể của quyền lực nhà nước"
              </p>
              <p className="text-sm text-warm-gray/60 text-center mt-3">
                Hiến pháp 2013
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-2xl p-10 shadow-2xl text-center"
        >
          <h3 className="text-3xl font-serif font-bold mb-4">
            Tóm tắt chương
          </h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            Bầu cử tại Việt Nam được tổ chức theo nguyên tắc phổ thông, bình đẳng, trực tiếp 
            và bỏ phiếu kín. Đây là cơ chế quan trọng để nhân dân thực hiện quyền làm chủ, 
            lựa chọn người đại diện xứng đáng trong các cơ quan quyền lực nhà nước.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
