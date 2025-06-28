import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'CEO, Tech Solutions Inc.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'SENSAN delivered our office complex on time and within budget. Their attention to detail and professional approach exceeded our expectations.',
      rating: 5,
      project: 'Commercial Tower',
    },
    {
      name: 'Priya Sharma',
      position: 'Residential Client',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'The quality of construction and finishing in our residential project was outstanding. The team was professional and responsive throughout.',
      rating: 5,
      project: 'Luxury Villa',
    },
    {
      name: 'Amit Patel',
      position: 'Factory Owner',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'Our manufacturing facility was completed ahead of schedule with excellent quality. SENSAN truly understands industrial construction needs.',
      rating: 5,
      project: 'Industrial Plant',
    },
    {
      name: 'Deepika Singh',
      position: 'Project Manager, Urban Development',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'The infrastructure project was handled with utmost professionalism. The team\'s expertise in complex engineering solutions is commendable.',
      rating: 5,
      project: 'City Bridge',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Client <span className="text-accent-color">Testimonials</span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Hear what our satisfied clients have to say about our work
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-card-color rounded-lg p-8 md:p-12 relative shadow-theme"
            >
              <Quote className="absolute top-4 left-4 w-8 h-8 text-accent-color opacity-50" />
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-accent-color"
                  />
                </div>
                
                <div className="text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent-color fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-secondary text-lg mb-6 italic">
                    "{testimonials[currentTestimonial].content}"
                  </p>
                  
                  <div>
                    <h4 className="text-primary font-semibold text-xl">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-muted mb-2">
                      {testimonials[currentTestimonial].position}
                    </p>
                    <span className="text-accent-color text-sm">
                      Project: {testimonials[currentTestimonial].project}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-accent-color' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <p className="text-center text-muted mb-8">Trusted by leading organizations</p>
          <div className="flex justify-center items-center space-x-8 opacity-50">
            <div className="w-24 h-12 bg-card-color rounded flex items-center justify-center">
              <span className="text-primary text-sm font-bold">TECH</span>
            </div>
            <div className="w-24 h-12 bg-card-color rounded flex items-center justify-center">
              <span className="text-primary text-sm font-bold">CORP</span>
            </div>
            <div className="w-24 h-12 bg-card-color rounded flex items-center justify-center">
              <span className="text-primary text-sm font-bold">URBAN</span>
            </div>
            <div className="w-24 h-12 bg-card-color rounded flex items-center justify-center">
              <span className="text-primary text-sm font-bold">BUILD</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;