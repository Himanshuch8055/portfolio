import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaArrowRightLong } from "react-icons/fa6";
import FamilyFlow from '../../assets/FamilyFlow.png';
import BloodBank from '../../assets/BloodBank.png';
import UniversityWebsite from '../../assets/UniversityWebsite.png';

const projects = [
  {
    title: 'Family Tree Web Application',
    description:
      'Designed an interactive family tree web app using React Flow, enabling dynamic creation and management of user relationships. Integrated CRUD operations with a relationship-based data structure, enhancing scalability and user experience.',
    technologies: ['React', 'Node.js', 'MongoDB', 'React Flow'],
    github: 'https://github.com/himanshuch8055/family-tree-web-app',
    live: 'https://family-tree-web-app.netlify.app',
    image: FamilyFlow,
  },
  {
    title: 'Blood Bank Application',
    description:
      'Developed a React-based Blood Bank Application, enabling real-time donor-recipient matching and geolocation-based blood request management, improving accessibility in critical situations. Integrated APIs (Google Maps, Twilio) to automate notifications, enhance user experience, and streamline blood inventory and donor data management.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Google Maps API', 'Twilio API'],
    github: 'https://github.com/himanshuch8055/blood-bank-app',
    live: 'https://blood-bank-app.netlify.app',
    image: BloodBank,
  },
  {
    title: 'DevBoard, Knowledge Sharing Platform',
    description:
      'Developed a knowledge-sharing platform with interactive features like blogs, Q&A, and social engagement using React and Node.js. Implemented a dynamic scoring system with leaderboards based on user interactions, enhancing community engagement.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    github: 'https://github.com/himanshuch8055/devboard',
    live: 'https://devboard.netlify.app',
    image: UniversityWebsite,
  },
];

const Projects = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="section-title">
            <span className="text-blue-600 dark:text-blue-400">03.</span> Some Things I've Built
          </h2>
        </motion.div>

        <motion.div
          className="space-y-32"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`group relative grid gap-8 md:grid-cols-12 items-center ${
                index % 2 === 0 ? 'md:text-left' : 'md:text-right'
              }`}
              variants={item}
              whileHover={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              {/* Project Image */}
              <div
                className={`relative md:col-span-6 overflow-hidden rounded-xl shadow-lg ${
                  index % 2 === 0 ? 'md:order-1' : 'md:order-2'
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 md:h-80 object-cover rounded-xl transition duration-300 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div
                className={`md:col-span-6 flex flex-col gap-4 ${
                  index % 2 === 0 ? 'md:order-2 md:items-end' : 'md:order-1 md:items-start'
                }`}
              >
                <p className="text-blue-600 dark:text-blue-400 font-mono text-sm">Featured Project</p>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <div className="bg-white/60 dark:bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 max-w-xl">
                  <p className="text-gray-800 dark:text-gray-200 text-sm md:text-base">
                    {project.description}
                  </p>
                </div>
                <div
                  className={`flex flex-wrap gap-3 text-xs text-gray-700 dark:text-gray-300 ${
                    index % 2 === 0 ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 font-medium rounded-full shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div
                  className={`flex space-x-4 mt-2 ${
                    index % 2 === 0 ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    aria-label="GitHub"
                  >
                    <FiGithub size={22} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    aria-label="Live Preview"
                  >
                    <FiExternalLink size={22} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* See More Projects */}
        <motion.div>
          <a href="/projects" className="text-blue-600 dark:text-blue-400 font-mono text-sm mt-12 inline-flex items-center group">
            See More Projects
            <FaArrowRightLong className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;