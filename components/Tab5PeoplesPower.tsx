import ContentSection from './ContentSection';
import QuoteBlock from './QuoteBlock';

export default function Tab5PeoplesPower() {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif font-bold text-warm-yellow mb-4">
          Quyền Làm Chủ Của Nhân Dân
        </h1>
        <p className="text-2xl italic text-warm-yellow">
          "Nhà nước của dân – do dân – vì dân"
        </p>
      </div>

      <ContentSection title="Nhà Nước Của Dân – Do Dân – Vì Dân">
        <div className="space-y-4">
          <div className="bg-deep-red/40 p-6 rounded-lg border-l-4 border-warm-yellow">
            <h4 className="font-serif font-bold text-xl text-warm-yellow mb-3">
              🏛️ CỦA DÂN
            </h4>
            <p className="text-lg">
              Quyền lực nhà nước <strong>thuộc về nhân dân</strong>. 
              Mọi quyền lực đều xuất phát từ nhân dân, không thuộc về bất kỳ cá nhân, 
              nhóm người hay tổ chức nào khác.
            </p>
          </div>

          <div className="bg-deep-red/40 p-6 rounded-lg border-l-4 border-warm-yellow">
            <h4 className="font-serif font-bold text-xl text-warm-yellow mb-3">
              👥 DO DÂN
            </h4>
            <p className="text-lg">
              Nhân dân <strong>trực tiếp hoặc thông qua đại diện</strong> thực hiện quyền lực. 
              Thông qua bầu cử, giám sát, phản biện, nhân dân quyết định ai sẽ lãnh đạo đất nước.
            </p>
          </div>

          <div className="bg-deep-red/40 p-6 rounded-lg border-l-4 border-warm-yellow">
            <h4 className="font-serif font-bold text-xl text-warm-yellow mb-3">
              ❤️ VÌ DÂN
            </h4>
            <p className="text-lg">
              Mọi hoạt động của Nhà nước đều hướng đến <strong>lợi ích của nhân dân</strong>. 
              Phục vụ nhân dân là mục đích cao nhất của bộ máy nhà nước.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="Dân Chủ Trực Tiếp vs Dân Chủ Đại Diện">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-academic-red/30 p-6 rounded-lg">
            <h4 className="font-serif font-bold text-xl text-warm-yellow mb-3">
              ✋ Dân Chủ Trực Tiếp
            </h4>
            <p className="mb-3">
              Nhân dân trực tiếp tham gia quyết định các vấn đề quan trọng:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Trưng cầu dân ý</li>
              <li>Họp dân, hội nghị cử tri</li>
              <li>Giám sát cộng đồng</li>
              <li>Tham gia xây dựng chính sách</li>
            </ul>
          </div>

          <div className="bg-academic-red/30 p-6 rounded-lg">
            <h4 className="font-serif font-bold text-xl text-warm-yellow mb-3">
              🏛️ Dân Chủ Đại Diện
            </h4>
            <p className="mb-3">
              Nhân dân bầu đại biểu để thực hiện quyền lực thay mình:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Bầu cử Quốc hội</li>
              <li>Bầu cử Hội đồng nhân dân</li>
              <li>Đại biểu đại diện ý chí nhân dân</li>
              <li>Giám sát và phản biện</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-deep-red/40 p-6 rounded-lg">
          <p className="text-lg">
            💡 <strong>Lưu ý:</strong> Việt Nam kết hợp cả hai hình thức dân chủ, 
            đảm bảo nhân dân vừa tham gia trực tiếp, vừa thông qua đại diện để thực hiện quyền làm chủ.
          </p>
        </div>
      </ContentSection>

      <ContentSection title="6 Bước Thực Hiện Quyền Làm Chủ">
        <p className="text-lg mb-6">
          Quyền làm chủ của nhân dân không chỉ dừng lại ở việc bỏ phiếu, 
          mà là một quy trình <strong>6 bước toàn diện</strong>:
        </p>

        <div className="space-y-4">
          <div className="flex items-start space-x-4 bg-academic-red/30 p-5 rounded-lg">
            <div className="flex-shrink-0 w-14 h-14 bg-academic-red rounded-full flex items-center justify-center text-warm-yellow font-bold text-2xl">
              1
            </div>
            <div>
              <h4 className="font-serif font-bold text-xl text-warm-yellow mb-2">
                DÂN BIẾT
              </h4>
              <p className="text-lg">
                Nhân dân được <strong>thông tin đầy đủ, minh bạch</strong> về các chủ trương, 
                chính sách, dự án, kế hoạch của Nhà nước và địa phương.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 bg-academic-red/30 p-5 rounded-lg">
            <div className="flex-shrink-0 w-14 h-14 bg-academic-red rounded-full flex items-center justify-center text-warm-yellow font-bold text-2xl">
              2
            </div>
            <div>
              <h4 className="font-serif font-bold text-xl text-warm-yellow mb-2">
                DÂN BÀN
              </h4>
              <p className="text-lg">
                Nhân dân có quyền <strong>thảo luận, góp ý, phản biện</strong> về các quyết sách. 
                Ý kiến của nhân dân được lắng nghe và tôn trọng.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 bg-academic-red/30 p-5 rounded-lg">
            <div className="flex-shrink-0 w-14 h-14 bg-academic-red rounded-full flex items-center justify-center text-warm-yellow font-bold text-2xl">
              3
            </div>
            <div>
              <h4 className="font-serif font-bold text-xl text-warm-yellow mb-2">
                DÂN LÀM
              </h4>
              <p className="text-lg">
                Nhân dân <strong>trực tiếp tham gia thực hiện</strong> các chính sách, 
                dự án cộng đồng, xây dựng nông thôn mới, đô thị văn minh.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 bg-academic-red/30 p-5 rounded-lg">
            <div className="flex-shrink-0 w-14 h-14 bg-academic-red rounded-full flex items-center justify-center text-warm-yellow font-bold text-2xl">
              4
            </div>
            <div>
              <h4 className="font-serif font-bold text-xl text-warm-yellow mb-2">
                DÂN KIỂM TRA
              </h4>
              <p className="text-lg">
                Nhân dân có quyền <strong>kiểm tra, đánh giá</strong> việc thực hiện chính sách, 
                hiệu quả hoạt động của cơ quan nhà nước và cán bộ.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 bg-academic-red/30 p-5 rounded-lg">
            <div className="flex-shrink-0 w-14 h-14 bg-academic-red rounded-full flex items-center justify-center text-warm-yellow font-bold text-2xl">
              5
            </div>
            <div>
              <h4 className="font-serif font-bold text-xl text-warm-yellow mb-2">
                DÂN GIÁM SÁT
              </h4>
              <p className="text-lg">
                Nhân dân <strong>giám sát quyền lực</strong>, phát hiện vi phạm, 
                tham nhũng, lãng phí và yêu cầu xử lý nghiêm minh.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 bg-academic-red/30 p-5 rounded-lg">
            <div className="flex-shrink-0 w-14 h-14 bg-academic-red rounded-full flex items-center justify-center text-warm-yellow font-bold text-2xl">
              6
            </div>
            <div>
              <h4 className="font-serif font-bold text-xl text-warm-yellow mb-2">
                DÂN THỤ HƯỞNG
              </h4>
              <p className="text-lg">
                Nhân dân là người <strong>hưởng thụ kết quả</strong> của sự phát triển, 
                được nâng cao đời sống vật chất và tinh thần.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      <QuoteBlock text="Quyền làm chủ chỉ có ý nghĩa khi nhân dân thực sự thực hiện nó." />

      <ContentSection title="Kết Luận">
        <div className="bg-deep-red/40 p-8 rounded-lg space-y-4">
          <p className="text-xl leading-relaxed">
            Quyền làm chủ của nhân dân không chỉ là khẩu hiệu, mà là <strong>quyền và trách nhiệm thiết thực</strong> của mỗi công dân. 
            Thông qua bầu cử, giám sát, tham gia xây dựng chính sách, 
            nhân dân không ngừng khẳng định vị trí làm chủ đất nước.
          </p>

          <p className="text-xl leading-relaxed">
            Bầu cử là một trong những hình thức quan trọng nhất để thực hiện quyền này. 
            <strong> Mỗi lá phiếu là một tiếng nói</strong>, là trách nhiệm đối với tương lai của đất nước. 
            Hãy thực hiện quyền bầu cử một cách có ý thức, trách nhiệm và đầy tự hào.
          </p>

          <div className="text-center mt-8 pt-6 border-t-2 border-warm-yellow">
            <p className="text-2xl font-serif italic text-warm-yellow">
              "Dân là gốc của nước, gốc vững thì nước bền."
            </p>
            <p className="text-lg mt-2">— Lời dạy của Bác Hồ</p>
          </div>
        </div>
      </ContentSection>
    </div>
  );
}
