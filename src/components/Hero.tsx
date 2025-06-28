import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Construction site"
          className="w-full h-full object-cover"
        />
        {/* Glossy Blur Overlay */}
        <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/60 to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg"
          >
            <span className="text-white">Engineering</span>
            <span className="text-accent-color block">Excellence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl text-secondary mb-8 drop-shadow-md"
          >
            Building the Future with Precision
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="bg-accent-color text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-hover transition-colors shadow-lg"
            >
              Get a Quote
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 text-primary border-2 border-primary/80 bg-primary/20 backdrop-blur-sm px-8 py-4 rounded-lg hover:bg-primary/30 hover:border-primary transition-all shadow-lg"
            >
              <PlayCircle className="w-5 h-5" />
              <span>Watch Our Work</span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToNext}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-primary hover:text-accent-color transition-colors drop-shadow-lg"
        >
          <ArrowDown className="w-8 h-8" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;