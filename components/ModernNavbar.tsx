'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const navItems = [
  { href: '/mo-dau', label: 'MỞ ĐẦU' },
  { href: '/bau-cu-viet-nam', label: 'BẦU CỬ VIỆT NAM' },
  { href: '/bau-cu-hoa-ky', label: 'BẦU CỬ HOA KỲ' },
  { href: '/so-sanh', label: 'SO SÁNH' },
  { href: '/ket-luan', label: 'KẾT LUẬN' },
];

export default function ModernNavbar() {
  const pathname = usePathname();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gold/20 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="hidden lg:block">
              <span className="font-serif font-bold text-2xl text-warm-gray block leading-tight">
                Quyền Làm Chủ Của Nhân Dân
              </span>
            </div>
            <span className="lg:hidden font-serif font-bold text-xl text-warm-gray">
              QLCND
            </span>
          </Link>
          
          {/* Navigation Items */}
          <div className="flex space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 rounded-xl text-sm font-bold transition-all group"
                >
                  <span className={`relative z-10 ${
                    isActive ? 'text-white' : 'text-warm-gray group-hover:text-red-600'
                  }`}>
                    {item.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-gradient-to-r from-red-600 to-yellow-600 rounded-xl shadow-lg"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {!isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 to-yellow-600/0 group-hover:from-red-100 group-hover:to-yellow-100 rounded-xl transition-all duration-300" />
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
