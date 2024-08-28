import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";
import { AiOutlineConsoleSql } from "react-icons/ai";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },

  {
    name: "Skills",
    hash: "#skills",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduate School",
    location: "Georgia Tech",
    description: "Accepted and enrolled in Georgia Tech's Masters in Computer Science and Machine Learning",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2024",
  },
  {
    title: "Graduation",
    location: "University of Virginia",
    description: "Graduated from the University of Virginia with a degree in Economics",
    icon: React.createElement(LuGraduationCap),
    date: "May 2023",
  },
  {
    title: "Software Engineering Intern",
    location: "City of Charlottesville",
    description: "Engineered an interactive crime mapping solution utilizing the city’s GIS database, providing real-time updates",
    icon: React.createElement(FaCode),
    date: "Jan - May 2023",
  },
  {
    title: "Software Engineering Intern",
    location: "UVA, Contemplative Sciences Center",
    description: "Developed a mindfulness application aimed at helping students mitigate stress while providing guidance towards healthy lifestyle habits through interactive games/modules and daily video-shorts",
    icon: React.createElement(FaCode),
    date: "Sep 2022 - Feb 2023",
  },
  {
    title: "Software Engineer Intern",
    location: "Payment Labs",
    description: "Created a mobile-first landing page for MALLO, resulting in a 20% increase in web traffic and 10% higher conversion rates",
    icon: React.createElement(FaCode),
    date: "June - Aug 2022",
  },
  {
    title: "Software Engineer Intern",
    location: "DataLemur",
    description: "Co-led the early-stage development of a SQL-learning platform in collaboration with Kernelics",
    icon: React.createElement(AiOutlineConsoleSql),
    date: "Jan - May 2022",
  },
] as const;

export const skillsData = [
  "C",
  "C++",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "AWS",
  "Azure",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Firebase",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;