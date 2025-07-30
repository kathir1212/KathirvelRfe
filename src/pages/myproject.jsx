import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../animation/variants';
import movieimage from '../assets/myproject.png';
import groceryimage from '../assets/Grocery.png';
import ecommerceimage from '../assets/eccomerce.png';

function Myproject() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (project) => {
    setOpenDropdown(openDropdown === project ? null : project);
  };

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

      {/* Reusable Project Card */}
      {[
        {
          title: "🎬 Movie Booking App",
          description:
            "A movie ticket booking web application built using the MERN stack. Users can browse movies, view showtimes, book seats, and pay online.",
          frontendLink: "https://github.com/kathir1212/moviebookingfe/tree/moviebookingfe",
          backendLink: "https://github.com/kathir1212/moviebookingserver/tree/moviebookingsystembe",
          liveLink: "https://moviebookingsystem.netlify.app/login",
          image: movieimage,
          key: "movie",
        },
        {
          title: "🛒 Grocery Delivery App",
          description:
            "A full-stack grocery shopping app built with the MERN stack. Users can browse categories, add items to cart, and place orders. Includes admin dashboard for product and order management.",
          frontendLink: "https://github.com/kathir1212/gorcerywebsite/tree/develop",
          backendLink: "https://github.com/kathir1212/newgroceryserver/tree/server",
          liveLink: "https://kathirvelmarketapp.netlify.app/",
          image: groceryimage,
          key: "grocery",
        },
        {
          title: "🛍️ StyleCart App",
          description:
            "A modern and responsive e-commerce website developed using the MERN stack. Features include product listings,  cart updates, secure Stripe payments, order history, and an admin panel , products, and orders.",
          frontendLink: "https://github.com/kathir1212/eccomercerepo",
          backendLink: "https://github.com/kathir1212/eccomercerepobe/tree/develop",
          liveLink: "https://eccomerceapp.netlify.app/",
          image: ecommerceimage,
          key: "ecommerce",
        },
      ].map((project, index) => (
        <div
          key={index}
          className="flex flex-col mb-[6%] md:flex-row items-center justify-between mx-[10%] p-8 bg-slate-900 shadow-lg rounded-xl"
        >
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="md:w-1/2 w-full md:pr-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
            <p className="text-gray-400 dark:text-gray-300 mb-6 text-lg font-semibold text-justify">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-4 relative">
              <button
                onClick={() => toggleDropdown(project.key)}
                className="bg-black text-white px-5 py-2 rounded-lg transition"
              >
                🔗  GitHub  ▾
              </button>
              {openDropdown === project.key && (
                <div className="absolute top-12 left-0 bg-white text-black rounded-md shadow-md z-10">
                  <a
                    href={project.frontendLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-6 py-2 hover:bg-gray-200"
                  >
                    Frontend
                  </a>
                  <a
                    href={project.backendLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Backend
                  </a>
                </div>
              )}
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#80ed99] text-black px-5 py-2 font-semibold rounded-lg transition"
              >
                Live Demo
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('right', 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="md:w-1/2 w-full mt-8 md:mt-0"
          >
            <img
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              className="rounded-lg shadow-md w-full"
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default Myproject;
