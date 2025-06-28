import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, Users, Trophy, Calendar } from 'lucide-react';

const Stats: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    awards: 0,
    years: 0,
  });

  const finalValues = {
    projects: 250,
    clients: 500,
    awards: 25,
    years: 13,
  };

  const stats = [
    {
      icon: Building2,
      label: 'Projects Completed',
      value: counters.projects,
      suffix: '+',
      color: 'text-accent-color',
    },
    {
      icon: Users,
      label: 'Happy Clients',
      value: counters.clients,
      suffix: '+',
      color: 'text-blue-400',
    },
    {
      icon: Trophy,
      label: 'Awards Won',
      value: counters.awards,
      suffix: '+',
      color: 'text-green-400',
    },
    {
      icon: Calendar,
      label: 'Years Experience',
      value: counters.years,
      suffix: '+',
      color: 'text-purple-400',
    },
  ];

  useEffect(() => {
    if (inView) {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 steps for smooth animation
      const stepDuration = duration / steps;

      const intervals = Object.keys(finalValues).map((key) => {
        const finalValue = finalValues[key as keyof typeof finalValues];
        const increment = finalValue / steps;
        let currentValue = 0;

        const currentIntervalId = setInterval(() => {
          currentValue += increment;
          if (currentValue >= finalValue) {
            currentValue = finalValue;
            clearInterval(currentIntervalId);
          }
          
          setCounters(prev => ({
            ...prev,
            [key]: Math.floor(currentValue),
          }));
        }, stepDuration);

        return currentIntervalId;
      });

      return () => {
        intervals.forEach(interval => clearInterval(interval));
      };
    }
  }, [inView]);

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our <span className="text-accent-color">Achievements</span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Numbers that speak volumes about our commitment to excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="text-center group"
            >
              <div className="bg-card-color rounded-lg p-8 hover:bg-card-hover transition-all duration-300 shadow-theme">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className={`w-16 h-16 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center group-hover:bg-card-hover transition-colors`}
                >
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </motion.div>
                
                <motion.div
                  initial={{ scale: 0.5 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}
                >
                  {stat.value}{stat.suffix}
                </motion.div>
                
                <p className="text-secondary font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Background Image */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-primary z-10" />
          <img
            src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Construction site"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Ready to Start Your Project?
              </h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent-color text-primary px-8 py-3 rounded-lg font-semibold hover:bg-accent-hover transition-colors"
              >
                Get Started Today
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;