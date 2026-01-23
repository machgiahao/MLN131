'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function IntroPageImpressive() {
  const router = useRouter();
  const [canEnter, setCanEnter] = useState(false);

  useEffect(() => {
    // Cho phép nút bấm hoạt động sau 1 giây khi hiệu ứng chữ chạy xong
    const timer = setTimeout(() => setCanEnter(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    // Hiệu ứng exit: scale toàn màn hình lên trước khi chuyển trang
    document.getElementById('main-container')?.classList.add('scale-[1.5]', 'opacity-0');
    setTimeout(() => {
      router.push('/mo-dau');
    }, 800);
  };

  // Variant cho hiệu ứng chữ xuất hiện từng dòng
  const textVariants = {
    hidden: { y: 50, opacity: 0, skewY: 5 },
    visible: { 
      y: 0, 
      opacity: 1, 
      skewY: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } // Easing mượt mà kiểu Apple
    }
  };

  return (
    <div id="main-container" className="relative w-full h-screen overflow-hidden bg-slate-900 transition-all duration-800 ease-in-out">
      
      {/* 1. DYNAMIC BACKGROUND (Nền động rực rỡ) */}
      <div className="absolute inset-0 z-0">
        {/* Lớp Gradient chuyển màu chậm */}
        <motion.div 
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-br from-yellow-500 via-red-600 to-purple-900 bg-[length:400%_400%]"
        />
        
         {/* Họa tiết Trống Đồng Quay Chậm & Sáng */}
         <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
                animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                transition={{ 
                  rotate: { duration: 60, repeat: Infinity, ease: "linear" },
                  scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
                }}
                className="w-[110vh] h-[110vh] opacity-40 mix-blend-overlay blur-sm"
                style={{
                    backgroundImage: 'url(/background-trong-dong-png_095238288.png)', // Đảm bảo file ảnh có trong thư mục public
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    filter: 'brightness(2.5) contrast(1.2)', // Làm cho họa tiết rực sáng lên
                }}
            />
         </div>
         {/* Lớp phủ làm tối nhẹ các góc để tập trung vào trung tâm */}
         <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/40"></div>
      </div>


      {/* 2. MAIN CONTENT (Nội dung chính) */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
          className="relative text-center w-full px-4 md:px-0" // Thêm padding ngang
        >
            {/* --- TYPOGRAPHY HIỆU ỨNG CAO CẤP --- */}
            {/* Sử dụng mix-blend-difference để chữ tương phản mạnh với nền động */}
            <div className="relative mix-blend-difference text-white select-none pointer-events-none flex flex-col items-center"> 
                <motion.h3 variants={textVariants} className="text-lg md:text-2xl lg:text-3xl tracking-[0.5em] md:tracking-[0.8em] font-light mb-2 md:mb-4 uppercase text-yellow-200 text-center">
                    Cộng Hòa Xã Hội Chủ Nghĩa Việt Nam
                </motion.h3>
                
                {/* Thay đổi ở đây: Dùng text-[15vw] để chữ tự co giãn theo chiều ngang */}
                <motion.h1 
                    variants={textVariants} 
                    className="text-[15vw] md:text-[12rem] font-black leading-[1.2] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-yellow-200 to-white/50 drop-shadow-2xl text-center w-full"
                >
                    BẦU CỬ
                </motion.h1>
                
                {/* Dòng kẻ ngang chạy ra */}
                <motion.div 
                  initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.8, duration: 1, ease: "circOut" }}
                  className="h-1 w-3/4 max-w-2xl mx-auto bg-gradient-to-r from-transparent via-yellow-400 to-transparent mt-4 md:mt-6 mb-4 md:mb-8"
                ></motion.div>
                
                <motion.h2 variants={textVariants} className="text-xl md:text-4xl lg:text-6xl font-bold tracking-widest uppercase text-white/90 text-center">
                    Quyền Làm Chủ Nhân Dân
                </motion.h2>
            </div>
            {/* ----------------------------------- */}

            {/* Nút bấm hiện đại */}
            <motion.div 
                className="mt-12 md:mt-20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: canEnter ? 1 : 0, y: canEnter ? 0 : 30 }}
                transition={{ duration: 0.5 }}
            >
                <button
                    onClick={handleEnter}
                    disabled={!canEnter}
                    className="group relative px-8 md:px-12 py-4 md:py-6 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-lg md:text-xl rounded-full overflow-hidden transition-all hover:bg-white/20 hover:scale-105 hover:shadow-[0_0_50px_rgba(255,215,0,0.4)] active:scale-95"
                >
                    <span className="relative z-10 flex items-center gap-3 tracking-wider">
                        BẮT ĐẦU HÀNH TRÌNH
                        <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
                    </span>
                    {/* Hiệu ứng ánh sáng quét qua nút */}
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
                </button>
            </motion.div>
        </motion.div>
      </div>
      
    </div>
  );
}