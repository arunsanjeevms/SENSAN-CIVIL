import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 98765 43210', '+91 87654 32109'],
      color: 'text-green-400',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@sensan.com', 'projects@sensan.com'],
      color: 'text-blue-400',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Construction Lane', 'Mumbai, Maharashtra, India'],
      color: 'text-red-400',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 9:00 AM - 2:00 PM'],
      color: 'text-purple-400',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get In <span className="text-accent-color">Touch</span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Ready to start your construction project? Contact us today for a free consultation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card-color rounded-lg p-6 md:p-8 shadow-theme"
          >
            <div className="flex items-center space-x-2 mb-6">
              <MessageSquare className="w-6 h-6 text-accent-color" />
              <h3 className="text-2xl font-bold text-primary">Send us a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-secondary text-primary rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-color transition-all"
                    required
                  />
                  <motion.label
                    animate={{
                      y: focusedField === 'name' || formData.name ? -24 : 0,
                      scale: focusedField === 'name' || formData.name ? 0.8 : 1,
                      color: focusedField === 'name' ? 'var(--accent-color)' : 'var(--text-muted)',
                    }}
                    className="absolute left-4 top-3 pointer-events-none origin-left"
                  >
                    Your Name
                  </motion.label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-secondary text-primary rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-color transition-all"
                    required
                  />
                  <motion.label
                    animate={{
                      y: focusedField === 'email' || formData.email ? -24 : 0,
                      scale: focusedField === 'email' || formData.email ? 0.8 : 1,
                      color: focusedField === 'email' ? 'var(--accent-color)' : 'var(--text-muted)',
                    }}
                    className="absolute left-4 top-3 pointer-events-none origin-left"
                  >
                    Email Address
                  </motion.label>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-secondary text-primary rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-color transition-all"
                    required
                  />
                  <motion.label
                    animate={{
                      y: focusedField === 'phone' || formData.phone ? -24 : 0,
                      scale: focusedField === 'phone' || formData.phone ? 0.8 : 1,
                      color: focusedField === 'phone' ? 'var(--accent-color)' : 'var(--text-muted)',
                    }}
                    className="absolute left-4 top-3 pointer-events-none origin-left"
                  >
                    Phone Number
                  </motion.label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-secondary text-primary rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-color transition-all"
                    required
                  />
                  <motion.label
                    animate={{
                      y: focusedField === 'subject' || formData.subject ? -24 : 0,
                      scale: focusedField === 'subject' || formData.subject ? 0.8 : 1,
                      color: focusedField === 'subject' ? 'var(--accent-color)' : 'var(--text-muted)',
                    }}
                    className="absolute left-4 top-3 pointer-events-none origin-left"
                  >
                    Subject
                  </motion.label>
                </div>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={4}
                  className="w-full bg-secondary text-primary rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-color transition-all resize-none"
                  required
                />
                <motion.label
                  animate={{
                    y: focusedField === 'message' || formData.message ? -24 : 0,
                    scale: focusedField === 'message' || formData.message ? 0.8 : 1,
                    color: focusedField === 'message' ? 'var(--accent-color)' : 'var(--text-muted)',
                  }}
                  className="absolute left-4 top-3 pointer-events-none origin-left"
                >
                  Your Message
                </motion.label>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-accent-color text-primary py-3 rounded-lg font-semibold hover:bg-accent-hover transition-colors flex items-center justify-center space-x-2 mt-6"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-card-color rounded-lg p-6 hover:bg-card-hover transition-all shadow-theme"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0`}>
                    <info.icon className={`w-6 h-6 ${info.color}`} />
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold text-lg mb-2">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-secondary mb-1">{detail}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="bg-card-color rounded-lg p-6 h-48 shadow-theme"
            >
              <div className="w-full h-full bg-secondary rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-accent-color mx-auto mb-4" />
                  <p className="text-secondary">Interactive Map</p>
                  <p className="text-muted text-sm">Click to open Google Maps</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;