import React from "react";
import projectCoffe from "../assets/images/project-coffe.png";
import homeInterior from "../assets/images/homeInterior.png";
import nft from "../assets/images/nft.png";
import { FiGithub } from "react-icons/fi";
import { MdLiveTv } from "react-icons/md";
import { motion } from "framer-motion";

// Dummy project data (replace with real data or props)
const projects = [
  {
    title: "Portfolio Website",
    image: homeInterior,
    description: "A personal portfolio built with React and Tailwind CSS.",
    link: "#",
  },
  {
    title: "E-Commerce App",
    image: projectCoffe,
    description: "Responsive shopping website with cart, search, and product pages.",
    link: "#",
  },
  {
    title: "Admin Dashboard",
    image: nft,
    description: "Interactive admin dashboard using React, Chart.js and Tailwind.",
    link: "#",
  },
  {
    title: "Admin Dashboard",
    image: nft,
    description: "Interactive admin dashboard using React, Chart.js and Tailwind.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section  
      
    className="w-full px-4 sm:px-10 lg:px-[%] py-16 bg-white dark:bg-[#11071F]">
      <motion.h4
         initial={{  y:-20,opacity: 0 }}
          whileInView={{ y:0,opacity: 1 }}
          transition={{ duration: 0.5,delay:0.5 }} className="text-center text-sm sm:text-base text-gray-500 mb-2 dark:text-white">
        My Work
      </motion.h4>
      <motion.h2 
       initial={{  y:-20,opacity: 0 }}
          whileInView={{ y:0,opacity: 1 }}
          transition={{ duration: 0.5,delay:0.3 }}
      className="text-center text-3xl sm:text-5xl font-bold text-gray-800 mb-12 dark:text-white">
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 lg:mx-20">
        {projects.map((project, index) => (
          <motion.div
                initial={{opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6,delay:0.9 }}


            key={index}
            className="rounded-xl overflow-hidden dark:bg-[#1d1836]
            "
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-xl"
            />

            {/* Content */}
            <div className="p-6 rounded-b-xl dark:bg-[#1d1836] bg:wh">
              <h3 className="text-xl font-semibold dark:text-white  text-black mb-2">
                {project.title}
              </h3>

              <p className="dark:text-slate-300 text-sm mb-4 text-gray-500">
                {project.description}
              </p>

              {/* Tags */}
              <ul className="flex gap-3">
                <li className="px-3 py-1 bg-gray-300 text-white dark:bg-white/10 dark:text-purple-300 rounded-sm">html</li>
                <li className="px-3 py-1 bg-white/10 dark:text-purple-300 rounded-sm">css</li>
                <li className="px-3 py-1 bg-white/10 dark:text-purple-300 rounded-sm">js</li>
                <li className="px-3 py-1 bg-white/10 dark:text-purple-300 rounded-sm">tailwind</li>
              </ul>

              {/* Buttons */}
              <div className="flex gap-5 text-slate-300">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-black/60 hover:text-black/100 mt-6 dark:text-gray-400 gap-2 dark:hover:text-white transition"
                >
                  <FiGithub className="w-6 h-6" /> Code
                </a>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-black/60 hover:text-black/100  dark:text-gray-400 mt-6 gap-2 dark:hover:text-white transition"
                >
                  <MdLiveTv className="w-6 h-6 " /> Live Demo 
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
