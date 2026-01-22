import PageTransition from '@/components/PageTransition';
import KeyStatement from '@/components/KeyStatement';
import BulletList from '@/components/BulletList';

export default function GioiThieuPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pattern-bg">
        <div className="max-w-5xl mx-auto px-6 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl  font-bold text-vn-red mb-6 leading-tight">
              Quyền Làm Chủ Của Nhân Dân <br />
              Thông Qua Bầu Cử
            </h1>
            <p className="text-xl text-vn-gray max-w-3xl mx-auto">
              Nghiên cứu về vai trò và ý nghĩa của bầu cử trong việc thực hiện quyền làm chủ của nhân dân
            </p>
          </div>

          {/* Key Statement */}
          <KeyStatement>
            Bầu cử là công cụ quan trọng để nhân dân thực hiện quyền làm chủ,
            quyết định vận mệnh đất nước và lựa chọn người đại diện xứng đáng.
          </KeyStatement>

          {/* Main Content */}
          <div className="bg-white rounded-lg shadow-sm p-10 mb-12">
            <h2 className="text-3xl  font-bold text-vn-red mb-8">
              Mục Tiêu Bài Trình Bày
            </h2>

            <BulletList items={[
              'Hiểu rõ bản chất và ý nghĩa của quyền làm chủ của nhân dân',
              'Phân tích vai trò của bầu cử trong hệ thống dân chủ',
              'So sánh mô hình bầu cử giữa Việt Nam và các quốc gia khác',
              'Đánh giá thực tiễn bầu cử tại Việt Nam'
            ]} />
          </div>

          {/* Structure Overview */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-vn-red/5 to-vn-bronze/5 p-8 rounded-lg border border-vn-bronze/20">
              <h3 className="text-xl  font-bold text-vn-red mb-4">
                Cơ Sở Lý Luận
              </h3>
              <p className="text-vn-dark leading-relaxed">
                Khái niệm, nguyên tắc cơ bản về quyền làm chủ và bầu cử dân chủ
              </p>
            </div>

            <div className="bg-gradient-to-br from-vn-red/5 to-vn-bronze/5 p-8 rounded-lg border border-vn-bronze/20">
              <h3 className="text-xl  font-bold text-vn-red mb-4">
                Nội Dung Chính
              </h3>
              <p className="text-vn-dark leading-relaxed">
                Hệ thống bầu cử, quy trình và các hình thức thực hiện quyền bầu cử
              </p>
            </div>

            <div className="bg-gradient-to-br from-vn-red/5 to-vn-bronze/5 p-8 rounded-lg border border-vn-bronze/20">
              <h3 className="text-xl  font-bold text-vn-red mb-4">
                Thực Tiễn Việt Nam
              </h3>
              <p className="text-vn-dark leading-relaxed">
                Mô hình bầu cử Việt Nam và so sánh với quốc tế
              </p>
            </div>

            <div className="bg-gradient-to-br from-vn-red/5 to-vn-bronze/5 p-8 rounded-lg border border-vn-bronze/20">
              <h3 className="text-xl  font-bold text-vn-red mb-4">
                Kết Luận
              </h3>
              <p className="text-vn-dark leading-relaxed">
                Đánh giá và định hướng hoàn thiện quyền làm chủ của nhân dân
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
