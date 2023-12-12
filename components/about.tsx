"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      id="about"
    >
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.8 }}
        transition={{
          type: "spring",
          stiffness: 75,
          delay: 0.2,
          duration: 0.7,
        }}
        className="text-lg sm:text-xl px-4"
      >
        As a recent graduate from the{" "}
        <span className="font-bold">University of Virginia</span>, I bring a
        versatile skill set in <span className="italic">finance</span>,{" "}
        <span className="italic">software engineering</span>, and{" "}
        <span className="italic">technical product management</span>, blending
        analytical acumen with a passion for technological innovation. My
        educational journey has not only equipped me with technical expertise
        but also honed my ability to adapt and thrive in dynamic environments.
        Outside of work, I immerse myself in the vibrant rhythms of Latin music,
        expressing creativity and joy through{" "}
        <span className="font-bold">Salsa</span> and{" "}
        <span className="font-bold">Bachata dancing</span>. Committed to
        personal growth and wellness, I also dedicate time to fitness, ensuring
        a balanced and energetic approach to both my professional and personal
        life.
      </motion.p>
    </section>
  );
}
