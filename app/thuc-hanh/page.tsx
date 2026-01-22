'use client';

import { motion } from 'framer-motion';
import InfoCard from '@/components/InfoCard';
import PhilosophicalQuote from '@/components/PhilosophicalQuote';
import CalloutBox from '@/components/CalloutBox';
import VideoPlayer from '@/components/VideoPlayer';

export default function ThucHanhPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl  font-bold text-warm-gray mb-6">
            Thực Hành Dân Chủ Tại Việt Nam
          </h1>
          <p className="text-2xl text-warm-gray/70 max-w-3xl mx-auto">
            Cách thức nhân dân tham gia và thực hiện quyền làm chủ
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <InfoCard
            icon="🏛️"
            title="Quốc Hội"
            description="Cơ quan quyền lực nhà nước cao nhất, đại biểu cho ý chí và nguyện vọng của nhân dân. Nhiệm kỳ 5 năm."
          />
          <InfoCard
            icon="🏘️"
            title="Hội Đồng Nhân Dân"
            description="Cơ quan quyền lực nhà nước ở địa phương (tỉnh, huyện, xã). Quyết định các vấn đề quan trọng ở địa phương."
          />
        </div>

        <CalloutBox type="highlight" title="6 Bước Thực Hiện Quyền Làm Chủ">
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              { num: 1, title: 'Dân Biết', desc: 'Thông tin minh bạch' },
              { num: 2, title: 'Dân Bàn', desc: 'Thảo luận, góp ý' },
              { num: 3, title: 'Dân Làm', desc: 'Trực tiếp thực hiện' },
              { num: 4, title: 'Dân Kiểm Tra', desc: 'Đánh giá hiệu quả' },
              { num: 5, title: 'Dân Giám Sát', desc: 'Giám sát quyền lực' },
              { num: 6, title: 'Dân Thụ Hưởng', desc: 'Hưởng thụ kết quả' }
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-soft-red to-gold text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  {step.num}
                </div>
                <h4 className="font-bold text-warm-gray mb-1">{step.title}</h4>
                <p className="text-sm text-warm-gray/70">{step.desc}</p>
              </div>
            ))}
          </div>
        </CalloutBox>

        <VideoPlayer
          videoUrl="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
          title="Xem video về bầu cử Quốc hội Việt Nam"
        />

        <PhilosophicalQuote
          quote="Nhà nước của dân – do dân – vì dân"
          author="Chủ tịch Hồ Chí Minh"
        />
      </div>
    </div>
  );
}
