import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../animation/variants'; // ✅ Ensure this file exists
import movieimage from '../assets/myproject.png';

function Myproject() {
  return (
    <div className="bg-slate-800 py-4">
      {/* Heading */}
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="text-center mt-[7%]"
      >
        <h1 className="text-4xl font-bold text-white mb-10">My Projects</h1>
      </motion.div>

      {/* Project Content */}
      <div className="flex flex-col mb-[10%] md:flex-row items-center justify-between mx-[10%] p-8 bg-slate-900 shadow-lg rounded-xl">
        {/* Left Side - Text */}
        <motion.div
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="md:w-1/2 w-full md:pr-8"
        >
          <h2 className="text-3xl font-bold text-white mb-4">🎬 Movie Booking App</h2>
          <p className="text-gray-400 dark:text-gray-300 mb-6 text-lg font-semibold text-justify">
            A movie ticket booking web application built using the MERN stack.
            Users can browse movies, view showtimes, book seats, and pay online.
          </p>

          <a
            href="https://github.com/kathir1212/moviebookingfe/tree/moviebookingfe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-5 py-2 rounded-lg transition"
          >
            🔗 View on GitHub
          </a>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          variants={fadeIn('right', 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="md:w-1/2 w-full mt-8 md:mt-0"
        >
          <img
            src={movieimage}
            alt="Movie App Screenshot"
            className="rounded-lg shadow-md w-full"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Myproject;
