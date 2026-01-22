import ContentSection from './ContentSection';
import QuoteBlock from './QuoteBlock';
import VideoSection from './VideoSection';

export default function Tab1ElectionProcess() {
  return (
    <div>
      <ContentSection title="Bầu Cử Là Gì?">
        <p className="text-lg">
          <strong>Bầu cử</strong> là quá trình mà công dân sử dụng quyền bỏ phiếu để lựa chọn
          người đại diện cho mình trong các cơ quan quyền lực nhà nước. Đây là công cụ quan trọng
          để thực hiện quyền dân chủ và quyền làm chủ của nhân dân.
        </p>
      </ContentSection>

      <ContentSection title="Tại Sao Cần Có Bầu Cử?">
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li>
            <strong>Thể hiện chủ quyền nhân dân:</strong> Quyền lựa chọn người lãnh đạo thuộc về nhân dân
          </li>
          <li>
            <strong>Đảm bảo tính đại diện:</strong> Các đại biểu được bầu đại diện cho ý chí, nguyện vọng của cử tri
          </li>
          <li>
            <strong>Giám sát và kiểm soát quyền lực:</strong> Nhân dân có quyền bầu và cũng có quyền bãi nhiệm
          </li>
          <li>
            <strong>Duy trì tính hợp pháp:</strong> Quyền lực nhà nước xuất phát từ ý chí của nhân dân
          </li>
        </ul>
      </ContentSection>

      <ContentSection title="Quy Trình Bầu Cử Cơ Bản">
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-academic-red rounded-full flex items-center justify-center text-warm-yellow font-bold text-xl">
              1
            </div>
            <div>
              <h4 className=" font-bold text-xl text-warm-yellow mb-2">
                Đăng Ký Cử Tri
              </h4>
              <p>
                Công dân đủ điều kiện đăng ký trong danh sách cử tri tại địa phương.
                Mỗi công dân chỉ được đăng ký một lần tại một địa điểm.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-academic-red rounded-full flex items-center justify-center text-warm-yellow font-bold text-xl">
              2
            </div>
            <div>
              <h4 className=" font-bold text-xl text-warm-yellow mb-2">
                Danh Sách Ứng Cử Viên
              </h4>
              <p>
                Các ứng cử viên được giới thiệu, công bố thông tin, tiểu sử,
                chương trình hành động để cử tri tìm hiểu.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-academic-red rounded-full flex items-center justify-center text-warm-yellow font-bold text-xl">
              3
            </div>
            <div>
              <h4 className=" font-bold text-xl text-warm-yellow mb-2">
                Ngày Bầu Cử
              </h4>
              <p>
                Cử tri đến điểm bỏ phiếu, xuất trình giấy tờ, nhận phiếu bầu,
                và thực hiện quyền bỏ phiếu của mình.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-academic-red rounded-full flex items-center justify-center text-warm-yellow font-bold text-xl">
              4
            </div>
            <div>
              <h4 className=" font-bold text-xl text-warm-yellow mb-2">
                Bỏ Phiếu Kín
              </h4>
              <p>
                Cử tri vào phòng kín, đánh dấu vào ứng cử viên mà mình lựa chọn.
                Không ai được theo dõi hoặc ép buộc cử tri.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-academic-red rounded-full flex items-center justify-center text-warm-yellow font-bold text-xl">
              5
            </div>
            <div>
              <h4 className=" font-bold text-xl text-warm-yellow mb-2">
                Kiểm Phiếu
              </h4>
              <p>
                Hội đồng bầu cử tiến hành kiểm phiếu công khai, minh bạch.
                Mọi gian lận đều bị xử lý nghiêm khắc.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-academic-red rounded-full flex items-center justify-center text-warm-yellow font-bold text-xl">
              6
            </div>
            <div>
              <h4 className=" font-bold text-xl text-warm-yellow mb-2">
                Công Bố Kết Quả
              </h4>
              <p>
                Kết quả bầu cử được công bố rộng rãi. Các đại biểu trúng cử
                chính thức nhận nhiệm vụ đại diện cho nhân dân.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="Ý Nghĩa Của Lá Phiếu Cử Tri">
        <p className="text-lg">
          Lá phiếu không chỉ là một tờ giấy đơn thuần. Đó là tiếng nói, là quyền lực,
          là trách nhiệm của mỗi công dân. Mỗi lá phiếu góp phần quyết định tương lai
          của đất nước, của cộng đồng, và của chính bản thân người bỏ phiếu.
        </p>
        <div className="mt-4 p-6 bg-academic-red/30 rounded-lg">
          <p className="text-lg">
            📌 <strong>Lưu ý:</strong> Quyền bầu cử là quyền căn bản nhưng cũng là
            nghĩa vụ công dân. Không bỏ phiếu có nghĩa là từ bỏ quyền làm chủ của chính mình.
          </p>
        </div>
      </ContentSection>

      <QuoteBlock text="Lá phiếu không chỉ là quyền – mà là trách nhiệm." />

      <VideoSection
        title="Xem video minh họa"
        duration="5-6 phút"
        videoUrl="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
    </div>
  );
}
