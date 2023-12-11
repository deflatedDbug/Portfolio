import React from "react";
import { LuGraduationCap } from "react-icons/lu";

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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated UVA",
    location: "Charlottesville, VA",
    description: "I graduated in May of 2023 in Economics & Computer Science",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
];
