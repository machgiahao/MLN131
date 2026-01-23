'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function SoSanhPage() {
  // State điều khiển việc hiển thị video
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="min-h-screen pt-36 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* --- HERO SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
            BÀN CÂN CHÍNH TRỊ
          </h1>
          <div className="h-1.5 w-40 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mb-8 rounded-full" />
          <p className="text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
            Tại sao cùng hướng tới phát triển, nhưng Việt Nam <span className="font-bold text-red-600">không áp dụng</span> mô hình "Tam quyền phân lập" của Mỹ?
          </p>
        </motion.div>

        {/* --- PHẦN 1: CẤU TRÚC CỐT LÕI (PHILOSOPHY) --- */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* USA Card */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-xl border-t-8 border-blue-600 relative overflow-hidden group"
          >
            <div className="absolute top-4 right-4 text-6xl opacity-10 font-black text-blue-900 select-none">USA</div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">🇺🇸</span>
              <h2 className="text-3xl font-bold text-blue-800">Tam quyền phân lập</h2>
            </div>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Lập pháp, Hành pháp và Tư pháp <b>tách biệt hoàn toàn</b> để kiềm chế, đối trọng lẫn nhau.
            </p>
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
              <span className="font-bold text-blue-700 block mb-1">Nguồn gốc:</span>
              <span className="text-sm text-slate-600">Hình thành từ nỗi sợ sự độc tài của nhà Vua, ưu tiên chia nhỏ quyền lực.</span>
            </div>
          </motion.div>

          {/* Vietnam Card */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-xl border-t-8 border-red-600 relative overflow-hidden group"
          >
            <div className="absolute top-4 right-4 text-6xl opacity-10 font-black text-red-900 select-none">VN</div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">🇻🇳</span>
              <h2 className="text-3xl font-bold text-red-800">Quyền lực thống nhất</h2>
            </div>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Quyền lực không bị chia cắt mà có sự <b>phân công, phối hợp</b> dưới sự lãnh đạo của một Đảng duy nhất.
            </p>
            <div className="bg-red-50 p-4 rounded-xl border border-red-100">
              <span className="font-bold text-red-700 block mb-1">Nguồn gốc:</span>
              <span className="text-sm text-slate-600">Lịch sử chống giặc ngoại xâm dạy rằng: Chia rẽ là mất nước. Đoàn kết là sức mạnh.</span>
            </div>
          </motion.div>
        </div>

        {/* --- PHẦN 2: 3 ĐIỂM KHÁC BIỆT VẬN HÀNH --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-slate-800">3 Khác Biệt Vận Hành Cốt Lõi</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Chọn người đứng đầu',
                us: 'Đại cử tri đoàn phức tạp. Đôi khi phiếu phổ thông cao hơn vẫn thua.',
                vn: 'Do Quốc hội - cơ quan đại diện cao nhất của dân bầu ra.'
              },
              {
                title: 'Cách thức tranh cử',
                us: 'Tranh luận đối kháng gay gắt trên truyền thông (Media Debate).',
                vn: 'Thuyết phục qua "Chương trình hành động" tại hội nghị tiếp xúc cử tri.'
              },
              {
                title: 'Vai trò Tiền tệ',
                highlight: true,
                us: 'Tốn hàng tỷ USD. Phụ thuộc nhà tài trợ (Dân chủ tư sản).',
                vn: 'Ngân sách Nhà nước đảm bảo. Tránh đồng tiền chi phối lá phiếu.'
              }
            ].map((item, i) => (
              <div key={i} className={`bg-white rounded-2xl p-6 shadow-lg border-2 ${item.highlight ? 'border-yellow-400 transform scale-105 z-10' : 'border-transparent'}`}>
                <h3 className="text-xl font-bold text-center mb-6 text-slate-800">{item.title}</h3>

                <div className="space-y-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="text-xs font-bold text-blue-600 mb-1">🇺🇸 HOA KỲ</div>
                    <p className="text-sm text-slate-700">{item.us}</p>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="text-xs font-bold text-red-600 mb-1">🇻🇳 VIỆT NAM</div>
                    <p className="text-sm text-slate-700">{item.vn}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* --- PHẦN BỔ SUNG: VIDEO SECTION (ĐÃ THÊM LẠI) --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-20 max-w-4xl mx-auto"
        >
          <div className="bg-slate-800 rounded-3xl p-2 shadow-2xl ring-4 ring-slate-200">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">
              {showVideo ? (
                <iframe
                  width="100%"
                  height="100%"
                  src="https://drive.google.com/file/d/1JZX74AXhbxtOqJBPmzGjMvoz4ENPfUvC/preview"
                  title="So sánh bầu cử"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              ) : (
                <div
                  onClick={() => setShowVideo(true)}
                  className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer group bg-gradient-to-br from-slate-800 to-slate-900 hover:from-blue-900 hover:to-slate-900 transition-all"
                >
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-red-500/50">
                    <span className="text-white text-4xl ml-2">▶</span>
                  </div>
                  <h3 className="text-white text-2xl font-bold">Xem Video Phân Tích</h3>
                  <p className="text-slate-400 mt-2">So sánh chi tiết & Trực quan</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* --- PHẦN 3: THỰC TẾ & HỆ QUẢ (REALITY CHECK) --- */}
        <div className="grid md:grid-cols-12 gap-10 mb-20 items-center">
          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-3xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Thực tế chứng minh</h3>

              <div className="mb-6 border-b border-white/10 pb-6">
                <h4 className="font-bold text-lg mb-2">Mô hình Mỹ: Cạnh tranh & Phân cực</h4>
                <p className="text-sm text-slate-300 mb-2">
                  Chính phủ đóng cửa 35 ngày (2019) vì bất đồng ngân sách. Chính sách thường xuyên bị đảo ngược ("Sáng nắng chiều mưa").
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">Mô hình Việt Nam: Thống nhất & Ổn định</h4>
                <p className="text-sm text-slate-300">
                  Huy động nguồn lực thần tốc trong đại dịch COVID-19. Duy trì ổn định chiến lược để tập trung phát triển kinh tế dài hạn.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Không Tam quyền phân lập,<br />
              <span className="text-red-600">Kiểm soát quyền lực thế nào?</span>
            </h3>
            <p className="text-lg text-slate-600 mb-6">
              Việt Nam sử dụng cơ chế <b>"Nhốt quyền lực trong lồng cơ chế"</b> với 3 lớp kiểm soát chặt chẽ:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center font-bold text-red-600 mt-1">1</div>
                <div>
                  <h4 className="font-bold text-slate-800">Kiểm soát trong Đảng (Không vùng cấm)</h4>
                  <p className="text-slate-600 text-sm">Vụ án Việt Á: Xử lý hình sự hàng loạt lãnh đạo cao cấp, kể cả Bộ trưởng, khẳng định sự quyết liệt.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center font-bold text-red-600 mt-1">2</div>
                <div>
                  <h4 className="font-bold text-slate-800">Kiểm soát từ Quốc hội</h4>
                  <p className="text-slate-600 text-sm">Lấy phiếu tín nhiệm định kỳ và chất vấn trực tiếp các "Tư lệnh ngành".</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center font-bold text-red-600 mt-1">3</div>
                <div>
                  <h4 className="font-bold text-slate-800">Kiểm soát từ Nhân dân (Dân chủ thực chất)</h4>
                  <p className="text-slate-600 text-sm">Người dân và báo chí phản biện buộc chính quyền điều chỉnh chính sách (Ví dụ: Vụ cây xanh Hà Nội, Luật Đất đai).</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- BOTTOM CONCLUSION --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-100 rounded-3xl p-10 text-center border border-slate-200"
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Kết luận chương</h3>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto italic">
            "Không có mô hình tốt nhất cho mọi quốc gia, chỉ có mô hình <span className="font-bold text-slate-900">phù hợp nhất</span> với lịch sử và lòng dân. Việt Nam chọn ổn định và đoàn kết để phát triển, thay vì sự kiểm soát đối trọng nhưng phân cực."
          </p>
        </motion.div>

      </div>
    </div>
  );
}