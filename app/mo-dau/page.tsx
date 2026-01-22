'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function MoDauPage() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* LAYOUT 1: Magazine Style với số thứ tự lớn */}

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative mb-20"
        >
          <div className="absolute -top-10 -left-10 text-[15rem] font-bold text-blue-100 opacity-30 select-none leading-none">
            01
          </div>
          <div className="relative z-10">
            <h1 className="text-7xl md:text-9xl  font-bold text-gray-900 mb-6 leading-none">
              MỞ ĐẦU
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 max-w-3xl font-light">
              Khái niệm và ý nghĩa về quyền làm chủ của nhân dân
            </p>
          </div>
        </motion.div>

        {/* Grid: Sidebar + Main */}
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-4"
          >
            <div className="sticky top-24 space-y-6">
              {/* Video */}
              <div className="bg-white rounded-3xl p-6 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Video giới thiệu</h3>
                {showVideo ? (
                  <div className="aspect-video rounded-xl overflow-hidden bg-gray-900 mb-4">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://drive.google.com/file/d/1vp0eQA-Em3EMIPAbgxNxYc6tmDXG9IyA/preview"
                      frameBorder="0"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div
                    onClick={() => setShowVideo(true)}
                    className="aspect-video rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform mb-4"
                  >
                    <div className="text-center text-white">
                      <div className="text-5xl mb-2">▶</div>
                      <p className="font-medium">Nhấn để xem</p>
                    </div>
                  </div>
                )}
                <button
                  onClick={() => setShowVideo(!showVideo)}
                  className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700"
                >
                  {showVideo ? 'Ẩn video' : 'Xem video'}
                </button>
              </div>

              {/* Stats */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-6 text-white shadow-xl">
                <h4 className="font-bold mb-4">Thông tin nhanh</h4>
                {[
                  { label: 'Nền tảng', value: 'Hiến pháp 2013' },
                  { label: 'Nguyên tắc', value: 'Dân chủ' },
                  { label: 'Chủ thể', value: 'Toàn dân' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between py-2 border-b border-white/20">
                    <span className="opacity-90">{item.label}</span>
                    <span className="font-bold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>

          {/* Main Content */}
          <motion.main
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-8 space-y-8"
          >
            {/* Card 1 */}
            <article className="bg-white rounded-3xl p-10 shadow-xl">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl font-bold text-blue-600">1</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Khái niệm cơ bản</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Quyền làm chủ của nhân dân là nền tảng của chế độ dân chủ, thể hiện qua việc
                    nhân dân có quyền quyết định mọi vấn đề quan trọng của đất nước.
                  </p>
                  <div className="bg-blue-50 rounded-2xl p-6 border-l-4 border-blue-600">
                    <p className=" italic text-xl text-blue-900 mb-2">
                      "Tất cả quyền lực nhà nước thuộc về nhân dân"
                    </p>
                    <p className="text-sm text-blue-700">— Hiến pháp 2013 —</p>
                  </div>
                </div>
              </div>
            </article>

            {/* Card 2 */}
            <article className="bg-white rounded-3xl p-10 shadow-xl">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl font-bold text-indigo-600">2</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Ý nghĩa và vai trò</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      'Đảm bảo quyền tự do dân chủ',
                      'Nền tảng phát triển bền vững',
                      'Thúc đẩy sự tham gia',
                      'Xã hội công bằng văn minh'
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl">
                        <div className="w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center text-sm font-bold">
                          {i + 1}
                        </div>
                        <span className="text-gray-800 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            {/* Card 3 */}
            <article className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 shadow-xl text-white">
              <h2 className="text-3xl font-bold mb-6">Các hình thức thực hiện</h2>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { title: 'Bầu cử', desc: 'Lựa chọn đại diện' },
                  { title: 'Trưng cầu', desc: 'Quyết định trực tiếp' },
                  { title: 'Giám sát', desc: 'Kiểm tra hoạt động' },
                  { title: 'Tham gia', desc: 'Đóng góp ý kiến' }
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur rounded-2xl p-6 hover:bg-white/20 transition">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/70 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </article>
          </motion.main>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-12 text-center shadow-2xl"
        >
          <h3 className="text-4xl font-bold mb-4">Tóm tắt chương</h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto opacity-90">
            Quyền làm chủ của nhân dân là nền tảng của nền dân chủ xã hội chủ nghĩa,
            được thể hiện qua nhiều hình thức khác nhau, trong đó bầu cử là cách thức quan trọng nhất.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
