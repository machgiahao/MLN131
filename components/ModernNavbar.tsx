'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const navItems = [
  { href: '/', label: 'Trang Chủ' },
  { href: '/quyen-lam-chu', label: 'Quyền Làm Chủ' },
  { href: '/bau-cu', label: 'Bầu Cử' },
  { href: '/thuc-hanh', label: 'Thực Hành' },
  { href: '/so-sanh', label: 'So Sánh' },
  { href: '/ket-luan', label: 'Kết Luận' },
];

export default function ModernNavbar() {
  const pathname = usePathname();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gold/10 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-soft-red to-gold rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-lg">VN</span>
            </div>
            <span className="font-serif font-bold text-xl text-warm-gray hidden md:block">
              Quyền Làm Chủ
            </span>
          </Link>
          
          <div className="flex space-x-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all group"
                >
                  <span className={`relative z-10 ${
                    isActive ? 'text-white' : 'text-warm-gray group-hover:text-soft-red'
                  }`}>
                    {item.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-gradient-to-r from-soft-red to-gold rounded-lg shadow-md"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
