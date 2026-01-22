import type { Metadata } from "next";
import "./globals.css";
import ModernNavbar from "@/components/ModernNavbar";
import { usePathname } from "next/navigation";

export const metadata: Metadata = {
  title: "Quyền Làm Chủ Của Nhân Dân - Tinh Thần Yêu Nước Việt Nam",
  description: "Khám phá ý nghĩa sâu sắc của quyền làm chủ và tinh thần dân chủ trong thời đại hiện đại",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Hide navbar on intro page using usePathname (client only)
  const pathname = typeof window !== 'undefined' ? window.location.pathname : undefined;
  const isIntro = pathname === '/';
  return (
    <html lang="vi">
      <body className="lotus-bg paper-texture">
        {pathname !== '/' && <ModernNavbar />}
        <main className={pathname !== '/' ? 'pt-20' : ''}>
          {children}
        </main>
      </body>
    </html>
  );
}
