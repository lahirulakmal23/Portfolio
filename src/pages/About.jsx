import React from "react";
import manwhite from "../assets/images/man-white.png";
import { RiGraduationCapLine, RiProjectorLine } from "react-icons/ri";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import git from "../assets/images/social (1).png";
import figma from "../assets/images/figma (1).png";
import vscode from "../assets/images/Visual Studio Code (VS Code).png";
import tailwind from "../assets/images/Tailwind CSS.png";
import react from "../assets/images/physics (2).png";
import myslq from "../assets/images/mysql (1).png";
import github from "../assets/images/github-icon.png";
import next from "../assets/images/next1.png";
import node from "../assets/images/Node.js.png";
import jwt from "../assets/images/jwt-new.png";
import mongo from "../assets/images/MongoDB.png";
import docker from "../assets/images/Docker.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="w-full  min-h-screen  px-4 sm:px-10  dark:bg-[#11071F] lg:px-[8%] py-10 bg-white">
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-sm sm:text-base text-gray-600 mb-2 mt-8 dark:text-white"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="text-center text-3xl sm:text-5xl font-bold text-gray-800 mb-6  dark:text-white"
      >
        About Me
      </motion.h2>

      <motion
     
       className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        {/* Left Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto"
        >
          <img
            src={manwhite}
            alt="about"
            className="w-48 items-center sm:w-64 lg:w-80 lg:h-max rounded-md bg-gray-50"
          />
        </motion.div>

        <div className=" bg:dark absolute z-[0]  w-[60%] h-[60%] -right-[50%] rounded-full top-0 bg-purple-300/30  blur-3xl lg:block hidden"></div>

        <div className="absolute z-[0]  w-[60%] h-[60%] -left-[50%]  top-2/3 rounded-full  bg-purple-300/20  blur-3xl lg:block hidden "></div>

        {/* Right Content */}
        <div className="flex-1">
          <motion.p 
          initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 , delay: 0.5}}
          className="text-gray-700 mb-10 max-w-2xl text-sm sm:text-base leading-relaxed  dark:text-slate-300">
            I am currently a 3rd-year undergraduate specializing in Software Engineering at Sri Lanka Institute of Information Technology (SLIIT). I have successfully completed industry-grade web projects using MERN stack full-stack development. I am passionate about building scalable web applications, learning modern technologies, and solving real-world problems through software.
          </motion.p>

          {/* Cards */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 max-w-2xl  border-gray-400"
          >
            <motion className="border hover:dark:border-[#D420BF] border-gray-400 rounded-lg p-4 hover:-translate-y-1 duration-300 hover:shadow-md cursor-pointer dark:bg-[#1d1836]">
              <HiOutlineCodeBracket className="text-2xl text-purple-600" />
              <h3 className="my-2 font-semibold text-gray-800  dark:text-white">
                Languages
              </h3>
              <p className="text-gray-600 text-sm   dark:text-slate-300">
                HTML, CSS, Java, C, C++, PHP
              </p>
            </motion>
            <motion className="border border-gray-400 hover:dark:border-[#D420BF]  rounded-lg p-6 hover:-translate-y-1 duration-300 hover:shadow-md cursor-pointer dark:bg-[#1d1836]">
              <RiGraduationCapLine className="text-2xl text-blue-600" />
              <h3 className="my-4 font-semibold text-gray-800 dark:text-white ">
                Education
              </h3>
              <p className="text-gray-600 text-sm dark:text-slate-300">
                BSc in Computer Science
              </p>
            </motion>
            <motion className="border border-gray-400 hover:dark:border-[#D420BF]  rounded-lg p-6 hover:-translate-y-1 duration-300 hover:shadow-md cursor-pointer dark:bg-[#1d1836]">
              <RiProjectorLine className="text-2xl text-green-600" />
              <h3 className="my-4 font-semibold text-gray-800 dark:text-white ">
                Projects
              </h3>
              <p className="text-gray-600 text-sm dark:text-slate-300">
                E-commerce, UI clones, dashboards
              </p>
            </motion>
          </motion.ul>

          {/* Skills */}
          
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-2xl sm:text-2xl mt-5 text-gray-700  dark:text-white font-bold "
          >
           My Skills
          </motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6 mt-4"
          >
           
            {[ next,react, vscode, figma, tailwind, git,github,node,jwt, myslq, mongo, docker].map((img, idx) => (
              <li
                wli
                key={idx}
                className="flex items-center justify-center w-12 h-12 sm:w-10 sm:h-12 sm:w-12 p-1
                border border-gray-400 rounded-sm cursor-pointer hover:-translate-y-1 duration-300"
              >
                <img
                  src={img}
                  alt="skill"
                  className="w-10 h-10 object-contain"
                />
              </li>
            ))}
          </motion.ul>
          
        </div>
      </motion>
    </section>
  );
};

export default About;
