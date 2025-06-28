// Global Variables
let currentProject = 0;
let currentTestimonial = 0;
let isScrolled = false;
let isMobileMenuOpen = false;

// DOM Elements
const preloader = document.getElementById('preloader');
const themeToggle = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const scrollDownBtn = document.getElementById('scroll-down');
const scrollToTopBtn = document.getElementById('scroll-to-top');
const whatsappBtn = document.getElementById('whatsapp-btn');
const contactForm = document.getElementById('contact-form');
const typewriterElement = document.getElementById('typewriter');

// Projects and Testimonials Data
const projects = [
    {
        title: 'Skyline Commercial Tower',
        category: 'Commercial',
        image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: '50-story modern commercial tower with sustainable design',
        features: ['LEED Certified', 'Smart Building', 'Energy Efficient'],
        year: '2023'
    },
    {
        title: 'Luxury Residential Complex',
        category: 'Residential',
        image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Premium residential community with modern amenities',
        features: ['500+ Units', 'Swimming Pool', 'Landscaped Gardens'],
        year: '2022'
    },
    {
        title: 'Industrial Manufacturing Plant',
        category: 'Industrial',
        image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'State-of-the-art manufacturing facility with advanced infrastructure',
        features: ['100,000 sq ft', 'Automated Systems', 'Safety Compliant'],
        year: '2023'
    },
    {
        title: 'City Bridge Project',
        category: 'Infrastructure',
        image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Modern cable-stayed bridge connecting two major districts',
        features: ['2km Length', 'Seismic Resistant', 'LED Lighting'],
        year: '2021'
    }
];

const testimonials = [
    {
        name: 'Rajesh Kumar',
        position: 'CEO, Tech Solutions Inc.',
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
        content: 'SENSAN delivered our office complex on time and within budget. Their attention to detail and professional approach exceeded our expectations.',
        rating: 5,
        project: 'Commercial Tower'
    },
    {
        name: 'Priya Sharma',
        position: 'Residential Client',
        image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
        content: 'The quality of construction and finishing in our residential project was outstanding. The team was professional and responsive throughout.',
        rating: 5,
        project: 'Luxury Villa'
    },
    {
        name: 'Amit Patel',
        position: 'Factory Owner',
        image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
        content: 'Our manufacturing facility was completed ahead of schedule with excellent quality. SENSAN truly understands industrial construction needs.',
        rating: 5,
        project: 'Industrial Plant'
    },
    {
        name: 'Deepika Singh',
        position: 'Project Manager, Urban Development',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
        content: 'The infrastructure project was handled with utmost professionalism. The team\'s expertise in complex engineering solutions is commendable.',
        rating: 5,
        project: 'City Bridge'
    }
];

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Hide preloader after 3 seconds
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 3000);

    // Initialize theme
    initializeTheme();
    
    // Setup event listeners
    setupEventListeners();
    
    // Initialize components
    initializeProjects();
    initializeTestimonials();
    initializeStats();
    initializeTypewriter();
    
    // Setup scroll animations
    setupScrollAnimations();
}

// Theme Management
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        document.documentElement.className = savedTheme === 'dark' ? 'dark-mode' : 'light-mode';
        updateThemeIcons(savedTheme === 'dark');
    } else {
        document.documentElement.className = prefersDark ? 'dark-mode' : 'light-mode';
        updateThemeIcons(prefersDark);
    }
}

function toggleTheme() {
    const isDarkMode = document.documentElement.classList.contains('dark-mode');
    
    if (isDarkMode) {
        document.documentElement.className = 'light-mode';
        localStorage.setItem('theme', 'light');
        updateThemeIcons(false);
    } else {
        document.documentElement.className = 'dark-mode';
        localStorage.setItem('theme', 'dark');
        updateThemeIcons(true);
    }
}

function updateThemeIcons(isDark) {
    if (isDark) {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    }
}

// Event Listeners
function setupEventListeners() {
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Scroll events
    window.addEventListener('scroll', handleScroll);
    
    // Mobile menu
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Navigation links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', handleNavClick);
    });
    
    // Scroll buttons
    scrollDownBtn.addEventListener('click', () => scrollToSection('#about'));
    scrollToTopBtn.addEventListener('click', scrollToTop);
    
    // Project navigation
    document.getElementById('prev-project').addEventListener('click', prevProject);
    document.getElementById('next-project').addEventListener('click', nextProject);
    
    // Project indicators
    document.querySelectorAll('.indicator[data-project]').forEach((indicator, index) => {
        indicator.addEventListener('click', () => setCurrentProject(index));
    });
    
    // Project thumbnails
    document.querySelectorAll('.project-thumbnail').forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => setCurrentProject(index));
    });
    
    // Testimonial indicators
    document.querySelectorAll('.indicator[data-testimonial]').forEach((indicator, index) => {
        indicator.addEventListener('click', () => setCurrentTestimonial(index));
    });
    
    // Contact form
    contactForm.addEventListener('submit', handleContactForm);
    
    // Form inputs for floating labels
    document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
        input.addEventListener('focus', handleInputFocus);
        input.addEventListener('blur', handleInputBlur);
        input.addEventListener('input', handleInputChange);
    });
}

