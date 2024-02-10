import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";
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

  {
    name: "Skills",
    hash: "#skills",
  },

  {
    name: "Blog",
    hash: "#blog",
  }
] as const;

export const experiencesData = [
  {
    title: "MS Computer Science",
    location: "Georgia Tech",
    description: "Enrolled in GTech's Masters in Comp Sci with a focus on Machine Learning",
    icon: React.createElement(LuGraduationCap),
    date: "Sept 2024 - Dec 2025",
  },

  {
    title: "Software Engineer OC1",
    location: "Oracle",
    description: "Returned to the OCI team after working with the Cloud team from a prior co-op internship",
    icon: React.createElement(LuGraduationCap),
    date: "June 2023 - Jan 2024",
  },
  {
    title: "Graduation",
    location: "University of Virginia",
    description: "Graduated from the University of Virginia with a degree in Economics and Computer Science",
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
    title: "Software Engineer Intern",
    location: "Payment Labs",
    description: "Created a mobile-first landing page for MALLO, resulting in a 20% increase in web traffic and 10% higher conversion rates",
    icon: React.createElement(FaCode),
    date: "June - Aug 2022",
  },
  {
    title: "Product Management Intern",
    location: "DataLemur",
    description: "Co-led the early-stage development of a SQL-learning platform in collaboration with Kernelics",
    icon: React.createElement(AiOutlineConsoleSql),
    date: "Jan - May 2022",
  },
  {
    title: "Investment Banking Intern",
    location: "Morgan Stanley",
    description: "Built out DCF models and conducted comprehensive research on emerging TMT trends",
    icon: React.createElement(RiBankFill),
    date: "June - Aug 2021",
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