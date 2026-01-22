'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function MoDauPage() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="min-h-screen pt-36 pb-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* LAYOUT: Magazine Style */}

        {/* Hero Section */}
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
            <h1 className="text-7xl md:text-9xl font-bold text-gray-900 mb-6 leading-none">
              MỞ ĐẦU
            </h1>
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-blue-700 mb-4">Góc độ pháp lý về Bầu cử</h2>
              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
                Bầu cử là phương thức để công dân lựa chọn người đại diện thay mặt mình thực hiện quyền lực nhà nước (Quốc hội, HĐND). Đây vừa là <b>quyền chính trị cơ bản</b>, vừa là <b>nghĩa vụ</b> của công dân nhằm chọn ra những người xứng đáng nhất thể hiện ý chí và nguyện vọng của nhân dân.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Grid: Sidebar + Main Content */}
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-4"
          >
            <div className="sticky top-24 space-y-6">
              {/* Video Widget */}
              <div className="bg-white rounded-3xl p-6 shadow-xl border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                  Video minh họa
                </h3>
                {showVideo ? (
                  <div className="aspect-video rounded-xl overflow-hidden bg-gray-900 mb-4 shadow-inner">
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
                    className="aspect-video rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all mb-4 group"
                  >
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                      <div className="text-4xl text-white ml-1">▶</div>
                    </div>
                    <p className="text-white font-medium mt-3 opacity-90">Xem tư liệu</p>
                  </div>
                )}
              </div>

              {/* Key Stats Widget (Dựa trên số liệu bài viết) */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                <h4 className="font-bold text-lg mb-6 border-b border-white/20 pb-2">Điều kiện cơ bản</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="opacity-80 text-sm">Tuổi Bầu cử</span>
                    <span className="text-2xl font-bold">Đủ 18t</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="opacity-80 text-sm">Tuổi Ứng cử</span>
                    <span className="text-2xl font-bold">Đủ 21t</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="opacity-80 text-sm">Hình thức</span>
                    <span className="font-bold bg-white/20 px-3 py-1 rounded-lg text-sm">Bỏ phiếu kín</span>
                  </div>
                </div>
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
            {/* Card 1: Các khái niệm cơ bản */}
            <article className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl font-bold text-blue-600">
                  1
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Khái niệm chủ chốt</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-2xl hover:bg-blue-50 transition-colors duration-300">
                      <h3 className="text-xl font-bold text-blue-800 mb-3">Cử tri</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Người có quyền bỏ phiếu bầu ra đại biểu. Đặc biệt, cử tri có quyền <b>bãi nhiệm</b> nếu đại biểu không còn xứng đáng.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-2xl hover:bg-blue-50 transition-colors duration-300">
                      <h3 className="text-xl font-bold text-blue-800 mb-3">Vận động bầu cử</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Hoạt động tiếp xúc cử tri, trình bày chương trình hành động để cử tri hiểu rõ năng lực và đưa ra lựa chọn chính xác.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Card 2: So sánh Quyền Bầu cử & Ứng cử */}
            <article className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl font-bold text-indigo-600">
                  2
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Quyền Bầu cử & Ứng cử</h2>
                  <div className="grid md:grid-cols-2 gap-0 border border-gray-200 rounded-2xl overflow-hidden">
                    {/* Cột Bầu cử */}
                    <div className="p-6 bg-blue-50/50 border-b md:border-b-0 md:border-r border-gray-200">
                      <h3 className="text-lg font-bold text-blue-700 mb-2 uppercase tracking-wider">Quyền Bầu cử</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2 text-gray-700 text-sm">
                          <span className="text-blue-500 font-bold">•</span>
                          Năng lực pháp lý lựa chọn người đại diện.
                        </li>
                        <li className="flex items-start gap-2 text-gray-700 text-sm">
                          <span className="text-blue-500 font-bold">•</span>
                          Dành cho mọi công dân từ <b>đủ 18 tuổi</b>.
                        </li>
                        <li className="flex items-start gap-2 text-gray-700 text-sm">
                          <span className="text-blue-500 font-bold">•</span>
                          Bao gồm quyền đề cử, giới thiệu và bỏ phiếu kín.
                        </li>
                      </ul>
                    </div>

                    {/* Cột Ứng cử */}
                    <div className="p-6 bg-indigo-50/50">
                      <h3 className="text-lg font-bold text-indigo-700 mb-2 uppercase tracking-wider">Quyền Ứng cử</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2 text-gray-700 text-sm">
                          <span className="text-indigo-500 font-bold">•</span>
                          Tự ứng cử hoặc được giới thiệu làm đại biểu.
                        </li>
                        <li className="flex items-start gap-2 text-gray-700 text-sm">
                          <span className="text-indigo-500 font-bold">•</span>
                          Dành cho công dân từ <b>đủ 21 tuổi</b>.
                        </li>
                        <li className="flex items-start gap-2 text-gray-700 text-sm">
                          <span className="text-indigo-500 font-bold">•</span>
                          Phải đáp ứng tiêu chuẩn năng lực & đạo đức.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Card 3: Ý nghĩa lá phiếu (Thay thế phần Forms cũ) */}
            <article className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 shadow-xl text-white relative overflow-hidden">
               {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
              
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                Ý nghĩa của Lá phiếu
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all group">
                  <h3 className="text-lg font-bold mb-2 text-blue-200">Quyền làm chủ</h3>
                  <p className="text-white/80 text-sm">Lá phiếu là sự kết tinh quyền lực của nhân dân, khẳng định vị thế làm chủ đất nước.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all group">
                  <h3 className="text-lg font-bold mb-2 text-blue-200">Niềm tin</h3>
                  <p className="text-white/80 text-sm">Thước đo sự kỳ vọng của cử tri gửi gắm vào người đại biểu.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all group">
                  <h3 className="text-lg font-bold mb-2 text-blue-200">Đạo đức</h3>
                  <p className="text-white/80 text-sm">Trách nhiệm công dân đằng sau mỗi lá phiếu để chọn người xứng đáng.</p>
                </div>
              </div>
            </article>
          </motion.main>
        </div>

        {/* Bottom CTA: Tóm tắt */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Thông điệp cốt lõi</h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto opacity-95 font-light">
              "Lá phiếu không chỉ là quyền lợi pháp lý mà còn là <span className="font-bold border-b-2 border-yellow-400">thước đo niềm tin</span> và <span className="font-bold border-b-2 border-yellow-400">trách nhiệm đạo đức</span> của mỗi công dân đối với vận mệnh quốc gia."
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}