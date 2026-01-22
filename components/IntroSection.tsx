"use client";

import { motion } from "framer-motion";

export default function IntroSection() {
    return (
        <section className="h-screen flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center px-6"
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Bầu cử ở Việt Nam
                </h1>
                <h2 className="text-xl md:text-2xl opacity-80 mb-6">
                    Quyền làm chủ của nhân dân
                </h2>
                <p className="text-lg opacity-60">
                    Nhóm 3
                </p>
            </motion.div>
        </section>
    );
}