import React from 'react';
import { motion } from 'framer-motion';
import { Settings } from 'lucide-react';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-primary flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
          className="mb-8"
        >
          <Settings className="w-16 h-16 text-accent-color mx-auto" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-primary mb-2">SENSAN INDIA PROJECTS</h2>
          <p className="text-accent-color">Engineering Excellence</p>
        </motion.div>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="mt-8 h-1 bg-accent-color rounded-full mx-auto"
          style={{ maxWidth: "200px" }}
        />
      </div>
    </div>
  );
};

export default Preloader;