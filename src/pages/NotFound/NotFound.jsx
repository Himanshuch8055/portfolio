import { Link } from 'react-router-dom';
import { FaHome, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-light dark:bg-dark transition-colors duration-300 flex flex-col items-center justify-center p-6 text-center">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-primary-50 dark:from-gray-900 dark:to-dark">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-primary-100/30 dark:to-primary-900/10"></div>
        </div>
      </div>

      <motion.div 
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-light mb-6">
          Page Not Found
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:opacity-90 transition-all hover:shadow-lg"
          >
            <FaHome className="text-lg" />
            Back to Home
          </Link>
          <a
            href="mailto:himanshuch8055@gmail.com"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-lg shadow hover:shadow-md transition-all duration-300 inline-flex items-center justify-center"
          >
            <FaEnvelope className="text-lg" />
            Contact Me
          </a>
        </div>
      </motion.div>
      
      <motion.div 
        className="mt-16 text-gray-500 dark:text-gray-400 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <p>© {new Date().getFullYear()} Himanshu Chauhan. All rights reserved.</p>
      </motion.div>
    </div>
  );
};

export default NotFound;