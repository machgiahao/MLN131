'use client';

import { motion } from 'framer-motion';
import CalloutBox from '@/components/CalloutBox';
import PhilosophicalQuote from '@/components/PhilosophicalQuote';

export default function SoSanhPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-warm-gray mb-6">
            Các Mô Hình Dân Chủ
          </h1>
          <p className="text-2xl text-warm-gray/70 max-w-3xl mx-auto">
            So sánh khái quát và trung lập giữa các hệ thống
          </p>
        </motion.div>

        <CalloutBox type="info">
          <p className="text-lg">
            Mỗi quốc gia có <strong>lịch sử, văn hóa và hoàn cảnh</strong> riêng, 
            dẫn đến các mô hình dân chủ khác nhau. Không có mô hình tốt nhất – 
            chỉ có mô hình <strong>phù hợp nhất</strong> với đặc điểm từng quốc gia.
          </p>
        </CalloutBox>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gold/20 shadow-lg my-12 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-soft-red">
                <th className="text-left p-4 font-serif font-bold text-warm-gray">Tiêu Chí</th>
                <th className="text-left p-4 font-serif font-bold text-warm-gray">Việt Nam</th>
                <th className="text-left p-4 font-serif font-bold text-warm-gray">Hoa Kỳ</th>
              </tr>
            </thead>
            <tbody className="text-warm-gray/80">
              <tr className="border-b">
                <td className="p-4 font-medium">Hệ thống</td>
                <td className="p-4">Một đảng lãnh đạo</td>
                <td className="p-4">Đa đảng cạnh tranh</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Bầu lãnh đạo</td>
                <td className="p-4">Trực tiếp bầu Quốc hội</td>
                <td className="p-4">Gián tiếp qua Đại cử tri đoàn</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Chu kỳ</td>
                <td className="p-4">5 năm</td>
                <td className="p-4">4 năm (TT), 2/6 năm (Nghị viện)</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Ưu tiên</td>
                <td className="p-4">Ổn định, phát triển, đoàn kết</td>
                <td className="p-4">Tự do cá nhân, cạnh tranh</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <CalloutBox type="insight" title="Đặc Điểm Việt Nam">
            <ul className="space-y-2">
              <li>• Phù hợp với lịch sử đấu tranh dân tộc</li>
              <li>• Ưu tiên ổn định chính trị và phát triển kinh tế</li>
              <li>• Hạn chế ảnh hưởng tiêu cực của tiền bạc</li>
              <li>• Tập trung nguồn lực, thống nhất chủ trương</li>
            </ul>
          </CalloutBox>

          <CalloutBox type="insight" title="Bài Học Chung">
            <ul className="space-y-2">
              <li>• Dân chủ cần phù hợp với bối cảnh</li>
              <li>• Không áp đặt mô hình từ nước khác</li>
              <li>• Liên tục học hỏi và hoàn thiện</li>
              <li>• Lắng nghe tiếng nói nhân dân</li>
            </ul>
          </CalloutBox>
        </div>

        <PhilosophicalQuote
          quote="Không có mô hình tốt nhất – chỉ có mô hình phù hợp nhất với đặc điểm lịch sử, văn hóa và hoàn cảnh của mỗi quốc gia"
        />
      </div>
    </div>
  );
}
