import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, Hammer, Truck, Wrench, Home, Factory } from 'lucide-react';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Building,
      title: 'Commercial Construction',
      description: 'Modern office buildings, shopping centers, and commercial complexes',
      features: ['Steel Structure', 'Glass Facade', 'Modern Design'],
    },
    {
      icon: Home,
      title: 'Residential Projects',
      description: 'Luxury apartments, villas, and residential communities',
      features: ['Eco-Friendly', 'Modern Amenities', 'Quality Materials'],
    },
    {
      icon: Factory,
      title: 'Industrial Buildings',
      description: 'Warehouses, factories, and industrial infrastructure',
      features: ['Heavy Duty', 'Safety Standards', 'Efficient Layout'],
    },
    {
      icon: Hammer,
      title: 'Renovation & Remodeling',
      description: 'Complete renovation services for existing structures',
      features: ['Modern Upgrades', 'Cost Effective', 'Quick Turnaround'],
    },
    {
      icon: Truck,
      title: 'Infrastructure Development',
      description: 'Roads, bridges, and public infrastructure projects',
      features: ['Durable Materials', 'Engineering Excellence', 'Public Safety'],
    },
    {
      icon: Wrench,
      title: 'Maintenance Services',
      description: 'Ongoing maintenance and repair services',
      features: ['24/7 Support', 'Preventive Care', 'Expert Technicians'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our <span className="text-accent-color">Services</span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Comprehensive construction solutions tailored to meet your specific needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-card-color rounded-lg p-8 hover:bg-card-hover transition-all duration-300 cursor-pointer shadow-theme"
            >
              <div className="relative overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-accent-color rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent-hover transition-colors"
                >
                  <service.icon className="w-8 h-8 text-primary" />
                </motion.div>
                
                <h3 className="text-xl font-semibold text-primary mb-4 group-hover:text-accent-color transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-secondary mb-6">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent-color rounded-full" />
                      <span className="text-sm text-muted">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Ripple Effect */}
                <motion.div
                  className="absolute inset-0 bg-accent-color/10 rounded-lg opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;