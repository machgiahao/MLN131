'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import PhilosophicalQuote from '@/components/PhilosophicalQuote';
import CalloutBox from '@/components/CalloutBox';
import SectionDivider from '@/components/SectionDivider';

export default function KetLuanPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-warm-gray mb-6">
            Kết Luận & Thông Điệp
          </h1>
          <p className="text-2xl text-warm-gray/70 max-w-3xl mx-auto">
            Những điểm cần ghi nhớ về quyền làm chủ của nhân dân
          </p>
        </motion.div>

        <CalloutBox type="highlight" title="Những Điểm Chính">
          <ul className="space-y-3 text-lg">
            <li className="flex items-start">
              <span className="text-soft-red mr-3 text-2xl">✓</span>
              <span>Quyền làm chủ là <strong>quyền và trách nhiệm</strong> của mỗi công dân</span>
            </li>
            <li className="flex items-start">
              <span className="text-soft-red mr-3 text-2xl">✓</span>
              <span>Bầu cử là công cụ quan trọng để thực hiện quyền dân chủ</span>
            </li>
            <li className="flex items-start">
              <span className="text-soft-red mr-3 text-2xl">✓</span>
              <span>Mỗi lá phiếu là một tiếng nói, một quyền lực, một trách nhiệm</span>
            </li>
            <li className="flex items-start">
              <span className="text-soft-red mr-3 text-2xl">✓</span>
              <span>Mô hình dân chủ cần phù hợp với đặc điểm từng quốc gia</span>
            </li>
          </ul>
        </CalloutBox>

        <SectionDivider pattern="lotus" />

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-soft-red/10 to-gold/10 rounded-2xl p-10 border border-gold/20">
            <h3 className="text-2xl font-serif font-bold text-warm-gray mb-6">Thành Tựu</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-soft-red mr-2">✓</span>
                <span>Tỷ lệ cử tri tham gia cao</span>
              </li>
              <li className="flex items-start">
                <span className="text-soft-red mr-2">✓</span>
                <span>Quy trình ngày càng minh bạch</span>
              </li>
              <li className="flex items-start">
                <span className="text-soft-red mr-2">✓</span>
                <span>Đại diện đa dạng, toàn diện</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gold/10 to-soft-red/10 rounded-2xl p-10 border border-soft-red/20">
            <h3 className="text-2xl font-serif font-bold text-warm-gray mb-6">Định Hướng</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-soft-red mr-2">→</span>
                <span>Nâng cao nhận thức công dân</span>
              </li>
              <li className="flex items-start">
                <span className="text-soft-red mr-2">→</span>
                <span>Tăng cường giám sát, minh bạch</span>
              </li>
              <li className="flex items-start">
                <span className="text-soft-red mr-2">→</span>
                <span>Hoàn thiện thể chế dân chủ</span>
              </li>
            </ul>
          </div>
        </div>

        <PhilosophicalQuote
          quote="Dân là gốc của nước, gốc vững thì nước bền"
          author="Chủ tịch Hồ Chí Minh"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-soft-red via-gold to-soft-red text-white rounded-3xl p-12 text-center my-16"
        >
          <h2 className="text-4xl font-serif font-bold mb-6">
            Thông Điệp Cuối Cùng
          </h2>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-8">
            Quyền làm chủ chỉ có ý nghĩa khi nhân dân <strong>thực sự thực hiện nó</strong>. 
            Mỗi lá phiếu là một tiếng nói, là trách nhiệm đối với tương lai của đất nước. 
            Hãy thực hiện quyền bầu cử với ý thức, trách nhiệm và tự hào.
          </p>
          <Link
            href="/"
            className="inline-block px-10 py-4 bg-white text-soft-red rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Về Trang Chủ
          </Link>
        </motion.div>

        <div className="text-center text-warm-gray/60 text-lg font-serif italic">
          <p>Cảm ơn quý vị đã lắng nghe</p>
          <p className="mt-2">🇻🇳</p>
        </div>
      </div>
    </div>
  );
}
