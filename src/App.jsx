import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import GeometricBackground from './components/GeometricBackground';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="relative min-h-screen lg:cursor-none overflow-x-hidden selection:bg-primary/30">
      <GeometricBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <footer className="py-20 text-center border-t border-white/5 bg-surface-container/30 backdrop-blur-sm">
        <div className="flex justify-center gap-12 mb-10 font-display font-medium text-xs uppercase tracking-[0.3em] text-gray-500 dark:text-white/50">
          <a href="#about" className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(46,91,255,0.6)] transition-all">About</a>
          <a href="#projects" className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(46,91,255,0.6)] transition-all">Work</a>
          <a href="#contact" className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(46,91,255,0.6)] transition-all">Contact</a>
        </div>
        <p className="text-gray-400 text-xs font-display tracking-widest uppercase opacity-50 px-4">
          © {new Date().getFullYear()} Alex Rivera. Built with Precision & Futuristic Design.
        </p>
      </footer>

      <ScrollToTop />
      <CustomCursor />
    </div>
  );
}

export default App;
