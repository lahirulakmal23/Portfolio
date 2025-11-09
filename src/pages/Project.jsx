import React from "react";
import projectCoffe from "../assets/images/project-coffe.png";
import homeInterior from "../assets/images/homeInterior.png";
import nft from "../assets/images/nft.png";
import { FiGithub } from "react-icons/fi";
import { MdLiveTv } from "react-icons/md";

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
    image: projectCoffe ,
    description: "Responsive shopping website with cart, search, and product pages.",
    link: "#",
  },
  {
    title: "Admin Dashboard",
    image:  nft,
    description: "Interactive admin dashboard using React, Chart.js and Tailwind.",
    link: "#",
  },
    {
    title: "Admin Dashboard",
    image:  nft,
    description: "Interactive admin dashboard using React, Chart.js and Tailwind.",
    link: "#",
  },

];

const Projects = () => {
  return (
    <section className="w-full px-4 sm:px-10 lg:px-[%] py-16 bg-white">
      <h4 className="text-center text-sm sm:text-base text-gray-500 mb-2">My Work</h4>
      <h2 className="text-center text-3xl sm:text-5xl font-bold text-gray-800 mb-12">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{project.description}</p>
              <ul className="flex gap-3 ">
                <li className="px-3 py-1 bg-gray-200 rounded-md">html</li>
                <li className="px-3 py-1  bg-gray-200 rounded-md">css</li>
                <li className="px-3 py-1 bg-gray-200 rounded-md">js</li>
                <li className="px-3 py-1  bg-gray-200 rounded-md">tailwind</li>
              </ul>
              <div className="flex gap-3 text-gray-600">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mt-6 gap-3  hover:text-black"
               
              >
               <FiGithub className="w-6 h-6  "/> Code
              </a>
                <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mt-5 gap-3 hover:text-black"
               
              >
               < MdLiveTv  className="w-6 h-6 "/> Live demo
              </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
