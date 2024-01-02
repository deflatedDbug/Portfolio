"use client";
import './stylesheet.css';
import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {motion} from "framer-motion";
import { experiencesData } from "@/lib/data";
import { useTheme } from "@/context/theme-context";

export default function ExperienceSection() {
  const { theme } = useTheme();

  return (
    <motion.section id="experience" className="scroll-mt-28 mt-24 mb-20 sm:mb-40" initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{
      type: "spring",
      stiffness: 75,
      delay: 0.15,
      duration: 0.7,
    }}>
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
            className='duration-300 hover:scale-110 md:hover:scale-125'
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "#28282B",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize opacity-60">{item.title}</h3>
              <p className="font-normal !mt-2">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </motion.section>
  );
}