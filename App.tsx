import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Gallery } from './components/Gallery';
import { TechSkills } from './components/TechSkills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="w-full min-h-screen bg-background text-white font-sans overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Gallery />
        <TechSkills />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
