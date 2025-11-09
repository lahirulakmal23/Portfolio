import React from "react";
import { FaCode, FaLaptopCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-2xl text-purple-600" />,
    title: "Web Development",
    description: "Build modern and scalable web applications using React, Tailwind CSS, and JavaScript.",
  },
  {
    icon: <FaPaintBrush className="text-2xl text-pink-500" />,
    title: "UI/UX Design",
    description: "Design user-friendly interfaces with Figma and create seamless user experiences.",
  },
  {
    icon: <FaLaptopCode className="text-2xl text-blue-600" />,
    title: "Frontend Engineering",
    description: "Convert designs to pixel-perfect responsive interfaces with reusable components.",
  },
  {
    icon: <FaMobileAlt className="text-2xl text-green-500" />,
    title: "Mobile Optimization",
    description: "Ensure websites are mobile-friendly and perform well on all screen sizes.",
  },
];

const Services = () => {
  return (
    <section className="w-full px-4 sm:px-10 lg:px-[8%] py-16 bg-gray-50">
      <h4 className="text-center text-sm sm:text-base text-gray-500 mb-2">What I Offer</h4>
      <h2 className="text-center text-3xl sm:text-5xl  text-gray-800 mb-4">Services</h2>
      <p className="text-center mb-10 text-sm opacity-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quos minus vero magni iste facilis! Temporibus, quas aliquam maiores delectus cupiditate magni soluta perspiciatis expedita, beatae nihil architecto nam molestias.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 text-center"
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-md font-medium text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
