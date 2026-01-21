'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/gioi-thieu', label: 'Giới Thiệu' },
  { href: '/co-so-ly-luan', label: 'Cơ Sở Lý Luận' },
  { href: '/noi-dung-chinh', label: 'Nội Dung Chính' },
  { href: '/thuc-tien-viet-nam', label: 'Thực Tiễn Việt Nam' },
  { href: '/ket-luan', label: 'Kết Luận' },
];

export default function PresentationNavbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-vn-bronze/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-lg font-serif font-bold text-vn-red">
              Quyền Làm Chủ Của Nhân Dân
            </h1>
          </div>
          
          <div className="flex space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    px-4 py-2 rounded-md text-sm font-medium transition-all
                    ${isActive 
                      ? 'bg-vn-red text-white shadow-md' 
                      : 'text-vn-dark hover:bg-vn-bronze/10 hover:text-vn-red'
                    }
                  `}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
