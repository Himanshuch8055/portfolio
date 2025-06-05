import { useState, useEffect, useRef } from 'react';
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { GiPoolTriangle } from "react-icons/gi";
import gsap from 'gsap';
import { useLayoutEffect } from 'react';

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const nameRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useLayoutEffect(() => {
    // Check for dark mode preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    // Handle scroll
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation for name text
  useEffect(() => {
    if (!nameRef.current) return;

    const text = isHovered ? 'CH.' : 'HC.';
    
    gsap.to(nameRef.current, {
      duration: 0.3,
      opacity: 0,
      y: -10,
      onComplete: () => {
        if (nameRef.current) {
          nameRef.current.textContent = text;
          gsap.to(nameRef.current, {
            duration: 0.3,
            opacity: 1,
            y: 0,
            ease: 'power2.out'
          });
        }
      }
    });
  }, [isHovered]);

  const handleNameHover = () => {
    setIsHovered(true);
  };

  const handleNameLeave = () => {
    setIsHovered(false);
  };

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/himanshuch8055' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com/in/himanshuch8055' },
    { icon: <FaTwitter />, href: 'https://twitter.com/himanshuch8055' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          className="text-2xl font-bold text-amber-600 dark:text-amber-400 relative overflow-hidden inline-block h-9"
          onMouseEnter={handleNameHover}
          onMouseLeave={handleNameLeave}
        >
          {/* <span ref={nameRef}>HC.</span> */}
          <GiPoolTriangle />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? <FiSun className="text-yellow-400" /> : <FiMoon />}
          </button>
          {/* Resume Button */}
          <button
            onClick={() => window.open('https://drive.google.com/file/d/1X1X1X1X1X1X1X1X1X1X1X1X1X1X1X1X/view?usp=sharing', '_blank')}
            className="flex items-center justify-center gap-2 px-2 py-1 bg-gradient-to-r from-primary to-secondary text-white rounded font-medium hover:opacity-90 transition-all hover:shadow-lg"
            aria-label="Resume"
          >
            Resume
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center justify-center space-x-6 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDark ? <FiSun className="text-yellow-400" /> : <FiMoon />}
              </button>
              {/* Resume Button */}
              <button
                onClick={() => window.open('https://drive.google.com/file/d/1X1X1X1X1X1X1X1X1X1X1X1X1X1X1X1X/view?usp=sharing', '_blank')}
                className="flex items-center justify-center gap-2 px-2 py-1 bg-gradient-to-r from-primary to-secondary text-white rounded font-medium hover:opacity-90 transition-all hover:shadow-lg"
                aria-label="Resume"
              >
                Resume
              </button>
              </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
