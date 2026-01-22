"use client";
import ModernNavbar from "@/components/ModernNavbar";
import { usePathname } from "next/navigation";

export default function ClientNavbarWrapper() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return <ModernNavbar />;
}
