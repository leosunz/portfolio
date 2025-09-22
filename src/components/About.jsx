import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants/index';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <div className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("top", "Spring", 0.1 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow'>
        <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt='tittle'
          className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </div>
  );
};

const About = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <div className='w-5 h-[100px] rounded-full' />
      </div>

      <motion.div
        id='about'
        variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Summary
        </h2>
      </motion.div>
      <motion.p  variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] about'>
        A results-driven Full-Stack Developer with 15 years of progressive 
        experience and hands-on practices specializing in SDLC, cloud native architectures. Expert in building not only responsive, user-friendly frontends, but also scalable backend services 
        using Node.js (Express), Python (Django), Java (Spring Boot), C# (.NET), Golang, C/C++.
        Seeking to apply extensive technical knowledge to solve complex 
        challenges in a forward-thinking environment. Let's collaborate to bring your ideas to life!
      </motion.p>
      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About,"about");
