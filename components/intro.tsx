"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useTypewriter from "@/hooks/useTypewriter";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Intro() {
  const initialTextPart1 = "Hello, I'm ";
  const name = "Subin,";
  const initialTextPart2 = " a Software Engineer!";
  const [typedTextPart1, isTypingCompletePart1] = useTypewriter(
    initialTextPart1,
    25
  );
  const [typedName, isTypedNameComplete] = useTypewriter(
    name,
    25,
    isTypingCompletePart1
  );
  const [typedTextPart2, isTypingCompletePart2] = useTypewriter(
    initialTextPart2,
    25,
    isTypedNameComplete
  );

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/pf-pic.jpg"
              alt="Profile Pic"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-28 w-28 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
            <motion.span
              className="absolute bottom-0 right-0 text-4xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              👋
            </motion.span>
          </motion.div>
        </div>
      </div>
      <motion.h1
        className="mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {typedTextPart1}
        {isTypingCompletePart1 && (
          <span className="font-bold underline">{typedName}</span>
        )}
        {isTypedNameComplete && typedTextPart2}
      </motion.h1>
      {isTypingCompletePart2 && (
        <motion.h2
          className="mb-20 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 125 }}
        >
          I have experience in{" "}
          <span className="font-bold"> Finance, Software Development, </span>{" "}
          and <span className="font-bold"> Product Management.</span> I build
          apps in <span className="underline">React & NextJS</span>, and I have
          an interest in <span className="italic font-bold">Web3 </span> and{" "}
          <span className="italic font-bold"> Crypto Forensics.</span>
        </motion.h2>
      )}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 2.25,
        }}
      >
        <Link
          href="https://calendly.com/subinlebow/30min"
          target="_blank"
          className="group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here <BsArrowRight />
        </Link>
        <a
          className="group border bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-white active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/Resume.pdf"
          download
        >
          Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="hover:scale-150 active:scale-125 transition"
          href="https://linkedin.com/in/subinlebow"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="hover:scale-150 active:scale-125 transition"
          href="https://github.com/deflatedDbug"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
