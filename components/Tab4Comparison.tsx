import ContentSection from './ContentSection';
import QuoteBlock from './QuoteBlock';

export default function Tab4Comparison() {
  return (
    <div>
      <ContentSection title="Bảng So Sánh: Hoa Kỳ vs Việt Nam">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-academic-red">
                <th className="border border-warm-yellow p-4 text-left font-serif text-warm-yellow">
                  Tiêu Chí
                </th>
                <th className="border border-warm-yellow p-4 text-left font-serif text-warm-yellow">
                  Hoa Kỳ 🇺🇸
                </th>
                <th className="border border-warm-yellow p-4 text-left font-serif text-warm-yellow">
                  Việt Nam 🇻🇳
                </th>
              </tr>
            </thead>
            <tbody className="text-lg">
              <tr className="bg-deep-red/30">
                <td className="border border-warm-yellow p-4 font-bold text-warm-yellow">
                  Hệ thống chính trị
                </td>
                <td className="border border-warm-yellow p-4">
                  Dân chủ đại diện, đa đảng
                </td>
                <td className="border border-warm-yellow p-4">
                  Xã hội chủ nghĩa, một đảng lãnh đạo
                </td>
              </tr>

              <tr className="bg-deep-red/20">
                <td className="border border-warm-yellow p-4 font-bold text-warm-yellow">
                  Bầu lãnh đạo cao nhất
                </td>
                <td className="border border-warm-yellow p-4">
                  Tổng thống được bầu gián tiếp qua Đại cử tri đoàn
                </td>
                <td className="border border-warm-yellow p-4">
                  Chủ tịch nước do Quốc hội bầu. Quốc hội do nhân dân bầu trực tiếp
                </td>
              </tr>

              <tr className="bg-deep-red/30">
                <td className="border border-warm-yellow p-4 font-bold text-warm-yellow">
                  Nhiệm kỳ
                </td>
                <td className="border border-warm-yellow p-4">
                  4 năm (Tổng thống), 2 năm (Hạ viện), 6 năm (Thượng viện)
                </td>
                <td className="border border-warm-yellow p-4">
                  5 năm (Quốc hội và HĐND các cấp)
                </td>
              </tr>

              <tr className="bg-deep-red/20">
                <td className="border border-warm-yellow p-4 font-bold text-warm-yellow">
                  Tranh cử và vận động
                </td>
                <td className="border border-warm-yellow p-4">
                  Vận động mạnh mẽ, tranh luận trực tiếp, quảng cáo rộng rãi
                </td>
                <td className="border border-warm-yellow p-4">
                  Giới thiệu tiểu sử, chương trình hành động, tiếp xúc cử tri
                </td>
              </tr>

              <tr className="bg-deep-red/30">
                <td className="border border-warm-yellow p-4 font-bold text-warm-yellow">
                  Kinh phí vận động
                </td>
                <td className="border border-warm-yellow p-4">
                  Hàng tỷ USD, phụ thuộc nhiều vào quyên góp từ tập đoàn, cá nhân
                </td>
                <td className="border border-warm-yellow p-4">
                  Do ngân sách nhà nước hỗ trợ, hạn chế ảnh hưởng của tiền bạc
                </td>
              </tr>

              <tr className="bg-deep-red/20">
                <td className="border border-warm-yellow p-4 font-bold text-warm-yellow">
                  Vai trò đảng phái
                </td>
                <td className="border border-warm-yellow p-4">
                  Đa đảng cạnh tranh, luân phiên lãnh đạo
                </td>
                <td className="border border-warm-yellow p-4">
                  Đảng Cộng sản lãnh đạo, các tổ chức khác tham gia
                </td>
              </tr>

              <tr className="bg-deep-red/30">
                <td className="border border-warm-yellow p-4 font-bold text-warm-yellow">
                  Mục tiêu ưu tiên
                </td>
                <td className="border border-warm-yellow p-4">
                  Tự do cá nhân, cạnh tranh thị trường
                </td>
                <td className="border border-warm-yellow p-4">
                  Ổn định chính trị, phát triển kinh tế, công bằng xã hội
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </ContentSection>

      <ContentSection title="Tại Sao Việt Nam Không Theo Mô Hình Hoa Kỳ?">
        <div className="space-y-4">
          <div className="bg-deep-red/40 p-6 rounded-lg">
            <h4 className="font-serif font-bold text-xl text-warm-yellow mb-3">
              🏛️ Bối Cảnh Lịch Sử Khác Biệt
            </h4>
            <p className="text-lg">
              Việt Nam trải qua hàng ngàn năm phong kiến, gần 100 năm đô hộ và chiến tranh giải phóng. 
              Lịch sử đấu tranh dân tộc tạo nên con đường phát triển riêng, 
              không thể sao chép từ các quốc gia phương Tây.
            </p>
          </div>

          <div className="bg-deep-red/40 p-6 rounded-lg">
            <h4 className="font-serif font-bold text-xl text-warm-yellow mb-3">
              🌏 Triết Lý Văn Hóa Và Chính Trị
            </h4>
            <p className="text-lg">
              Văn hóa phương Đông coi trọng <strong>tập thể, cộng đồng, hài hòa</strong>, 
              trong khi phương Tây nhấn mạnh <strong>cá nhân, cạnh tranh, tự do</strong>. 
              Việt Nam ưu tiên sự ổn định và đoàn kết dân tộc.
            </p>
          </div>

          <div className="bg-deep-red/40 p-6 rounded-lg">
            <h4 className="font-serif font-bold text-xl text-warm-yellow mb-3">
              ⚖️ Ưu Tiên Ổn Định Và Phát Triển
            </h4>
            <p className="text-lg">
              Việt Nam đang trong giai đoạn phát triển. Ưu tiên hàng đầu là 
              <strong> ổn định chính trị</strong>, <strong>phát triển kinh tế</strong>, 
              và <strong>nâng cao đời sống nhân dân</strong>. 
              Hệ thống đa đảng cạnh tranh có thể dẫn đến bất ổn và chia rẽ.
            </p>
          </div>

          <div className="bg-deep-red/40 p-6 rounded-lg">
            <h4 className="font-serif font-bold text-xl text-warm-yellow mb-3">
              💰 Hạn Chế Ảnh Hưởng Của Tiền Bạc
            </h4>
            <p className="text-lg">
              Ở Hoa Kỳ, các tập đoàn lớn có ảnh hưởng mạnh mẽ đến bầu cử thông qua tài trợ. 
              Việt Nam muốn tránh tình trạng "tiền chi phối chính trị", 
              đảm bảo quyền lực thực sự thuộc về nhân dân.
            </p>
          </div>

          <div className="bg-deep-red/40 p-6 rounded-lg">
            <h4 className="font-serif font-bold text-xl text-warm-yellow mb-3">
              🤝 Đoàn Kết Và Đồng Thuận Xã Hội
            </h4>
            <p className="text-lg">
              Mô hình một đảng lãnh đạo giúp tập trung nguồn lực, thống nhất chủ trương, 
              tránh xung đột và đối đầu gay gắt giữa các phe phái. 
              Điều này phù hợp với nền tảng văn hóa và nguyện vọng của người Việt Nam.
            </p>
          </div>
        </div>
      </ContentSection>

      <QuoteBlock text="Không có mô hình tốt nhất – chỉ có mô hình phù hợp nhất." />

      <ContentSection title="Kết Luận">
        <div className="bg-academic-red/30 p-6 rounded-lg">
          <p className="text-lg leading-relaxed">
            Mỗi quốc gia có lịch sử, văn hóa, và hoàn cảnh riêng. 
            Việt Nam lựa chọn con đường xã hội chủ nghĩa với sự lãnh đạo của Đảng Cộng sản 
            không phải là sao chép, mà là kế thừa truyền thống dân tộc và phù hợp với thực tiễn. 
            Điều quan trọng là <strong>quyền làm chủ của nhân dân được đảm bảo và phát huy</strong>, 
            bất kể mô hình chính trị nào.
          </p>
        </div>
      </ContentSection>
    </div>
  );
}
