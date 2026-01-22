import ContentSection from './ContentSection';
import VideoSection from './VideoSection';

export default function Tab2VietnamElection() {
  return (
    <div>
      <ContentSection title="Hệ Thống Chính Trị Việt Nam">
        <p className="text-lg">
          Việt Nam là quốc gia <strong>xã hội chủ nghĩa</strong>, do <strong>Đảng Cộng sản Việt Nam</strong> lãnh đạo.
          Đây là chế độ một đảng lãnh đạo, trong đó Đảng đóng vai trò là lực lượng lãnh đạo Nhà nước và xã hội.
        </p>
      </ContentSection>

      <ContentSection title="Công Dân Bầu Cử Ai?">
        <div className="bg-deep-red/40 p-6 rounded-lg space-y-4">
          <div>
            <h4 className=" font-bold text-xl text-warm-yellow mb-2">
              🏛️ Quốc Hội (National Assembly)
            </h4>
            <p>
              Cơ quan quyền lực nhà nước cao nhất, đại diện cho ý chí và nguyện vọng của nhân dân.
              Nhiệm kỳ <strong>5 năm</strong>.
            </p>
            <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
              <li>Ban hành Hiến pháp, luật</li>
              <li>Quyết định chính sách quan trọng của đất nước</li>
              <li>Giám sát hoạt động của Chính phủ, Tòa án, Viện kiểm sát</li>
            </ul>
          </div>

          <div>
            <h4 className=" font-bold text-xl text-warm-yellow mb-2">
              🏘️ Hội Đồng Nhân Dân (People's Council)
            </h4>
            <p>
              Cơ quan quyền lực nhà nước ở địa phương (tỉnh, thành phố, quận, huyện, xã, phường).
              Nhiệm kỳ <strong>5 năm</strong>.
            </p>
            <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
              <li>Quyết định các vấn đề quan trọng ở địa phương</li>
              <li>Giám sát hoạt động của Ủy ban nhân dân cùng cấp</li>
              <li>Phản ánh nguyện vọng của nhân dân địa phương</li>
            </ul>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="Quy Trình Bầu Cử 6 Bước Ở Việt Nam">
        <div className="space-y-4">
          <div className="flex items-center space-x-4 bg-academic-red/30 p-4 rounded">
            <span className="text-3xl font-bold text-warm-yellow">1</span>
            <p className="text-lg"><strong>Đến khu vực bỏ phiếu</strong> – Xuất trình thẻ cử tri hoặc CMND/CCCD</p>
          </div>
          <div className="flex items-center space-x-4 bg-academic-red/30 p-4 rounded">
            <span className="text-3xl font-bold text-warm-yellow">2</span>
            <p className="text-lg"><strong>Đọc thông tin ứng cử viên</strong> – Tìm hiểu tiểu sử, chương trình hành động</p>
          </div>
          <div className="flex items-center space-x-4 bg-academic-red/30 p-4 rounded">
            <span className="text-3xl font-bold text-warm-yellow">3</span>
            <p className="text-lg"><strong>Xuất trình thẻ cử tri</strong> – Nhận phiếu bầu từ ban kiểm phiếu</p>
          </div>
          <div className="flex items-center space-x-4 bg-academic-red/30 p-4 rounded">
            <span className="text-3xl font-bold text-warm-yellow">4</span>
            <p className="text-lg"><strong>Điền phiếu đúng cách</strong> – Vào phòng kín, đánh dấu X vào ứng cử viên</p>
          </div>
          <div className="flex items-center space-x-4 bg-academic-red/30 p-4 rounded">
            <span className="text-3xl font-bold text-warm-yellow">5</span>
            <p className="text-lg"><strong>Bỏ phiếu vào hòm</strong> – Gấp lại và bỏ vào hòm phiếu</p>
          </div>
          <div className="flex items-center space-x-4 bg-academic-red/30 p-4 rounded">
            <span className="text-3xl font-bold text-warm-yellow">6</span>
            <p className="text-lg"><strong>Nhận xác nhận</strong> – Được đóng dấu xác nhận đã bỏ phiếu</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="Nguyên Tắc Bầu Cử Ở Việt Nam">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-deep-red/40 p-5 rounded-lg border-l-4 border-warm-yellow">
            <h4 className=" font-bold text-lg text-warm-yellow mb-2">
              🌍 Phổ Thông (Universal)
            </h4>
            <p>Mọi công dân từ đủ 18 tuổi trở lên đều có quyền bầu cử</p>
          </div>

          <div className="bg-deep-red/40 p-5 rounded-lg border-l-4 border-warm-yellow">
            <h4 className=" font-bold text-lg text-warm-yellow mb-2">
              ⚖️ Bình Đẳng (Equal)
            </h4>
            <p>Mỗi cử tri có một phiếu bầu, mọi phiếu có giá trị ngang nhau</p>
          </div>

          <div className="bg-deep-red/40 p-5 rounded-lg border-l-4 border-warm-yellow">
            <h4 className=" font-bold text-lg text-warm-yellow mb-2">
              👤 Trực Tiếp (Direct)
            </h4>
            <p>Cử tri trực tiếp bầu đại biểu, không thông qua trung gian</p>
          </div>

          <div className="bg-deep-red/40 p-5 rounded-lg border-l-4 border-warm-yellow">
            <h4 className=" font-bold text-lg text-warm-yellow mb-2">
              🔒 Bỏ Phiếu Kín (Secret Ballot)
            </h4>
            <p>Việc bỏ phiếu được thực hiện trong phòng kín, đảm bảo bí mật</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="Chu Kỳ Bầu Cử">
        <div className="bg-academic-red/30 p-6 rounded-lg">
          <p className="text-lg">
            📅 Bầu cử Quốc hội và Hội đồng nhân dân các cấp diễn ra <strong>5 năm một lần</strong>.
            Đây là dịp để nhân dân thực hiện quyền làm chủ, lựa chọn người đại diện xứng đáng.
          </p>
        </div>
      </ContentSection>

      <VideoSection
        title="Xem video về bầu cử Quốc hội Việt Nam"
        duration="1-2 phút"
        videoUrl="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
      />
    </div>
  );
}
