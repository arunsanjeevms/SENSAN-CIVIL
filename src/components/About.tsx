import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Calendar, Trophy } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineEvents = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'Started with a vision to transform construction industry',
      icon: Calendar,
    },
    {
      year: '2015',
      title: 'Major Expansion',
      description: 'Expanded operations across major Indian cities',
      icon: Users,
    },
    {
      year: '2018',
      title: 'Industry Recognition',
      description: 'Received Excellence in Construction Award',
      icon: Award,
    },
    {
      year: '2023',
      title: 'Market Leader',
      description: 'Became leading construction company in the region',
      icon: Trophy,
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            About <span className="text-accent-color">SENSAN</span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            With over a decade of experience, we've built our reputation on delivering
            exceptional construction projects that stand the test of time.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Construction team"
              className="rounded-lg shadow-theme"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-accent-color/20 to-transparent rounded-lg" />
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-accent-color rounded-full flex items-center justify-center">
                  <event.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-accent-color font-semibold text-lg">{event.year}</div>
                  <h3 className="text-primary font-semibold text-xl mb-2">{event.title}</h3>
                  <p className="text-secondary">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;