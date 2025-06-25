import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import { fadeIn } from '../animation/variants'; // ✅ Make sure this path is correct

function Herosection({ scrollToSection, refs }) {
  return (
    <div className="text-white flex-wrap py-32 relative overflow-hidden">
      <div className="text-center">

        {/* Headings */}
        <motion.h1
          variants={fadeIn('up', 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-2xl lg:text-3xl mb-2 font-bold"
        >
          Hello There!
        </motion.h1>

        <motion.h1
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl mb-2 font-bold"
        >
          I'm Kathirvel R
        </motion.h1>

        <motion.h1
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-2xl lg:text-2xl mb-6 font-bold"
        >
          I'm a <span className="text-[#80ed99]">Full Stack Developer</span>
        </motion.h1>

        {/* Social Media Icons */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full h-auto py-8 flex justify-center gap-7 flex-wrap text-white text-[32px]"
        >
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#80ed99] transition-transform duration-300 hover:-translate-y-2"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#80ed99] transition-transform duration-300 hover:-translate-y-2"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="mailto:your-email@example.com"
            className="hover:text-[#80ed99] transition-transform duration-300 hover:-translate-y-2"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </motion.div>

        {/* Resume & Contact Buttons */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex gap-5 justify-center"
        >
          <button
            type="button"
            className="font-bold bg-black text-white shadow-lg rounded-lg text-sm px-5 py-2.5 mb-2"
            onClick={() => scrollToSection(refs.contactRef)}
          >
            Contact Me
          </button>
          <a
            href="/kathirvelresume.pdf"
            download
            className="font-bold bg-[#80ed99] text-black shadow-lg rounded-lg text-sm px-5 py-2.5 mb-2"
          >
            Download CV
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Herosection;
