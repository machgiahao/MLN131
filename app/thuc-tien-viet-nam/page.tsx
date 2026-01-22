import PageTransition from '@/components/PageTransition';
import PresentationSection from '@/components/PresentationSection';
import KeyStatement from '@/components/KeyStatement';
import BulletList from '@/components/BulletList';
import QuoteBox from '@/components/QuoteBox';
import VideoButton from '@/components/VideoButton';

export default function ThucTienVietNamPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pattern-bg">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl  font-bold text-vn-red mb-12 text-center">
            Thực Tiễn Việt Nam
          </h1>

          <PresentationSection title="Hệ Thống Bầu Cử Việt Nam">
            <KeyStatement>
              Việt Nam thực hiện chế độ dân chủ xã hội chủ nghĩa,
              nhân dân trực tiếp bầu đại biểu Quốc hội và Hội đồng nhân dân các cấp.
            </KeyStatement>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-2xl  font-bold text-vn-red mb-6">
                Đối Tượng Bầu Cử
              </h3>

              <div className="space-y-6">
                <div className="border-l-4 border-vn-red pl-6">
                  <h4 className="text-xl font-bold text-vn-red mb-3">🏛️ Quốc Hội</h4>
                  <p className="text-lg text-vn-dark mb-3">
                    Cơ quan quyền lực nhà nước cao nhất, đại diện cho ý chí và nguyện vọng của nhân dân
                  </p>
                  <BulletList items={[
                    'Ban hành Hiến pháp, luật và nghị quyết',
                    'Quyết định chính sách cơ bản của đất nước',
                    'Giám sát tối cao hoạt động nhà nước'
                  ]} />
                </div>

                <div className="border-l-4 border-vn-bronze pl-6">
                  <h4 className="text-xl font-bold text-vn-red mb-3">🏘️ Hội Đồng Nhân Dân</h4>
                  <p className="text-lg text-vn-dark mb-3">
                    Cơ quan quyền lực nhà nước ở địa phương (tỉnh, huyện, xã)
                  </p>
                  <BulletList items={[
                    'Quyết định các vấn đề quan trọng ở địa phương',
                    'Giám sát Ủy ban nhân dân cùng cấp',
                    'Phản ánh nguyện vọng nhân dân'
                  ]} />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <VideoButton
                videoUrl="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                title="Xem video về bầu cử Quốc hội Việt Nam"
              />
            </div>
          </PresentationSection>

          <PresentationSection title="Đặc Điểm Bầu Cử Việt Nam">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h4 className="font-bold text-vn-red mb-4 text-lg">⏱️ Chu Kỳ</h4>
                <p className="text-vn-dark">5 năm một lần</p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h4 className="font-bold text-vn-red mb-4 text-lg">👥 Lãnh Đạo</h4>
                <p className="text-vn-dark">Đảng Cộng sản Việt Nam lãnh đạo</p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h4 className="font-bold text-vn-red mb-4 text-lg">🗳️ Phương Thức</h4>
                <p className="text-vn-dark">Bầu trực tiếp, bỏ phiếu kín</p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h4 className="font-bold text-vn-red mb-4 text-lg">📊 Nguyên Tắc</h4>
                <p className="text-vn-dark">Phổ thông, bình đẳng, trực tiếp, bí mật</p>
              </div>
            </div>
          </PresentationSection>

          <PresentationSection title="So Sánh Với Mô Hình Quốc Tế">
            <div className="bg-white rounded-lg shadow-sm p-8 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-vn-red">
                    <th className="text-left p-4 font-bold text-vn-red">Tiêu Chí</th>
                    <th className="text-left p-4 font-bold text-vn-red">Việt Nam</th>
                    <th className="text-left p-4 font-bold text-vn-red">Hoa Kỳ</th>
                  </tr>
                </thead>
                <tbody className="text-vn-dark">
                  <tr className="border-b">
                    <td className="p-4 font-medium">Hệ thống</td>
                    <td className="p-4">Một đảng lãnh đạo</td>
                    <td className="p-4">Đa đảng cạnh tranh</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Bầu lãnh đạo</td>
                    <td className="p-4">Trực tiếp bầu Quốc hội</td>
                    <td className="p-4">Gián tiếp qua Đại cử tri đoàn</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Kinh phí</td>
                    <td className="p-4">Ngân sách nhà nước</td>
                    <td className="p-4">Quyên góp từ tập đoàn, cá nhân</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Mục tiêu</td>
                    <td className="p-4">Ổn định, đoàn kết, phát triển</td>
                    <td className="p-4">Tự do cá nhân, cạnh tranh</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </PresentationSection>

          <QuoteBox
            text="Không có mô hình tốt nhất – chỉ có mô hình phù hợp nhất với đặc điểm lịch sử, văn hóa và hoàn cảnh của mỗi quốc gia"
          />

          <div className="bg-gradient-to-r from-vn-red/5 to-vn-bronze/5 rounded-lg p-8 border-l-4 border-vn-red">
            <h3 className="text-2xl  font-bold text-vn-red mb-4">
              Tại Sao Việt Nam Chọn Mô Hình Này?
            </h3>
            <BulletList items={[
              'Phù hợp với lịch sử đấu tranh giải phóng dân tộc',
              'Bảo đảm ổn định chính trị và phát triển kinh tế',
              'Hạn chế ảnh hưởng tiêu cực của tiền bạc trong chính trị',
              'Tập trung nguồn lực, thống nhất chủ trương lãnh đạo'
            ]} />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
