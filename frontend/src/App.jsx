import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './main.css';
import Hero from './components/Hero.jsx';
import Qualities from './components/Qualities.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';

function App() {

  return (
     <>
      <Hero />
      <Contact/>
      <Projects/>
      
     </>
   
  );
}

export default App;
