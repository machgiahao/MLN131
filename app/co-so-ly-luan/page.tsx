import PageTransition from '@/components/PageTransition';
import PresentationSection from '@/components/PresentationSection';
import KeyStatement from '@/components/KeyStatement';
import BulletList from '@/components/BulletList';
import QuoteBox from '@/components/QuoteBox';

export default function CoSoLyLuanPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pattern-bg">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl  font-bold text-vn-red mb-12 text-center">
            Cơ Sở Lý Luận
          </h1>

          <PresentationSection title="Quyền Làm Chủ Của Nhân Dân Là Gì?">
            <KeyStatement>
              Quyền làm chủ là quyền tối cao của nhân dân trong việc quyết định
              mọi vấn đề của đất nước, được thực hiện trực tiếp hoặc
              thông qua đại diện do nhân dân bầu ra.
            </KeyStatement>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-2xl  font-bold text-vn-red mb-6">
                Đặc Điểm Cơ Bản
              </h3>
              <BulletList items={[
                'Quyền lực nhà nước thuộc về nhân dân',
                'Nhân dân thực hiện quyền lực trực tiếp và qua đại diện',
                'Mọi quyết định quan trọng phải có sự tham gia của nhân dân',
                'Nhân dân có quyền giám sát và kiểm soát quyền lực'
              ]} />
            </div>
          </PresentationSection>

          <PresentationSection title="Bầu Cử - Công Cụ Thực Hiện Quyền Làm Chủ">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-2xl  font-bold text-vn-red mb-6">
                Vai Trò Của Bầu Cử
              </h3>
              <BulletList items={[
                'Lựa chọn người đại diện xứng đáng cho nhân dân',
                'Thể hiện ý chí và nguyện vọng của cử tri',
                'Tạo cơ sở hợp pháp cho quyền lực nhà nước',
                'Giám sát và đánh giá người được bầu'
              ]} />
            </div>
          </PresentationSection>

          <QuoteBox
            text="Tất cả quyền lực nhà nước thuộc về nhân dân mà nền tảng là liên minh giữa giai cấp công nhân với giai cấp nông dân và đội ngũ trí thức"
            author="Hiến pháp nước Cộng hòa xã hội chủ nghĩa Việt Nam 2013, Điều 2"
          />

          <div className="bg-gradient-to-r from-vn-red/5 to-vn-bronze/5 rounded-lg p-8 border-l-4 border-vn-red">
            <h3 className="text-2xl  font-bold text-vn-dark mb-4">
              Nguyên Tắc Bầu Cử Dân Chủ
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="flex items-start space-x-3">
                <span className="text-3xl">🌍</span>
                <div>
                  <h4 className="font-bold text-vn-red mb-1">Phổ thông</h4>
                  <p className="text-vn-dark">Mọi công dân đủ điều kiện đều có quyền bầu cử</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-3xl">⚖️</span>
                <div>
                  <h4 className="font-bold text-vn-red mb-1">Bình đẳng</h4>
                  <p className="text-vn-dark">Mỗi cử tri có giá trị phiếu bầu ngang nhau</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-3xl">👤</span>
                <div>
                  <h4 className="font-bold text-vn-red mb-1">Trực tiếp</h4>
                  <p className="text-vn-dark">Cử tri tự mình bầu người đại diện</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-3xl">🔒</span>
                <div>
                  <h4 className="font-bold text-vn-red mb-1">Bí mật</h4>
                  <p className="text-vn-dark">Đảm bảo quyền tự do lựa chọn của cử tri</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
