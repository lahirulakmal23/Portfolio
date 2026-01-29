import React from "react";
import profile from "../assets/images/profile (2).png";
import { FiGithub } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { GoDownload } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Stars from "../components/canvas/Stars";

function Home() {
  return (
    <section
      id="hero"
      className=" w-full min-h-screen  dark:bg-[#11071F]  dark:text-white font-Outfit flex items-center justify-center bg-white  lg:mt-12bg-red-50"
    >
      <div className="text-center max-w-xl ">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type: "Spring", stiffness: 1000 }}
          className="w-42 h-42  mx-auto rounded-full mb-6 dark:bg-[radial-gradient(circle,_#8b3cff_0%,_#0a0015_100%)] bg-[radial-gradient(circle,_#8b3cff_0%,_#0a0015_100%)] "
        >
          <div>
            <img src={profile} alt="Profile" className="w-36  mx-auto mb-6 " />
          </div>
        </motion.div>
        {/* Name */}

        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl  md:text-1xl  text-gray-800 mb-3 dark:text-white  font-fa"
        >
          Hi , I'm Lahiru Lakmal
        </motion.h3>

        {/* Position */}
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className=" hero text-3xl sm:text-5xl text-lg-[66px] font-medium mb-4 dark:text-white"
        >
          Frontend web Developer based in Sri Lanka
        </motion.h1>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-gray-600 text-sm md:text-base leading-relaxed dark:text-slate-300"
        >
          Passionate about building responsive web interfaces using React.js,
          Tailwind CSS, and modern frontend technologies. Focused on
          performance, accessibility, and elegant user experience.
        </motion.p>
        {/* links */}
        <div className="flex items-center justify-center gap-3 mt-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="px-3 py-3 bg-gray-300  dark:bg-gray-400 rounded-full text-2xl opacity-70 cursor-pointer hover:opacity-100"
          >
            <a href="https://github.com/lahirulakmal23">
              <FiGithub />
            </a>
          </motion.div>
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            href=""
            className="px-3 py-3 bg-gray-300 dark:bg-gray-400 rounded-full text-2xl opacity-70 cursor-pointer hover:opacity-100"
          >
            <a>
              <LuLinkedin />
            </a>
          </motion.div>
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.5 }}
            href=""
            className="px-3 py-3  bg-gray-300 dark:bg-gray-400 rounded-full text-2xl opacity-70 cursor-pointer hover:opacity-100"
          >
            <a>
              <FiMail />
            </a>
          </motion.div>
        </div>
        <div className="flex mt-6 items-center justify-center gap-6 ">
          <div>
            <motion.a
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              href="/myprofile/public/resume.pdf"
              download
            >
              <button
                className="border px-8 py-2 rounded-full border-none 
               bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-wrap flex items-center gap-2  cursor-pointer hover:opacity-50"
              >
                resume <GoDownload />
              </button>
            </motion.a>
          </div>
          <div>
            <Link to="/Contact">
              <motion.button
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="border-1 px-8 py-2 rounded-full flex items-center gap-2  cursor-pointer hover:opacity-50"
              >
                Contact <FaArrowRightLong />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
