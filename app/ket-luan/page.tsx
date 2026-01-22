'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function KetLuanPage() {
  const [showVideo, setShowVideo] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen pt-36 pb-20 bg-emerald-50/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HERO SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-emerald-900 mb-6">
            KẾT LUẬN
          </h1>
          <div className="h-1.5 w-32 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-8 rounded-full" />
          <p className="text-2xl text-emerald-800/80 max-w-3xl mx-auto font-light leading-relaxed">
            "Nhà nước của dân, do dân, vì dân" – Từ khẩu hiệu chính trị đến hiện thực cuộc sống.
          </p>
        </motion.div>

        {/* --- PHẦN 1: 3 TRỤ CỘT QUYỀN LÀM CHỦ --- */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-emerald-500"
          >
            <h3 className="text-xl font-bold text-emerald-900 mb-3">Nhà nước Của Dân</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Khẳng định <b>nguồn gốc quyền lực</b>. Quyền lực không tự nhiên mà có, nó thuộc về nhân dân - chủ sở hữu tối cao của đất nước.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-teal-500"
          >
            <h3 className="text-xl font-bold text-teal-900 mb-3">Nhà nước Do Dân</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Khẳng định <b>phương thức vận hành</b>. Dân bầu ra đại diện, tham gia quản lý và đóng góp ý kiến xây dựng bộ máy.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-green-500"
          >
            <h3 className="text-xl font-bold text-green-900 mb-3">Nhà nước Vì Dân</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Khẳng định <b>mục tiêu hoạt động</b>. Mọi chính sách phải lấy lợi ích nhân dân làm thước đo. Cán bộ là "công bộc" của dân.
            </p>
          </motion.div>
        </div>

        {/* --- GRID LAYOUT: NỘI DUNG CHI TIẾT --- */}
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          
          {/* Left Column (Main Content) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Hình thức thực hiện */}
            <motion.section 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-md"
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <span className="text-emerald-500">❖</span> Hai hình thức thực hiện
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-5 rounded-xl">
                  <h4 className="font-bold text-emerald-700 mb-2">Dân chủ Trực tiếp</h4>
                  <ul className="text-sm text-slate-600 space-y-2 list-disc pl-4">
                    <li>Bầu cử, ứng cử, trưng cầu ý dân.</li>
                    <li>Họp thôn/tổ dân phố.</li>
                    <li><b>Ý nghĩa:</b> Dân tự quyết vấn đề sát sườn.</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-5 rounded-xl">
                  <h4 className="font-bold text-teal-700 mb-2">Dân chủ Đại diện</h4>
                  <ul className="text-sm text-slate-600 space-y-2 list-disc pl-4">
                    <li>Thông qua Quốc hội, HĐND.</li>
                    <li>Thông qua các tổ chức đoàn thể.</li>
                    <li><b>Ý nghĩa:</b> Ủy quyền cho người có năng lực.</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Cơ chế 6 bước (Dân biết...) */}
            <motion.section 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-3xl p-8 shadow-xl"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                Chìa khóa thực thi: Cơ chế 6 bước
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { step: 'Dân biết', desc: 'Công khai quy hoạch, ngân sách...' },
                  { step: 'Dân bàn', desc: 'Góp ý kiến trước khi ra quyết định' },
                  { step: 'Dân làm', desc: 'Trực tiếp tham gia, đóng góp công sức' },
                  { step: 'Dân kiểm tra', desc: 'Giám sát tiến độ, chống lãng phí' },
                  { step: 'Dân giám sát', desc: 'Theo dõi hoạt động bộ máy, cán bộ' },
                  { step: 'Dân thụ hưởng', desc: 'Hưởng thành quả phát triển thực tế' }
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
                    <div className="font-bold text-yellow-300 mb-1">{item.step}</div>
                    <div className="text-xs opacity-90">{item.desc}</div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Cơ sở pháp lý */}
            <motion.section 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-md border border-slate-100"
            >
               <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                 Bảo vệ bằng Pháp luật
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-1 bg-emerald-500 rounded-full shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-slate-800">Luật Thực hiện dân chủ ở cơ sở (2023)</h4>
                    <p className="text-sm text-slate-600">Quy định chi tiết những gì chính quyền phải công khai và dân được quyết.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 bg-emerald-500 rounded-full shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-slate-800">Quyền khiếu nại, tố cáo</h4>
                    <p className="text-sm text-slate-600">Công cụ để phản kháng hành vi sai trái, bảo vệ quyền lợi hợp pháp.</p>
                  </div>
                </div>
              </div>
            </motion.section>

          </div>

          {/* Right Column (Video & Navigation) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Video Widget */}
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 sticky top-24">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-2 h-6 bg-red-500 rounded-full"></span>
                Video Tổng kết
              </h3>
              
              <div className="aspect-video rounded-xl overflow-hidden bg-slate-900 mb-4 shadow-inner">
                {showVideo ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://drive.google.com/file/d/1j8U2d-tkKaMm3HbfB27QVx97BD_QezEy/preview"
                    title="Kết luận video"
                    frameBorder="0"
                    allowFullScreen
                  />
                ) : (
                  <div 
                    onClick={() => setShowVideo(true)}
                    className="w-full h-full bg-gradient-to-br from-emerald-600 to-teal-800 flex flex-col items-center justify-center cursor-pointer group"
                  >
                    <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all">
                      <span className="text-white text-2xl ml-1">▶</span>
                    </div>
                    <p className="text-white text-sm mt-2 font-medium">Xem video tổng kết</p>
                  </div>
                )}
              </div>
              <button 
                onClick={() => setShowVideo(!showVideo)}
                className="w-full py-3 bg-slate-100 text-slate-600 rounded-xl font-semibold hover:bg-slate-200 transition-colors text-sm"
              >
                {showVideo ? 'Đóng video' : 'Mở video'}
              </button>
            </div>

            {/* Navigation Links */}
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200">
               <h3 className="font-bold text-slate-800 mb-4">Xem lại các chương</h3>
               <div className="space-y-2">
                {[
                  { name: '1. Mở đầu', path: '/mo-dau' },
                  { name: '2. Bầu cử Việt Nam', path: '/bau-cu-viet-nam' },
                  { name: '3. Bầu cử Hoa Kỳ', path: '/bau-cu-hoa-ky' },
                  { name: '4. So sánh', path: '/so-sanh' },
                  { name: '5. Kết luận', path: '/ket-luan', active: true },
                ].map((link, i) => (
                  <button
                    key={i}
                    onClick={() => router.push(link.path)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      link.active 
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' 
                      : 'bg-white text-slate-600 hover:bg-white/80 border border-transparent'
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
               </div>
            </div>

          </div>
        </div>

        {/* --- BOTTOM CTA --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-emerald-900 text-emerald-50 rounded-3xl p-10 text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Thông điệp cuối cùng</h3>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto opacity-90 mb-8 font-light">
              "Quyền làm chủ chỉ thực sự mạnh mẽ khi người dân chủ động thực hiện nó. Đừng chỉ đi bầu cho xong, hãy tìm hiểu. Đừng im lặng, hãy sử dụng quyền giám sát."
            </p>
            <div className="flex justify-center gap-4">
               <button onClick={() => router.push('/mo-dau')} className="px-6 py-3 bg-emerald-500 text-white rounded-xl font-bold hover:bg-emerald-400 transition-colors shadow-lg hover:shadow-emerald-500/50">
                 Xem lại từ đầu
               </button>
               <button onClick={() => router.push('/')} className="px-6 py-3 bg-transparent border border-emerald-500/50 text-emerald-300 rounded-xl font-bold hover:bg-white/5 transition-colors">
                 Về trang chủ
               </button>
            </div>
          </div>
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500 rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>
        </motion.div>

      </div>
    </div>
  );
}