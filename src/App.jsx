import React, { useRef, useState } from 'react';
import Header from './components/header';
import Herosection from './components/herosection';
import About from './pages/about';
import Skill from './pages/skill';
import Myproject from './pages/myproject';
import Contact from './pages/contact';
import Footer from './components/footer';
import './App.css';

function App() {
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
   const homeRef = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className="bg-slate-900">
      <Header scrollToSection={scrollToSection} refs={{ homeRef , aboutRef, skillRef, projectRef, contactRef }} />
      <div ref={homeRef}>
     <Herosection scrollToSection={scrollToSection} refs={{  contactRef }}/>
      </div>
     

      <div ref={aboutRef}>
        <About />
      </div>

      <div ref={skillRef}>
        <Skill />
      </div>

      <div ref={projectRef}>
        <Myproject />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
