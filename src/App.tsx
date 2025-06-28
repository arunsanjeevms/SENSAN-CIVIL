import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Team from './components/Team';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [loading, setLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
    
    // Ensure scroll position is reset when changing sections
    if (section === 'team') {
      // For team section, scroll to top immediately
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }, 50);
    }
  };

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      // Reset to home section on browser navigation
      setCurrentSection('home');
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen bg-primary text-primary font-poppins">
      <ThemeToggle />
      <Navbar onSectionChange={handleSectionChange} currentSection={currentSection} />
      
      {currentSection === 'home' && (
        <div className="transition-opacity duration-500 ease-in-out">
          <Hero />
          <About />
          <Services />
          <Projects />
          <Testimonials />
          <Stats />
          <Contact />
          <Footer />
        </div>
      )}
      
      {currentSection === 'team' && (
        <div className="transition-opacity duration-500 ease-in-out">
          <Team />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;