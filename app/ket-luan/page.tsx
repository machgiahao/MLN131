'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function KetLuanPage() {
  const [showVideo, setShowVideo] = useState(false);
  const router = useRouter();

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
          <h1 className="text-6xl md:text-7xl  font-bold text-warm-gray mb-6">
            KẾT LUẬN
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-green-600 to-teal-600 mx-auto mb-8" />
          <p className="text-2xl text-warm-gray/70 max-w-3xl mx-auto">
            Tổng kết về quyền làm chủ và vai trò của bầu cử dân chủ
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
            <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-green-200/50">
              <h2 className="text-3xl  font-bold text-warm-gray mb-4 flex items-center gap-3">
                Tổng kết chính
              </h2>
              <p className="text-lg text-warm-gray/80 leading-relaxed mb-6">
                Qua quá trình tìm hiểu, chúng ta đã thấy rõ tầm quan trọng của quyền làm chủ
                nhân dân và vai trò then chốt của bầu cử trong việc thực hiện quyền đó.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: '🏛️',
                    title: 'Nền tảng dân chủ',
                    desc: 'Quyền làm chủ là nền tảng của chế độ dân chủ xã hội chủ nghĩa'
                  },
                  {
                    icon: '🗳️',
                    title: 'Bầu cử - công cụ quan trọng',
                    desc: 'Bầu cử là phương thức chủ yếu để nhân dân thực hiện quyền lực'
                  },
                  {
                    icon: '🌍',
                    title: 'Học hỏi quốc tế',
                    desc: 'Mỗi quốc gia có cách thức riêng phù hợp với điều kiện của mình'
                  },
                  {
                    icon: '🤝',
                    title: 'Trách nhiệm công dân',
                    desc: 'Mỗi công dân đều có vai trò và trách nhiệm trong xây dựng đất nước'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex gap-4 items-start bg-green-50 rounded-xl p-4 border border-green-200"
                  >
                    <div className="text-4xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-warm-gray text-lg mb-1">{item.title}</h4>
                      <p className="text-warm-gray/70">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-green-200/50">
              <h2 className="text-3xl  font-bold text-warm-gray mb-4 flex items-center gap-3">
                Triển vọng tương lai
              </h2>
              <div className="space-y-3">
                {[
                  'Hoàn thiện thể chế dân chủ ngày càng tốt hơn',
                  'Tăng cường sự tham gia của nhân dân',
                  'Ứng dụng công nghệ vào quy trình bầu cử',
                  'Nâng cao ý thức công dân về quyền và nghĩa vụ',
                  'Xây dựng xã hội dân chủ, văn minh, hiện đại'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3 text-lg text-warm-gray/80"
                  >
                    <span className="text-green-500 text-xl mt-1 flex-shrink-0">→</span>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-gold/30">
              <h2 className="text-3xl  font-bold text-warm-gray mb-4 flex items-center gap-3">
                Lời kêu gọi hành động
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-warm-gray/80 leading-relaxed">
                  Hãy là một công dân tích cực, có ý thức về quyền và nghĩa vụ của mình:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: '📚', text: 'Học hỏi' },
                    { icon: '🗳️', text: 'Tham gia bầu cử' },
                    { icon: '👁️', text: 'Giám sát' },
                    { icon: '🤝', text: 'Đóng góp' }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/80 rounded-xl p-4 text-center border border-gold/30"
                    >
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <div className="font-semibold text-warm-gray">{item.text}</div>
                    </div>
                  ))}
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
            <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-green-300/50">
              <h3 className="text-2xl  font-bold text-warm-gray mb-6 flex items-center gap-3">
                <span className="text-3xl">🎬</span>
                Video tổng kết
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
                    src="https://drive.google.com/file/d/1j8U2d-tkKaMm3HbfB27QVx97BD_QezEy/preview"
                    title="Kết luận"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </motion.div>
              ) : (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="aspect-video bg-gradient-to-br from-green-600 to-teal-600 rounded-xl flex items-center justify-center cursor-pointer mb-4 shadow-xl"
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
                className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                {showVideo ? 'Ẩn Video' : 'Xem Video'}
              </motion.button>
            </div>

            {/* Key Messages */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-green-200/50">
              <h3 className="text-2xl  font-bold text-warm-gray mb-6 flex items-center gap-3">
                <span className="text-3xl">✨</span>
                Thông điệp chính
              </h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-red-50 to-yellow-50 rounded-xl p-6 border-l-4 border-red-500">
                  <p className="text-xl  italic text-warm-gray text-center">
                    "Dân là gốc của nước,<br />gốc vững thì nước bền"
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border-l-4 border-blue-500">
                  <p className="text-xl  italic text-warm-gray text-center">
                    "Tất cả quyền lực nhà nước<br />thuộc về nhân dân"
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500">
                  <p className="text-xl  italic text-warm-gray text-center">
                    "Mỗi công dân là một phần<br />của sức mạnh quốc gia"
                  </p>
                </div>
              </div>
            </div>

            {/* Review sections */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-green-200/50">
              <h3 className="text-2xl  font-bold text-warm-gray mb-6 flex items-center gap-3">
                <span className="text-3xl">📚</span>
                Ôn tập 5 chương
              </h3>
              <div className="space-y-3">
                {[
                  { num: '1', title: 'Mở đầu', icon: '📚', path: '/mo-dau' },
                  { num: '2', title: 'Bầu cử Việt Nam', icon: '🇻🇳', path: '/bau-cu-viet-nam' },
                  { num: '3', title: 'Bầu cử Hoa Kỳ', icon: '🇺🇸', path: '/bau-cu-hoa-ky' },
                  { num: '4', title: 'So sánh', icon: '⚖️', path: '/so-sanh' },
                  { num: '5', title: 'Kết luận', icon: '🎯', path: '/ket-luan' }
                ].map((chapter, index) => (
                  <motion.button
                    key={index}
                    onClick={() => router.push(chapter.path)}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="w-full flex items-center gap-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-4 border border-green-200 text-left hover:shadow-md transition-all"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-teal-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                      {chapter.num}
                    </div>
                    <div className="text-2xl flex-shrink-0">{chapter.icon}</div>
                    <div className="font-semibold text-warm-gray flex-grow">{chapter.title}</div>
                    <div className="text-green-600">→</div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-2xl p-10 shadow-2xl text-center mb-10"
        >
          <div className="text-6xl mb-6">🌟</div>
          <h3 className="text-4xl  font-bold mb-6">
            Cảm ơn bạn đã theo dõi!
          </h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-8">
            Hy vọng qua hành trình này, bạn đã hiểu rõ hơn về quyền làm chủ của nhân dân
            và tầm quan trọng của việc tham gia vào các hoạt động dân chủ. Hãy là một công dân
            tích cực, có trách nhiệm và đóng góp vào sự phát triển của đất nước!
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/mo-dau')}
              className="px-8 py-4 bg-white text-green-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              🔄 Xem lại từ đầu
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/')}
              className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white rounded-xl font-semibold hover:bg-white/30 transition-all"
            >
              🏠 Về trang chủ
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
