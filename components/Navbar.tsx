'use client';

interface NavbarProps {
  activeTab: number;
  onTabChange: (tab: number) => void;
}

const tabs = [
  { id: 0, label: 'GIỚI THIỆU' },
  { id: 1, label: 'QUY TRÌNH & LÁ PHIẾU' },
  { id: 2, label: 'BẦU CỬ Ở VIỆT NAM' },
  { id: 3, label: 'BẦU CỬ Ở HOA KỲ' },
  { id: 4, label: 'SO SÁNH MỸ & VIỆT NAM' },
  { id: 5, label: 'QUYỀN LÀM CHỦ' },
];

export default function Navbar({ activeTab, onTabChange }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-deep-red border-b-2 border-warm-yellow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-warm-yellow font-serif text-xl font-bold">
              Quyền Làm Chủ Của Nhân Dân
            </h1>
          </div>
        </div>
        <div className="flex overflow-x-auto scrollbar-hide pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`
                px-6 py-3 mx-1 font-serif text-sm whitespace-nowrap transition-all duration-300
                ${
                  activeTab === tab.id
                    ? 'bg-academic-red text-white border-b-4 border-warm-yellow font-bold'
                    : 'text-warm-yellow hover:bg-academic-red/50'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
