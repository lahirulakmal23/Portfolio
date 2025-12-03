import React from "react"; 
import profile from "../assets/images/profile (2).png";
import { FiGithub } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { GoDownload } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Home() {
  
  return (
    <section id="hero" className=" w-full min-h-screen   dark:bg-gray-900  dark:text-white font-Outfit flex items-center justify-center bg-white  lg:mt-8">
      <div className="text-center max-w-xl ">
        {/* Profile Image */}
        <div className=""> 
        <img
          src={profile}
          alt="Profile"
          className="w-50 h-50 mx-auto rounded-md  object-cover shadow-md mb-6"
        />
        </div>
        {/* Name */}
        <h3 className="text-xl  md:text-1xl  text-gray-800 mb-3 dark:text-white">
          Hi , I'm Lahiru Lakmal
        </h3>

        {/* Position */}
        <h1 className=" hero text-3xl sm:text-5xl text-lg-[66px] font-medium mb-4 dark:text-white">
          Frontend web  Developer based in Sri Lanka
        </h1>

        {/* Bio */}
        <p className="text-gray-600 text-sm md:text-base leading-relaxed dark:text-slate-300">
          Passionate about building responsive web interfaces using React.js, Tailwind CSS, and modern frontend technologies. Focused on performance, accessibility, and elegant user experience.
        </p>
        {/* links */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="px-3 py-3 bg-gray-300  dark:bg-gray-400 rounded-full text-2xl opacity-70 cursor-pointer hover:opacity-100">
              <a href="https://github.com/lahirulakmal23"><FiGithub  /></a>
            </div>
            <div className="px-3 py-3 bg-gray-300 dark:bg-gray-400 rounded-full text-2xl opacity-70 cursor-pointer hover:opacity-100">
               <LuLinkedin/>
            </div>
           <div className="px-3 py-3  bg-gray-300 dark:bg-gray-400 rounded-full text-2xl opacity-70 cursor-pointer hover:opacity-100">
              <a href="lahirulakmal893@gmail.com">< FiMail /></a>
           </div>
            
          </div>
          <div className="flex mt-8 items-center justify-center gap-6 ">
            <div>
              <a href="/myprofile/public/resume.pdf" download>
              <button className="border px-8 py-2 rounded-full border-none 
               bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-wrap flex items-center gap-2  cursor-pointer hover:opacity-50">resume < GoDownload /></button>
              </a>
            </div>
            <div>
              <Link to="/Contact">  
              <button className="border-1 px-8 py-2 rounded-full flex items-center gap-2  cursor-pointer hover:opacity-50">Contact  < FaArrowRightLong /></button>
              </Link>
            </div>
          </div>
      </div>
    </section>
  );
}

export default Home;
