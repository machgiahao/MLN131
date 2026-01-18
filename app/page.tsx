"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Chapter from "@/components/Chapter";
import ProgressIndicator from "@/components/ProgressIndicator";
import IntroSection from "@/components/IntroSection";

const chapters = [
  {
    id: 1,
    number: "01",
    title: "Bầu cử và lá phiếu cử tri",
    description: "Tìm hiểu về ý nghĩa và tầm quan trọng của lá phiếu trong bầu cử",
    videoUrl: "https://drive.google.com/file/d/1JUU-CG0FhbDKHFFJ2u5O90GpJ7jEEpk8/preview",
    bgColor: "#0a0a0a"
  },
  {
    id: 2,
    number: "02",
    title: "Quy trình và cơ chế bầu cử ở Việt Nam",
    description: "Tìm hiểu về quy trình bầu cử và cơ chế hoạt động tại Việt Nam",
    videoUrl: "https://drive.google.com/file/d/1v3myzsxWp1iaIRmUtGqHp3Ygp7QhDIrq/preview",
    bgColor: "#1a1a2e"
  },
  {
    id: 3,
    number: "03",
    title: "Bầu cử ở Hoa Kỳ",
    description: "Khám phá hệ thống bầu cử phức tạp và độc đáo của Hoa Kỳ",
    videoUrl: "https://drive.google.com/file/d/10erMZ_5fmDWeZLPVHUtgsSBFkWD1nJtg/preview",
    bgColor: "#16213e"
  },
  {
    id: 4,
    number: "04",
    title: "So sánh bầu cử ở Việt Nam và Hoa Kỳ",
    description: "Vì sao Việt Nam lại không theo hệ thống bầu cử của Hoa Kỳ?",
    videoUrl: "https://drive.google.com/file/d/1NkFupNPUJyBGweVtfOs9t2T-pTgTdDlk/preview",
    bgColor: "#0f3460"
  },
  {
    id: 5,
    number: "05",
    title: "Quyền làm chủ của nhân dân",
    description: "Sự tham gia của người dân trong quá trình bầu cử quyết định vận mệnh quốc gia",
    videoUrl: "https://drive.google.com/file/d/1j8U2d-tkKaMm3HbfB27QVx97BD_QezEy/preview",
    bgColor: "#533483"
  }
];

export default function Home() {
  const [activeChapter, setActiveChapter] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const currentIndex = Math.floor(scrollPosition / windowHeight) - 1;
      const currentChapter = Math.max(
        0,
        Math.min(currentIndex, chapters.length - 1)
      );
      setActiveChapter(currentChapter);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backgroundColor = useTransform(
    scrollYProgress,
    chapters.map((_, i) => i / (chapters.length - 1)),
    chapters.map(ch => ch.bgColor)
  );

  return (
    <motion.main
      style={{ backgroundColor }}
      className="min-h-screen transition-colors duration-700"
    >
      <ProgressIndicator
        total={chapters.length}
        current={activeChapter}
      />

      <IntroSection />

      {chapters.map((chapter, index) => (
        <Chapter
          key={chapter.id}
          {...chapter}
          isActive={activeChapter === index}
        />
      ))}
    </motion.main>
  );
}
