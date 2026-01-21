'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import InfoCard from '@/components/InfoCard';
import SectionDivider from '@/components/SectionDivider';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDIwIFExMjAgNDAgMTAwIDYwIFE4MCA0MCAxMDAgMjAgTTEwMCAxNDAgUTEyMCAxNjAgMTAwIDE4MCBRODAgMTYwIDEwMCAxNDAiIHN0cm9rZT0iI0Q0QUYzNyIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIi8+PC9zdmc+')] bg-repeat" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-serif font-bold text-warm-gray mb-6 leading-tight">
              Quyền Làm Chủ<br />
              <span className="bg-gradient-to-r from-soft-red to-gold bg-clip-text text-transparent">
                Của Nhân Dân
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-warm-gray/80 font-serif italic mb-12">
              Tinh thần yêu nước Việt Nam trong thời đại hiện đại
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="/quyen-lam-chu"
              className="px-8 py-4 bg-gradient-to-r from-soft-red to-gold text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Khám Phá Ngay
            </Link>
            <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-warm-gray rounded-xl font-semibold border-2 border-gold/30 hover:border-soft-red hover:shadow-lg transition-all duration-300">
              Tìm Hiểu Thêm
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center text-warm-gray/50"
          >
            <span className="text-sm mb-2">Cuộn xuống</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      <SectionDivider pattern="lotus" />

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-warm-gray mb-6">
            Hành Trình Khám Phá
          </h2>
          <p className="text-xl text-warm-gray/70 max-w-3xl mx-auto leading-relaxed">
            Cùng tìm hiểu về ý nghĩa sâu sắc của quyền làm chủ, vai trò của bầu cử, 
            và cách mỗi công dân góp phần xây dựng một xã hội dân chủ, văn minh.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <InfoCard
            icon="🏛️"
            title="Quyền Làm Chủ"
            description="Khái niệm cơ bản về quyền làm chủ của nhân dân và ý nghĩa trong xã hội hiện đại"
            delay={0.2}
          />
          <InfoCard
            icon="🗳️"
            title="Bầu Cử"
            description="Vai trò của bầu cử trong việc thực hiện quyền dân chủ và lựa chọn người đại diện"
            delay={0.4}
          />
          <InfoCard
            icon="🤝"
            title="Thực Hành"
            description="Cách thức nhân dân tham gia và thực hiện quyền làm chủ trong đời sống hàng ngày"
            delay={0.6}
          />
        </div>
      </section>

      <SectionDivider pattern="wave" />

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-soft-red/10 via-gold/10 to-soft-red/10 rounded-3xl p-12 text-center border-2 border-gold/20 shadow-2xl"
        >
          <h3 className="text-3xl font-serif font-bold text-warm-gray mb-6">
            "Dân là gốc của nước"
          </h3>
          <p className="text-xl text-warm-gray/80 leading-relaxed mb-8">
            Mỗi công dân đều có vai trò quan trọng trong việc xây dựng và bảo vệ đất nước. 
            Hãy cùng nhau tìm hiểu và thực hiện quyền làm chủ một cách có ý thức và trách nhiệm.
          </p>
          <Link
            href="/quyen-lam-chu"
            className="inline-block px-10 py-4 bg-gradient-to-r from-soft-red to-gold text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Bắt Đầu Hành Trình
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
