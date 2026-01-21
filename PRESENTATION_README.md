# Quyền Làm Chủ Của Nhân Dân Thông Qua Bầu Cử

Bài trình bày học thuật về vai trò và ý nghĩa của bầu cử trong việc thực hiện quyền làm chủ của nhân dân.

## 🎯 Tính Năng

- ✅ Thiết kế tối giản, phù hợp cho trình bày học thuật
- ✅ 5 phần nội dung rõ ràng với điều hướng tab
- ✅ Giao diện ấm áp với sắc đỏ Việt Nam và màu bronze
- ✅ Video minh họa tùy chọn (modal)
- ✅ Responsive design - tối ưu cho máy chiếu
- ✅ Hiệu ứng chuyển trang mượt mà
- ✅ Họa tiết văn hóa Việt Nam tinh tế

## 📂 Cấu Trúc Dự Án

```
app/
├── layout.tsx                  # Root layout với navbar
├── page.tsx                    # Redirect sang /gioi-thieu
├── globals.css                 # Styles toàn cục
├── gioi-thieu/page.tsx        # Tab 1: Giới thiệu
├── co-so-ly-luan/page.tsx     # Tab 2: Cơ sở lý luận
├── noi-dung-chinh/page.tsx    # Tab 3: Nội dung chính
├── thuc-tien-viet-nam/page.tsx # Tab 4: Thực tiễn Việt Nam
└── ket-luan/page.tsx          # Tab 5: Kết luận

components/
├── PresentationNavbar.tsx     # Navigation bar
├── PresentationSection.tsx    # Section wrapper
├── KeyStatement.tsx           # Highlighted statement
├── QuoteBox.tsx               # Quote component
├── BulletList.tsx             # Numbered list
├── VideoButton.tsx            # Video modal trigger
└── PageTransition.tsx         # Page transition wrapper
```

## 🎨 Hệ Thống Màu

- **Nền chính**: `#FAF7F2` (Warm off-white)
- **Màu chủ đạo**: `#B71C1C` (Vietnamese red)
- **Màu phụ**: `#D4A373` (Bronze/Gold)
- **Văn bản**: `#2B2B2B` (Dark gray)

## 🚀 Cài Đặt & Chạy

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build production
npm build

# Chạy production
npm start
```

Truy cập: [http://localhost:3000](http://localhost:3000)

## 📋 Nội Dung Các Trang

### 1. Giới Thiệu (`/gioi-thieu`)
- Tiêu đề chính của bài trình bày
- Mục tiêu bài trình bày
- Tổng quan 4 phần chính

### 2. Cơ Sở Lý Luận (`/co-so-ly-luan`)
- Khái niệm quyền làm chủ của nhân dân
- Vai trò của bầu cử
- Nguyên tắc bầu cử dân chủ (phổ thông, bình đẳng, trực tiếp, bí mật)

### 3. Nội Dung Chính (`/noi-dung-chinh`)
- Quy trình bầu cử
- Ý nghĩa lá phiếu bầu cử
- Các hình thức thực hiện (dân chủ đại diện và trực tiếp)

### 4. Thực Tiễn Việt Nam (`/thuc-tien-viet-nam`)
- Hệ thống bầu cử Việt Nam
- Đối tượng bầu cử (Quốc hội, HĐND)
- So sánh với mô hình quốc tế (Hoa Kỳ)
- Lý do lựa chọn mô hình Việt Nam

### 5. Kết Luận (`/ket-luan`)
- Tóm tắt những điểm chính
- Thành tựu và định hướng
- 6 bước thực hiện quyền làm chủ
- Thông điệp cuối cùng

## 🎥 Video

Video được ẩn mặc định và hiển thị qua modal khi nhấn nút "Xem video minh họa". 
Bạn có thể thay thế URL video mẫu bằng video thực tế.

## 💡 Lưu Ý Khi Trình Bày

- Website được thiết kế cho **trình bày trực tiếp**, không phải đọc tài liệu
- Mỗi màn hình = 1 ý chính
- Văn bản ngắn gọn, dễ đọc từ xa
- Sử dụng navigation bar để chuyển giữa các phần
- Video chỉ là minh họa, không phải nội dung chính

## 🛠️ Công Nghệ Sử Dụng

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Language**: TypeScript
- **Font**: Inter (sans-serif), Merriweather (serif)

## 📄 License

Academic presentation project - Educational use only

---

**Tác giả**: Bài trình bày học thuật  
**Năm**: 2026
