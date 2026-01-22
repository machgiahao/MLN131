import PageTransition from '@/components/PageTransition';
import PresentationSection from '@/components/PresentationSection';
import KeyStatement from '@/components/KeyStatement';
import BulletList from '@/components/BulletList';
import VideoButton from '@/components/VideoButton';

export default function NoiDungChinhPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pattern-bg">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl  font-bold text-vn-red mb-12 text-center">
            Nội Dung Chính
          </h1>

          <PresentationSection title="Quy Trình Bầu Cử">
            <KeyStatement>
              Bầu cử là quá trình có tổ chức, được pháp luật quy định chặt chẽ,
              đảm bảo tính minh bạch, công bằng và dân chủ.
            </KeyStatement>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-2xl  font-bold text-vn-red mb-6">
                Các Bước Thực Hiện
              </h3>
              <BulletList items={[
                'Lập danh sách cử tri và công bố công khai',
                'Giới thiệu, tìm hiểu ứng cử viên',
                'Tổ chức bỏ phiếu tại các điểm bầu cử',
                'Kiểm phiếu công khai, minh bạch',
                'Công bố kết quả và giải quyết khiếu nại'
              ]} />
            </div>

            <div className="mt-8">
              <VideoButton videoUrl="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
            </div>
          </PresentationSection>

          <PresentationSection title="Ý Nghĩa Của Lá Phiếu Bầu Cử">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-vn-red/10 to-vn-bronze/10 p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">🗳️</div>
                <h4 className="font-bold text-vn-red mb-2">Quyền Lực</h4>
                <p className="text-vn-dark">Thể hiện quyền làm chủ của công dân</p>
              </div>

              <div className="bg-gradient-to-br from-vn-red/10 to-vn-bronze/10 p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">💭</div>
                <h4 className="font-bold text-vn-red mb-2">Tiếng Nói</h4>
                <p className="text-vn-dark">Ý kiến của nhân dân được lắng nghe</p>
              </div>

              <div className="bg-gradient-to-br from-vn-red/10 to-vn-bronze/10 p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">⚖️</div>
                <h4 className="font-bold text-vn-red mb-2">Trách Nhiệm</h4>
                <p className="text-vn-dark">Nghĩa vụ đối với đất nước</p>
              </div>
            </div>
          </PresentationSection>

          <PresentationSection title="Các Hình Thức Thực Hiện">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-vn-red mb-4">
                    🏛️ Dân Chủ Đại Diện
                  </h3>
                  <p className="text-lg text-vn-dark mb-3">
                    Nhân dân bầu đại biểu để thực hiện quyền lực thay mình
                  </p>
                  <BulletList items={[
                    'Bầu cử Quốc hội, Hội đồng nhân dân',
                    'Đại biểu đại diện ý chí nhân dân',
                    'Quyết định chính sách quan trọng'
                  ]} />
                </div>

                <div className="border-t pt-8">
                  <h3 className="text-xl font-bold text-vn-red mb-4">
                    ✋ Dân Chủ Trực Tiếp
                  </h3>
                  <p className="text-lg text-vn-dark mb-3">
                    Nhân dân trực tiếp tham gia quyết định các vấn đề quan trọng
                  </p>
                  <BulletList items={[
                    'Trưng cầu dân ý về các vấn đề quan trọng',
                    'Họp dân, hội nghị cử tri',
                    'Giám sát hoạt động cơ quan nhà nước'
                  ]} />
                </div>
              </div>
            </div>
          </PresentationSection>

          <div className="bg-gradient-to-r from-vn-red/5 to-vn-bronze/5 rounded-lg p-8 border-l-4 border-vn-bronze">
            <p className="text-xl text-vn-dark leading-relaxed italic">
              "Lá phiếu không chỉ là quyền – mà là trách nhiệm của mỗi công dân
              đối với vận mệnh đất nước."
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
