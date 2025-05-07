import { motion, useScroll, useTransform } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowRight, FiChevronDown } from 'react-icons/fi';
import React, { useRef } from 'react';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiGraphql } from 'react-icons/si';

const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start']
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com/himanshuch8055', label: 'GitHub' },
    { icon: <FiLinkedin />, href: 'https://linkedin.com/in/himanshuch8055', label: 'LinkedIn' },
    { icon: <FiTwitter />, href: 'https://twitter.com/himanshuch8055', label: 'Twitter' },
    { icon: <FiMail />, href: 'mailto:himanshuch8055@gmail.com', label: 'Email' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section ref={targetRef} className="relative flex items-center justify-center min-h-screen">
      <div className="mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            className="inline-block px-4 py-2 mb-6 rounded-full bg-blue-100 dark:bg-blue-900/30 backdrop-blur-sm cursor-grab"
            variants={itemVariants}
          >
            <p className="text-blue-600 dark:text-blue-400 font-mono text-sm md:text-base font-medium">
              Hi, I'm Himanshu Chauhan 👋
            </p>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
            variants={itemVariants}
          >
            Building Digital
            <br />
            <span className="text-gray-800 dark:text-gray-200">Experiences</span>
          </motion.h1>

          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-10 cursor-grab"
            variants={itemVariants}
          >
              <motion.div 
                drag
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              >
                <span className="px-4 py-2 rounded-full bg-white dark:bg-gray-800 shadow-sm text-sm font-medium flex items-center gap-2">
                  <FaReact className="text-blue-500" /> React
                </span>
              </motion.div>
              <motion.div 
                drag
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              >
                <span className="px-4 py-2 rounded-full bg-white dark:bg-gray-800 shadow-sm text-sm font-medium flex items-center gap-2">
                  <FaNodeJs className="text-green-500" /> Node.js
                </span>
              </motion.div>
              <motion.div 
                drag
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              >
                <span className="px-4 py-2 rounded-full bg-white dark:bg-gray-800 shadow-sm text-sm font-medium flex items-center gap-2">
                  <SiTypescript className="text-blue-600" /> TypeScript
                </span>
              </motion.div>
              <motion.div 
                drag
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              >
                <span className="px-4 py-2 rounded-full bg-white dark:bg-gray-800 shadow-sm text-sm font-medium flex items-center gap-2">
                  <SiGraphql className="text-blue-600" /> GraphQL
                </span>
              </motion.div>
              <motion.div 
                drag
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              >
                <span className="px-4 py-2 rounded-full bg-white dark:bg-gray-800 shadow-sm text-sm font-medium flex items-center gap-2">
                  <FaDatabase className="text-blue-600" /> MongoDB
                </span>
              </motion.div>
          </motion.div>

          <motion.p
            className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
            variants={itemVariants}
          >
            I'm a Full-Stack Developer passionate about crafting exceptional digital experiences. With expertise in modern web technologies, I build scalable applications that solve real-world problems while delivering beautiful, intuitive user interfaces.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
            <a
              href="#projects"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:opacity-90 transition-all hover:shadow-lg"
            >
              View My Work
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-lg shadow hover:shadow-md transition-all duration-300 inline-flex items-center justify-center"
            >
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-6 mt-16"
            variants={itemVariants}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                drag
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-sm hover:shadow-md text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                aria-label={social.label}
              >
                <span className="text-xl">{social.icon}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