// Scroll Handling
function handleScroll() {
    const scrollY = window.scrollY;
    
    // Navbar background
    if (scrollY > 50 && !isScrolled) {
        navbar.classList.add('scrolled');
        isScrolled = true;
    } else if (scrollY <= 50 && isScrolled) {
        navbar.classList.remove('scrolled');
        isScrolled = false;
    }
    
    // Scroll to top button
    if (scrollY > 500) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
    
    // Animate elements on scroll
    animateOnScroll();
}

function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-left, .fade-in-right');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Navigation
function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
    
    if (isMobileMenuOpen) {
        mobileMenu.classList.add('active');
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        mobileMenu.classList.remove('active');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
}

function handleNavClick(e) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    scrollToSection(targetId);
    
    // Close mobile menu if open
    if (isMobileMenuOpen) {
        toggleMobileMenu();
    }
}

function scrollToSection(targetId) {
    const element = document.querySelector(targetId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Projects
function initializeProjects() {
    // Auto-rotate projects every 5 seconds
    setInterval(() => {
        nextProject();
    }, 5000);
}

function setCurrentProject(index) {
    // Update slides
    document.querySelectorAll('.project-slide').forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    
    // Update indicators
    document.querySelectorAll('.indicator[data-project]').forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
    
    // Update thumbnails
    document.querySelectorAll('.project-thumbnail').forEach((thumbnail, i) => {
        thumbnail.classList.toggle('active', i === index);
    });
    
    currentProject = index;
}

function nextProject() {
    const nextIndex = (currentProject + 1) % projects.length;
    setCurrentProject(nextIndex);
}

function prevProject() {
    const prevIndex = (currentProject - 1 + projects.length) % projects.length;
    setCurrentProject(prevIndex);
}

// Testimonials
function initializeTestimonials() {
    // Auto-rotate testimonials every 5 seconds
    setInterval(() => {
        nextTestimonial();
    }, 5000);
}

function setCurrentTestimonial(index) {
    // Update slides
    document.querySelectorAll('.testimonial-slide').forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    
    // Update indicators
    document.querySelectorAll('.indicator[data-testimonial]').forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
    
    currentTestimonial = index;
}

function nextTestimonial() {
    const nextIndex = (currentTestimonial + 1) % testimonials.length;
    setCurrentTestimonial(nextIndex);
}

// Stats Counter Animation
function initializeStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    const targets = [250, 500, 25, 13];
    let hasAnimated = false;
    
    function animateStats() {
        if (hasAnimated) return;
        
        const statsSection = document.querySelector('.stats');
        const rect = statsSection.getBoundingClientRect();
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            hasAnimated = true;
            
            statNumbers.forEach((stat, index) => {
                const target = targets[index];
                let current = 0;
                const increment = target / 60; // 60 steps for smooth animation
                const duration = 2000; // 2 seconds
                const stepTime = duration / 60;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    stat.textContent = Math.floor(current) + '+';
                }, stepTime);
            });
        }
    }
    
    window.addEventListener('scroll', animateStats);
}

// Typewriter Effect
function initializeTypewriter() {
    const text = 'Building Tomorrow, Today';
    let index = 0;
    
    function typeWriter() {
        if (index < text.length) {
            typewriterElement.textContent = text.slice(0, index + 1);
            index++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Start typewriter effect after a delay
    setTimeout(typeWriter, 1000);
}

// Form Handling
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    console.log('Form submitted:', data);
    
    // Show success message (you can customize this)
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    e.target.reset();
    
    // Reset floating labels
    document.querySelectorAll('.form-group label').forEach(label => {
        label.style.transform = '';
        label.style.color = '';
    });
}

function handleInputFocus(e) {
    const label = e.target.nextElementSibling;
    if (label) {
        label.style.transform = 'translateY(-1.5rem) scale(0.8)';
        label.style.color = 'var(--accent-color)';
    }
}

function handleInputBlur(e) {
    const label = e.target.nextElementSibling;
    if (label && !e.target.value) {
        label.style.transform = '';
        label.style.color = '';
    }
}

function handleInputChange(e) {
    const label = e.target.nextElementSibling;
    if (label) {
        if (e.target.value) {
            label.style.transform = 'translateY(-1.5rem) scale(0.8)';
            label.style.color = 'var(--accent-color)';
        } else {
            label.style.transform = '';
            label.style.color = '';
        }
    }
}

// Scroll Animations Setup
function setupScrollAnimations() {
    // Add intersection observer for better performance
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    document.querySelectorAll('.service-card, .stat-card, .timeline-item, .contact-card').forEach(el => {
        observer.observe(el);
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add smooth scrolling for better UX
function smoothScrollTo(element, duration = 1000) {
    const targetPosition = element.offsetTop - 80; // Account for navbar
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
}

// Add loading states for better UX
function showLoading(element) {
    element.style.opacity = '0.6';
    element.style.pointerEvents = 'none';
}

function hideLoading(element) {
    element.style.opacity = '1';
    element.style.pointerEvents = 'auto';
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('An error occurred:', e.error);
});

// Performance optimization
window.addEventListener('load', function() {
    // Remove preloader after everything is loaded
    setTimeout(() => {
        if (preloader) {
            preloader.style.display = 'none';
        }
    }, 3000);
});

// Add resize handler for responsive behavior
window.addEventListener('resize', debounce(function() {
    // Close mobile menu on resize to desktop
    if (window.innerWidth >= 768 && isMobileMenuOpen) {
        toggleMobileMenu();
    }
}, 250));