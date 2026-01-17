"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Chapter from "@/components/Chapter";
import ProgressIndicator from "@/components/ProgressIndicator";

const chapters = [
  {
    id: 1,
    number: "01",
    title: "The Beginning",
    description: "Every great story starts somewhere. This is where our journey begins.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    bgColor: "#0a0a0a"
  },
  {
    id: 2,
    number: "02",
    title: "The Discovery",
    description: "As we venture deeper, new revelations await at every turn.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    bgColor: "#1a1a2e"
  },
  {
    id: 3,
    number: "03",
    title: "The Challenge",
    description: "Every journey faces obstacles. This is our moment of truth.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    bgColor: "#16213e"
  },
  {
    id: 4,
    number: "04",
    title: "The Transformation",
    description: "Through struggle comes growth. We emerge changed.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    bgColor: "#0f3460"
  },
  {
    id: 5,
    number: "05",
    title: "The Resolution",
    description: "All stories must end. But endings are just new beginnings.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
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
      const currentChapter = Math.min(
        Math.floor(scrollPosition / windowHeight),
        chapters.length - 1
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
