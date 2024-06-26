"use client";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  return (
    <motion.section
      className="max-w-[45rem] text-center leading-8 sm:mb-6 scroll-mt-28"
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: 3.25,
      }}
    >
      <SectionHeading >
        About Me
      </SectionHeading>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          type: "spring",
          stiffness: 75,
          delay: 0.15,
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
    </motion.section>
  );
}
