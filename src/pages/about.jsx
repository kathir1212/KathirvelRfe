import React from 'react';
import Person from '../assets/person.webp';
import { motion } from 'framer-motion';
import { fadeIn } from '../animation/variants'; // Make sure fadeIn is correctly exported

function AboutMe() {
  return (
    <div className="bg-slate-800 py-16 px-6 lg:px-32">
      {/* Title with fade in from bottom */}
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image with fade from left */}
        <motion.div
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="w-full md:w-1/2"
        >
          <img
            src={Person}
            alt="Kathirvel R"
            className="rounded-2xl w-full max-w-md mx-auto"
          />
        </motion.div>

        {/* Text with fade from right */}
        <motion.div
          variants={fadeIn('right', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="w-full text-center md:text-left"
        >
          <p className="text-gray-400 mb-6 text-lg font-semibold">
            I’m a Full Stack Developer specialized in the MERN stack (MongoDB, Express.js, ReactJS, and Node.js), with a strong foundation in HTML, CSS, JavaScript, Tailwind CSS, ReactJS, NodeJS, ExpressJS, MongoDB, Mongoose and MySQL.
          </p>
          <p className="text-gray-400 mb-6 text-lg font-semibold">
            I’m passionate about building user-friendly, innovative, and scalable web applications that deliver seamless user experiences. I enjoy solving real-world problems by turning ideas into functional, performant solutions.
          </p>
          <p className="text-gray-400 mb-6 text-lg font-semibold">
            Currently, I’m expanding my knowledge in web development and seeking opportunities in organizations that value creativity, innovation, and tech-driven growth.
          </p>
          <p className="text-[#80ed99] font-bold">Let’s build something great together.</p>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutMe;
