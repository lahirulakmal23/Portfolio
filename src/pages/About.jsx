import React from "react";
import manwhite from "../assets/images/man-white.png";
import { RiGraduationCapLine, RiProjectorLine } from "react-icons/ri";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import git from "../assets/images/social (1).png";
import figma from "../assets/images/figma (1).png";
import vscode from "../assets/images/Visual Studio Code (VS Code).png";
import tailwind from "../assets/images/Tailwind CSS.png";
import react from "../assets/images/physics (2).png";
import myslq from "../assets/images/mysql (1).png"

const About = () => {
  return (
    <section className="w-full px-4 sm:px-10 lg:px-[8%] py-10 bg-white">
      <h4 className="text-center text-sm sm:text-base text-gray-600 mb-2">Introduction</h4>
      <h2 className="text-center text-3xl sm:text-5xl font-bold text-gray-800 mb-10">About Me</h2>

      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        {/* Left Image */}
        <div className="relative mx-auto">
          <img src={manwhite} alt="about" className="w-48 items-center sm:w-64 lg:w-80 lg:h-max rounded-2xl bg-gray-50" />
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <p className="text-gray-700 mb-10 max-w-2xl text-sm sm:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit eum rerum in aliquid nihil
            soluta laudantium, dignissimos ipsam eos aliquam commodi exercitationem velit quidem veritatis?
          </p>

          {/* Cards */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 max-w-2xl">
            <li className="border border-gray-300  rounded-xl p-4 hover:-translate-y-1 duration-300 hover:shadow-md cursor-pointer">
              <HiOutlineCodeBracket className="text-2xl text-purple-600" />
              <h3 className="my-2 font-semibold text-gray-800">Languages</h3>
              <p className="text-gray-600 text-sm">HTML, CSS, Java, C, C++, PHP</p>
            </li>
            <li className="border border-gray-300 rounded-xl p-6 hover:-translate-y-1 duration-300 hover:shadow-md cursor-pointer">
              <RiGraduationCapLine className="text-2xl text-blue-600" />
              <h3 className="my-4 font-semibold text-gray-800">Education</h3>
              <p className="text-gray-600 text-sm">BSc in Computer Science</p>
            </li>
            <li className="border border-gray-300 rounded-xl p-6 hover:-translate-y-1 duration-300 hover:shadow-md cursor-pointer">
              <RiProjectorLine className="text-2xl text-green-600" />
              <h3 className="my-4 font-semibold text-gray-800">Projects</h3>
              <p className="text-gray-600 text-sm">E-commerce, UI clones, dashboards</p>
            </li>
          </ul>

          {/* Skills */}
          <h4 className="text-2xl sm:text-2xl mt-5 text-gray-700 font-bold">Skills</h4>
          <ul className="flex flex-wrap items-center gap-4 sm:gap-6 mt-4">
            {[react, vscode, figma, tailwind, git, myslq].map((img, idx) => (
              <li
                key={idx}
                className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-14 p-2 
                border border-gray-300 rounded-lg cursor-pointer hover:-translate-y-1 duration-300"
              >
                <img src={img} alt="skill" className="w-full h-full object-contain" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
