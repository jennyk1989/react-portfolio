import React from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Contact />
      <Projects />
      <Resume />
      <Contact />
    </main>
  );
}

export default App;
