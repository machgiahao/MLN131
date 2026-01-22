'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function BauCuVietNamPage() {
  // State quản lý việc hiện video popup hoặc video inline
  const [isPlaying, setIsPlaying] = useState(false);

  // Dữ liệu cho các nguyên tắc
  const principles = [
    { title: 'Phổ thông', desc: 'Mọi công dân đủ 18 tuổi đều có quyền bầu cử.' },
    { title: 'Bình đẳng', desc: 'Mỗi cử tri một lá phiếu, giá trị ngang nhau.' },
    { title: 'Trực tiếp', desc: 'Cử tri tự mình bỏ phiếu, không nhờ người khác.' },
    { title: 'Bỏ phiếu kín', desc: 'Đảm bảo bí mật sự lựa chọn của cử tri.' }
  ];

  // Dữ liệu quy trình 6Đ
  const steps6D = [
    { id: 'Đ1', title: 'Đến khu vực bỏ phiếu', sub: '7h00 - 19h00' },
    { id: 'Đ2', title: 'Đọc danh sách', sub: 'Tìm hiểu tiểu sử ứng viên' },
    { id: 'Đ3', title: 'Đưa thẻ, nhận phiếu', sub: 'Nhận phiếu QH & HĐND' },
    { id: 'Đ4', title: 'Điền phiếu', sub: 'Gạch người không tín nhiệm' },
    { id: 'Đ5', title: 'Đích thân bỏ phiếu', sub: 'Tự tay bỏ vào hòm' },
    { id: 'Đ6', title: 'Đóng dấu', sub: 'Xác nhận đã bỏ phiếu' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-red-700 via-red-600 to-red-800 text-white overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              BẦU CỬ VIỆT NAM
              <span className="block text-2xl md:text-3xl font-medium text-yellow-300 mt-4 uppercase tracking-widest">
                Ngày hội của toàn dân
              </span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-red-100 font-light leading-relaxed">
              Thể hiện quyền làm chủ của nhân dân, lựa chọn người đại diện tham gia bộ máy nhà nước dưới sự lãnh đạo của Đảng Cộng sản Việt Nam.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 -mt-10 relative z-20">
        {/* --- 4 NGUYÊN TẮC (Cards) --- */}
        <div className="grid md:grid-cols-4 gap-4">
          {principles.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-yellow-500 text-center hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-red-700 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- CÔNG TÁC CHUẨN BỊ (Timeline) --- */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center text-slate-800 mb-12"
          >
            Công tác chuẩn bị <span className="text-red-600">Hiệp thương</span>
          </motion.h2>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {/* Step 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-red-600 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                1
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white shadow-md border border-slate-100">
                <h3 className="font-bold text-lg mb-1">Hiệp thương lần 1</h3>
                <p className="text-sm text-slate-600">Thống nhất cơ cấu, số lượng và thành phần đại biểu.</p>
              </div>
            </motion.div>

             {/* Step 2 */}
             <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-red-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                2
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white shadow-md border border-slate-100">
                <h3 className="font-bold text-lg mb-1">Hiệp thương lần 2</h3>
                <p className="text-sm text-slate-600">Lập danh sách sơ bộ & Lấy ý kiến cử tri nơi cư trú.</p>
              </div>
            </motion.div>

             {/* Step 3 */}
             <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-red-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                3
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white shadow-md border border-slate-100">
                <h3 className="font-bold text-lg mb-1">Hiệp thương lần 3</h3>
                <p className="text-sm text-slate-600">Chốt danh sách chính thức & Niêm yết danh sách cử tri.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- QUY TRÌNH 6Đ (VIDEO HIGHLIGHT) --- */}
      <section className="py-16 bg-red-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2">
              
              {/* Left: Video Area */}
              <div className="bg-slate-900 relative min-h-[400px] flex items-center justify-center group">
                {isPlaying ? (
                  <iframe
                    className="w-full h-full absolute inset-0"
                    src="https://drive.google.com/file/d/1Z3YMmtuvy61urVDVITGimmnf1FIkk_2Z/preview" // Thay link video 6Đ của bạn vào đây
                    frameBorder="0"
                    allowFullScreen
                  />
                ) : (
                  <div 
                    onClick={() => setIsPlaying(true)}
                    className="cursor-pointer text-center relative z-10 p-6"
                  >
                    <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-red-600/50">
                      <span className="text-white text-4xl ml-2">▶</span>
                    </div>
                    <h3 className="text-white text-2xl font-bold">Xem video Quy trình 6Đ</h3>
                  </div>
                )}
                
                {/* Overlay Image (Thumbnail giả lập) */}
                {!isPlaying && (
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-0 pointer-events-none"></div>
                )}
              </div>

              {/* Right: Checklist */}
              <div className="p-8 lg:p-10 flex flex-col justify-center bg-gradient-to-br from-white to-red-50">
                <h2 className="text-3xl font-bold text-red-700 mb-6 flex items-center gap-3">
                  Quy trình 6Đ
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {steps6D.map((step) => (
                    <div key={step.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-white hover:shadow-md transition-all">
                      <div className="font-bold text-red-600 bg-red-100 w-8 h-8 flex items-center justify-center rounded-full shrink-0">
                        {step.id}
                      </div>
                      <div>
                        <div className="font-bold text-slate-800 text-sm md:text-base">{step.title}</div>
                        <div className="text-xs text-slate-500">{step.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 text-sm text-yellow-800 italic rounded-r-lg">
                  "Mỗi lá phiếu là một viên gạch xây dựng chính quyền của dân, do dân, vì dân."
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* --- KẾT LUẬN --- */}
      <footer className="py-12 bg-slate-900 text-slate-300 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-white text-xl font-bold mb-4">Trách nhiệm công dân</h3>
          <p className="mb-6 leading-relaxed">
            Bầu cử đại biểu Quốc hội và Hội đồng nhân dân là quyền và nghĩa vụ thiêng liêng. 
            Việc thực hiện đúng quy trình 6Đ giúp đảm bảo cuộc bầu cử diễn ra dân chủ, đúng pháp luật.
          </p>
          <div className="inline-block px-6 py-2 border border-slate-600 rounded-full text-sm">
            © Giáo dục Công dân - Pháp luật Việt Nam
          </div>
        </div>
      </footer>

    </div>
  );
}