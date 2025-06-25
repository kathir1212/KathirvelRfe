import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../animation/variants'; // ✅ make sure path is correct

function Skill() {
  const skills = [
    { name: 'HTML5', img: 'https://cdn.worldvectorlogo.com/logos/html-1.svg' },
    { name: 'CSS3', img: 'https://cdn.worldvectorlogo.com/logos/css-3.svg' },
    { name: 'JavaScript', img: 'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg' },
    { name: 'MongoDB', img: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' },
    { name: 'Express.js', img: 'https://www.pngfind.com/pngs/m/136-1363736_express-js-icon-png-transparent-png.png' },
    { name: 'React.js', img: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
    { name: 'Node.js', img: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' },
    { name: 'Tailwind CSS', img: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg' },
    { name: 'GitHub', img: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg' },
  ];

  return (
    <div className="py-20 px-[5%] text-white">
      <motion.h1
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="text-4xl font-bold text-center mb-12 text-white"
      >
        My Tech Stack
      </motion.h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={fadeIn('up', index * 0.1 + 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="group text-gray-400 bg-slate-800 hover:bg-[#80ed99] 
                       rounded-lg shadow-md hover:shadow-xl 
                       transition duration-300 
                       flex flex-col items-center p-6 cursor-pointer"
          >
            <img
              src={skill.img}
              alt={skill.name}
              className="w-20 h-20 mb-4 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <h2 className="text-lg font-semibold transition-colors duration-300 group-hover:text-black">
              {skill.name}
            </h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skill;
