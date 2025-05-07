import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'JavaScript (ES6+)',
    'React.js',
    'Next.js',
    'Node.js',
    'Express.js',
    'TypeScript',
    'MongoDB',
    'SQL',
    'Tailwind CSS',
    'Git & GitHub',
    'GSAP',
    'Shery.js',
    'React Flow',
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="about" >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center mb-12">
            <span className="text-blue-600 dark:text-blue-400">01.</span> About Me
          </h2>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left: About Text */}
            <div className="w-full lg:w-1/2 text-gray-700 dark:text-gray-300">
              <p className="text-lg mb-6">
                I'm Himanshu Chauhan, a passionate Full Stack Developer with hands-on experience in building scalable web applications.
                From frontend finesse to backend logic, I enjoy crafting digital solutions that are efficient, intuitive, and user-focused.
              </p>
              <p className="text-lg mb-6">
                I've interned as a Software Developer at <strong>Uniffy</strong> and worked with <strong>Uptoskills</strong> as a Web Developer,
                contributing to Fintech, Insurtech, and high-performance marketing platforms. I also actively contribute to open-source communities like Hacktoberfest.
              </p>
              <p className="text-lg">
                I'm constantly exploring new technologies, building side projects, and growing as a developer who believes in clean code and meaningful UI/UX.
              </p>
            </div>

            {/* Right: Skills */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                My Skills
              </h3>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-800 dark:text-gray-200"
                    variants={item}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
