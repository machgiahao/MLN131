'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function SoSanhPage() {
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
          <div className="text-8xl mb-6">⚖️</div>
          <h1 className="text-6xl md:text-7xl font-serif font-bold text-warm-gray mb-6">
            SO SÁNH
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8" />
          <p className="text-2xl text-warm-gray/70 max-w-3xl mx-auto">
            So sánh hệ thống bầu cử Việt Nam và Hoa Kỳ
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-200/50 overflow-hidden">
            <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <div className="text-xl font-bold">Tiêu chí</div>
              <div className="text-xl font-bold text-center">🇻🇳 Việt Nam</div>
              <div className="text-xl font-bold text-center">🇺🇸 Hoa Kỳ</div>
            </div>

            {[
              {
                criteria: '🗳️ Cơ chế bầu cử',
                vn: 'Trực tiếp, phổ thông',
                us: 'Đại cử tri đoàn'
              },
              {
                criteria: '🏛️ Cơ quan được bầu',
                vn: 'Quốc hội, HĐND',
                us: 'Tổng thống, Quốc hội'
              },
              {
                criteria: '📅 Chu kỳ',
                vn: '5 năm',
                us: '4 năm (TT), 2/6 năm (QH)'
              },
              {
                criteria: '🎯 Số lượng đại biểu',
                vn: '~500 ĐBQH',
                us: '538 đại cử tri'
              },
              {
                criteria: '👥 Hệ thống chính đảng',
                vn: 'Đa đảng dưới sự lãnh đạo của Đảng',
                us: 'Hai đảng chính (Dân chủ & Cộng hòa)'
              },
              {
                criteria: '📢 Vận động bầu cử',
                vn: 'Có quy định, giới hạn',
                us: 'Tự do, quy mô lớn'
              },
              {
                criteria: '💰 Chi phí',
                vn: 'Nhà nước hỗ trợ',
                us: 'Tự vận động quỹ'
              },
              {
                criteria: '🎂 Độ tuổi bầu cử',
                vn: 'Từ 18 tuổi',
                us: 'Từ 18 tuổi'
              }
            ].map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className={`grid grid-cols-3 gap-4 p-6 ${index % 2 === 0 ? 'bg-purple-50/50' : 'bg-white/50'}`}
              >
                <div className="font-semibold text-warm-gray">{row.criteria}</div>
                <div className="text-center text-warm-gray/80 bg-red-50 rounded-lg py-2 px-3">
                  {row.vn}
                </div>
                <div className="text-center text-warm-gray/80 bg-blue-50 rounded-lg py-2 px-3">
                  {row.us}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-200/50">
              <h2 className="text-3xl font-serif font-bold text-warm-gray mb-4 flex items-center gap-3">
                <span className="text-4xl">🤝</span>
                Điểm giống nhau
              </h2>
              <div className="space-y-3">
                {[
                  'Đều thực hiện chế độ dân chủ đại diện',
                  'Công dân có quyền bầu cử và ứng cử',
                  'Nguyên tắc phổ thông, bình đẳng',
                  'Bỏ phiếu kín, bảo mật',
                  'Định kỳ tổ chức bầu cử',
                  'Bảo đảm quyền giám sát của nhân dân'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3 text-lg text-warm-gray/80"
                  >
                    <span className="text-green-500 text-xl mt-1 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-200/50">
              <h2 className="text-3xl font-serif font-bold text-warm-gray mb-4 flex items-center gap-3">
                <span className="text-4xl">🔄</span>
                Điểm khác nhau
              </h2>
              <div className="space-y-4">
                {[
                  {
                    aspect: 'Cơ chế bầu',
                    vn: 'Trực tiếp',
                    us: 'Gián tiếp (đại cử tri)'
                  },
                  {
                    aspect: 'Hệ thống đảng',
                    vn: 'Đa đảng có Đảng lãnh đạo',
                    us: 'Hai đảng đối lập'
                  },
                  {
                    aspect: 'Vận động',
                    vn: 'Có giới hạn, minh bạch',
                    us: 'Tự do, quy mô lớn'
                  },
                  {
                    aspect: 'Kinh phí',
                    vn: 'Nhà nước hỗ trợ chủ yếu',
                    us: 'Tự gây quỹ, quyên góp'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200"
                  >
                    <div className="font-bold text-purple-700 mb-2">{item.aspect}</div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="bg-red-100 rounded-lg p-2">
                        <div className="text-xs text-red-600 mb-1">🇻🇳 VN</div>
                        <div className="text-warm-gray">{item.vn}</div>
                      </div>
                      <div className="bg-blue-100 rounded-lg p-2">
                        <div className="text-xs text-blue-600 mb-1">🇺🇸 US</div>
                        <div className="text-warm-gray">{item.us}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8"
          >
            {/* Video Section */}
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-300/50">
              <h3 className="text-2xl font-serif font-bold text-warm-gray mb-6 flex items-center gap-3">
                <span className="text-3xl">🎬</span>
                Video phân tích
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
                    title="So sánh bầu cử"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </motion.div>
              ) : (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="aspect-video bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center cursor-pointer mb-4 shadow-xl"
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
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                {showVideo ? 'Ẩn Video' : 'Xem Video'}
              </motion.button>
            </div>

            {/* Insights */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-200/50">
              <h3 className="text-2xl font-serif font-bold text-warm-gray mb-6 flex items-center gap-3">
                <span className="text-3xl">💡</span>
                Nhận xét quan trọng
              </h3>
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-xl p-5 border-l-4 border-purple-500">
                  <h4 className="font-bold text-purple-900 mb-2">🎯 Mục tiêu chung</h4>
                  <p className="text-warm-gray/80">
                    Cả hai hệ thống đều hướng đến việc đảm bảo quyền dân chủ của công dân 
                    và xây dựng chính quyền có nguồn gốc từ nhân dân.
                  </p>
                </div>

                <div className="bg-pink-50 rounded-xl p-5 border-l-4 border-pink-500">
                  <h4 className="font-bold text-pink-900 mb-2">🔍 Khác biệt cơ bản</h4>
                  <p className="text-warm-gray/80">
                    Việt Nam theo chế độ xã hội chủ nghĩa, Hoa Kỳ theo chế độ tư bản chủ nghĩa, 
                    dẫn đến sự khác biệt về cơ chế và phương thức tổ chức.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-5 border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-900 mb-2">🌟 Học hỏi lẫn nhau</h4>
                  <p className="text-warm-gray/80">
                    Mỗi hệ thống có những ưu điểm riêng, có thể học hỏi và tham khảo 
                    để hoàn thiện quy trình dân chủ.
                  </p>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-200/50">
              <h3 className="text-2xl font-serif font-bold text-warm-gray mb-6 flex items-center gap-3">
                <span className="text-3xl">📊</span>
                So sánh nhanh
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center bg-red-50 rounded-xl p-4 border border-red-200">
                  <div className="text-3xl mb-2">🇻🇳</div>
                  <div className="text-2xl font-bold text-red-600">~500</div>
                  <div className="text-sm text-warm-gray/70">Đại biểu QH</div>
                </div>
                <div className="text-center bg-blue-50 rounded-xl p-4 border border-blue-200">
                  <div className="text-3xl mb-2">🇺🇸</div>
                  <div className="text-2xl font-bold text-blue-600">538</div>
                  <div className="text-sm text-warm-gray/70">Đại cử tri</div>
                </div>
                <div className="text-center bg-red-50 rounded-xl p-4 border border-red-200">
                  <div className="text-2xl font-bold text-red-600">5 năm</div>
                  <div className="text-sm text-warm-gray/70">Nhiệm kỳ QH</div>
                </div>
                <div className="text-center bg-blue-50 rounded-xl p-4 border border-blue-200">
                  <div className="text-2xl font-bold text-blue-600">4 năm</div>
                  <div className="text-sm text-warm-gray/70">Nhiệm kỳ TT</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-10 shadow-2xl text-center"
        >
          <h3 className="text-3xl font-serif font-bold mb-4">
            Tóm tắt chương
          </h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            Việt Nam và Hoa Kỳ đều có hệ thống bầu cử dân chủ nhưng khác nhau về cơ chế, 
            phương thức tổ chức và bối cảnh chính trị - xã hội. Sự khác biệt này xuất phát từ 
            lịch sử, văn hóa và chế độ chính trị của mỗi quốc gia.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
