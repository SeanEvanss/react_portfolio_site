import './index.css';
import React, {useRef, useEffect} from 'react';
import Landing from "./components/Landing"
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import About from './components/About';
import "./App.css"
import gsap, {scrollTrigger} from 'gsap';





export default function App() {
  //Array containing all the components that we created
  const sections = [
    <Landing/>,
    <About/>,
    <Skills/>,
    <Projects/>,
    <Contact/>
  ];

  const revealRefs= useRef([]);
  revealRefs.current = [];

  const addToRefs = (ref) => {
    if(!revealRefs.current.includes(ref)){
      revealRefs.current.push(ref);
      console.log(ref);
    }
  };

  useEffect(() => {
    revealRefs.current.forEach(ref => {
      gsap.fromTo(
        ref,{
          autoAlpha:0,
        },
        {
          duration:2,
          autoAlpha:1,
          ease:"power3.inOut",
          scrollTrigger:{
            trigger:ref,
            start:"top bottom",
            end:"bottom bottom",
            scrub:true,
            markers:false,
          }
            
        }
      )
    });
  }, []);


  return (
    <html>
      <main className="text-gray-400 bg-custom_gray body-font">
        <Navbar />
        {sections.map((section) => (
          <div ref={addToRefs}>
            {section}
          </div>
        ))}
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