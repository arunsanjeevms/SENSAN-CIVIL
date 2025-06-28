import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Mail, Home } from 'lucide-react';

interface NavbarProps {
  onSectionChange: (section: string) => void;
  currentSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ onSectionChange, currentSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', section: 'home' },
    { name: 'About', href: '#about', section: 'home' },
    { name: 'Services', href: '#services', section: 'home' },
    { name: 'Projects', href: '#projects', section: 'home' },
    { name: 'Team', href: '#team', section: 'team' },
    { name: 'Contact', href: '#contact', section: 'home' },
  ];

  const scrollToTop = () => {
    // Smooth scroll to top of the page
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  const scrollToElement = (selector: string) => {
    // Small delay to ensure DOM is updated
    setTimeout(() => {
      const element = document.querySelector(selector);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        });
      }
    }, 100);
  };

  const handleNavClick = (item: typeof navItems[0], event?: React.MouseEvent) => {
    // Prevent default anchor behavior
    if (event) {
      event.preventDefault();
    }

    if (item.section === 'team') {
      // Navigate to Team section and scroll to top
      onSectionChange('team');
      scrollToTop();
    } else if (item.section === 'home') {
      // Navigate to Home section
      onSectionChange('home');
      
      if (item.href === '#home') {
        // If clicking "Home", scroll to top
        scrollToTop();
      } else {
        // For other home section elements, scroll to specific element
        scrollToElement(item.href);
      }
    }
    
    // Close mobile menu
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-card-color/95 backdrop-blur-sm shadow-theme' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={(e) => handleNavClick({ name: 'Home', href: '#home', section: 'home' }, e)}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-accent-color rounded-lg flex items-center justify-center">
              <span className="text-primary font-bold text-lg">S</span>
            </div>
            <div className="text-primary">
              <div className="font-bold text-lg">SENSAN</div>
              <div className="text-xs text-accent-color">INDIA PROJECTS</div>
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ y: -2 }}
                onClick={(e) => handleNavClick(item, e)}
                className="text-primary hover:text-accent-color transition-colors duration-200"
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="w-4 h-4 text-accent-color" />
              <span className="text-primary">+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Mail className="w-4 h-4 text-accent-color" />
              <span className="text-primary">info@sensan.com</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-primary hover:text-accent-color transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-card-color rounded-lg mt-2 p-4 shadow-theme"
          >
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={(e) => handleNavClick(item, e)}
                className="block w-full text-left py-2 text-primary hover:text-accent-color transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;