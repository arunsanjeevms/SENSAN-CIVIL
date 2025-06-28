import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: 'Skyline Commercial Tower',
      category: 'Commercial',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: '50-story modern commercial tower with sustainable design',
      features: ['LEED Certified', 'Smart Building', 'Energy Efficient'],
      year: '2023',
    },
    {
      title: 'Luxury Residential Complex',
      category: 'Residential',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Premium residential community with modern amenities',
      features: ['500+ Units', 'Swimming Pool', 'Landscaped Gardens'],
      year: '2022',
    },
    {
      title: 'Industrial Manufacturing Plant',
      category: 'Industrial',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'State-of-the-art manufacturing facility with advanced infrastructure',
      features: ['100,000 sq ft', 'Automated Systems', 'Safety Compliant'],
      year: '2023',
    },
    {
      title: 'City Bridge Project',
      category: 'Infrastructure',
      image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern cable-stayed bridge connecting two major districts',
      features: ['2km Length', 'Seismic Resistant', 'LED Lighting'],
      year: '2021',
    },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Featured <span className="text-accent-color">Projects</span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Showcasing our expertise through landmark projects that define skylines
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Project Display */}
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img
                  src={projects[currentProject].image}
                  alt={projects[currentProject].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="inline-block bg-accent-color text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      {projects[currentProject].category}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      {projects[currentProject].title}
                    </h3>
                    <p className="text-secondary mb-4 max-w-2xl">
                      {projects[currentProject].description}
                    </p>
                    <div className="flex flex-wrap gap-4 mb-4">
                      {projects[currentProject].features.map((feature, idx) => (
                        <span key={idx} className="text-sm bg-card-color text-primary px-3 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-accent-color font-semibold">
                        Completed: {projects[currentProject].year}
                      </span>
                      <button className="flex items-center space-x-2 text-primary hover:text-accent-color transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        <span>View Details</span>
                      </button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary/80 hover:bg-accent-color text-primary hover:text-primary p-3 rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary/80 hover:bg-accent-color text-primary hover:text-primary p-3 rounded-full transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Project Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentProject ? 'bg-accent-color' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              onClick={() => setCurrentProject(index)}
              className={`cursor-pointer rounded-lg overflow-hidden transition-all shadow-theme ${
                index === currentProject ? 'ring-2 ring-accent-color' : ''
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-32 object-cover"
              />
              <div className="p-4 bg-card-color">
                <h4 className="text-primary font-semibold text-sm mb-1">{project.title}</h4>
                <p className="text-secondary text-xs">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;