import './index.css';
import React from 'react';
import Landing from "./components/Landing"
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ScrollMagic from './components/ScrollMagic';
import "./App.css"

export default function App() {
  return (
    <html>
      <main className="text-gray-400 bg-gray-700 body-font">
        <Navbar />
        <Landing/>
        <ScrollMagic/>
        <Skills />
        <Projects />
        <Contact />
      </main>

    </html>
  );
}

/*
<main className="text-gray-400 bg-gray-700 body-font">
        <Navbar/>
        <About/>
        <Skills />
        <Projects/>
        <ScrollMagic/>
        <Contact />
      </main>
*/