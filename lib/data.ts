import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";
import { MdHealthAndSafety } from "react-icons/md";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { RiBankFill } from "react-icons/ri";

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
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  {
    name: "Skills",
    hash: "#skills",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduation",
    location: "University of Virginia",
    description: "Graduated from the University of Virginia with a degree in Economics and Computer Science.",
    icon: React.createElement(LuGraduationCap),
    date: "May 2023",
  },
  {
    title: "Software Engineering Intern",
    location: "City of Charlottesville",
    description: "Engineered an interactive crime mapping solution utilizing the city’s GIS database, providing real-time updates.",
    icon: React.createElement(FaCode),
    date: "Jan - May 2023",
  },
  {
    title: "Product Management Intern",
    location: "Contemplative Sciences Center",
    description: "Led a diverse team of developers and UI/UX designers to build a mental health application for the UVA's student health department",
    icon: React.createElement(MdHealthAndSafety),
    date: "Sept - Feb 2023",
  },
  {
    title: "Software Engineer Intern",
    location: "Payment Labs",
    description: "Optimized a mobile-first landing page for MALLO, resulting in a 20% increase in web traffic and 10% higher conversion rates.",
    icon: React.createElement(FaCode),
    date: "June - Aug 2022",
  },
  {
    title: "Product Management Intern",
    location: "DataLemur",
    description: "Co-led the early-stage development of a SQL-learning platform in collaboration with Kernelics; delivered a testable protype in 2.5 months, beating the original 4-month timeline.",
    icon: React.createElement(AiOutlineConsoleSql),
    date: "Jan - May 2022",
  },
  {
    title: "Investment Banking Intern",
    location: "Morgan Stanley",
    description: "Conducted comprehensive research on emerging trends in the TMT sector, leading to a detailed industry report that was utilized in developing strategies for a client pitch which drove the potential acquisition of a new key-client.",
    icon: React.createElement(RiBankFill),
    date: "June - Aug 2021",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
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