import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Facebook, Twitter, Linkedin as LinkedIn, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');

  const fullText = 'Building Tomorrow, Today';

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let index = 0;
    const typewriterInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypewriterText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typewriterInterval);
      }
    }, 100);

    return () => clearInterval(typewriterInterval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      left: 0,
      behavior: 'smooth' 
    });
  };

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Careers', href: '#careers' },
      { name: 'News & Media', href: '#news' },
    ],
    services: [
      { name: 'Commercial Construction', href: '#services' },
      { name: 'Residential Projects', href: '#services' },
      { name: 'Industrial Buildings', href: '#services' },
      { name: 'Infrastructure', href: '#services' },
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'Project Inquiry', href: '#contact' },
      { name: 'Maintenance', href: '#contact' },
      { name: 'Emergency Support', href: '#contact' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-400' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-400' },
    { icon: LinkedIn, href: '#', color: 'hover:text-blue-600' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-400' },
  ];

  return (
    <footer className="bg-primary text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-accent-color rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">S</span>
                </div>
                <div>
                  <div className="font-bold text-lg">SENSAN</div>
                  <div className="text-xs text-accent-color">INDIA PROJECTS</div>
                </div>
              </div>
              <p className="text-secondary mb-4">
                {typewriterText}
                <span className="animate-pulse">|</span>
              </p>
              <p className="text-muted text-sm">
                Leading construction company committed to delivering excellence in every project.
              </p>
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent-color" />
                <span className="text-sm text-secondary">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent-color" />
                <span className="text-sm text-secondary">info@sensan.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-accent-color" />
                <span className="text-sm text-secondary">Mumbai, Maharashtra</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent-color">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-secondary hover:text-accent-color transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent-color">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-secondary hover:text-accent-color transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent-color">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-secondary hover:text-accent-color transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border-t border-primary pt-8 mb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 bg-card-color rounded-full flex items-center justify-center transition-colors ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-secondary text-sm">Stay updated with our newsletter</span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent-color text-primary px-4 py-2 rounded-lg text-sm font-semibold hover:bg-accent-hover transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="border-t border-primary pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted text-sm">
            © 2024 SENSAN INDIA PROJECTS. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted hover:text-accent-color transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted hover:text-accent-color transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted hover:text-accent-color transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-accent-color text-primary rounded-full flex items-center justify-center shadow-theme hover:bg-accent-hover transition-colors z-50"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>

      {/* Floating WhatsApp Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
        whileHover={{ scale: 1.1 }}
        animate={{ 
          scale: [1, 1.1, 1],
        }}
        transition={{
          scale: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        className="fixed bottom-8 left-8 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-theme hover:bg-green-600 transition-colors z-50"
      >
        <Phone className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;