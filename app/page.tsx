'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function IntroPage() {
  const router = useRouter();
  const [canEnter, setCanEnter] = useState(false);

  useEffect(() => {
    // Enable enter button after 2 seconds
    const timer = setTimeout(() => setCanEnter(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    router.push('/mo-dau');
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/background-trong-dong-png_095238288.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-7xl md:text-9xl font-serif font-bold mb-6 text-white leading-tight">
            QUYỀN LÀM CHỦ
          </h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="h-2 w-64 md:w-96 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent mb-8"
          />
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-gold mb-12">
            CỦA NHÂN DÂN
          </h2>
        </motion.div>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-2xl md:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed font-serif italic mb-16"
        >
          "Dân là gốc của nước, gốc vững thì nước bền"
          <br />
          <span className="text-xl text-gold/80">— Tục ngữ Việt Nam —</span>
        </motion.p>

        {/* Enter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: canEnter ? 1 : 0.3, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.button
            onClick={handleEnter}
            disabled={!canEnter}
            whileHover={canEnter ? { scale: 1.1, boxShadow: '0 25px 50px -12px rgba(212, 175, 55, 0.5)' } : {}}
            whileTap={canEnter ? { scale: 0.95 } : {}}
            className={`px-12 py-6 bg-gradient-to-r from-red-600 to-yellow-600 text-white text-xl font-bold rounded-2xl shadow-2xl transition-all duration-300 ${
              canEnter ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
            }`}
          >
            VÀO TRANG WEB
          </motion.button>
        </motion.div>

        {/* Scroll hint (alternative way to enter) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: canEnter ? 1 : 0 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center text-white/60 cursor-pointer"
            onClick={handleEnter}
          >
            <span className="text-sm mb-2 font-semibold">Hoặc lướt xuống</span>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Stats Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-2xl flex justify-center gap-4"
        >
          <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-gold">5</div>
            <div className="text-xs text-white/70">Phần chính</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-gold">2</div>
            <div className="text-xs text-white/70">Hệ thống</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-gold">VN - US</div>
            <div className="text-xs text-white/70">So sánh</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
