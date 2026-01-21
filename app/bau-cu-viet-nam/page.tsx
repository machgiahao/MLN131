'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function BauCuVietNamPage() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-red-50 via-yellow-50 to-red-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* LAYOUT 2: Timeline/Process Flow - Vertical */}
        
        {/* Header với flag pattern */}
        <motion.header
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block bg-gradient-to-r from-red-600 to-yellow-600 text-white px-8 py-3 rounded-full font-bold mb-6">
            CHƯƠNG 02
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-bold bg-gradient-to-r from-red-700 via-yellow-600 to-red-700 bg-clip-text text-transparent mb-6">
            BẦU CỬ VIỆT NAM
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl text-gray-700">
              Hệ thống bầu cử dân chủ và đại diện tại Việt Nam
            </p>
          </div>
        </motion.header>

        {/* Video Section - Full Width */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            {showVideo ? (
              <div className="aspect-video rounded-2xl overflow-hidden bg-gray-900">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            ) : (
              <div 
                onClick={() => setShowVideo(true)}
                className="aspect-video rounded-2xl bg-gradient-to-br from-red-600 via-yellow-600 to-red-600 flex items-center justify-center cursor-pointer hover:scale-[1.02] transition-transform"
              >
                <div className="text-center text-white">
                  <div className="text-7xl mb-4">▶</div>
                  <p className="text-2xl font-bold">Xem video giới thiệu</p>
                </div>
              </div>
            )}
            <button
              onClick={() => setShowVideo(!showVideo)}
              className="mt-6 w-full py-4 bg-gradient-to-r from-red-600 to-yellow-600 text-white rounded-xl font-bold text-lg hover:shadow-xl transition-shadow"
            >
              {showVideo ? 'Ẩn video' : 'Phát video'}
            </button>
          </div>
        </motion.section>

        {/* Timeline Process - Vertical Flow */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 via-yellow-600 to-red-600" />

          {/* Steps */}
          {[
            {
              number: '01',
              title: 'Chuẩn bị',
              desc: 'Lập danh sách cử tri và khu vực bỏ phiếu',
              color: 'red'
            },
            {
              number: '02',
              title: 'Ứng cử',
              desc: 'Đề cử, tiếp xúc cử tri, vận động bầu cử',
              color: 'yellow'
            },
            {
              number: '03',
              title: 'Bỏ phiếu',
              desc: 'Ngày bầu cử chính thức, bỏ phiếu kín',
              color: 'red'
            },
            {
              number: '04',
              title: 'Kiểm phiếu',
              desc: 'Công khai, minh bạch, dân chủ',
              color: 'yellow'
            },
            {
              number: '05',
              title: 'Công bố',
              desc: 'Công bố kết quả, xác nhận tư cách',
              color: 'red'
            }
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'} md:w-1/2 pl-20 md:pl-0`}
            >
              {/* Circle on line */}
              <div className={`absolute left-4 md:left-auto ${index % 2 === 0 ? 'md:-right-6' : 'md:-left-6'} top-0 w-12 h-12 rounded-full bg-gradient-to-br ${step.color === 'red' ? 'from-red-600 to-red-700' : 'from-yellow-500 to-yellow-600'} flex items-center justify-center text-white font-bold border-4 border-white shadow-lg`}>
                {index + 1}
              </div>

              {/* Content Card */}
              <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow">
                <div className={`text-5xl font-bold ${step.color === 'red' ? 'text-red-600' : 'text-yellow-600'} mb-3`}>
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Grid */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">Thông tin quan trọng</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🏛️', label: 'Số đại biểu QH', value: '~500', color: 'red' },
              { icon: '📅', label: 'Chu kỳ bầu cử', value: '5 năm', color: 'yellow' },
              { icon: '👤', label: 'Độ tuổi bầu cử', value: 'Từ 18 tuổi', color: 'red' },
              { icon: '🎯', label: 'Độ tuổi ứng cử', value: 'Từ 21 tuổi', color: 'yellow' },
              { icon: '📈', label: 'Tỷ lệ tham gia', value: '~99%', color: 'red' },
              { icon: '✅', label: 'Nguyên tắc', value: 'Phổ thông', color: 'yellow' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-gradient-to-br ${stat.color === 'red' ? 'from-red-100 to-red-50' : 'from-yellow-100 to-yellow-50'} rounded-2xl p-6 text-center hover:scale-105 transition-transform`}
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className={`text-3xl font-bold ${stat.color === 'red' ? 'text-red-600' : 'text-yellow-600'} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-red-600 via-yellow-600 to-red-600 text-white rounded-3xl p-12 text-center shadow-2xl"
        >
          <h3 className="text-4xl font-bold mb-4">Tóm tắt chương</h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            Bầu cử tại Việt Nam được tổ chức theo nguyên tắc phổ thông, bình đẳng, trực tiếp 
            và bỏ phiếu kín - cơ chế quan trọng để nhân dân thực hiện quyền làm chủ.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
