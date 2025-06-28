import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Mail, Phone, Award, Users, Target } from 'lucide-react';

const Team: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: 'Rajesh Sensan',
      position: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'With over 20 years of experience in construction and engineering, Rajesh leads our vision of building excellence.',
      specialties: ['Strategic Planning', 'Project Management', 'Client Relations'],
      linkedin: '#',
      email: 'rajesh@sensan.com',
      phone: '+91 98765 43210',
    },
    {
      name: 'Priya Sharma',
      position: 'Chief Engineer',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Leading our engineering team with innovative solutions and sustainable construction practices.',
      specialties: ['Structural Engineering', 'Green Building', 'Innovation'],
      linkedin: '#',
      email: 'priya@sensan.com',
      phone: '+91 98765 43211',
    },
    {
      name: 'Amit Kumar',
      position: 'Project Director',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Ensuring every project meets our high standards of quality and is delivered on time.',
      specialties: ['Quality Control', 'Timeline Management', 'Team Leadership'],
      linkedin: '#',
      email: 'amit@sensan.com',
      phone: '+91 98765 43212',
    },
    {
      name: 'Deepika Singh',
      position: 'Design Head',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Creating architectural masterpieces that blend functionality with aesthetic appeal.',
      specialties: ['Architectural Design', 'Interior Planning', 'Creative Solutions'],
      linkedin: '#',
      email: 'deepika@sensan.com',
      phone: '+91 98765 43213',
    },
    {
      name: 'Vikram Patel',
      position: 'Safety Manager',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Maintaining the highest safety standards across all our construction sites.',
      specialties: ['Safety Protocols', 'Risk Assessment', 'Training Programs'],
      linkedin: '#',
      email: 'vikram@sensan.com',
      phone: '+91 98765 43214',
    },
    {
      name: 'Anita Reddy',
      position: 'Operations Manager',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Streamlining operations and ensuring efficient resource management across projects.',
      specialties: ['Operations Management', 'Resource Planning', 'Process Optimization'],
      linkedin: '#',
      email: 'anita@sensan.com',
      phone: '+91 98765 43215',
    },
  ];

  const companyValues = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for perfection in every project we undertake',
    },
    {
      icon: Users,
      title: 'Teamwork',
      description: 'Collaboration and unity drive our success',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Embracing new technologies and methodologies',
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-20 bg-primary"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            Meet Our <span className="text-accent-color">Team</span>
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            The passionate professionals behind SENSAN's success story
          </p>
        </motion.div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {companyValues.map((value, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-card-color rounded-lg p-6 text-center shadow-theme hover:bg-card-hover transition-all"
            >
              <div className="w-16 h-16 bg-accent-color rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">{value.title}</h3>
              <p className="text-secondary">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Members Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-card-color rounded-lg overflow-hidden shadow-theme hover:bg-card-hover transition-all group"
            >
              {/* Member Image */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Social Links Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={member.linkedin}
                    whileHover={{ scale: 1.2 }}
                    className="w-10 h-10 bg-accent-color rounded-full flex items-center justify-center hover:bg-accent-hover transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-primary" />
                  </motion.a>
                  <motion.a
                    href={`mailto:${member.email}`}
                    whileHover={{ scale: 1.2 }}
                    className="w-10 h-10 bg-accent-color rounded-full flex items-center justify-center hover:bg-accent-hover transition-colors"
                  >
                    <Mail className="w-5 h-5 text-primary" />
                  </motion.a>
                  <motion.a
                    href={`tel:${member.phone}`}
                    whileHover={{ scale: 1.2 }}
                    className="w-10 h-10 bg-accent-color rounded-full flex items-center justify-center hover:bg-accent-hover transition-colors"
                  >
                    <Phone className="w-5 h-5 text-primary" />
                  </motion.a>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-accent-color font-semibold mb-3">{member.position}</p>
                <p className="text-secondary text-sm mb-4 leading-relaxed">{member.bio}</p>
                
                {/* Specialties */}
                <div className="space-y-2">
                  <h4 className="text-primary font-semibold text-sm">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-secondary text-primary px-2 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-20"
        >
          <div className="bg-card-color rounded-lg p-8 md:p-12 shadow-theme">
            <h3 className="text-3xl font-bold text-primary mb-4">
              Ready to Work With Us?
            </h3>
            <p className="text-secondary mb-6 max-w-2xl mx-auto">
              Our experienced team is ready to bring your construction vision to life. 
              Let's discuss your next project.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent-color text-primary px-8 py-3 rounded-lg font-semibold hover:bg-accent-hover transition-colors"
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Team;