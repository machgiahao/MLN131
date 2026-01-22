'use client';

import { motion } from 'framer-motion';
import PhilosophicalQuote from '@/components/PhilosophicalQuote';
import InfoCard from '@/components/InfoCard';
import CalloutBox from '@/components/CalloutBox';
import SectionDivider from '@/components/SectionDivider';

export default function QuyenLamChuPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl  font-bold text-warm-gray mb-6">
            Quyền Làm Chủ Là Gì?
          </h1>
          <p className="text-2xl text-warm-gray/70 max-w-3xl mx-auto">
            Tìm hiểu về khái niệm cơ bản và ý nghĩa sâu sắc của quyền làm chủ của nhân dân
          </p>
        </motion.div>

        {/* Key Concept */}
        <CalloutBox type="highlight" title="Khái Niệm Cốt Lõi">
          <p className="text-lg mb-4">
            <strong>Quyền làm chủ của nhân dân</strong> là quyền tối cao của nhân dân
            trong việc quyết định mọi vấn đề của đất nước, thể hiện qua hai hình thức:
          </p>
          <ul className="space-y-2 ml-6">
            <li className="flex items-start">
              <span className="text-soft-red mr-2">•</span>
              <span><strong>Trực tiếp:</strong> Nhân dân tự mình quyết định các vấn đề quan trọng</span>
            </li>
            <li className="flex items-start">
              <span className="text-soft-red mr-2">•</span>
              <span><strong>Gián tiếp:</strong> Thông qua đại diện do nhân dân bầu ra</span>
            </li>
          </ul>
        </CalloutBox>

        <SectionDivider pattern="dots" />

        {/* Core Principles */}
        <div className="mb-20">
          <h2 className="text-4xl  font-bold text-warm-gray text-center mb-12">
            Ba Nguyên Tắc Căn Bản
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <InfoCard
              icon="🌟"
              title="Của Dân"
              description="Quyền lực nhà nước thuộc về nhân dân, không thuộc về bất kỳ cá nhân hay nhóm người nào"
            />
            <InfoCard
              icon="⚖️"
              title="Do Dân"
              description="Nhân dân trực tiếp hoặc thông qua đại diện thực hiện quyền lực nhà nước"
            />
            <InfoCard
              icon="❤️"
              title="Vì Dân"
              description="Mọi hoạt động của nhà nước đều hướng đến lợi ích và hạnh phúc của nhân dân"
            />
          </div>
        </div>

        <PhilosophicalQuote
          quote="Quyền lực nhà nước là thống nhất, có sự phân công, phối hợp, kiểm soát giữa các cơ quan nhà nước trong việc thực hiện các quyền lập pháp, hành pháp, tư pháp"
          author="Hiến pháp Việt Nam 2013"
          context="Điều 2"
        />

        {/* Modern Significance */}
        <div className="mb-20">
          <h2 className="text-4xl  font-bold text-warm-gray text-center mb-12">
            Ý Nghĩa Trong Thời Đại Hiện Đại
          </h2>

          <div className="space-y-6">
            <CalloutBox type="insight">
              <h4 className="font-bold text-lg mb-2">🌍 Toàn Cầu Hóa</h4>
              <p>
                Trong bối cảnh toàn cầu hóa, quyền làm chủ của nhân dân giúp bảo vệ
                chủ quyền quốc gia và quyền lợi dân tộc.
              </p>
            </CalloutBox>

            <CalloutBox type="insight">
              <h4 className="font-bold text-lg mb-2">💻 Công Nghệ Số</h4>
              <p>
                Công nghệ thông tin tạo cơ hội mới cho nhân dân tham gia vào các quyết định
                công, tăng cường tính minh bạch và trách nhiệm giải trình.
              </p>
            </CalloutBox>

            <CalloutBox type="insight">
              <h4 className="font-bold text-lg mb-2">🤝 Xã Hội Dân Sự</h4>
              <p>
                Vai trò của xã hội dân sự ngày càng quan trọng trong việc giám sát,
                phản biện và đóng góp ý kiến xây dựng chính sách.
              </p>
            </CalloutBox>
          </div>
        </div>

        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-10 border border-gold/20 shadow-lg">
          <h3 className="text-2xl  font-bold text-warm-gray mb-6 text-center">
            Điểm Cần Ghi Nhớ
          </h3>
          <div className="prose prose-lg max-w-none text-warm-gray/80">
            <p className="leading-relaxed">
              Quyền làm chủ không chỉ là một khái niệm lý thuyết mà là <strong>quyền và trách nhiệm thiết thực</strong> của
              mỗi công dân. Mỗi người dân đều có vai trò quan trọng trong việc xây dựng và phát triển đất nước.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
