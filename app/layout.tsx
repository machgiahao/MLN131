import type { Metadata } from "next";
import "./globals.css";
import ModernNavbar from "@/components/ModernNavbar";

export const metadata: Metadata = {
  title: "Quyền Làm Chủ Của Nhân Dân - Tinh Thần Yêu Nước Việt Nam",
  description: "Khám phá ý nghĩa sâu sắc của quyền làm chủ và tinh thần dân chủ trong thời đại hiện đại",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="lotus-bg paper-texture">
        <ModernNavbar />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
