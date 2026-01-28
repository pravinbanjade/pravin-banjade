import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling behavior for anchor links
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Scroll-triggered animations - delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Stop observing after animation triggers (one-time animation)
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      // Observe all elements with scroll-animate class
      const animatedElements = document.querySelectorAll('.scroll-animate');
      console.log('Found animated elements:', animatedElements.length); // Debug
      animatedElements.forEach((el) => observer.observe(el));
      
      // Cleanup function
      return () => {
        animatedElements.forEach((el) => observer.unobserve(el));
      };
    }, 100);
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
