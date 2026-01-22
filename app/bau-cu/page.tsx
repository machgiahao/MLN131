'use client';

import { motion } from 'framer-motion';
import Timeline from '@/components/Timeline';
import PhilosophicalQuote from '@/components/PhilosophicalQuote';
import VideoPlayer from '@/components/VideoPlayer';
import CalloutBox from '@/components/CalloutBox';
import SectionDivider from '@/components/SectionDivider';

export default function BauCuPage() {
  const electionProcess = [
    {
      title: 'Lập Danh Sách Cử Tri',
      description: 'Công dân đủ điều kiện được đăng ký vào danh sách cử tri, đảm bảo quyền bầu cử phổ thông'
    },
    {
      title: 'Giới Thiệu Ứng Cử Viên',
      description: 'Các ứng cử viên được giới thiệu, công bố tiểu sử và chương trình hành động'
    },
    {
      title: 'Ngày Bỏ Phiếu',
      description: 'Cử tri thực hiện quyền bầu cử tại các điểm bỏ phiếu, đảm bảo bí mật và tự do'
    },
    {
      title: 'Kiểm Phiếu',
      description: 'Hội đồng bầu cử tiến hành kiểm phiếu công khai, minh bạch'
    },
    {
      title: 'Công Bố Kết Quả',
      description: 'Kết quả bầu cử được công bố rộng rãi, các đại biểu trúng cử nhậm nhiệm vụ'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl  font-bold text-warm-gray mb-6">
            Bầu Cử & Lá Phiếu
          </h1>
          <p className="text-2xl text-warm-gray/70 max-w-3xl mx-auto">
            Công cụ quan trọng để thực hiện quyền làm chủ của nhân dân
          </p>
        </motion.div>

        <CalloutBox type="highlight" title="Bầu Cử Là Gì?">
          <p className="text-lg">
            <strong>Bầu cử</strong> là quá trình mà công dân sử dụng quyền bỏ phiếu để
            lựa chọn người đại diện cho mình trong các cơ quan quyền lực nhà nước.
            Đây là hình thức <strong>trực tiếp và cụ thể nhất</strong> để nhân dân thực hiện quyền làm chủ.
          </p>
        </CalloutBox>

        <SectionDivider pattern="dots" />

        <div className="mb-20">
          <h2 className="text-4xl  font-bold text-warm-gray text-center mb-16">
            Quy Trình Bầu Cử
          </h2>
          <Timeline events={electionProcess} />
        </div>

        <VideoPlayer
          videoUrl="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          title="Xem video về quy trình bầu cử"
        />

        <SectionDivider pattern="wave" />

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-soft-red/10 to-gold/10 rounded-2xl p-8 border border-gold/20">
            <h3 className="text-2xl  font-bold text-warm-gray mb-6">
              4 Nguyên Tắc Bầu Cử
            </h3>
            <ul className="space-y-4">
              {[
                { icon: '🌍', title: 'Phổ Thông', desc: 'Mọi công dân đủ điều kiện đều có quyền bầu cử' },
                { icon: '⚖️', title: 'Bình Đẳng', desc: 'Mỗi cử tri có một phiếu với giá trị ngang nhau' },
                { icon: '👤', title: 'Trực Tiếp', desc: 'Cử tri tự mình bầu người đại diện' },
                { icon: '🔒', title: 'Bí Mật', desc: 'Đảm bảo quyền tự do lựa chọn của cử tri' }
              ].map((principle, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <span className="text-3xl">{principle.icon}</span>
                  <div>
                    <h4 className="font-bold text-warm-gray">{principle.title}</h4>
                    <p className="text-warm-gray/70 text-sm">{principle.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gold/10 to-soft-red/10 rounded-2xl p-8 border border-soft-red/20">
            <h3 className="text-2xl  font-bold text-warm-gray mb-6">
              Ý Nghĩa Lá Phiếu
            </h3>
            <ul className="space-y-4">
              {[
                { icon: '🗳️', title: 'Quyền Lực', desc: 'Thể hiện quyền làm chủ của công dân' },
                { icon: '💭', title: 'Tiếng Nói', desc: 'Ý kiến của nhân dân được lắng nghe' },
                { icon: '⚖️', title: 'Trách Nhiệm', desc: 'Nghĩa vụ đối với đất nước' },
                { icon: '🌟', title: 'Tương Lai', desc: 'Quyết định vận mệnh của quốc gia' }
              ].map((meaning, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <span className="text-3xl">{meaning.icon}</span>
                  <div>
                    <h4 className="font-bold text-warm-gray">{meaning.title}</h4>
                    <p className="text-warm-gray/70 text-sm">{meaning.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <PhilosophicalQuote
          quote="Lá phiếu không chỉ là quyền – mà là trách nhiệm của mỗi công dân đối với vận mệnh đất nước"
        />
      </div>
    </div>
  );
}
