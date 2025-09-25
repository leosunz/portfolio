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
          A software engineer with 15 years of experience.
          Solid foundation in computer science, capable of handling large-scale applications with advanced algorithms and data structures, designing scalable systems in micro-services, and managing major cloud services, i.e. Amazon Web Services (AWS) and Google Cloud Platform (GCP). Always aim to pick the right tools and skills in the right moment, with team-first communications.
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
