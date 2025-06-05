import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiGraphql } from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';

const Hero = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const shapes = ['circle', 'square', 'triangle', 'star'];

  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden text-gray-900 dark:text-white">
      {/* Animated background shapes */}
      {Array.from({ length: 12 }).map((_, index) => {
        const shape = shapes[index % shapes.length];
        const size = Math.random() * 60 + 20;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;

        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              width: size,
              height: size,
              borderRadius: shape === 'circle' ? '50%' : shape === 'square' ? '5%' : shape === 'triangle' ? '50%' : '50%',
              background: `hsla(${Math.random() * 60 + (shape === 'star' ? 30 : 200)}, 70%, 60%, 0.1)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: shape === 'triangle' ? 'rotate(45deg)' : 'none',
              opacity: 0.7
            }}
            animate={{
              y: shape === 'triangle' ? [0, -20, 0] : [0, -30, 0],
              x: shape === 'star' ? [0, 10, 0] : [0, 0, 0],
              rotate: shape === 'star' ? [0, 360] : [0, 0],
              scale: shape === 'circle' ? [1, 1.1, 1] : [1, 1, 1]
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              repeatType: "reverse",
              delay: delay,
              ease: "easeInOut"
            }}
          />
        );
      })}

      <div className="relative z-10 mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
        >
          Hi, I'm{' '}
          <motion.span
            className="antialiased italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500 dark:from-amber-300 dark:to-amber-400"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            whileHover={{
              background: "linear-gradient(to right, #FBBF24, #F59E0B, #D97706)",
              textShadow: "0 0 8px rgba(245, 158, 11, 0.5)"
            }}
          >
            Himanshu Chauhan
          </motion.span>
          ,<br />
          Yet another{' '}
          <motion.span
            className="antialiased italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700 dark:from-gray-300 dark:to-gray-500"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            whileHover={{
              background: "linear-gradient(to right, #D1D5DB, #6B7280, #374151)",
              textShadow: "0 0 8px rgba(107, 114, 128, 0.5)"
            }}
          >
            frontend
          </motion.span>{' '}
          <br />
          <motion.span
            className="antialiased italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-600"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            whileHover={{
              background: "linear-gradient(to right, #9CA3AF, #6B7280, #374151)",
              textShadow: "0 0 8px rgba(75, 85, 99, 0.5)"
            }}
          >
            developer.
          </motion.span>
        </motion.h1>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-10 cursor-grab"
          variants={itemVariants}
        >
          {[
            { icon: <FaReact className="text-amber-500 dark:text-amber-400" />, text: "React" },
            { icon: <FaNodeJs className="text-green-500 dark:text-green-400" />, text: "Node.js" },
            { icon: <SiTypescript className="text-blue-500 dark:text-blue-400" />, text: "TypeScript" },
            { icon: <SiGraphql className="text-pink-500 dark:text-pink-400" />, text: "GraphQL" },
            { icon: <FaDatabase className="text-amber-500 dark:text-amber-400" />, text: "MongoDB" }
          ].map((item, index) => (
            <motion.div
              key={index}
              drag
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="px-4 py-2 rounded-full shadow-sm text-sm font-medium flex items-center gap-2 dark:bg-white/10 bg-gray-100 backdrop-blur-sm dark:border-white/20 border-gray-200">
                {item.icon} {item.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
