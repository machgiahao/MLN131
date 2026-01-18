import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bầu cử ở Việt Nam – Quyền làm chủ của nhân dân",
  description: "Trải nghiệm kể chuyện tương tác về bầu cử và quyền làm chủ của nhân dân Việt Nam – Nhóm 3",
  icons: {
    icon: "/favicon.png",
  },

  openGraph: {
    title: "Bầu cử ở Việt Nam – Quyền làm chủ của nhân dân",
    description: "Trải nghiệm kể chuyện tương tác về bầu cử và quyền làm chủ của nhân dân Việt Nam – Nhóm 3",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Bầu cử ở Việt Nam – Quyền làm chủ của nhân dân",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bầu cử ở Việt Nam – Quyền làm chủ của nhân dân",
    description: "Trải nghiệm kể chuyện tương tác về bầu cử và quyền làm chủ của nhân dân Việt Nam – Nhóm 3",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
