import './index.css';
import React from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

import { Spring } from 'react-spring/renderprops';
import ReactVisibilitySensor from 'react-visibility-sensor';

export default function App() {
  return (
    <main className="text-gray-500 bg-gray-700 body-font">     
      <Navbar/>
      <About/>      
      <Projects/>
      <Skills/>
      <Contact/>      
    </main>
    );
}