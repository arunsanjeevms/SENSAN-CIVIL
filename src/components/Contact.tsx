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

        {/* Main Contact Layout - Flexbox Container */}
        <div className="contact-layout">
          {/* Left Section - Contact Form (60% width) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="contact-form-section"
          >
            <div className="bg-card-color rounded-lg p-6 md:p-8 shadow-theme h-full">
              <div className="flex items-center space-x-2 mb-6">
                <MessageSquare className="w-6 h-6 text-accent-color" />
                <h3 className="text-2xl font-bold text-primary">Send us a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="form-container">
                {/* Name and Email Row */}
                <div className="form-row">
                  <div className="form-field">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className="form-input"
                      required
                    />
                    <motion.label
                      animate={{
                        y: focusedField === 'name' || formData.name ? -24 : 0,
                        scale: focusedField === 'name' || formData.name ? 0.8 : 1,
                        color: focusedField === 'name' ? 'var(--accent-color)' : 'var(--text-muted)',
                      }}
                      className="form-label"
                    >
                      Your Name
                    </motion.label>
                  </div>

                  <div className="form-field">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="form-input"
                      required
                    />
                    <motion.label
                      animate={{
                        y: focusedField === 'email' || formData.email ? -24 : 0,
                        scale: focusedField === 'email' || formData.email ? 0.8 : 1,
                        color: focusedField === 'email' ? 'var(--accent-color)' : 'var(--text-muted)',
                      }}
                      className="form-label"
                    >
                      Email Address
                    </motion.label>
                  </div>
                </div>

                {/* Phone and Subject Row */}
                <div className="form-row">
                  <div className="form-field">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      className="form-input"
                      required
                    />
                    <motion.label
                      animate={{
                        y: focusedField === 'phone' || formData.phone ? -24 : 0,
                        scale: focusedField === 'phone' || formData.phone ? 0.8 : 1,
                        color: focusedField === 'phone' ? 'var(--accent-color)' : 'var(--text-muted)',
                      }}
                      className="form-label"
                    >
                      Phone Number
                    </motion.label>
                  </div>

                  <div className="form-field">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      className="form-input"
                      required
                    />
                    <motion.label
                      animate={{
                        y: focusedField === 'subject' || formData.subject ? -24 : 0,
                        scale: focusedField === 'subject' || formData.subject ? 0.8 : 1,
                        color: focusedField === 'subject' ? 'var(--accent-color)' : 'var(--text-muted)',
                      }}
                      className="form-label"
                    >
                      Subject
                    </motion.label>
                  </div>
                </div>

                {/* Message Field */}
                <div className="form-field">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={4}
                    className="form-input resize-none"
                    required
                  />
                  <motion.label
                    animate={{
                      y: focusedField === 'message' || formData.message ? -24 : 0,
                      scale: focusedField === 'message' || formData.message ? 0.8 : 1,
                      color: focusedField === 'message' ? 'var(--accent-color)' : 'var(--text-muted)',
                    }}
                    className="form-label"
                  >
                    Your Message
                  </motion.label>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="form-submit-btn"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Right Section - Contact Information (40% width) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="contact-info-section"
          >
            <div className="contact-info-container">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="contact-info-card"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`contact-info-icon`}>
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
                className="contact-map"
              >
                <div className="w-full h-full bg-secondary rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-accent-color mx-auto mb-4" />
                    <p className="text-secondary">Interactive Map</p>
                    <p className="text-muted text-sm">Click to open Google Maps</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        /* Main Flexbox Layout */
        .contact-layout {
          display: flex;
          align-items: flex-start;
          gap: 2rem;
          min-height: 600px;
        }

        /* Left Section - Form (60% width) */
        .contact-form-section {
          flex: 0 0 60%;
          min-width: 0;
        }

        /* Right Section - Info Cards (40% width) */
        .contact-info-section {
          flex: 0 0 40%;
          min-width: 0;
        }

        /* Form Container */
        .form-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        /* Form Rows */
        .form-row {
          display: flex;
          gap: 1.25rem;
        }

        /* Form Fields */
        .form-field {
          position: relative;
          flex: 1;
        }

        /* Form Inputs */
        .form-input {
          width: 100%;
          background-color: var(--bg-secondary);
          color: var(--text-color);
          border-radius: 0.5rem;
          padding: 0.75rem 1rem;
          border: 2px solid transparent;
          outline: none;
          transition: all 0.3s ease;
        }

        .form-input:focus {
          border-color: var(--accent-color);
          box-shadow: 0 0 0 3px rgba(244, 196, 48, 0.1);
        }

        /* Form Labels */
        .form-label {
          position: absolute;
          left: 1rem;
          top: 0.75rem;
          pointer-events: none;
          transform-origin: left;
          transition: all 0.3s ease;
        }

        /* Submit Button */
        .form-submit-btn {
          width: 100%;
          background-color: var(--accent-color);
          color: var(--text-color);
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 0.5rem;
        }

        .form-submit-btn:hover {
          background-color: var(--accent-hover);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(244, 196, 48, 0.3);
        }

        /* Contact Info Container */
        .contact-info-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          height: 100%;
        }

        /* Contact Info Cards */
        .contact-info-card {
          background-color: var(--card-color);
          border-radius: 0.5rem;
          padding: 1.5rem;
          box-shadow: 0 10px 25px var(--shadow-color);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .contact-info-card:hover {
          background-color: var(--card-hover);
          transform: translateY(-2px);
          box-shadow: 0 15px 35px var(--shadow-color);
        }

        /* Contact Info Icons */
        .contact-info-icon {
          width: 3rem;
          height: 3rem;
          border-radius: 0.5rem;
          background-color: var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* Map Section */
        .contact-map {
          background-color: var(--card-color);
          border-radius: 0.5rem;
          padding: 1.5rem;
          height: 12rem;
          box-shadow: 0 10px 25px var(--shadow-color);
        }

        /* Responsive Design - Mobile Stacking */
        @media (max-width: 768px) {
          .contact-layout {
            flex-direction: column;
            gap: 2rem;
          }

          .contact-form-section,
          .contact-info-section {
            flex: 1 1 100%;
          }

          .form-row {
            flex-direction: column;
            gap: 1.5rem;
          }

          .contact-info-container {
            gap: 1rem;
          }

          .contact-map {
            height: 10rem;
          }
        }

        /* Small Mobile Adjustments */
        @media (max-width: 480px) {
          .contact-layout {
            gap: 1.5rem;
          }

          .form-container {
            gap: 1.25rem;
          }

          .contact-info-card {
            padding: 1rem;
          }

          .contact-map {
            height: 8rem;
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;