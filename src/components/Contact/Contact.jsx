import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { PiHeartFill } from "react-icons/pi";

const Contact = () => {
  const socialLinks = [
    {
      icon: <FiGithub />,
      href: 'https://github.com/himanshuch8055',
      label: 'GitHub Profile',
    },
    {
      icon: <FiLinkedin />,
      href: 'https://linkedin.com/in/himanshuch8055',
      label: 'LinkedIn Profile',
    },
    {
      icon: <FiTwitter />,
      href: 'https://twitter.com/himanshuch8055',
      label: 'Twitter Profile',
    },
    {
      icon: <FiMail />,
      href: 'mailto:himanshuch8055@gmail.com',
      label: 'Send Email',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section>
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="section-title">
            <span className="text-blue-600 dark:text-blue-400">04.</span> What's Next?
          </h2>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
            variants={item}
          >
            Get In Touch
          </motion.h3>

          <motion.p
            className="text-gray-700 dark:text-gray-300 mb-12 text-lg"
            variants={item}
          >
            I'm currently looking for new opportunities. My inbox is always open—
            whether you have a question or just want to say hi, I’ll do my best to get back to you!
          </motion.p>

          <motion.div variants={item} className="mb-16">
            <a
              href="mailto:himanshuch8055@gmail.com"
              className="btn btn-primary inline-flex items-center group"
            >
              Say Hello
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6"
            variants={item}
          >
            {socialLinks.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-32 text-center text-sm text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p>Designed & Built by Himanshu Chauhan with <PiHeartFill className="text-xl inline text-red-500" /> love</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
