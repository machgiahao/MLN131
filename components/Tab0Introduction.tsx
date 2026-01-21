import ContentSection from './ContentSection';

export default function Tab0Introduction() {
  return (
    <div>
      <h1 className="text-5xl font-serif font-bold text-center text-warm-yellow mb-8">
        Quyền Làm Chủ Của Nhân Dân Thông Qua Bầu Cử
      </h1>
      
      <ContentSection title="Giới Thiệu">
        <p className="text-xl leading-loose">
          Bầu cử là một trong những biểu hiện cơ bản nhất của quyền làm chủ của nhân dân 
          trong một quốc gia dân chủ. Đây không chỉ là quyền, mà còn là trách nhiệm của 
          mỗi công dân trong việc xây dựng và phát triển đất nước.
        </p>
      </ContentSection>

      <ContentSection title="Mục Đích Của Bài Trình Bày">
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li>Hiểu rõ ý nghĩa và tầm quan trọng của quyền bầu cử</li>
          <li>Tìm hiểu quy trình bầu cử và ý nghĩa của lá phiếu cử tri</li>
          <li>So sánh hệ thống bầu cử giữa Việt Nam và Hoa Kỳ</li>
          <li>Nhận thức về quyền làm chủ của nhân dân trong thực tiễn</li>
        </ul>
      </ContentSection>

      <ContentSection title="Tổng Quan 5 Phần Chính">
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-deep-red/40 p-6 rounded-lg border-l-4 border-warm-yellow">
            <h3 className="text-xl font-serif font-bold text-warm-yellow mb-3">
              1. Quy Trình Bầu Cử & Lá Phiếu Cử Tri
            </h3>
            <p>
              Tìm hiểu về quy trình bầu cử, ý nghĩa của lá phiếu và trách nhiệm của công dân.
            </p>
          </div>

          <div className="bg-deep-red/40 p-6 rounded-lg border-l-4 border-warm-yellow">
            <h3 className="text-xl font-serif font-bold text-warm-yellow mb-3">
              2. Bầu Cử Ở Việt Nam
            </h3>
            <p>
              Hệ thống bầu cử Việt Nam: lãnh đạo một đảng, bầu trực tiếp Quốc hội và HĐND.
            </p>
          </div>

          <div className="bg-deep-red/40 p-6 rounded-lg border-l-4 border-warm-yellow">
            <h3 className="text-xl font-serif font-bold text-warm-yellow mb-3">
              3. Bầu Cử Ở Hoa Kỳ
            </h3>
            <p>
              Hệ thống đa đảng, cơ chế đại cử tri đoàn và bầu cử gián tiếp Tổng thống.
            </p>
          </div>

          <div className="bg-deep-red/40 p-6 rounded-lg border-l-4 border-warm-yellow">
            <h3 className="text-xl font-serif font-bold text-warm-yellow mb-3">
              4. So Sánh Mỹ & Việt Nam
            </h3>
            <p>
              Phân tích điểm khác biệt và lý do tại sao mỗi quốc gia có mô hình phù hợp riêng.
            </p>
          </div>

          <div className="bg-deep-red/40 p-6 rounded-lg border-l-4 border-warm-yellow md:col-span-2">
            <h3 className="text-xl font-serif font-bold text-warm-yellow mb-3">
              5. Quyền Làm Chủ Của Nhân Dân
            </h3>
            <p>
              "Nhà nước của dân – do dân – vì dân" và 6 bước thực hiện quyền làm chủ.
            </p>
          </div>
        </div>
      </ContentSection>
    </div>
  );
}
