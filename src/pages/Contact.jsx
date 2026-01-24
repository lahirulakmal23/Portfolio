import React, { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import Stars from "../components/canvas/Stars";
import StarsCanvas from "../components/canvas/Stars";



const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "4f02549a-df32-41a9-8dcb-08a48e44a82f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert("✅ Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      alert("❌ " + data.message);
    }
  };
  return (
    <section className="w-full  min-h-screen px-4 sm:px-10 lg:px-[10%] py-16 bg-gray-50 scroll-mt-20 dark:bg-[#11071F] ">
      <motion.h4
         initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3}}
       className="text-center text-sm sm:text-base text-gray-500 mb-2 dark:text-white mt-10">
        Connect With Me
      </motion.h4>
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5}}

       className="text-center text-3xl sm:text-5xl font-bold text-gray-800 mb-12 dark:text-white">
        Get in Touch
      </motion.h2>

     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left: Contact Info */}
     <motion.div 
         initial={{  y:-50,opacity: 0 }}
            whileInView={{ y:0,opacity: 1 }}
            transition={{ duration: 0.6, delay: 1}}
     className="  p-6 rounded-lg shadow-md dark:bg-[#1d1836]">
    <h3 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-white ">Let's talk</h3>
    <p className="text-gray-600 mb-4 text-sm leading-relaxed dark:text-white">
      Feel free to reach out to me about collaborations, projects, or just to say hi!
    </p>

    <ul className="space-y-4 text-sm text-gray-700">
      {/* Email */}
      <li className="flex items-center gap-4">
        <span className="p-2 bg-purple-100 text-purple-600 rounded-full text-2xl">
          <MdOutlineMailOutline />
        </span>
        <p className="dark:text-white">lahirulakmal893@gmail.com</p>
      </li>

      {/* Phone */}
      <li className="flex items-center gap-4">
        <span className="p-2 bg-green-100 text-green-600 rounded-full text-2xl">
          <IoCallOutline />
        </span>
        <p className="dark:text-white">+94 764373288</p>
      </li>

      {/* Location */}
      <li className="flex items-center gap-4">
        <span className="p-2 bg-blue-100 text-blue-600 rounded-full text-2xl">
          <CiLocationOn />
        </span>
        <p className="dark:text-white">Colombo, Sri Lanka</p>
      </li>
    </ul>
  </motion.div>

        {/* Right: Contact Form */}
        <div className="">
             <motion.form   
              initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5}}
             onSubmit={onSubmit} className="max-w-2xl w-full mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <motion.input 
               initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.6}}
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="p-3 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-purple-400 bg-white mb-6  dark:bg-[#1d1836] dark:text-purple-300"
            />
            <motion.input
                initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6}}
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="p-3 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-purple-400 bg-white mb-6 dark:bg-[#1d1836] dark:text-purple-300"
            />
          </div>

          <motion.textarea
              initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.3, delay: 0.6}}
            name="message"
            rows={6}
            placeholder="Enter your message"
            required
            className="w-full p-4 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-purple-400 bg-white mb-6 dark:bg-[#1d1836] dark:text-purple-300"
          ></motion.textarea>

          <motion.button
           
            whileHover={{ scale:1.05 }}
            transition={{ duration: 0.3}}
            type="submit"
            className="py-3 px-8 flex items-center justify-center bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white font-semibold rounded-full hover:opacity-90 transition-all duration-300 mx-auto"
          >
            Submit Now
          </motion.button>

          {/* ✅ Show result */}
          {result && (
            <p className="text-sm text-center mt-4 text-gray-700">{result}</p>
          )}
        </motion.form>
        </div>
        <motion.div>
        <StarsCanvas/>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
