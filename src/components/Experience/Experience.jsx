import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    role: 'Software Developer Intern',
    company: 'Uniffy.me',
    period: 'Jul 2024 - Present',
    description: [
      'Designed, coded, and tested full-stack web applications, enhancing both front-end and back-end features.',
      'Contributed to innovative application development in the Fintech and Insurtech domains.',
    ],
  },
  {
    id: 2,
    role: 'Full Stack Developer',
    company: 'Loyaltty (Gold Loyalty LLC)',
    period: 'Oct 2024 - Jan 2025',
    description: [
      'Appointed as Lead Developer for Loyaltty, handling end-to-end software product design.',
      'Collaborated directly on innovative web and mobile solutions for Gold Loyalty LLC.',
    ],
  },
  {
    id: 3,
    role: 'Web Developer',
    company: 'Uptoskills',
    period: 'Oct 2023 - Dec 2023',
    description: [
      'Improved user experience by fixing over 20 UI issues and introducing new features to the interface.',
      'Enhanced website’s online visibility with advanced SEO techniques.',
    ],
  },
  {
    id: 4,
    role: 'Open Source Contributor',
    company: 'Hacktoberfest 2023',
    period: 'Oct 2023 - Nov 2023',
    description: [
      'Enhanced MDN documentation, showcasing collaboration skills and technical proficiency.',
      'Merged 3 diverse pull requests, demonstrating adaptability and meaningful contributions across various repositories.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="section-title">
            <span className="text-blue-600 dark:text-blue-400">02.</span> Work Experience
          </h2>
        </motion.div>

        <div className="relative w-full max-w-4xl mx-auto px-4">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500 dark:bg-blue-400 rounded-full z-0" />

          <div className="space-y-12 relative z-10">
            {experiences.map((exp, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`w-full md:w-1/2 px-4 ${isLeft ? 'md:pr-12 md:ml-0 md:mr-auto' : 'md:pl-12 md:mr-0 md:ml-auto'
                    }`}
                >
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-left">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400 mb-1">
                      {exp.company}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                      {exp.period}
                    </p>
                    <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      {exp.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;