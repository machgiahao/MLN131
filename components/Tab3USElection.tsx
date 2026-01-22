import ContentSection from './ContentSection';
import VideoSection from './VideoSection';

export default function Tab3USElection() {
  return (
    <div>
      <ContentSection title="Hệ Thống Chính Trị Hoa Kỳ">
        <p className="text-lg">
          Hoa Kỳ là quốc gia <strong>dân chủ đại diện</strong> với <strong>hệ thống đa đảng</strong>.
          Hai đảng chính trị lớn nhất là <strong>Đảng Dân chủ (Democratic Party)</strong> và{' '}
          <strong>Đảng Cộng hòa (Republican Party)</strong>.
        </p>
      </ContentSection>

      <ContentSection title="Đại Cử Tri Đoàn (Electoral College)">
        <p className="text-lg mb-4">
          Tổng thống Hoa Kỳ <strong>không được bầu trực tiếp</strong> bởi nhân dân,
          mà thông qua cơ chế <strong>Đại cử tri đoàn</strong>.
        </p>

        <div className="bg-deep-red/40 p-6 rounded-lg space-y-4">
          <div>
            <h4 className=" font-bold text-xl text-warm-yellow mb-3">
              🗳️ Cách Thức Hoạt Động
            </h4>
            <ol className="list-decimal list-inside space-y-3 ml-4">
              <li>
                <strong>Bầu cử phổ thông:</strong> Công dân bỏ phiếu cho ứng cử viên tổng thống
                (thực chất là bầu cho đại cử tri của ứng cử viên đó)
              </li>
              <li>
                <strong>Đại cử tri:</strong> Mỗi bang có một số đại cử tri nhất định,
                tổng cộng <strong>538 đại cử tri</strong> trên toàn quốc
              </li>
              <li>
                <strong>Nguyên tắc "Winner-takes-all":</strong> Ở hầu hết các bang,
                ứng cử viên thắng phiếu phổ thông sẽ nhận <strong>toàn bộ</strong> số đại cử tri của bang đó
              </li>
              <li>
                <strong>Đạt 270 phiếu đại cử tri:</strong> Ứng cử viên cần ít nhất
                <strong> 270/538 phiếu</strong> đại cử tri để trở thành Tổng thống
              </li>
            </ol>
          </div>

          <div className="bg-academic-red/30 p-4 rounded">
            <p className="text-lg">
              📊 <strong>Ví dụ:</strong> Bang California có <strong>54 đại cử tri</strong>.
              Nếu ứng cử viên A thắng 51% phiếu phổ thông ở California,
              người đó sẽ nhận <strong>cả 54 phiếu đại cử tri</strong>,
              trong khi ứng cử viên B (49%) không nhận được phiếu nào.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="Bầu Cử Gián Tiếp">
        <p className="text-lg">
          Điều đặc biệt là Tổng thống Hoa Kỳ được bầu <strong>gián tiếp</strong>.
          Điều này có nghĩa:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg mt-3 ml-4">
          <li>Nhân dân không trực tiếp bầu Tổng thống</li>
          <li>Nhân dân bầu các đại cử tri</li>
          <li>Đại cử tri mới là người bầu Tổng thống</li>
        </ul>
      </ContentSection>

      <ContentSection title="Trường Hợp Đặc Biệt: Thắng Phiếu Phổ Thông Nhưng Thua Phiếu Đại Cử Tri">
        <div className="bg-academic-red/30 p-6 rounded-lg space-y-4">
          <p className="text-lg">
            Trong lịch sử Hoa Kỳ đã có những trường hợp ứng cử viên <strong>thắng phiếu phổ thông</strong> (popular vote)
            trên toàn quốc nhưng lại <strong>thua phiếu đại cử tri</strong> (electoral vote) và không trở thành Tổng thống.
          </p>

          <div className="space-y-3">
            <div className="p-4 bg-deep-red/40 rounded">
              <h4 className="font-bold text-warm-yellow mb-2">📅 Năm 2000: Al Gore vs George W. Bush</h4>
              <p>
                Al Gore (Đảng Dân chủ) thắng phiếu phổ thông với hơn 500,000 phiếu,
                nhưng thua phiếu đại cử tri <strong>266 vs 271</strong>. George W. Bush trở thành Tổng thống.
              </p>
            </div>

            <div className="p-4 bg-deep-red/40 rounded">
              <h4 className="font-bold text-warm-yellow mb-2">📅 Năm 2016: Hillary Clinton vs Donald Trump</h4>
              <p>
                Hillary Clinton thắng phiếu phổ thông với gần 3 triệu phiếu hơn,
                nhưng thua phiếu đại cử tri <strong>227 vs 304</strong>. Donald Trump trở thành Tổng thống.
              </p>
            </div>
          </div>

          <p className="text-lg mt-4">
            ⚠️ Điều này cho thấy: Ở Hoa Kỳ, <strong>phiếu đại cử tri</strong> quan trọng hơn
            <strong> phiếu phổ thông</strong> trong việc quyết định ai sẽ là Tổng thống.
          </p>
        </div>
      </ContentSection>

      <ContentSection title="Infographic: Cơ Chế Đại Cử Tri Đoàn">
        <div className="bg-deep-red/40 p-8 rounded-lg text-center">
          <div className="space-y-6">
            <div className="flex justify-center items-center space-x-8">
              <div className="bg-academic-red p-6 rounded-lg">
                <div className="text-4xl mb-2">👥</div>
                <div className="text-warm-yellow font-bold">Cử tri bỏ phiếu</div>
              </div>
              <div className="text-4xl text-warm-yellow">→</div>
              <div className="bg-academic-red p-6 rounded-lg">
                <div className="text-4xl mb-2">🏛️</div>
                <div className="text-warm-yellow font-bold">Đại cử tri</div>
              </div>
              <div className="text-4xl text-warm-yellow">→</div>
              <div className="bg-academic-red p-6 rounded-lg">
                <div className="text-4xl mb-2">🎖️</div>
                <div className="text-warm-yellow font-bold">Tổng thống</div>
              </div>
            </div>
            <p className="text-lg text-warm-yellow italic">
              Cơ chế bầu cử gián tiếp qua Đại cử tri đoàn
            </p>
          </div>
        </div>
      </ContentSection>

      <VideoSection
        title="Xem video giải thích về Electoral College"
        duration="1-2 phút"
        videoUrl="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
      />
    </div>
  );
}
