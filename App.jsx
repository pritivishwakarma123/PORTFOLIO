import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
const App = () => {
  return (

   <div>
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Certificates />
    <Skills />
    <Contact />
    <Footer />
   </div>
  )
}

export default App
