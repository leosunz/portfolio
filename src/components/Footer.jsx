// Footer.jsx
import React from 'react';
import { SectionWrapper } from '../hoc';
import { leetcode } from '../assets';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto text-center">
      <motion.div  variants={fadeIn("", "", 0.5, 0.75)}>
        <h1 className="text-2xl mb-6">Touch Me</h1></motion.div>
        <motion.div  variants={fadeIn("up", "spring", 0.3, 0.75)}>
          <div className="flex justify-center gap-8 space-x-6">
            <motion.div variants={fadeIn("left","spring",0.5,0.75)}>
            <a href="https://discord.com/users/leosunz" className="group">
              <i className="fab fa-discord text-3xl group-hover:text-yellow-200"></i>
            </a>
            </motion.div>
            <motion.div variants={fadeIn("left","spring",0.5,0.75)}>
            <a href="https://t.me/leosunz89" className="group">
              <i className="fab fa-telegram text-3xl group-hover:text-pink-500"></i>
            </a></motion.div>
            <a href="https://mail.google.com/mail/?view=cm&to=devsunleez@gmail.com" className="group">
              <i className="fab fa-google text-3xl group-hover:text-pink-500"></i>
            </a>
            <motion.div variants={fadeIn("right","spring",0.5,0.75)}>
            <a href="https://github.com/leosunz" className="group">
              <i className="fab fa-github text-3xl group-hover:text-gray-300"></i>
            </a></motion.div>
          </div>
        </motion.div>
        <motion.div variants={fadeIn("","",0.5,0.75)}>
        <p className="mt-6 text-gray-400">© 2025 Sun Lee. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default SectionWrapper(Footer," ") ;
