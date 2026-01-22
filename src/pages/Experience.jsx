import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constance/Constance";
import useDarkMode from "../hooks/useDarkMode";


const ExperienceCard = ({ exp }) => {
  const [theme] = useDarkMode();
const isDark = theme === "dark";
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={exp.duration}
      iconStyle={{ background: "#232631" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={exp.logo}
            alt={exp.company}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{exp.role}</h3>
        <p className="text-gray-300 text-[16px]">{exp.company}</p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2 text-gray-300">
        {exp.responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
const Experience = () => {
  return (
    <div className="dark:bg-[#11071F] px-4 sm:px-10 lg:px-[8%] py-20 bg-white ">

      <motion.div variants={{}} >
       
        <p className="text-sm text-gray-500 dark:text-white mb-2 text-center">
          What I have done so far
        </p> 
        <h2 className="text-3xl sm:text-5xl font-bold text-black  dark:text-white text-center ">
        
          Work Experience
        </h2>
      </motion.div>
      <div className="mt-10 flex flex-col ">
     
        <VerticalTimeline >
         
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};
export default Experience;
